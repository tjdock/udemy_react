import React, {Component} from 'react';
import './Blog.css';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';

import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';

const NewPost = asyncComponent(() => {
  return import('./NewPost/NewPost')
});

class Blog extends Component {
  state = {
    auth: true
  };

  render() {
    return (
        <div>
          <header className='Blog'>
            <nav>
              <ul>
                <li><NavLink to="/posts" exact
                             activeClassName='my-active'
                             activeStyle={{
                               color: 'red',
                               textDecoration: 'underline'
                             }}>Posts</NavLink></li>
                <li><NavLink to={{
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submit=true'
                }}>New Post</NavLink></li>
              </ul>
            </nav>
          </header>

          {/*<Route path='/' exact render={()=><h1>Home</h1>}/>*/}


          <Switch>
            {this.state.auth ? <Route path='/new-post' component={NewPost}/> : null}
            <Route path='/posts' component={Posts}/>
            <Route render={() => <h1>Not found</h1>}/>
            {/*<Redirect from='/' to='/posts'/>*/}
          </Switch>
        </div>
    );
  }
}

export default Blog;