import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import PostCard from '../../components/PostCard/PostCard';
import './MyPostsPage.css';

export default function MyPostsPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const myPosts = [
        {
            id: 1,
            author: "kim@kim_1abc",
            tags: ["#조선", "#최고의시대"],
            content: "조선, 질서와 문화의 꽃을 피운 한국사 최고의 국가",
            description: "조선은 한국사에서 가장 체계적이고 발전된 국가였다. 첫째, 조선은..."
        },
        {
            id: 2,
            author: "kim@kim_1abc",
            tags: ["#조선", "#최고의시대"],
            content: "조선, 질서와 문화의 꽃을 피운 한국사 최고의 국가",
            description: "조선은 한국사에서 가장 체계적이고 발전된 국가였다. 첫째, 조선은..."
        },
        {
            id: 3,
            author: "kim@kim_1abc",
            tags: ["#조선", "#최고의시대"],
            content: "조선, 질서와 문화의 꽃을 피운 한국사 최고의 국가",
            description: "조선은 한국사에서 가장 체계적이고 발전된 국가였다. 첫째, 조선은..."
        }
    ];

    const filteredPosts = myPosts.filter(post =>
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="home-container">
            <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <div className="home-content">
                <aside className="left-sidebar">
                    <Sidebar />
                </aside>

                <main className="feed-section">
                    <div className="myposts-header">
                        <h1 className="page-title" style={{ marginBottom: 0 }}>My Posts</h1>
                        <span className="myposts-count">총 {filteredPosts.length}개의 게시물</span>
                    </div>

                    {filteredPosts.length > 0 ? (
                        filteredPosts.map(post => (
                            <PostCard
                                key={post.id}
                                author={post.author}
                                tags={post.tags}
                                isVerified={true}
                                content={post.content}
                                description={post.description}
                            />
                        ))
                    ) : (
                        <p style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
                            검색 결과와 일치하는 게시글이 없습니다.
                        </p>
                    )}
                </main>
            </div>
        </div>
    );
}
