import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";
import { processUpload } from "../shared/processUpload";
import { getConnection } from "typeorm";
import { listingCacheKey } from "../../../constants";
// import { isAuthenticated } from "../../shared/isAuthenticated";

// house.png
// aseq2-house.png
// image/png
// image/jpeg
// ['image', 'jpeg']
// 'jpeg'

export const resolvers: ResolverMap = {
  Mutation: {
    updateListing: async (_, { listingId, input: { picture, ...data }}, { redis }) => {
      // isAuthenticated(session);
      if (picture) {
        data.pictureUrl = await processUpload(picture);
      }

      const {raw: [newListing]} = await getConnection()
        .createQueryBuilder()
        .update(Listing)
        .set(data)
        .where("id = :id", {id: listingId})
        .returning("*")
        .execute();
      
      const listings = await redis.lrange(listingCacheKey, 0, -1);
      const idx = listings.findIndex((x:string) => JSON.parse(x).id === listingId);
      await redis.lset(listingCacheKey, idx, JSON.stringify(newListing));


      //redis.lpush(ticketCacheKey, JSON.stringify({tid:ticket.id,lid:listing.id}));
      

      return true;
    }
  }
};
