/* Due to challenges this week, I discussed a lot with Matthew Goldstein and
 Alex Beals. Also, much code is pulled from examples from lectures and workshops
*/
import axios from 'axios';
import { browserHistory } from 'react-router';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  DELETE_POST: 'DELETE_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
};
// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
const ROOT_URL = 'http://cs52homework5pt1.herokuapp.com/api';
const API_KEY = '?key=manmeet_gujral';

// Fetch all posts
export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
      dispatch({
        type: 'FETCH_POSTS',
        payload: response.data,
      });
    }).catch(error => {
      console.log(error);
    });
  };
}

// Fetch a single post given an id
export function fetchPost(postID) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${postID}${API_KEY}`).then(response => {
      dispatch({
        type: 'FETCH_POST',
        payload: response.data,
      });
    }).catch(error => {
      console.log(error);
    });
  };
}

// Update a post given an id and the post
export function updatePost(postID, post) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${postID}${API_KEY}`, post).then(response => {
      dispatch({
        type: 'UPDATE_POST',
        payload: response.data,
      });
      browserHistory.push('/');
    }).catch(error => {
      console.log(error);
    });
  };
}

// Update a post given an id and the post
export function createPost(post) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, post).then(response => {
      dispatch({
        type: 'CREATE_POST',
        payload: response.data,
      });
      browserHistory.push('/');
    }).catch(error => {
      console.log(error);
    });
  };
}

// Fetch a single post given an id
export function deletePost(postID) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${postID}${API_KEY}`).then(response => {
      dispatch({
        type: 'DELETE_POST',
        payload: response.data,
      });
      browserHistory.push('/');
    }).catch(error => {
      console.log(error);
    });
  };
}
