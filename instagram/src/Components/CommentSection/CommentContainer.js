import React from "react"
import InstaComment from "./InstaComment"

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      inputText: "",
    }
  }

  commentHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  addNewComment = event => {
    event.preventDefault();

    this.setState({
      comments: [
        ...this.state.comments, 
        { text: this.state.inputText, username: 'SK'}
      ],
      inputText: ""
    });
  }


  render () {
    return (
      <div className="comment-container">

        {this.state.comments.map(comment => {
          return <InstaComment comment={comment} />
        })}
      
        <form  onSubmit={this.addNewComment} className="comment-form"> 
          <input name="inputText" value={this.inputText} onChange={this.commentHandler} className="comment-input" type="text" placeholder="Add a comment..." />
        </form>
      </div>
    )
  }
    
}

export default CommentContainer