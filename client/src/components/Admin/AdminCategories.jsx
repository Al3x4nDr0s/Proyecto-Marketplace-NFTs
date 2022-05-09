import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../redux/actions';

 export default function AdminCategories() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(getCategory())
      }, [dispatch]);


return (
    <div>
        
    </div>
)      

}