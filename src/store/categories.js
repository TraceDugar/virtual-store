import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// This is the part of the app that calls in the categories from the API.

// This is the initial state and active category after it is selected.
const initialState = {
  categories: [],
  activeCategory: '',
};

//  This is the slice for the categories.
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => ({ ...state, categories: action.payload }),
    selectCategory: (state, action) => ({ ...state, activeCategory: action.payload }),
  }
});


// These are the functions that are passed along throughout the app in regards to the categories.
export const { setCategories, selectCategory } = categoriesSlice.actions;

//  This is the API call to get the category data.
export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch(setCategories(response.data.results));
};

export default categoriesSlice.reducer;
