import React, { Component } from "react";

class AddNewBook extends Component {
  state = {};

  onSubmit = e => {
    e.preventDefault();
    this.props.handleAddNewBook(this.state);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="add-new-book-form-container">
        <h4>Add a new Book</h4>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="title"
              placeholder="Enter title"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Suitle</label>
            <input
              type="text"
              name="sutitle"
              className="form-control"
              id="title"
              placeholder="Enter sutitle"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              name="author"
              className="form-control"
              id="title"
              placeholder="Enter author"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Published</label>
            <input
              type="date"
              name="published"
              className="form-control"
              id="title"
              placeholder="Enter published"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Publisher</label>
            <input
              type="text"
              name="publisher"
              className="form-control"
              id="title"
              placeholder="Enter publisher"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Pages</label>
            <input
              type="text"
              name="pages"
              className="form-control"
              id="title"
              placeholder="Enter pages"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              name="description"
              className="form-control"
              id="title"
              placeholder="Enter description"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Website</label>
            <input
              type="text"
              name="website"
              className="form-control"
              id="title"
              placeholder="Enter website"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="price"
              className="form-control"
              id="price"
              placeholder="Enter price"
              onChange={this.onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <h4>Your Books</h4>
      </div>
    );
  }
}

export default AddNewBook;
