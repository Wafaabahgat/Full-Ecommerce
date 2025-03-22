import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import Cookies from 'universal-cookie';
import axios from '@/slices/axios';

const cookies = new Cookies();
const token = cookies.get('token');
const TOKEN = `Bearer ${token}`;

const config = {
    headers: {
        Authorization: TOKEN,
    },
};

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (args: string | undefined, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/products/categories${args ? `/${args}` : ''}`, config);
            return data;
        } catch (_err) {
            const error = _err as AxiosError;
            if (!error.response) {
                return rejectWithValue({ errors: 'Error: Network Error' });
            }
            return rejectWithValue(error.response.data || { errors: 'An unexpected error occurred' });
        }
    },
);

