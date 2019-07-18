import React from 'react'
import "./styles/Comments.css"

const Comments = (props) =>{
    const listComments = () => {
      return props.comments.map(comment => (
        <li>
          <div className="commentContainer">
            <p>
              <b>{comment.name}</b>
            </p>
            <p>{comment.body}</p>
            <p className="emailComment">{comment.email}</p>
          </div>
        </li>
      ));
    };

    return(
        <ul>
            hola
            { listComments() }
        </ul>
    );
}

export default Comments