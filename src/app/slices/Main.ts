import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {Article} from "../../interfaces";

interface InitState {
    data: Array<Article>,
    keywords: string,
}

const initialState: InitState = {
    data: [],
    keywords: "",
};

export const fetchData = createAsyncThunk("main/fetchData", async() => {
    const data = await axios.get(`${process.env.REACT_APP_API}?_limit=6`);
    return data;
});

export const sortDataByKeywords = createAsyncThunk("main/sortDataByKeywords", async({keywords}: {keywords:string}, thunkAPI) => {
    const sortedData = await axios.get(`${process.env.REACT_APP_API}?_limit=6&title_containss=${keywords.trim()}&summary_contains=${keywords.trim()}`);
    return sortedData;
});

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setKeywords: (state: InitState, action) => {
            state.keywords = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state: InitState, action) => {
            state.data = action.payload.data;
        });
        builder.addCase(sortDataByKeywords.fulfilled, (state: InitState, action) =>  {
           state.data = action.payload.data;
        });
    }
});

export const {setKeywords} = mainSlice.actions;
