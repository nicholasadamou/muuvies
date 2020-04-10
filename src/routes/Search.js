import React, { Component } from 'react';

import {
    withRouter,
    Redirect
} from 'react-router-dom';

import styled from 'styled-components';
import { propOr } from 'ramda';

import SearchBox from '../components/SearchBox.js';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;

	@media (max-width: 500px) {
		height: 100vh;
		padding: 0 20px;
	}

	span {
		font-size: 42px;
		margin-bottom: -25px;

		@media (max-width: 500px) {
			font-size: 32px;
			margin-bottom: -45px;
		}
	}
`;

const SearchWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 20px;

	span {
		margin-right: 2px;
		font-size: 20px;
	}
`;

const Error = styled.p`
    position: absolute;
    left: 0;
    bottom: -50px;

    font-size: 14px;
    font-family: Roboto sans-serif;
    color: red;

	@media (max-width: 500px) {
		span {
			font-size: 16px;
		}
	}
`;

class Search extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            query: "",
            error: "",
        };

        this.search = this.search.bind(this);
    }

    search({query}) {
        fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}&type=movie`)
        .then(res => res.json())
        .then(res => {
            return res;
        }).then(json => {
			this.setState({
				query: query.toLowerCase(),
				data: propOr([], 'Search', json),
				error: json.Error
			}, () => {
				if (!this.state.error && this.state.data.length > 0) this.props.history.push("/search?s=" + query.toLowerCase(), { data: this.state.data });
			});
        }).catch(err => this.setState({
            error: 'Error Occurred: Try Again.',
            data: [],
            query: ''
        }));
    }


    render() {
        if (!this.state.error && this.state.data.length > 0) {
            return <Redirect to={{ pathname: '/search', state: { data: this.state.data } }} />;
        } else {
            return (
                <Container>
                    <span role="img" aria-label="search">🔍</span>
                    <SearchWrapper>
                        <SearchBox search={this.search} />
                        {
                            this.state.error
							?
								<Error>
									<span role="img" aria-label="error">⚠️</span>
									{this.state.error}
								</Error>
							: null
                        }
                    </SearchWrapper>
                </Container>
            );
        }
    }
  }

export default withRouter(Search);
