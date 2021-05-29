import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <NavLink to="/" class="navbar-brand">Quick share</NavLink>
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
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Me
                                </button>
                                <ul class="dropdown-menu text-center" aria-labelledby="dropdownMenuButton1">
                                    <li><NavLink to="new-post" class="dropdown-item">Creat a post</NavLink></li>
                                    <li><button  class="btn btn-danger w-100 m-1">Log Out</button></li>
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