/* Due to challenges this week, I discussed a lot with Matthew Goldstein and
 Alex Beals. Also, much code is pulled from examples from lectures and workshops
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    // If we have no posts
    if (this.props.posts.length === 0) {
      return (
        <div className="posts">
          <h2>Posts</h2>
          No posts yet!
        </div>
      );
    // if we do have posts
    } else {
      return (
        <div className="posts">
          <h2>Posts</h2>
          <ul>
          {this.props.posts.map(post => {
            return (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>
                    {post.title}
                </Link>
                  {post.tags}
              </li>
              );
          })}
          </ul>
        </div>
      );
    }
  }
}

const mapDispatchToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

export default connect(mapDispatchToProps, actions)(Index);
