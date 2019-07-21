import React from 'react'
import {connect} from 'react-redux'
import "./styles/Comments.css"
import Loader from "./Loader"

const Comments = props => {

  const commentsLoader = () =>{
    if (props.comments_loading && !props.comments.length) {
      return <Loader />
    }
  }
  

  const commentsError = () =>{
    if (props.comments_error) {
      return(
        <div className="alert alert-danger" role="alert">
          <strong>!Ha ocurrido un error! </strong>
          {props.comments_error}         
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
      {commentsLoader()}
      {listComments()}
    </ul>
  );
};

const mapStateToProps = ({ userPublicationsReducer }) =>
  userPublicationsReducer;

export default connect(mapStateToProps)(Comments);