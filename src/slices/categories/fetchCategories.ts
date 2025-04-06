import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCategories } from './categoryAction';

interface CategoryState {
    data: any[];
    loading: boolean;
    error: string | null;
}

const initialState: CategoryState = {
    data: [],
    loading: false,
    error: null,
};

const fetchCategoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.errors || 'Failed to fetch categories';
            });
    },
});

export default fetchCategoriesSlice.reducer;
