import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {handleUploadImg} from '../NewPost/imgUpload'
import { useParams, withRouter } from 'react-router-dom';
import swal from 'sweetalert'
import { Link } from 'react-router-dom';

const UpdateForm = () => {
    const {id} = useParams()
    const { register, handleSubmit } = useForm();
    const [upImg, setUpImg] = useState(null);
    const [isBtnClick, setBtnClick] = useState(false);
    const [postData, setPostData] = useState({})
    useEffect(() => {
        axios.get(`https://quick-share-server.herokuapp.com/updatePost/${id}`)
        .then(data => setPostData(data.data[0]))
    }, [id])
    const onSubmit = data => {
        const updatedData = {...data}
        updatedData.title = data.title || postData.title
        updatedData.description = data.description || postData.description
        updatedData.img = upImg || postData.img
        axios.patch(`https://quick-share-server.herokuapp.com/update/${id}`, updatedData)
        .then(res => {
            if(res){
                swal({
                    title: "Success!",
                    text: "The information was updated successfully.",
                    icon: "success",
                  })
            }
        })
    }
    const uploadImg = e => {
        setBtnClick(true)
        handleUploadImg(e).then(res => {
            setUpImg(res)
            setBtnClick(false)
        })
    }
    return (
        <div className="row marginTop">
            <div className="col-md-5 mx-auto">
                <div className="cardBox">
                    <h5 className="text-center mt-2 mb-3">Update your post</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-100">
                        <input defaultValue={postData.title} className="form-control mt-2" placeholder="Post Title" {...register("title")} />
                        <textarea defaultValue={postData.description} className="form-control mt-2" placeholder="Write a post" {...register("description")}/>
                        {postData.img && <>
                            <label for="img" class="form-label mt-2 d-block">Change photo</label>
                            <input type="file" className="form-control mt-2" onChange={uploadImg}/>
                        </>}
                        <button disabled={isBtnClick} type="submit" className="btn btn-success w-100 mt-2">Save</button>
                    </form>
                </div>
                <Link to="/my-posts"><button className="btn btn-primary">Back</button></Link>
            </div>
        </div>
    );
};

export default withRouter(UpdateForm);