import React, { useState, useEffect } from 'react';

const BACKEND_URL = 'http://localhost:8000/';

const Home = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch(`${BACKEND_URL}api/hello/`)
            .then((res) => res.json())
            .then((data) => setData(data));

    }, []);

    return (
        <div>
            <h1>Welcome to the Fine Tuning Chatbot</h1>
            <p>{data}</p>
        </div>
    );
};

export default Home;