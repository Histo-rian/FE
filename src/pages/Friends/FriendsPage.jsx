import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { FaUserCircle } from 'react-icons/fa';
import './FriendsPage.css';

export default function FriendsPage() {
    const friends = [
        { name: "Sarah Wilson", job: "Software Engineer", mutual: 12 },
        { name: "Sarah Wilson", job: "Software Engineer", mutual: 12 },
        { name: "Sarah Wilson", job: "Software Engineer", mutual: 12 },
    ];

    return (
        <div className="home-container">
            <Header />
            <div className="home-content">
                <aside className="left-sidebar">
                    <Sidebar />
                </aside>

                <main className="feed-section">
                    <h1 className="page-title">Friends</h1>
                    <div className="friends-list">
                        {friends.map((friend, index) => (
                            <div className="friend-card" key={index}>
                                <div className="friend-info">
                                    <FaUserCircle className="friend-avatar" />
                                    <div className="friend-details">
                                        <span className="friend-name">{friend.name}</span>
                                        <span className="friend-job">{friend.job}</span>
                                        <span className="friend-mutual">Mutual friends: {friend.mutual}</span>
                                    </div>
                                </div>
                                <button className="unfollow-btn">Unfollow</button>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
