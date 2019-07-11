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
        {this.props.adminState && (
          <div className="add-new-book-form-container">
            <h4>Add a new Book</h4>
            <form>
              <div class="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  id="title"
                  placeholder="Enter title"
                />
              </div>
              <div class="form-group">
                <label>Suitle</label>
                <input
                  type="text"
                  name="sutitle"
                  className="form-control"
                  id="title"
                  placeholder="Enter sutitle"
                />
              </div>
              <div class="form-group">
                <label>Author</label>
                <input
                  type="text"
                  name="author"
                  className="form-control"
                  id="title"
                  placeholder="Enter author"
                />
              </div>
              <div class="form-group">
                <label>Published</label>
                <input
                  type="date"
                  name="published"
                  className="form-control"
                  id="title"
                  placeholder="Enter published"
                />
              </div>
              <div class="form-group">
                <label>Publisher</label>
                <input
                  type="text"
                  name="publisher"
                  className="form-control"
                  id="title"
                  placeholder="Enter publisher"
                />
              </div>
              <div class="form-group">
                <label>Pages</label>
                <input
                  type="text"
                  name="pages"
                  className="form-control"
                  id="title"
                  placeholder="Enter pages"
                />
              </div>
              <div class="form-group">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  id="title"
                  placeholder="Enter description"
                />
              </div>
              <div class="form-group">
                <label>Website</label>
                <input
                  type="text"
                  name="website"
                  className="form-control"
                  id="title"
                  placeholder="Enter website"
                />
              </div>
              <div class="form-group">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  id="price"
                  placeholder="Enter price"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <h4>Your Books</h4>
          </div>
        )}
        <Books
          books={this.state.search ? this.state.filderedBoos : this.props.books}
          btn={this.state.btn}
          AddToCart={this.props.AddToCart}
          adminState={this.props.adminState}
          handleDeleteBook={this.props.handleDeleteBook}
        />
      </div>
    );
  }
}

export default Main;
