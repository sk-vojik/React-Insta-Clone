import React from "react"
import PropTypes from "prop-types"
import CommentContainer from "../CommentSection/CommentContainer";

function Post (props) {
  return (
    <React.Fragment>

      <div className="post-header">
        <img src={props.instaPost.thumbnailUrl} alt=""/>
        <p>{props.instaPost.username}</p>
      </div>
      <img className="user-pic" src={props.instaPost.imageUrl} alt="user post" />

      <div className="post-icon-container">
        <i className="far fa-heart"></i>
        <i className="far fa-comment"></i>
      </div>
      <p className="likes">{props.instaPost.likes} likes</p>

      <CommentContainer comments={props.instaPost.comments}/>

    </React.Fragment>
  )
}

Post.propTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string
}

export default Post