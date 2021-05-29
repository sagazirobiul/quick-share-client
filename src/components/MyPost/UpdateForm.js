import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import {handleUploadImg} from '../NewPost/imgUpload'

const UpdateForm = ({isUpdate,setIsUpdate}) => {
    const { register, handleSubmit } = useForm();
    const [upImg, setUpImg] = useState(null);
    const [isBtnClick, setBtnClick] = useState(true);
    const {openModal, data:{_id, title, description, img}} = isUpdate;
    const onSubmit = data => {
        const updatedData = {...data};
        updatedData.img = upImg;
        axios.patch(`http://localhost:5050/update/${_id}`, updatedData)
        .then(res => {
            if(res){
                setIsUpdate({
                    needUpdate: false,
                    data: {},
                    openModal: false
                })
            }
        })
    }
    const uploadImg = e => {
        handleUploadImg(e).then(res => setUpImg(res))
    }
    const customStyles = {
        content : {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        }
      };
    return (
            <Modal isOpen={openModal} style={customStyles}>
                <form onSubmit={handleSubmit(onSubmit)} className="w-100">
                    <input defaultValue={title} className="form-control" placeholder="Post Title" {...register("title")} />
                    <textarea defaultValue={description} className="form-control" placeholder="Write a post" {...register("description")}/>
                    {img && <input type="file" className="form-control" onChange={uploadImg}/>}
                    <button disabled={isBtnClick} type="submit" className="btn btn-success">Save</button>
                    <button 
                    className="btn btn-danger"
                    onClick={() => {setIsUpdate({...isUpdate, openModal: false})}
                    }>Close</button>
                </form>
            </Modal>
    );
};

export default UpdateForm;