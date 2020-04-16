import React, { useState } from 'react';
import axios from 'axios';

export default function CatFinder () {
    const [current, setCurrent] = useState(''),
          [favorite, setFavorite] = useState([]);

    async function find_cat () {
        const response = await axios.get('https://aws.random.cat/meow');
        setCurrent(response.data.file);
    }

    function like () {
        setFavorite([current, ...favorite]);
        find_cat();
    }

    return (
        <div className="cat_finder">
            <ul>
            {favorite.map((f, index) => {
                return <li key={index}><img height="100" src={f}/></li>
            })}
            </ul>

            <div><img height="300" src={current} /></div>
            <button onClick={() => find_cat()}>Carregar gato...</button>
            <button onClick={() => like()}>Like!</button>
        </div>
    );
}
