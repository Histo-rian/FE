import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import './RightSidebar.css';

export default function RightSidebar() {
    const recentPosts = [
        { title: "조선이 최고지 ㄹㅇㅋㅋ", time: "1분전" },
        { title: "아무리 봐도 위화도 회군 계획임", time: "3분전" },
        { title: "한국사 최고의 시대는?", count: "게시물 4,024개" },
    ];

    return (
        <div className="right-sidebar-container">
            <h3 className="section-title">Recently written post</h3>

            <div className="recent-list">
                {recentPosts.map((post, index) => (
                    <div className="recent-item" key={index}>
                        <div className="recent-content">
                            <span className="recent-post-title">{post.title}</span>
                            <span className="recent-meta">{post.time || post.count}</span>
                        </div>
                        <BsThreeDots className="more-icon" />
                    </div>
                ))}
            </div>
        </div>
    );
}
