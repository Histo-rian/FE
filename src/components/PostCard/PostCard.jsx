import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdCheck } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import './PostCard.css';

export default function PostCard({ author, tags, isVerified, content, description, image, status }) {
    // Parsing status if provided, or deriving from isVerified
    const statusText = status || (isVerified ? "인증된 의견입니다" : "주관적인 의견입니다");
    const StatusIcon = isVerified ? MdCheck : IoClose;
    const statusClass = isVerified ? "verified" : "unverified";

    return (
        <div className='post-card-container'>
            <div className='post-header'>
                <div className='post-author-info'>
                    <FaUserCircle className='post-avatar' />
                    <div className='post-author-text'>
                        <span className='post-author-name'>{author}</span>
                    </div>
                </div>

                <div className={`post-status ${statusClass}`}>
                    <StatusIcon className='status-icon' />
                    <span>{statusText}</span>
                </div>
            </div>

            <div className='post-content'>
                <h2 className='post-title'>{content}</h2>
                {description && (
                    <div
                        className='post-description'
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                )}
                {image && (
                    <div className='post-image-container'>
                        <img src={image} alt="Post content" className='post-image' />
                    </div>
                )}
            </div>
        </div>
    );
}
