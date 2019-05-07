import React, {Component} from 'react';
import './post-details.css';
import BlogApi from '../../services/blog-api';

class PostDetails extends Component {

    blog = new BlogApi();

    state = {
        title: null,
        body: null,
        comments: null
    };

    componentDidMount() {
        const {id} = this.props.match.params;
        this.blog.getPost(id)
            .then(post => {
                this.setState({
                    title: post.title,
                    body: post.body
                })
            });

        this.blog.getPostComments(id)
            .then(comments => {
                this.setState({
                    comments
                })
            })
    }

    renderComments(arr) {
        if (arr) {
            return arr.map(({id, name, email, body}) => {
                return (
                    <div className='comment' key={id}>
                        <div className="card">
                            <div className="card-header">
                                {name}
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>{body}</p>
                                    <footer className="blockquote-footer">
                                        {email}
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        const {title, body, comments} = this.state;
        const list = this.renderComments(comments);
        return (
            <div className='post-details'>
                <h1 className='post-details__title'>{title}</h1>
                <p className='post-details__body'>{body}</p>
                <h2>Post comments:</h2>
                <div className="comment-wrapper">
                    {list}
                </div>
            </div>
        )
    }
};

export default PostDetails;