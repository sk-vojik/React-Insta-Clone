import React from "react"
import InstaComment from "./InstaComment"

function CommentContainer(props) {
  return (
    <div className="comment-container">
      {props.instaPost.comments.map(comment => {
        return (
          <div>
            <InstaComment comment={comment} />
          </div>
        )
      })}
      <form className="comment-form"> 
        <input className="comment-input" type="text" placeholder="Add a comment..." />
      </form>
    </div>
  )
}

export default CommentContainer