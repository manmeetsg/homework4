/* Due to challenges this week, I discussed a lot with Matthew Goldstein and
 Alex Beals. Also, much code is pulled from examples from lectures and workshops
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

class New extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      tags: '',
      content: '',
    };

    this.titleChange = this.titleChange.bind(this);
    this.tagsChange = this.tagsChange.bind(this);
    this.contentChange = this.contentChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  contentChange(event) {
    this.setState({ content: event.target.value });
  }

  titleChange(event) {
    this.setState({ title: event.target.value });
  }

  tagsChange(event) {
    this.setState({ tags: event.target.value });
  }

  submit(event) {
    event.preventDefault();
    this.props.createPost({
      title: this.state.title,
      tags: this.state.tags,
      content: this.state.content,
    });
  }

  render() {
    return (
      <div className="new">
        <h3>Create A New Post</h3>
        <form onSubmit={this.submit}>
          <div>
            <label htmlFor="title">Title</label>
            <input onChange={this.titleChange} type="text" id="title" placeholder="title" value={this.state.title} />
          </div>

          <div>
            <label htmlFor="content">Content</label>
            <input onChange={this.contentChange} type="text" id="content" placeholder="content" value={this.state.content} />
          </div>

          <div>
            <label htmlFor="tags">Tags</label>
            <input onChange={this.tagsChange} type="text" id="tags" placeholder="tags" value={this.state.tags} />
          </div>

          <button type="submit" onClick={this.submit}>Submit</button>
          <Link to="/">Cancel</Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

export default connect(mapDispatchToProps, actions)(New);
