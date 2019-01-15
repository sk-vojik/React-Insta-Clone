import React from "react";


function SearchBar(props) {
  return (
    <div className="search-container">

      <div className="logo-container">
        <i className="fab fa-instagram"></i>
        <div className="separator">|</div>
        <img className="insta-logo" src={require("./instaLogo.png")} alt="nope"/>
      </div>
      
      <form onSubmit={props.search}>
        <input name="searchText" onChange={props.handleSearch} type="text" placeholder="Search" />
      </form>

      <div className="icon-container">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>
      
    </div>
  )
}

export default SearchBar