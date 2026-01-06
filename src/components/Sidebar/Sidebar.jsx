import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    HiOutlineHome,
    HiOutlineDocumentText,
    HiOutlinePencilSquare,
    HiOutlineArrowRightOnRectangle
} from 'react-icons/hi2';
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
                <HiOutlineHome className="sidebar-icon" />
                <span>Home</span>
            </div>

            <div className={`sidebar-item ${isActive('/myposts')}`} onClick={() => handleNavigation('/myposts')}>
                <HiOutlineDocumentText className="sidebar-icon" />
                <span>My Posts</span>
            </div>

            <div className={`sidebar-item ${isActive('/write')}`} onClick={() => handleNavigation('/write')}>
                <HiOutlinePencilSquare className="sidebar-icon" />
                <span>Write</span>
            </div>

            <div className="sidebar-item logout" onClick={() => handleNavigation('/')}>
                <HiOutlineArrowRightOnRectangle className="sidebar-icon" />
                <span>Logout</span>
            </div>
        </nav>
    );
}
