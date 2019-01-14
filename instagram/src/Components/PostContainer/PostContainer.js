import React from "react";
import Post from "./Post"
import CommentContainer from "../CommentSection/CommentContainer";

function PostContainer (props) {
  return (
      <div>
        {props.instaDataList.map(instaPost => {
          return (
            <div className="container">
              <Post instaPost={instaPost} key={instaPost.timestamp} />
              <CommentContainer instaPost={instaPost} key={instaPost.id} />
              
            </div>
          )
        })}
      </div>

  )
}
export default PostContainer