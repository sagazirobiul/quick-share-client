import React from 'react';

const MyPostCard = ({post, handleDelete, setIsUpdate}) => {
    const {_id, title, description, img, date} = post;
    return (
        <div className="cardBox">
            <li>{date}</li>
            <h3>{title}</h3>
            <p>{description}</p>
            {img  && <img src={img} alt="" />}
            <button className="btn btn-primary" onClick={() => setIsUpdate({
                needUpdate: true,
                data: post,
                openModal: true
            })}>Update</button>
            <button className="btn btn-danger" onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default MyPostCard;