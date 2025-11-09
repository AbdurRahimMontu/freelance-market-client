import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            {error.message}
            <Link to="/" className='btn w-full'>Go Home</Link>
        </div>
    );
};

export default ErrorPage;