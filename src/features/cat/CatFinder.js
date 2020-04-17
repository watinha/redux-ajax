import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { catActions, find_cat, current_map, favorite_map } from './catSlice';

export default function CatFinder () {
    const current = useSelector(current_map),
          dispatch = useDispatch();

    function like () {
        dispatch(catActions.like(current));
        dispatch(find_cat());
    }

    return (
        <div className="cat_finder">
            <div><img height="300" src={current} /></div>
            <button onClick={() => dispatch(find_cat())}>Carregar gato...</button>
            <button onClick={() => like()}>Like!</button>
        </div>
    );
}
