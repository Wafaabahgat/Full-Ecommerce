import  fetchCategories  from './../slices/categories/fetchCategories';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        categories: fetchCategories,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

