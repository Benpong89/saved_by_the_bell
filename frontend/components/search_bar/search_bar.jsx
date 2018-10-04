import React from "react";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  //   const image_url = 'YOUR IMAGE URL';
  // return (
  //   <div className='home-card-view flex-center'
  //        style={{ backgroundImage : `url(${image_url})` }}>
  //
  //     <div>

  render() {
    return (
      <div className="search-bar-container">
        <form id="search-form" onSubmit="#">
          Search by Category
          <input
            id="category-input"
            type="text"
            placeholder="ie 'Dance' or 'Art'"
          />
          <br />
          Search by Zipcode
          <input id="zipcode-input" type="integer" placeholder="Zipcode" />
          <br />
          <button id="search-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
