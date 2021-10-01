import React from 'react'
import { useState } from 'react'
import './navbar.scss'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0? false : true);
        console.log(isScrolled);
        return () => (window.onscroll = null)
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflixlogo" />

                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <SearchIcon className="icon"/>
                    <span>KID</span>
                    <NotificationsIcon className="icon"/>
                    <img src="https://media.istockphoto.com/photos/side-view-of-woman-picture-id1265915674?b=1&k=20&m=1265915674&s=170667a&w=0&h=wlY7botR4QX0Jy9jcE2BFa7O4AGfWl72OUT_HmR7_Rk=" alt="profilepic" />
                    <div className="profile">
                        <ArrowDropDownIcon className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
