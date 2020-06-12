import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //submit form

    //This is something that's super wrong rn.
    this.props.onSubmit({
      text: this.state.text,
      complete: false,
      id: Math.random(),
    });
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='text'
          value={this.state.text}
          onChange={this.handleChange}
          placeholder='Todo...'
        />
        <button onClick={this.handleSubmit}>Add Todo</button>
      </form>
    );
  }
}
