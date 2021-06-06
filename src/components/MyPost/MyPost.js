import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import swal from 'sweetalert';
import MyPostCard from './MyPostCard';
import spinner from '../../Images/loader.gif';

const MyPost = () => {
    const info = localStorage.getItem('info');
    const {email} = JSON.parse(info) || {};
    const [myPosts, setMyPosts] = useState([])
    const [isUpdate, setIsUpdate] = useState(false)
    useEffect(() => {
        axios.get(`https://quick-share-server.herokuapp.com/myPosts/${email}`)
        .then(({data}) => {
                setMyPosts(data);
        })
    }, [email, isUpdate])
    const handleDelete = (id) => {
        setIsUpdate(false)
        axios.delete(`https://quick-share-server.herokuapp.com/delete/${id}`)
        .then(res => {
            if(res){
                setIsUpdate(true)
                swal({
                    title: "Success!",
                    text: "The post was deleted successfully.",
                    icon: "success",
                  })
            }
        })
    }
    return (
        <div className="row w-100 marginTop">
            {myPosts.length === 0 &&
            <div className="spinner">
                <img src={`${spinner}`} alt="" />
            </div>}
            <div className="col-md-5 mx-auto">
                <Link to='new-post'><button className="btn btn-primary w-100">create a new post</button></Link>
                {
                    myPosts && myPosts.map(post => 
                        <MyPostCard 
                        post={post}
                        key={post._id}
                        handleDelete={handleDelete}
                        setIsUpdate={setIsUpdate}
                        />)
                }
            </div>
        </div>
    );
};

export default withRouter(MyPost);