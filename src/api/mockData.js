export const mockPosts = [
    {
        id: 1,
        title: "환영합니다! Histo-rian의 첫 글입니다.",
        contents: "<p>이것은 가짜 데이터로 생성된 첫 번째 게시글입니다.</p><p>Histo-rian에서 멋진 역사를 기록해보세요!</p>",
        author_id: 1,
        created_at: "2026-01-01T10:00:00Z"
    },
    {
        id: 2,
        title: "두 번째 소식: API 모킹 기능 추가",
        contents: "<p>서버가 꺼져 있어도 우리는 멈추지 않습니다. 🚀</p>",
        author_id: 1,
        created_at: "2026-01-02T15:30:00Z"
    },
    {
        id: 3,
        title: "Vite + React로 웹 앱 만들기",
        contents: "<p>React 19와 Vite 7을 사용한 현대적인 웹 개발!</p>",
        author_id: 2,
        created_at: "2026-01-03T09:00:00Z"
    }
];

export const mockAuth = {
    loginSuccess: {
        access_token: "fake-jwt-token-12345",
        token_type: "bearer",
        user_id: "testuser"
    },
    signupSuccess: {
        message: "User created successfully",
        user_id: "testuser"
    }
};
