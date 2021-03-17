import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';

const POSTS_URL = '/posts';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
    
    componentDidMount() {
        axios.get(POSTS_URL)
            .then((response) => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map((post) => ({
                    ...post,
                    author: 'Max'
                }))
                
                this.setState({ posts: updatedPosts })
            })
            .catch((error) => {
                this.setState({ error: true })
            });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id })
    }
    
    render () {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        
        if (!this.state.error) {
            posts = this.state.posts.map((post) => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    click={() => this.postSelectedHandler(post.id)} />;
            });
        }
        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;