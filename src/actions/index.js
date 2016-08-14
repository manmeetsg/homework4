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
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};
// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const ROOT_URL = 'http://localhost:9090/api';
const API_KEY = '?key=manmeet_gujral';

// Helper functions
// deletes token from localstorage
// and deauths
export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    browserHistory.push('/');
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}
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
    axios.put(`${ROOT_URL}/posts/${postID}${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
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
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
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
    axios.delete(`${ROOT_URL}/posts/${postID}${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
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
  // User function
export function signinUser({ email, password }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin/${API_KEY}`, { email, password }).then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    }).catch(error => {
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}


export function signupUser({ email, password, username }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup/${API_KEY}`, { email, password, username }).then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    }).catch(error => {
      dispatch(authError(`Sign Up Failed: ${error.response.data}`));
    });
  };
}
