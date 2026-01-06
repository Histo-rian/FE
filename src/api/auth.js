import axiosInstance from './axiosConfig';

export const authApi = {
    // 회원가입
    signup: async (userData) => {
        const response = await axiosInstance.post('/auth/signup', {
            user_id: userData.id,
            email: userData.email,
            password: userData.password
        });
        return response.data;
    },

    // 로그인
    login: async (credentials) => {
        const response = await axiosInstance.post('/auth/login', {
            user_id: credentials.id,
            password: credentials.password
        });
        if (response.data.access_token) {
            localStorage.setItem('access_token', response.data.access_token);
        }
        return response.data;
    },

    // 로그아웃 (클라이언트 측)
    logout: () => {
        localStorage.removeItem('access_token');
    }
};
