import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek, faTenge } from '@fortawesome/free-solid-svg-icons';
import spinner from '../../Images/loader.gif'

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://quick-share-server.herokuapp.com/posts')
        .then(({data}) => {
                setPosts(data)
        })
    }, [])
    return (
        <div className="marginTop">
            {posts.length === 0 &&
            <div className="spinner">
                <img src={`${spinner}`} alt="" />
            </div>}
            {
                posts && posts.map(({_id, title, description, date, img, email, userImg}) => {
                    return(
                        <div className="col-md-5 mx-auto" key={_id}>
                            <div className="cardBox">
                                <div className="infoBox d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img className="userImg" src={userImg} alt="" />
                                        <p className="ms-1 userEmail">{email}</p>
                                    </div>
                                    <p><FontAwesomeIcon icon={faCalendarWeek}/> {date}</p>
                                </div>
                                <p className="title"><span className="highlight"><FontAwesomeIcon icon={faTenge}/> :</span> {title}</p>
                                <p className="description">{description}</p>
                                {img  && <div className="imgBox">
                                    <img src={img} alt="" />
                                </div>}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Home;