import React, { Component } from "react";
import Books from "./Books";
class Main extends Component {
  state = {
    search: "",
    filderedBoos: []
  };
  handlSearchStateUpdateSearch = input => {
    const search = input.target.value.toLowerCase();

    let filderedBoos = [];

    if (this.state.search.length > 0) {
      Object.keys(this.props.books).forEach(key => {
        if (
          this.props.books[key].title
            .toLowerCase()
            .includes(this.state.search) ||
          this.props.books[key].author.toLowerCase().includes(this.state.search)
        ) {
          filderedBoos.push(this.props.books[key]);
        }
      });
    } else {
      filderedBoos = this.props.books;
    }
    this.setState({ search, filderedBoos });
  };
  render() {
    return (
      <div>
        {!this.props.adminState && (
          <div className="input-group mb-3 search">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={e => this.handlSearchStateUpdateSearch(e)}
            />
          </div>
        )}
        <Books
          books={this.state.search ? this.state.filderedBoos : this.props.books}
          btn={this.state.btn}
          AddToCart={this.props.AddToCart}
          adminState={this.props.adminState}
          handleDeleteBook={this.props.handleDeleteBook}
          handleEditBook={this.props.handleEditBook}
        />
      </div>
    );
  }
}

export default Main;
