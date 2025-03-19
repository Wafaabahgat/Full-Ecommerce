import axios from 'axios';

export function axiosErrorHelper(error: unknown) {
    if (axios.isAxiosError<any, Record<string, unknown>>(error)) {
        return {
            errorMessage: error.response?.data?.errorMessage || 'error',
            error: error.response?.data?.error,
            statusCode: error.response?.data.statusCode,
        };
    } else {
        if (error instanceof String) {
            return { errorMessage: error || 'error', error: { code: 'INTERNAL ERROR', message: error } };
        } else {
            if (error instanceof Error) {
                return { errorMessage: error.message, error: { code: 'INTERNAL ERROR', message: error.message } };
            }
        }
    }
}
