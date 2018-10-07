import React, {Component} from 'react';
import Post from "../../../components/Post/Post";
import axios from '../../../axios';
import './Post.css';
import {Link, Route} from 'react-router-dom';
import FullPost from "../FullPost/FullPost";

class Posts extends Component {

  state = {
    posts: []
  };

  componentDidMount() {
    console.log(this.props);

    axios.get('/posts')
        .then(response => {
          const posts = response.data.splice(0, 4);
          const updatedPost = posts.map(post => {
            return {
              ...post,
              author: 'Max'
            }
          });

          this.setState({posts: updatedPost})
        })
        .catch(error => {
          //console.log(error);
          //this.setState({error: true});
        })
  }


  postSelectedHandler = (id) => {
    //this.props.history.push({pathname: '/posts/' + id});
    this.props.history.push('/posts/' + id);
  }

  render() {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
            //<Link to={'/posts/'+post.id} key={post.id}>
            <Post title={post.title}
                  key={post.id}
                  author={post.author}
                  clicked={() => this.postSelectedHandler(post.id)}/>
            //</Link>
        )
      });
    }

    return (
        <div>
          <section className="Posts">
            {posts}
          </section>
          <Route path={this.props.match.url+'/:id'} exact component={FullPost}/>
        </div>
    );
  }
}

export default Posts;