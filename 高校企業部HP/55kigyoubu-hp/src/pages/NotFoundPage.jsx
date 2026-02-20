import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base">
            <h1 className="text-4xl font-bold text-primary mb-4">404 - Page Not Found</h1>
            <Link to="/" className="text-secondary hover:underline">トップページへ戻る</Link>
        </div>
    );
};

export default NotFoundPage;
