import React from "react"
import PropTypes from "prop-types"
import CommentContainer from "../CommentSection/CommentContainer";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.instaPost.likes,
      isLiked: false
    };
  }

  incrementLikes = event => {
    event.preventDefault(); 
    if (this.state.isLiked === false) {
      this.setState({likes: this.state.likes + 1, isLiked: true});
    } else {
      this.setState({likes: this.state.likes - 1, isLiked: false});
    }
  };

  render() {
    return (
      <React.Fragment>
  
        <div className="post-header">
          <img src={this.props.instaPost.thumbnailUrl} alt=""/>
          <p>{this.props.instaPost.username}</p>
        </div>
        <img className="user-pic" src={this.props.instaPost.imageUrl} alt="user post" />
  
        <div className="post-icon-container">
          <i className="far fa-heart" onClick={this.incrementLikes}></i>
          <i className="far fa-comment"></i>
        </div>
        <p className="likes">{this.state.likes} likes</p>
  
        <CommentContainer comments={this.props.instaPost.comments}/>
  
      </React.Fragment>
    )
  }
  
}

Post.propTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string
}

export default Post