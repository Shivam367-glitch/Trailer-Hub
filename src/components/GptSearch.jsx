import GptSearchBar from "./GptSearchBar"
import GptSearchComponent from "./GptSearchComponent"
import React from "react"
const GptSearch = () => {
  return (
    <div> 
        <GptSearchBar/>
        <GptSearchComponent/>
    </div>
  )
}

export default React.memo(GptSearch)