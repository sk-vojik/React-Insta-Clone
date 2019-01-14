import React from "react"

function Post (props) {
  return (
    <div className="post-container">

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

    
    </div>
  )
}

export default Post