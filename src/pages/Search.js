import React from "react";
import "./style.css";


function Search() {
  return (
    <div>
      <h1>Search</h1>
      <div>
        <input placeholder="Restaurant Name"></input>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          {/* <label className="input-group-text" for="inputGroupSelect01">Options</label> */}
        </div>
        <select className="custom-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">Italian</option>
          <option value="2">Mexican</option>
          <option value="3">Americana</option>
          <option value="3">Greek</option>
          <option value="3">Japanese</option>
        </select>
      </div>
      <button>Enter</button>
    </div>
  );
}

export default Search;