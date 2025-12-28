import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import PostCard from '../../components/PostCard/PostCard';
import './MyPostsPage.css';

export default function MyPostsPage() {
    return (
        <div className="home-container">
            <Header />
            <div className="home-content">
                <aside className="left-sidebar">
                    <Sidebar />
                </aside>

                <main className="feed-section">
                    <div className="myposts-header">
                        <h1 className="page-title" style={{ marginBottom: 0 }}>My Posts</h1>
                        <span className="myposts-count">총 3개의 게시물</span>
                    </div>

                    <PostCard
                        author="kim@kim_1abc"
                        tags={["#조선", "#최고의시대"]}
                        isVerified={true}
                        content="조선, 질서와 문화의 꽃을 피운 한국사 최고의 국가"
                        description="조선은 한국사에서 가장 체계적이고 발전된 국가였다. 첫째, 조선은..."
                    />
                    <PostCard
                        author="kim@kim_1abc"
                        tags={["#조선", "#최고의시대"]}
                        isVerified={true}
                        content="조선, 질서와 문화의 꽃을 피운 한국사 최고의 국가"
                        description="조선은 한국사에서 가장 체계적이고 발전된 국가였다. 첫째, 조선은..."
                    />
                    <PostCard
                        author="kim@kim_1abc"
                        tags={["#조선", "#최고의시대"]}
                        isVerified={true}
                        content="조선, 질서와 문화의 꽃을 피운 한국사 최고의 국가"
                        description="조선은 한국사에서 가장 체계적이고 발전된 국가였다. 첫째, 조선은..."
                    />
                </main>

                <aside className="right-sidebar">
                    <RightSidebar />
                </aside>
            </div>
        </div>
    );
}
