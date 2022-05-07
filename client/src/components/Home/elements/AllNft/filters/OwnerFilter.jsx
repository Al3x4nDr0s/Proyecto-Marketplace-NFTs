import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"

const OwnerFilter = () => {


    function handleChange(e){
        
    }

    return (
        <select name="" id="" onChange={(e)=>handleChange(e)}>
                <option value="" >Filter by Type</option>
                {/* {
                    types && types.map(t=>{
                        return (
                           <option value={t.name}>{t.name}</option>
                        )
                    })
                } */}
            </select>
    );
};

export default OwnerFilter;