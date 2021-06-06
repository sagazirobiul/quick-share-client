import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import {handleUploadImg} from './imgUpload'
import swal from 'sweetalert'
import { withRouter } from 'react-router';
import userImg from '../../Images/user.png'

const NewPost = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [postImg, setPostImg] = useState(null);
    const [isBtnClick, setBtnClick] = useState(false);
    const info = localStorage.getItem('info');
    const {email, img} = JSON.parse(info) || {};
    const onSubmit = data => {
        let postData = {...data}
        postData.img = postImg;
        postData.email = email;
        postData.userImg = img || userImg;
        postData.date = new Date().toDateString('dd/MM/yyy')
        axios.post('https://quick-share-server.herokuapp.com/addPost', postData)
        .then(res => {
            if(res){
                swal({
                    title: "Congratulation!",
                    text: "Your post was successfully uploaded.",
                    icon: "success",
                  })
            }
        })
        .catch(err => {
            if(err){
                swal({
                    title: "Ooops!",
                    text: err.message,
                    icon: "error",
                  })
            }
        })
        reset();
    }
    const uploadImg = e => {
        setBtnClick(true)
        handleUploadImg(e).then(res => {
            setPostImg(res)
            setBtnClick(false)
        })
    }
    return (
        <div className="row w-100 marginTop">
            <div className="col-md-5 mx-auto">
                <div className="cardBox">
                    <h5 className="text-center mt-2 mb-3">Create a new post</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control mt-2" placeholder="Post Title" {...register("title", { required: true })} />
                        {errors.title && <span className="text-warning">This field is required</span>}
                        <textarea className="form-control mt-2" placeholder="Write a post" {...register("description", { required: true })} />
                        {errors.description && <span className="text-warning">This field is required</span>}
                        <label for="img" class="form-label mt-2 d-block">Upload a photo</label>
                        <input type="file" id="img" className="form-control" onChange={uploadImg}/>
                        <button disabled={isBtnClick} type="submit" className="btn btn-primary mt-2 w-100">Post</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default withRouter(NewPost);



