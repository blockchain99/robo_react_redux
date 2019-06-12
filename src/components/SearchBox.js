import React from 'react'
import 'tachyons';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input 
        className="pa3 ba b--green bg-lightest-blue"
        type="serach" 
        placeholder="search robots" 
//Communicate with parents : When onChange event triggered in child(SearchBox.js)-> 
//call searchchange func,which is props,& defined in App.js 
//Now Parent(App.js) have search input value -> communicate with 
//child robots list      
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox
