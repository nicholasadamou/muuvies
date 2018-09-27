import React, { Component } from 'react';

import styled from 'styled-components';
import { path } from 'ramda';

const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
`;

const StyledSearch = styled.input`
    outline: none;
    border: none;

    border-bottom: 1px solid #C1C1C1;

    height: 50px;
    width: 50vh;
    margin-top: 20px;

    font-size: 32px;
    font-family: Roboto sans-serif;
    font-style: italic;
`;

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.search(this.state);
    this.setState({ searchText: '' });
  }

  render () {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledSearch id="searchText" type="text"
            name="searchText"
            placeholder="Search for Muuvies."
            value={path(['state', 'searchText'], this)}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus={true}
        />
      </StyledForm>
    )
  }
}

export default Search;