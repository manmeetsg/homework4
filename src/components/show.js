/* Due to challenges this week, I discussed a lot with Matthew Goldstein and
 Alex Beals. Also, much code is pulled from examples from lectures and workshops
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import marked from 'marked';

class Show extends Component {
  constructor(props) {
    super(props);

    if (this.props.post) {
      this.state = {
        isEditing: false,
        title: this.props.post.title,
        tags: this.props.post.tags,
        content: this.props.post.content,
      };
    } else {
      this.state = {
        isEditing: false,
      };
    }

    this.titleChange = this.titleChange.bind(this);
    this.contentChange = this.contentChange.bind(this);
    this.submit = this.submit.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.tagsChange = this.tagsChange.bind(this);
  }

  // Pull in appropriate post
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  titleChange(event) {
    this.setState({ title: event.target.value });
  }

  tagsChange(event) {
    this.setState({ tags: event.target.value });
  }

  submit(event) {
    event.preventDefault();
    this.props.updatePost(
      this.props.params.id,
      {
        title: this.state.title,
        tags: this.state.tags,
        content: this.state.content,
      },
    );
  }

  contentChange(event) {
    this.setState({ content: event.target.value });
  }


  deletePost() {
    this.props.deletePost(this.props.params.id);
  }

  render() {
    if (!this.props.post) { // No set post (initially)
      return (
        <h3>Loading...</h3>
      );
    } else if (this.state.isEditing) { // Editing mode
      return (
        <div className="post">
          <form submit={this.submit}>
            <label htmlFor="title">Title</label>
            <input onChange={this.titleChange} type="text" id="title" placeholder="title" value={this.state.title} />

            <label htmlFor="tags">Tags</label>
            <input onChange={this.tagsChange} type="text" id="tags" placeholder="tags" value={this.state.tags} />

            <label htmlFor="content">Content</label>
            <textarea onChange={this.contentChange} type="text" id="content" placeholder="content" value={this.state.content} />

            <button type="submit">Done Editing</button>
          </form>
          <button className="delete" onClick={this.deletePost}>Delete</button>
        </div>
      );
    } else { // Normal post
      return (
        <div className="post">
          <h3>{this.props.post.title}</h3>
          <h5>{this.props.post.tags}</h5>
          <div dangerouslySetInnerHTML={{ __html: marked(this.props.post.content) }} />
          <button onClick={() => {
            this.setState({
              isEditing: true,
              title: this.props.post.title,
              tags: this.props.post.tags,
              content: this.props.post.content,
            });
          }}>Edit Post</button>
          <button className="delete" onClick={this.deletePost}>Delete</button>
        </div>
      );
    }
  }
}

const mapDispatchToProps = (state) => (
  {
    post: state.posts.currentPost,
  }
);

export default connect(mapDispatchToProps, actions)(Show);
