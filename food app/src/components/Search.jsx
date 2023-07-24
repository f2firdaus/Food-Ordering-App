import { useState } from "react";
import {BsSearch} from 'react-icons/bs'
const Search = ({search ,setSearch}) => {
    
   
    return (
        <>
            <div className="input">
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
                <BsSearch/>
            </div>

        </>
    )
}
export default Search;