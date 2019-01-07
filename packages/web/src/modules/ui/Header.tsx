import * as React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link, RouteComponentProps } from 'react-router-dom';

const meQuery = gql`
  {
    me {
      id
      email
      spotifyName
    }
  }
`;

export class Header extends React.PureComponent<RouteComponentProps<{}>> {
    loginRedirect = (data:any) => {
        if (!data.me){
            return window.location.href = process.env.REACT_APP_SERVER_URL+'auth/spotify';
        }
        return this.props.history.push('/me');
    }
    render(){
        console.log(process.env);
        return (
            <Query query={meQuery} fetchPolicy="network-only">
                {({ data }) => {
                        return (
                            <div style={{marginTop:"10px"}}>
                            <svg viewBox="0 0 411 40">
                                <g id="HEADER_1_">
                                    <Link to="/home">
                                    <g>
                                        <g>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M151.6,10.8h3.6v15.8h0.4v-12h3.5V30h-7.4V10.8z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M159.9,10.8h3.6v1.4h-3.6V10.8z M163.7,30c1.2,0,2.2-0.3,2.8-1
                                                c0.7-0.7,1-1.6,1-2.7V12.6h-7.6V30H163.7z M163.5,15.9h0.4v10.3c0,0.3-0.1,0.4-0.2,0.4h-0.2V15.9z M163.9,10.8h3.6v1.4h-3.6V10.8
                                                z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M168.4,30v-3.4h3.6c0.2,0,0.2-0.1,0.2-0.3v-0.1h-3.9V14.5c0-1.1,0.3-2,1-2.7
                                                c0.7-0.7,1.6-1,2.9-1h3.6v11.6h-3.5v-8.3h-0.2c-0.2,0-0.2,0.2-0.2,0.5v8.3h3.9v3.4c0,1.1-0.3,2-1,2.7c-0.7,0.7-1.6,1-2.8,1H168.4
                                                z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M184.2,26.3c0,1-0.3,1.9-1,2.6c-0.7,0.7-1.6,1.1-2.7,1.1h-3.7V10.8h3.6v1.3h3.9
                                                v3.3h-3.9v11.2h0.2c0.1,0,0.2-0.1,0.2-0.4V15.8h3.5V26.3z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M188,10.8h11.4V30h-3.6V14.1h-0.4V30H192V14.1h-0.4V30H188V10.8z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M200.3,30V10.8h3.8V30H200.3z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M205.1,10.8h7.6V30h-3.6V14.1h-0.4V30h-3.6V10.8z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M213.6,30V10.8h3.8V30H213.6z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M228.7,26.3c0,1-0.3,1.9-1,2.6c-0.7,0.7-1.6,1.1-2.7,1.1h-3.7V10.8h3.6v1.3h3.9
                                                v3.3h-3.9v11.2h0.2c0.1,0,0.2-0.1,0.2-0.4V15.8h3.5V26.3z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M229.6,30V10.8h3.8V30H229.6z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M234.4,30V14.5c0-1.1,0.3-2,1-2.7c0.7-0.7,1.6-1,2.8-1h3.8v11.6h-3.6v-8.3h-0.2
                                                c-0.2,0-0.2,0.2-0.2,0.5v12.1h0.2c0.2,0,0.2-0.1,0.2-0.4v-3.4h3.6v3.4c0,1.1-0.3,2-1,2.7c-0.7,0.7-1.6,1-2.8,1H234.4z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M246.8,26.1h-0.4V30h-3.6V10.8h3.6v12h0.2c0.1,0,0.2-0.1,0.2-0.4V10.8h3.6v10.9
                                                c0,0.9-0.3,1.7-0.9,2.4h0.9V30h-3.6V26.1z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M251.3,30v-3.4h3.8c0.2,0,0.2-0.1,0.2-0.3v-0.1h-4V10.8h3.6v12h0.4v-12h3.6
                                                v15.4c0,1.1-0.3,2-1,2.7c-0.7,0.7-1.6,1.1-2.8,1.1H251.3z"/>
                                        </g>
                                    </g>
                                    </Link>
                                    <g id="RAPTOR_1_" onClick={()=> this.loginRedirect(data)}>
                                        <path fill="#231F20" stroke="#FFFFFF" strokeMiterlimit="10" d="M44.9,20.5c0-7.6-6.2-13.8-13.8-13.8c-7.6,0-13.8,6.2-13.8,13.8
                                            c0,7.6,6.2,13.8,13.8,13.8C38.7,34.3,44.9,28.1,44.9,20.5z"/>
                                        <path fill={data && data.me ? "#57fb57" : "#ff3939"} d="M40.8,18.6v-1.7l-6.1-1.7l-1.1,3.4L27,21.6L20.1,18l-0.3,0.8l6.8,5.9l2.9-0.4l1,1.7l-2,1.7
                                            c0.5,0.5,3.1,1.9,3.1,1.9l1.3-0.1L31,27.6l1.3-0.9l0.7-3l3.2-1.2L36,24.3l0.7,0.2l1.3-2.6l-2.3-1l0.8-2.5L40.8,18.6z"/>
                                    </g>

                                </g>
                                </svg>
                                    <div id="nav">
                                    <svg viewBox="0 0 64 167">
                                    <g>
                                        <Link to="/listings">
                                        <g id="LISTINGS">
                                            <path fill="#231F20" stroke="#FFFFFF" strokeMiterlimit="10" d="M46,70.8c0-7.6-6.2-13.8-13.8-13.8c-7.6,0-13.8,6.2-13.8,13.8
                                                c0,7.6,6.2,13.8,13.8,13.8C39.8,84.6,46,78.4,46,70.8z"/>
                                            <g id="LISTINGS_1_">
                                                <g>
                                                    <line fill="none" stroke="#FFFFFF" strokeMiterlimit="10" x1="37.2" y1="67.9" x2="27.4" y2="67.9"/>
                                                    <line fill="none" stroke="#FFFFFF" strokeMiterlimit="10" x1="33.2" y1="70.8" x2="27.4" y2="70.8"/>
                                                    <line fill="none" stroke="#FFFFFF" strokeMiterlimit="10" x1="30.3" y1="73.8" x2="27.4" y2="73.8"/>
                                                </g>
                                            </g>
                                        </g>
                                        </Link>
                                        <Link to="/create-listing">
                                        <g id="ADD">
                                            <path fill="#231F20" stroke="#FFFFFF" strokeMiterlimit="10" d="M46,30.9c0-7.6-6.2-13.8-13.8-13.8c-7.6,0-13.8,6.2-13.8,13.8
                                                c0,7.6,6.2,13.8,13.8,13.8C39.8,44.6,46,38.5,46,30.9z"/>
                                            <g id="ADD_1_">
                                                <line fill="none" stroke="#FFFFFF" strokeMiterlimit="10" x1="32.2" y1="25.8" x2="32.2" y2="35.6"/>
                                                <line fill="none" stroke="#FFFFFF" strokeMiterlimit="10" x1="37.1" y1="30.7" x2="27.3" y2="30.7"/>
                                            </g>
                                        </g>
                                        </Link>
                                    </g>
                                    <Link to="/all-stars">
                                    <g id="STAR">
                                        <path fill="#231F20" stroke="#FFFFFF" strokeMiterlimit="10" d="M45.6,111.2c0-7.6-6.2-13.8-13.8-13.8S18,103.6,18,111.2
                                            S24.2,125,31.8,125C39.4,125,45.6,118.8,45.6,111.2z"/>
                                        <polygon fill="none" stroke="#FFFFFF" strokeMiterlimit="10" points="31.8,103.9 34,108.4 39,109.2 35.4,112.7 36.2,117.7 
                                            31.8,115.3 27.3,117.7 28.1,112.7 24.5,109.2 29.5,108.4 	"/>
                                    </g>
                                    </Link>
                                    <Link to="/hunted">
                                    <g id="HUNTED">
                                            <g id="bg">
                                                <path fill="#231F20" stroke="#FFFFFF" strokeMiterlimit="10" d="M45.6,151.6c0-7.6-6.2-13.8-13.8-13.8S18,144,18,151.6
                                                    c0,7.6,6.2,13.8,13.8,13.8S45.6,159.2,45.6,151.6z"/>
                                            </g>
                                            <g id="_x34_NUW5X.tif">
                                                <g>
                                                    <path fill="#FFFFFF" d="M23.4,152.7c0-1.7,0-3.4,0-5.1c0-0.2,0.1-0.3,0.2-0.3c1.4-0.6,2.9-1.3,4.3-1.9c0.1,0,0.2,0,0.3,0
                                                        c1.2,0.6,2.3,1.2,3.5,1.8c0.1,0.1,0.2,0.1,0.3,0c1.4-0.8,2.9-1.7,4.3-2.5c0.2-0.1,0.4-0.1,0.6,0c1.1,0.6,2.2,1.1,3.3,1.7
                                                        c0.3,0.1,0.4,0.3,0.4,0.6c0,2.7,0,5.4,0,8.1c0,0.6,0,1.2,0,1.8c0,0.3-0.2,0.4-0.5,0.3c-1.1-0.6-2.2-1.1-3.3-1.7
                                                        c-0.1-0.1-0.2-0.1-0.3,0c-1.4,0.8-2.9,1.7-4.3,2.5c-0.2,0.1-0.4,0.1-0.6,0c-1.1-0.6-2.3-1.2-3.4-1.8c-0.1-0.1-0.2-0.1-0.3,0
                                                        c-1.3,0.6-2.6,1.2-4,1.8c0,0,0,0-0.1,0c-0.3,0.1-0.4,0-0.4-0.3c0-1.2,0-2.4,0-3.6C23.4,153.7,23.4,153.2,23.4,152.7
                                                        C23.4,152.7,23.4,152.7,23.4,152.7z M40,156.6c0-0.1,0-0.1,0-0.2c0-3.1,0-6.2,0-9.3c0-0.1,0-0.2-0.1-0.2c-1-0.5-2.1-1.1-3.1-1.6
                                                        c-0.1-0.1-0.2,0-0.3,0c-1.5,0.8-2.9,1.7-4.4,2.5c-0.2,0.1-0.3,0.1-0.4,0c-1.2-0.6-2.3-1.2-3.5-1.8c-0.1-0.1-0.2-0.1-0.3,0
                                                        c-1.3,0.6-2.5,1.1-3.8,1.7c-0.1,0.1-0.2,0.1-0.2,0.3c0,3.1,0,6.2,0,9.3c0,0.1,0,0.1,0,0.2c0.1,0,0.1-0.1,0.2-0.1
                                                        c1.2-0.6,2.5-1.1,3.7-1.7c0.1-0.1,0.2-0.1,0.4,0c1.2,0.6,2.3,1.2,3.5,1.9c0.1,0.1,0.2,0,0.3,0c1.5-0.8,2.9-1.7,4.4-2.5
                                                        c0.1-0.1,0.3-0.1,0.4,0c1,0.5,2,1,3,1.5C39.9,156.5,39.9,156.5,40,156.6z"/>
                                                    <path fill="#FFFFFF" d="M38.1,153.1c0.2,0,0.3,0,0.5,0.1c0.2,0,0.3,0.1,0.3,0.3c0,0.2-0.1,0.2-0.3,0.2c-0.1,0-0.3,0-0.5,0
                                                        c0,0.2,0,0.3-0.1,0.5c0,0.2-0.1,0.3-0.3,0.3c-0.2,0-0.3-0.2-0.2-0.3c0-0.1,0-0.3,0-0.4c-0.2,0-0.3,0-0.5-0.1
                                                        c-0.2,0-0.3-0.1-0.3-0.3c0-0.2,0.2-0.2,0.3-0.2c0.1,0,0.3,0,0.4,0c0,0,0,0,0,0c0-0.1,0-0.3,0.1-0.4c0-0.2,0.1-0.3,0.3-0.3
                                                        c0.2,0,0.3,0.1,0.2,0.3C38.1,152.8,38.1,152.9,38.1,153.1z"/>
                                                    <path fill="#FFFFFF" d="M31.3,154c-0.1,0-0.3,0.1-0.4,0.1c-0.2,0-0.3,0-0.4-0.2c0-0.2,0.1-0.3,0.2-0.3c0.1,0,0.3-0.1,0.5-0.1
                                                        c0-0.2-0.1-0.3-0.1-0.5c0-0.2,0-0.3,0.2-0.4c0.2,0,0.3,0.1,0.3,0.3c0,0.1,0.1,0.3,0.1,0.5c0.2,0,0.3-0.1,0.5-0.1
                                                        c0.2,0,0.3,0.1,0.3,0.2c0,0.2-0.1,0.3-0.2,0.3c-0.1,0-0.2,0-0.2,0c-0.1,0-0.2,0-0.2,0.1c0,0.1,0.1,0.3,0.1,0.4
                                                        c0,0.2,0,0.3-0.2,0.4c-0.2,0-0.3-0.1-0.3-0.3C31.3,154.3,31.3,154.1,31.3,154C31.3,154,31.3,154,31.3,154z"/>
                                                    <path fill="#FFFFFF" d="M34.2,148.7c0-0.2-0.1-0.3-0.1-0.5c0-0.2,0-0.3,0.2-0.3c0.2,0,0.3,0.1,0.3,0.2c0,0.1,0.1,0.3,0.1,0.5
                                                        c0.1,0,0.3-0.1,0.4-0.1c0.2,0,0.4,0,0.4,0.2c0,0.2-0.1,0.3-0.3,0.3c-0.1,0-0.3,0.1-0.4,0.1c0,0.2,0.1,0.3,0.1,0.5
                                                        c0,0.2,0,0.3-0.2,0.4c-0.2,0-0.3-0.1-0.3-0.3c0-0.1-0.1-0.3-0.1-0.4c-0.2,0-0.3,0.1-0.5,0.1c-0.1,0-0.2,0-0.3-0.2
                                                        c0-0.1,0-0.2,0.1-0.3c0,0,0.1-0.1,0.2-0.1C33.9,148.8,34,148.8,34.2,148.7z"/>
                                                    <path fill="#FFFFFF" d="M29.4,152c0.1,0,0.2,0.1,0.2,0.1c0.3,0.2,0.6,0.4,1,0.7c0.2,0.1,0.2,0.3,0.1,0.4
                                                        c-0.1,0.1-0.2,0.2-0.4,0.1c-0.3-0.2-0.7-0.4-1-0.7c-0.1-0.1-0.2-0.2-0.1-0.3C29.3,152.2,29.4,152.1,29.4,152z"/>
                                                    <path fill="#FFFFFF" d="M34.2,149.9c0,0.1-0.1,0.2-0.1,0.2c-0.2,0.3-0.4,0.6-0.6,0.9c-0.1,0.2-0.3,0.2-0.4,0.1
                                                        c-0.1-0.1-0.2-0.2-0.1-0.4c0.2-0.3,0.4-0.6,0.6-1c0.1-0.1,0.2-0.2,0.3-0.1C34.1,149.8,34.1,149.9,34.2,149.9z"/>
                                                    <path fill="#FFFFFF" d="M36.5,151.1c0,0,0.1,0.1,0.2,0.1c0.2,0.3,0.4,0.7,0.6,1c0.1,0.1,0.1,0.3-0.1,0.4c-0.1,0.1-0.3,0-0.4-0.1
                                                        c-0.2-0.3-0.4-0.7-0.6-1C36.1,151.4,36.2,151.2,36.5,151.1z"/>
                                                    <path fill="#FFFFFF" d="M33,151.7c0,0.1-0.1,0.2-0.1,0.2c-0.2,0.3-0.4,0.5-0.5,0.8c-0.1,0.2-0.3,0.2-0.4,0.1
                                                        c-0.1-0.1-0.2-0.2-0.1-0.4c0.2-0.3,0.4-0.6,0.6-0.9c0.1-0.1,0.2-0.2,0.3-0.1C32.9,151.6,32.9,151.7,33,151.7z"/>
                                                    <path fill="#FFFFFF" d="M35.3,149.5c0.1,0.1,0.2,0.1,0.2,0.2c0.2,0.3,0.4,0.5,0.6,0.8c0.1,0.2,0.1,0.3,0,0.4
                                                        c-0.1,0.1-0.3,0.1-0.4-0.1c-0.2-0.3-0.4-0.5-0.6-0.8c0-0.1,0-0.2,0-0.3C35.1,149.6,35.2,149.5,35.3,149.5z"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g id="_x35_F9Z7f.tif">
                                                    <g>
                                                        <path fill="#FFFFFF" d="M26.7,148.5C26.7,148.5,26.7,148.5,26.7,148.5c0,0.6,0,1.1,0,1.7c0,0.1,0,0.1-0.1,0.1
                                                            c-0.5,0-1.1,0-1.6,0c0,0,0,0-0.1,0c0-0.1,0-0.1,0-0.2c0-0.4,0-0.7,0-1.1c0-0.3,0.2-0.5,0.5-0.5
                                                            C25.9,148.5,26.3,148.5,26.7,148.5C26.7,148.5,26.7,148.5,26.7,148.5z M25.3,149.9C25.4,149.9,25.4,149.9,25.3,149.9
                                                            c0.4,0,0.7,0,1.1,0c0,0,0,0,0-0.1c0-0.3,0-0.7,0-1c0,0,0,0,0-0.1c0,0,0,0-0.1,0c-0.3,0-0.6,0-0.9,0c-0.1,0-0.1,0-0.1,0.1
                                                            C25.3,149.3,25.3,149.6,25.3,149.9C25.3,149.9,25.3,149.9,25.3,149.9z"/>
                                                        <path fill="#FFFFFF" d="M27.2,148.5c0.1,0,0.1,0,0.2,0c0.4,0,0.7,0,1.1,0c0.3,0,0.5,0.2,0.5,0.5c0,0.4,0,0.8,0,1.2c0,0,0,0,0,0
                                                            c0,0,0,0-0.1,0c-0.5,0-1.1,0-1.6,0c-0.1,0-0.1,0-0.1-0.1C27.2,149.6,27.2,149.1,27.2,148.5C27.2,148.6,27.2,148.5,27.2,148.5z
                                                            M27.5,148.8C27.5,148.8,27.5,148.8,27.5,148.8c0,0.4,0,0.7,0,1.1c0,0,0,0,0.1,0c0.3,0,0.7,0,1,0c0,0,0,0,0.1,0c0,0,0,0,0-0.1
                                                            c0-0.3,0-0.6,0-0.9c0-0.1,0-0.1-0.1-0.1C28.2,148.8,27.9,148.8,27.5,148.8C27.5,148.8,27.5,148.8,27.5,148.8z"/>
                                                        <path fill="#FFFFFF" d="M25,150.7C25,150.7,25.1,150.7,25,150.7c0.6,0,1.1,0,1.7,0c0,0,0.1,0,0.1,0.1c0,0.5,0,1.1,0,1.6
                                                            c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0c-0.4,0-0.7,0-1.1,0c-0.3,0-0.5-0.2-0.5-0.5C25,151.6,25,151.1,25,150.7
                                                            C25,150.7,25,150.7,25,150.7z M25.3,151C25.3,151,25.3,151,25.3,151c0,0.4,0,0.7,0,1c0,0.1,0,0.1,0.1,0.1c0.3,0,0.6,0,0.9,0
                                                            c0,0,0,0,0.1,0c0,0,0,0,0-0.1c0-0.3,0-0.6,0-1c0,0,0-0.1-0.1-0.1c-0.2,0-0.4,0-0.6,0C25.6,151,25.5,151,25.3,151z"/>
                                                        <path fill="#FFFFFF" d="M27.5,151.3c-0.1,0-0.2,0-0.3,0c0,0,0,0,0,0c0-0.2,0-0.4,0-0.5c0,0,0,0,0,0c0.3,0,0.7,0,1,0c0,0,0,0,0,0
                                                            c0,0.1,0,0.2,0,0.3c0,0,0,0-0.1,0c-0.2,0-0.4,0-0.6,0c0,0-0.1,0-0.1,0.1C27.5,151.1,27.5,151.2,27.5,151.3z"/>
                                                        <path fill="#FFFFFF" d="M27.8,152.4c0-0.1,0-0.2,0-0.3c0.2,0,0.3,0,0.5,0c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.1-0.1
                                                            c0-0.1,0-0.1,0-0.2c0.1,0,0.2,0,0.3,0c0,0.1,0,0.2,0,0.3c0,0.2-0.2,0.3-0.4,0.3C28.3,152.4,28.1,152.4,27.8,152.4z"/>
                                                        <path fill="#FFFFFF" d="M28.6,150.7c0.1,0,0.2,0,0.3,0c0,0.2,0,0.4,0,0.6c-0.1,0-0.2,0-0.3,0C28.6,151.1,28.6,150.9,28.6,150.7z
                                                            "/>
                                                        <path fill="#FFFFFF" d="M27.2,151.8c0.1,0,0.2,0,0.3,0c0,0.2,0,0.4,0,0.6c-0.1,0-0.2,0-0.3,0C27.2,152.2,27.2,152,27.2,151.8z"
                                                            />
                                                        <path fill="#FFFFFF" d="M28.3,151.3c0,0.1,0,0.3,0,0.4c-0.1,0-0.3,0-0.4,0c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0
                                                            C28,151.3,28.1,151.3,28.3,151.3z"/>
                                                        <path fill="#FFFFFF" d="M28.3,149.6c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c0-0.1,0-0.3,0-0.4c0.1,0,0.3,0,0.4,0
                                                            C28.3,149.3,28.3,149.4,28.3,149.6z"/>
                                                    </g>
                                                </g>
                                                <path fill="#FFFFFF" d="M26.3,149.2L26.3,149.2l-0.2-0.1l0,0.1l-0.3,0.1l-0.3-0.1l0,0l0.3,0.2l0.1,0l0,0.1l-0.1,0.1
                                                    c0,0,0.1,0.1,0.1,0.1l0.1,0l-0.1-0.1l0.1,0l0-0.1l0.1,0l0,0.1l0,0l0.1-0.1l-0.1,0l0-0.1L26.3,149.2z"/>
                                                <circle fill="#FFFFFF" cx="25.9" cy="151.5" r="0.2"/>
                                            </g>
                                        </g>
                                        </Link>
                                    </svg>
                                    </div>
                                </div>
                                
                        )
                    
                    }}
            </Query>
            );
    }
}