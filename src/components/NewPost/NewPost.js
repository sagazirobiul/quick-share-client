import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import {handleUploadImg} from './imgUpload'

const NewPost = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [img, setImg] = useState(null);
    const email = localStorage.getItem('email')
    const onSubmit = data => {
        let postData = {...data}
        postData.img = img;
        postData.email = email;
        postData.date = new Date().toDateString('dd/MM/yyy')
        axios.post('http://localhost:5050/addPost', postData)
        .then(res => {
            if(res){
                alert('Your post has been successfully uploaded')
            }
        })
        reset();
    }
    const uploadImg = e => {
        handleUploadImg(e).then(res => setImg(res))
    }
    return (
        <div className="row">
            <div className="col-md-5 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" placeholder="Post Title" {...register("title", { required: true })} />
                    {errors.title && <span>This field is required</span>}
                    <textarea className="form-control" placeholder="Write a post" {...register("description", { required: true })} />
                    {errors.description && <span>This field is required</span>}
                    <input type="file" className="form-control" onChange={uploadImg}/>
                    <button type="submit" className="btn btn-primary">Post</button>
                </form>
            </div>
        </div>
    )
};

export default NewPost;



