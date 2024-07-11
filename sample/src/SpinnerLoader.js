import React, { useEffect, useState } from "react";
import Spinner from "./images/Spinner.gif";
import ClipLoader from "react-spinners/ClipLoader";

export default function SpinnerLoader(){
    
    const[img,setImg]=useState(false);

    useEffect(()=>{
        setImg(true)
        setTimeout(()=>{
            setImg(false)
            
        },1000)
    },[])

    return(
        <div>
            {
                setImg ?
                (<ClipLoader color={"blue"} loading={img}  size={150} />)
                :
                (<div>Anuhya</div>)
            }
        </div>
    )
}