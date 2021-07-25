import React from 'react';

const SearchBar = ({updateInput,keyPress}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"black", padding:"20px", marginLeft:"550px", borderRadius:'10px', textAlign:'left',};
  return (
    <input 
     style={BarStyling}
     key="random1"
     placeholder={"Search by title"}
     onChange={(e) => updateInput(e.target.value)}
     onKeyPress={(e)=> keyPress(e)}
    />
  );
}

export default SearchBar