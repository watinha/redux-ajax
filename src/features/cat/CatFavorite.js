import React from 'react';
import { useSelector } from 'react-redux';
import { favorite_map } from './catSlice';

export default function CatFavorite () {
    const favorite = useSelector(favorite_map);
    return (
        <ul>
        {favorite.map((f, index) => {
            return <li key={index}><img height="100" src={f}/></li>
        })}
        </ul>
    );
}
