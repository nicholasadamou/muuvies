import React, { Component } from 'react';

import styled from 'styled-components';
import { path } from 'ramda';

const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
		width: 100%;
`;

const StyledSearch = styled.input`
    outline: none;
    border: none;

		border-bottom: 2px solid #dadada;
		border-radius: none;

    height: 50px;
    width: 40vw;
    margin-top: 20px;

    font-size: 32px;
    font-family: 'Roboto', sans-serif;
    color: #dadada;

		caret-color: black;

		@media (max-width: 500px) {
			width: 100%;
			font-size: 24px;
		}

    :focus {
      border-bottom: 2px solid black;
    }

    ::placeholder {
      font-size: 32px;
      font-family: 'Roboto', sans-serif;
      color: #dadada;

			@media (max-width: 500px) {
				font-size: 24px;
			}
    }
`;

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
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
    this.setState({ query: '' });
  }

  render () {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
				<StyledSearch
						id="query"
						type="text"
            name="query"
            placeholder="Search for Muuvies."
            value={path(['state', 'query'], this)}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus={true}
        />
      </StyledForm>
    )
  }
}

export default SearchBox;
