import React, {Component} from 'react';
import './post.css';
import BlogApi from '../../services/blog-api';
import {Link} from "react-router-dom";

export default class Post extends Component {
    blog = new BlogApi();

    state = {
        postList: null
    };

    componentDidMount() {
        this.blog.getAllPosts()
            .then(postList => {
                this.setState({
                    postList
                })
            })
    }

    renderPostList(arr) {
        if (arr) {
            return arr.map(({id, title, body}) => {
                return (
                    <div className='card post' key={id}>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{body}</p>
                            <Link to={`/posts/${id}`}
                                  className="btn btn-primary"
                            >Подробнее</Link>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        const { postList } = this.state;
        const list = this.renderPostList(postList);
        return (
            <div className="post-wrapper">
                {list}
            </div>
        )
    }
}