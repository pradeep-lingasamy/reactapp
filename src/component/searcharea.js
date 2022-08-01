import React from "react";

const Searcharea=({country:{country, count} , filt})=>{
    return(
        <div className="searchbox">
            <button  onClick={()=>filt(country)}>{country}({count})</button>
        </div>
    )
}

export default Searcharea;