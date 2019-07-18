import React from 'react'
import {connect} from 'react-redux'
import "./styles/Comments.css"
import Loader from "./Loader"

const Comments = props => {
  if (props.comments_loading) {
    return <Loader />
  }

  const commentsError = () =>{
    console.log(props.comments_error)
    if (props.comments_error) {
      return(
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>!Ha ocurrido un error! </strong>
          {props.comments_error}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )      
    }
  }
  

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

  return (
    <ul>
      {commentsError()}
      {listComments()}
    </ul>
  );
};

const mapStateToProps = ({ userPublicationsReducer }) =>
  userPublicationsReducer;

export default connect(mapStateToProps)(Comments);