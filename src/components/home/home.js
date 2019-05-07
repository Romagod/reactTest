import React from 'react';
import './home.css';
import Posts from '../posts/posts';

const Home = () => {
    return (
        <div className="home">
            <h2>Welcome to MyBlog</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa distinctio, earum enim harum
                incidunt ipsam iure officia quasi repellat reprehenderit sit soluta tempora voluptatibus?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa distinctio, earum enim harum
                incidunt ipsam iure officia quasi repellat reprehenderit sit soluta tempora voluptatibus?
            </p>
            <Posts/>
        </div>
    )
};

export default Home;