import React, { useState } from 'react';
import axios from 'axios';

export default function CatFinder () {
    const [current, setCurrent] = useState('');

    async function find_cat () {
        const response = await axios.get('https://aws.random.cat/meow');
        setCurrent(response.data.file);
    }

    return (
        <div className="cat_finder">
            <div><img src={current} /></div>
            <button onClick={() => find_cat()}>Carregar gato...</button>
        </div>
    );
}
