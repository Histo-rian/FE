import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import PostCard from '../../components/PostCard/PostCard';
import './HomePage.css';
import { postsApi } from '../../api/posts';

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await postsApi.getPosts();
                setPosts(data);
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="home-container">
            <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <div className="home-content">
                <aside className="left-sidebar">
                    <Sidebar />
                </aside>

                <main className="feed-section">
                    {loading ? (
                        <p style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>게시글을 불러오는 중입니다...</p>
                    ) : filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <PostCard
                                key={post.post_id}
                                author={`User ${post.author_id}`}
                                isVerified={true}
                                content={post.title}
                                description={post.contents}
                            />
                        ))
                    ) : (
                        <p style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
                            {searchTerm ? '검색 결과와 일치하는 게시글이 없습니다.' : '게시글이 없습니다.'}
                        </p>
                    )}
                </main>
            </div>
        </div>
    );
}
