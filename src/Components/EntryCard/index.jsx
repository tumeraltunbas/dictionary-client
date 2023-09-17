import React from 'react';
import {ArrowUpSquare, ArrowDownSquare, Droplet} from "react-bootstrap-icons"

export const EntryCard = () => {
  return (

    <div className="container">
        
        <h3>Title</h3>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quo odio qui quasi. Fuga, modi voluptas repellendus soluta molestias exercitationem ea veniam ducimus ipsa, commodi velit facere. Veniam sint consectetur hic? Exercitationem sapiente minus tempora deleniti ab voluptatum quas, unde consectetur rem cupiditate dolorem blanditiis illum fugiat facere sequi molestias dolore saepe aliquid doloribus explicabo et beatae recusandae officiis fugit! Aspernatur iste, eligendi, cum esse nostrum inventore perspiciatis doloremque id incidunt dolores nesciunt veniam quod, illo et? Iure quam, eos unde doloremque veniam illo officia? Tenetur dolorem enim, nihil dignissimos sed illum reiciendis vero tempore praesentium iusto explicabo ipsum sit.
        </p>

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
            
        <div class="row justify-content-end">
            <div class="col-md-3 text-end">
                <div class="row">
                    <div class="col-md-12">
                        <p>username</p>
                    </div>
                    <div class="col-md-12">
                        <p className='text-muted'>10.02.2023 10:50</p>
                    </div>
                </div>
            </div>
            <div class="col-md-1">
                <img src="/img/test-profile-image.jpg" alt="" style={{width: "4vw"}}/>
            </div>
        </div>


    </div>

)
}
