import GptSearchBar from "./GptSearchBar"
import GptSearchComponent from "./GptSearchComponent"
import React from "react"
const GptSearch = () => {
  return (
    <> 
        <GptSearchBar/>
        <GptSearchComponent/>
    </>
  )
}

export default React.memo(GptSearch)