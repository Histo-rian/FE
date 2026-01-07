import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../../assets/4.svg';
import './Header.css';

export default function Header({ searchTerm, onSearchChange }) {
    return (
        <header className="header-container">
            <div className="header-content">
                <div className="header-left">
                    <img src={logo} alt="HDF" className="header-logo-icon" />
                    <span className="header-logo-text">HDF</span>
                </div>

                <div className="header-center">
                    <div className="search-bar">
                        <FiSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search posts..."
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                    </div>
                </div>

                <div className="header-right">
                    <FaUserCircle className="user-icon" />
                    <div className="user-info">
                        <span className="user-name">{localStorage.getItem('user_id') || 'Guest'}</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
