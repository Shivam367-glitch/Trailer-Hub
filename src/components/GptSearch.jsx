import GptSearchBar from "./GptSearchBar"
import GptSearchComponent from "./GptSearchComponent"
import { BAC_IMG_CDN_URL } from "../utils/Constants"
import React from "react"
const GptSearch = () => {
  return (
    <div> 
     <div className="position-absolute top-0 img_container">
        <img src={BAC_IMG_CDN_URL} alt="" srcSet="" className="img-fluid" />
      </div> 
        <GptSearchBar/>
        <GptSearchComponent/>
    </div>
  )
}

export default React.memo(GptSearch)