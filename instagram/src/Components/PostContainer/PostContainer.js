import React from "react";
import Post from "./Post"

function PostContainer (props) {
  return (
      <React.Fragment>
        {props.instaDataList.map(instaPost => {
          return (
            <div className="post-container">
              <Post instaPost={instaPost} key={instaPost.timestamp}/>              
            </div>
          )
        })}
      </React.Fragment>

  )
}
export default PostContainer