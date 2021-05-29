import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyPostCard from './MyPostCard';
import UpdateForm from './UpdateForm';

const MyPost = () => {
    const email = localStorage.getItem('email')
    const [myPosts, setMyPosts] = useState([])
    const [isUpdate, setIsUpdate] = useState({
        needUpdate: false,
        data: {},
        openModal: false
    })
    useEffect(() => {
        axios.get('http://localhost:5050/myPosts?email='+email)
        .then(({data}) => {
                setMyPosts(data);
        })
    }, [email, isUpdate])
    const handleDelete = (id) => {
        setIsUpdate({...isUpdate, needUpdate:false})
        axios.delete(`http://localhost:5050/delete/${id}`)
        .then(res => {
            if(res){
                setIsUpdate({...isUpdate, needUpdate:true})
            }
        })
    }
    return (
        <div className="row">
            <div className="col-md-5 mx-auto">
                <Link to='new-post'><button className="btn btn-primary">create a new post</button></Link>
                {
                    myPosts.map(post => <MyPostCard 
                    post={post}
                    key={post._id}
                    handleDelete={handleDelete}
                    setIsUpdate={setIsUpdate}
                    />)
                }
            </div>
            <UpdateForm 
                    setIsUpdate={setIsUpdate}
                    isUpdate={isUpdate}    
            />
        </div>
    );
};

export default MyPost;