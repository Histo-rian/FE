import axiosInstance from './axiosConfig';

export const postsApi = {
    // 새로운 게시글 작성
    createPost: async (postData) => {
        const response = await axiosInstance.post('/posts/', postData);
        return response.data;
    },

    // 전체 게시글 목록 조회
    getPosts: async (params) => {
        const response = await axiosInstance.get('/posts/', { params });
        return response.data;
    },

    // 최신 게시글 3개 조회
    getRecentPosts: async () => {
        const response = await axiosInstance.get('/posts/recent');
        return response.data;
    },

    // 특정 게시글 상세 조회
    getPostDetail: async (postId) => {
        const response = await axiosInstance.get(`/posts/${postId}`);
        return response.data;
    },

    // 게시글 수정
    updatePost: async (postId, postData) => {
        const response = await axiosInstance.put(`/posts/${postId}`, postData);
        return response.data;
    },

    // 게시글 삭제
    deletePost: async (postId) => {
        const response = await axiosInstance.delete(`/posts/${postId}`);
        return response.data;
    }
};
