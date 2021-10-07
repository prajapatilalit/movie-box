import React, { Component } from "react";

class AddMovieForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Title" name="title" />
          <input type="file" />
        </form>
      </div>
    );
  }
}

export default Form;
