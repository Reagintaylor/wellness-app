// import use Mutation for the comments
import CommentList from '../components/Comment/CommentList'
import React, { useState } from 'react';
// import { renderMatches } from 'react-router';
import bubble from '../../../Sample/comment.png'
import like from '../../../Sample/thumb-up.png'

const AccompList = () => {
    // * function for the like count button
    const [likeState, setlikeState] = useState(0)

    const handleLikeBtn = (event) => {
        event.preventDefault();
        setlikeState(likeState++) 
    }

    // outline for the cntainers and the list 

    // will have the comment list function for props and useState

    // handle comment button will trigger comment form modal
    // const handleCommentBtn = () => {
    //     <CommentForm />
    // } 
    return (
        <div>
            <div class="container-fluid">
            <h3>{title}</h3>
                {users &&
                    users.map((user) => (
                    <div key={users._id} className="card mb-3">
                        <h4 className="card-header bg-primary text-light p-2 m-0">
                        {user} <br />
                        <span style={{ fontSize: '1rem' }}>
                            accomplished this goal on {users.reminders.createdAt}
                        </span>
                         </h4>
            <div className="card-body bg-light p-2">{users &&
                    users.map((user) => (
                        <div key={users.reminders}>
                            <p>{user.reminders[i]}</p>
              <p>{users.reminders[i].complete_count}</p>
                        </div>
                    ))} 
            </div>
            <div>
                {/* comment and like button */}
                <img src={like}><p>{likeState}</p></img>
                <button onClick={Co}><img src={bubble}></img></button>
            </div>
          </div>
        ))}
            </div>  
            <a className="comments" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Comments</a>
               <div class="collapse multi-collapse" id="multiCollapseExample1">
                   <CommentList /> 
               </div>
            
            
             
        </div>
    )
}

export default AccompList;