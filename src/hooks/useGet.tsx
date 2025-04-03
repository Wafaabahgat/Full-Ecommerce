import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { AnyAction } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

const useGet = ({
    states,
    allData,
    limit,
}: {
    states: string;
    limit?: number;
    allData: (data: string | undefined) => AnyAction;
}) => {
    const { search } = useLocation();

    const dispatch = useAppDispatch();
    const { loading, data, errors, success } = useAppSelector(
        (state) => state[`${states}`], //state.categories or state['categories']
    );

    useEffect(() => {
        const fetchData = () => {
            const query = limit ? `${search}${search ? '&' : '?'}limit=${limit}` : search;

            dispatch(allData(query));
        };
        fetchData();
    }, [dispatch, search, limit]);

    useEffect(() => {
        if (success === false && errors) {
            toast.error(errors);
        }
    }, [success, errors]);

    return {
        data,
        loading: loading,
    };
};

export default useGet;

