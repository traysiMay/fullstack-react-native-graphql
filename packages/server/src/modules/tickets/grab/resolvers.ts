import { ResolverMap } from "../../../types/graphql-utils";
import { Ticket } from "../../../entity/Ticket";
import { isAuthenticated } from "../../shared/isAuthenticated";
import { finderDefaultId,ticketCacheKey } from "../../../constants";
import { getConnection } from "typeorm";

export const resolvers: ResolverMap = {
  Mutation: {
    grabTicket: async (_, { listingId }, { session,redis }) => {
      await isAuthenticated(session);

      console.log('grab');
      console.log(session);
      const cheater = await Ticket.findOne({where:{listingId,finderId:session.userId}});

      console.log(cheater);
      if (cheater){
        return {ticketId:cheater.filename};
      }

      // this is built to get a ticket from a listing that could have more than one ticket
      const ticketQB = await getConnection()
      .getRepository(Ticket)
      .createQueryBuilder("t")  
      .andWhere("t.listingId = :listingId",{listingId})    
      .andWhere("t.finderId = :finderDefaultId",{finderDefaultId});
   
      const availTick = await ticketQB.take(1).getMany();
      // if (session.userId && availTick[0].finderId!==session.userId){
      if (session.userId){
        availTick[0].finderId = session.userId;
      }
      await availTick[0].save();

      const tickets = await redis.lrange(ticketCacheKey, 0, -1);
      await redis.del(ticketCacheKey);
      console.log(availTick[0].id)
      const newTix = tickets.filter((x:string) => JSON.parse(x).tid !== availTick[0].id);
      if ( newTix.length > 0 ) {
        console.log('WHY PUSH');
        await redis.lpush(ticketCacheKey, ...newTix);
        console.log(await redis.lrange(ticketCacheKey, 0, -1));
      }


      // checking if the ticket actually was taken by the person
      const theTicket = await Ticket.findOne({where:{listingId,finderId:session.userId}});
      if (theTicket){
        return {ticketId:availTick[0].filename};
      }
        return {ticketId:"gone"};
    }
  }
};
