import MockAdapter from 'axios-mock-adapter';
import { mockPosts, mockAuth } from './mockData';

export const setupMockAdapter = (axiosInstance) => {
    const mock = new MockAdapter(axiosInstance, { delayResponse: 500 });

    // Auth API
    mock.onPost('/auth/login').reply(200, mockAuth.loginSuccess);
    mock.onPost('/auth/signup').reply(201, mockAuth.signupSuccess);

    // Posts API
    mock.onGet('/posts/').reply(200, mockPosts);
    mock.onGet('/posts/recent').reply(200, mockPosts.slice(0, 3));
    mock.onPost('/posts/').reply(201, { message: "Post created successfully", id: 4 });

    // Specific post detail (dynamic regex)
    mock.onGet(/\/posts\/\d+/).reply((config) => {
        const id = parseInt(config.url.split('/').pop());
        const post = mockPosts.find(p => p.id === id);
        return post ? [200, post] : [404, { message: "Post not found" }];
    });

    console.log('🚀 API Mocking is enabled');
};
