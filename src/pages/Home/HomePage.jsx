import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import PostCard from '../../components/PostCard/PostCard';
import './HomePage.css';

export default function HomePage() {
    return (
        <div className="home-container">
            <Header />
            <div className="home-content">
                <aside className="left-sidebar">
                    <Sidebar />
                </aside>

                <main className="feed-section">
                    <PostCard
                        author="kim@kim_1abc"
                        tags={["#조선", "#최고의시대"]}
                        isVerified={true}
                        content="조선, 질서와 문화의 꽃을 피운 한국사 최고의 국가"
                        description="조선은 한국사에서 가장 체계적이고 발전된 국가였다. 첫째, 조선은..."
                    />
                    <PostCard
                        author="lee@lee_lert"
                        tags={["#고려", "#최고의시대"]}
                        isVerified={false}
                        status="주관적인 의견입니다"
                        content="미친 듯이 자랑스럽다, 고려야말로 한국사 진짜 레전드 국가다"
                        description="아, 조선따위 지는 놈들 좀 조용히 해라. 내가 증명해줄게. 고려야말로 한국사에서 진짜..."
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Goryeo_Bronze_Seated_Avalokitesvara_Bodhisattva.jpg/440px-Goryeo_Bronze_Seated_Avalokitesvara_Bodhisattva.jpg"
                    />
                    <PostCard
                        author="kim@kim_1abc"
                        tags={["#조선", "#최고의시대"]}
                        isVerified={true}
                        content="조선이 최고지 ㄹㅇㅋㅋ"
                    />
                </main>

                <aside className="right-sidebar">
                    <RightSidebar />
                </aside>
            </div>
        </div>
    );
}
