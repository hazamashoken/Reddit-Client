import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    subreddits: [],
    error: false,
    isLoading: false,
}

const subRedditSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {

    }
})