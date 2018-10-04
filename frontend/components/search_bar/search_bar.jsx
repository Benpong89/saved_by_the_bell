import React from "react";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-bar-container">
        <h2>Search here for volunteer After-School Program leaders!</h2>
        <input
          id="category-input"
          type="text"
          placeholder="Category #Dance #Art"
        />
        <br />
        <input id="zipcode-input" type="integer" placeholder="Zipcode #10010" />
      </div>
    );
  }
}

export default SearchBar;

// <form id="search-form" onSubmit={this.props.signout}>
//   Search by Category
//   <input
//     id="category-input"
//     type="text"
//     placeholder="ie 'Dance' or 'Art'"
//   />
//   <br />
//   Search by Zipcode
//   <input id="zipcode-input" type="integer" placeholder="Zipcode" />
//   <br />
//   <button id="search-button" type="submit">
//     Submit
//   </button>
// </form>
//
