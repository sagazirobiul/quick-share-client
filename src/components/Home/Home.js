import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5050/posts')
        .then(({data}) => {
                setPosts(data)
                console.log(data);
        })
    }, [])
    return (
        <div className="row">
            <div className="col-md-5 mx-auto">
                <h2>Total post is {posts.length}</h2>
            </div>
        </div>
    );
};

export default Home;