import React, { useEffect, useState } from 'react';

const Api = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/eur.json')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            <h2>Api Data</h2>
            <div>{data?.bpi?.EUR?.rate}</div>
        </div>
    );
};

export default Api;
