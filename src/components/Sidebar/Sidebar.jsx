import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { FaUserFriends } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FaPen } from 'react-icons/fa6';
import { FiLogOut } from 'react-icons/fi';
import './Sidebar.css';

export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="sidebar-container">
            <div className={`sidebar-item ${isActive('/home')}`} onClick={() => handleNavigation('/home')}>
                <GoHome className="sidebar-icon" />
                <span>Home</span>
            </div>

            <div className={`sidebar-item ${isActive('/friends')}`} onClick={() => handleNavigation('/friends')}>
                <FaUserFriends className="sidebar-icon" />
                <span>Friends</span>
            </div>

            <div className={`sidebar-item ${isActive('/myposts')}`} onClick={() => handleNavigation('/myposts')}>
                <HiOutlineDocumentText className="sidebar-icon" />
                <span>My Posts</span>
            </div>

            <div className={`sidebar-item ${isActive('/write')}`} onClick={() => handleNavigation('/write')}>
                <FaPen className="sidebar-icon" />
                <span>Write</span>
            </div>

            <div className="sidebar-item logout" onClick={() => handleNavigation('/')}>
                <FiLogOut className="sidebar-icon" />
                <span>Logout</span>
            </div>
        </nav>
    );
}
