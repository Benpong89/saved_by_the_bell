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
    const lightbulbURL = "YOUR IMAGE URL";
    return (
      <div className="search-bar-container">
        <form id="search-form" onSubmit="#">
          Category
          <input
            id="amount-input"
            type="integer"
            placeholder="ie 'Dance' or 'Art'"
          />
          <br />
          location
          <input id="people-input" type="integer" placeholder="Zipcode" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
