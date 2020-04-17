import React from 'react';
import { useSelector } from 'react-redux';
import { loading_map } from './catSlice';
import './CatLoader.css';

export default function CatLoader () {
    const loading = useSelector(loading_map);
    return (
        <div>{loading && (<div className="loader" />)}</div>
    );
}
