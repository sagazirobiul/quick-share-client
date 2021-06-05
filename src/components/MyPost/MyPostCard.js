import React from 'react';
import { Link } from 'react-router-dom';
import './MyPost.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek, faTenge } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import loginReducers from '../../redux/reducers/loginReducers';

const MyPostCard = ({post, handleDelete}) => {
    const {_id, title, description, email, img, date, userImg} = post;
    const userInfo = useSelector(loginReducers);
    return (
        <div className="cardBox">
            <div className="infoBox d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img className="userImg" src={userInfo.img ? userInfo.img : `${userImg}`} alt="" />
                    <p className="ms-1 userEmail">{email}</p>
                </div>
                <p><FontAwesomeIcon icon={faCalendarWeek}/> {date}</p>
            </div>
            <p className="title"><span className="highlight"><FontAwesomeIcon icon={faTenge}/> :</span> {title}</p>
            <p className="description">{description}</p>
            {img  && <div className="imgBox">
                <img src={img} alt="" />
            </div>}
            <Link to={`/my-posts/${_id}`}><button className="btn btn-outline-primary">Update</button></Link>
            <button className="btn btn-outline-danger ms-2" onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default MyPostCard;