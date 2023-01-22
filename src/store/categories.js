import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  activeCategory: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers:{
    setCategories: (state, action) => ({...state, categories: action.payload}),
    selectCategory: (state, action) => ({...state, activeCategory: action.payload}),
  }
});

export const { setCategories, selectCategory } = categoriesSlice.actions;

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch(setCategories(response.data.results));
};

export default categoriesSlice.reducer;
