import { useState } from 'react';

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = async(url) => {
        setLoading(true);
        const apiKEY = process.env.REACT_APP_API_KEY;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${apiKEY}`,
                },
            });

            if (!response.ok) {
                throw new Error(
                    `Something went wrong! Could not fetch ${url}. Status: ${response.status}`,
                );
            }

            const data = await response.json();
            setLoading(false);
            return data;
        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    };

    const cleanError = () => setError(null);

    return { loading, error, cleanError, request };
};