import categories from '@/slices/categories/categories';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        categories: categories,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

