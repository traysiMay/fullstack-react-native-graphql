import * as React from "react";
import { compose,graphql,ChildProps } from "react-apollo";
import gql from "graphql-tag";
import { HuntedHeader } from './HuntedHeader';
import { Separator } from '../ui/Separator';
// import { Link } from "react-router-dom";
// import { dateArray } from '../../constants';


const meQuery = gql`
  {
    me {
      id
      spotifyName
      email
    }
  }
`;

const viewHuntedQuery = gql`
{
  viewHunted {
    id
    artist
    hunt
    filename
  }
}
`

class C extends React.PureComponent<ChildProps<{viewHunted:any,me:any}>> {
  render() {
    const {viewHunted, me} = this.props;
    // console.log(this.props);
    // this.props.me.refetch();
    if (me.loading || viewHunted.loading){
      return <div style={{color:'white', textAlign:'center'}}>loading...</div>
    }      
    if (me.me===null){
        return <div style={{color:'white', textAlign:'center'}}>you ain't logged in</div>
    }
    console.log(me.me);
    console.log(viewHunted.viewHunted);
          return (
            <div>
                <HuntedHeader/>
                <div style={{color:'white',
                             width:'59%',
                             marginLeft:'25.5%',
                             fontSize: window.innerWidth > window.innerHeight ? '36px' : '23px'}}>
                    helloooo <span style={{color:'red'}}>{me.me.spotifyName}</span> here are the tickies that you have valiantly hunted :D
                    </div>

                    <div style={{margin:'3%'}}>
                        <Separator />
                    </div>

                    <div style={{color:'white', textAlign:'center', fontSize:'23px'}}>
                        {viewHunted.viewHunted && viewHunted.viewHunted.map((hunted:any)=> {
                            const {id, hunt, filename} = hunted;
                            return (
                                <div key={id}><p>{hunt.toUpperCase()}</p>
                                <img src={process.env.REACT_APP_SERVER_URL+'images/'+filename}/>

                                </div>
                            );
                                    
                        })}
                        {viewHunted.viewHunted.length===0 && <div style={{color:'red'}}>Oh dear! you have yet to find a hunted ticky!</div>}
                    </div>
                </div>
          )
  }
}

export const Hunted = compose(
  graphql(viewHuntedQuery, { name: "viewHunted" }),
  graphql(meQuery, { name: "me" }),
)(C);