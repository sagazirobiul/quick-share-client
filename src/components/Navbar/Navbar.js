import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import userImg from '../../Images/user.png'
import { useDispatch, useSelector } from 'react-redux';
import loginReducers from '../../redux/reducers/loginReducers';
import { userLogOut } from '../../redux/actions/loginActions';

const Navbar = () => {
    const userInfo = useSelector(loginReducers);
    const dispatch = useDispatch();
    const info = localStorage.getItem('info');
    const {email, img} = JSON.parse(info) || {};
    const logOut = () => {
        dispatch(userLogOut({}));
        localStorage.removeItem('info');
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light menuBar">
            <div class="container">
                <NavLink to="/" class="navbar-brand fw-bolder">Quick <span className="highlight">Share</span></NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink exact to="/" activeClassName="selected" className="nav-link">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink exact to="/my-posts" activeClassName="selected" className="nav-link">My Posts</NavLink>
                        </li>
                        <li>
                            <div class="dropdown">
                                <button class="ms-2 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={userInfo.img || img || userImg} alt="" />
                                </button>
                                <ul class="dropdown-menu text-center" aria-labelledby="dropdownMenuButton1">
                                    {
                                        email ? <>
                                        <li><p className="dropEmail">{userInfo.email || email }</p></li>
                                        <li><Link to="new-post"><button className="btn btn-primary w-100 my-1">Creat a post</button></Link></li>
                                        <li><button class="btn btn-danger w-100" onClick={logOut}>Log Out</button></li>
                                        </>:
                                        <li><Link to="login"><button className="btn btn-primary w-100 my-1">Log In</button></Link></li>
                                    }
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;