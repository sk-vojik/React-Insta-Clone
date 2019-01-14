import React from "react"
import PropTypes from "prop-types";



function InstaComment(props) {
  return (
    <div className="comment">
      <p><strong>{props.comment.username}</strong> {props.comment.text}</p> 
    </div>
  )
}

InstaComment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string,
}



export default InstaComment