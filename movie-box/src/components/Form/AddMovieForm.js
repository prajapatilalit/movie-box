import React, { Component } from "react";

class AddMovieForm extends Component {
  state = {
    Title: "",
    Poster: null,
  };

  fileHandleChange = (e) => {
    const currentFile = e.target.files[0];
    this.setState({
      Poster: URL.createObjectURL(currentFile),
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { Title, Poster } = this.state;
    const newMovie = {
      Title: Title,
      Poster: Poster,
    };
    const movieList = this.props.onAdd(newMovie);
    this.setState({
      Title: "",
      Poster: null,
      movieList: movieList,
    });
  };
  render() {
    return (
      <div className="form_box">
        <form onSubmit={this.handleFormSubmit}>
          <h2>Add Movie Here</h2>
          <input
            type="text"
            placeholder="Title"
            name="Title"
            onChange={(e) => this.setState({ Title: e.target.value })}
          />
          <input
            type="file"
            name="Poster"
            accept="/*"
            onChange={this.fileHandleChange}
          />
          <button className="btn">Upload</button>
        </form>
      </div>
    );
  }
}

export default AddMovieForm;
