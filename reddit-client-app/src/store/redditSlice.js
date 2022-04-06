import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectedSubreddit: '/r/pics/',
};

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {

    }
});

