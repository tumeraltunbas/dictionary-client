import React from 'react';
import {ArrowUpSquare, ArrowDownSquare, Droplet} from "react-bootstrap-icons";
import moment from "moment";

export const EntryCard = (props) => {
  return (

    <div className="container">
        
        <h3>{props.content}</h3>

        <p>{props.entries[0].content}</p>

        {/* interaction buttons  */}
        <div className="row" style={{width: "10vw"}}>
            <div className="col-sm">
               <a href="#"><ArrowUpSquare /></a> 
            </div>
            <div className="col-sm">
               <a href="#"><ArrowDownSquare /></a> 
            </div>
            <div className="col-sm">
            <a href="#"><Droplet /></a> 
            </div>
        </div>

        {/* User Information */}
            
        <div className="row justify-content-end">
            <div className="col-md-3 text-end">
                <div className="row">
                    <div className="col-md-12">
                        <p style={{fontSize: ".9rem"}} >{props.entries[0].user.username}</p>
                    </div>
                    <div className="col-md-12">
                        <p 
                        className='text-muted'
                        style={{fontSize: ".8rem"}}
                        >{moment(props.entries[0].createdAt).format("DD.MM.YYYY HH:MM")}</p>
                    </div>
                </div>
            </div>
            <div className="col-md-1">
                <img src="/img/test-profile-image.jpg" alt="" style={{width: "4vw"}}/>
            </div>
        </div>


    </div>

)
}
