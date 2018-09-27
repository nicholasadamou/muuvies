import React, { Component } from 'react';

import styled from 'styled-components';
import { propOr } from 'ramda';

import Search from '../components/Search.js';
import Posters from '../components/Posters.js';

import OMDb from '../OMDb/OMDb.json';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`;

const SearchWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 20px;
`;

const Error = styled.p`
    position: absolute;
    left: 0;
    bottom: -50px;

    font-size: 14px;
    font-family: Roboto sans-serif;
    color: red;
`;

const Logo = styled.span`
    font-size: 42px;
    margin-bottom: -25px;
`;

const OMDB_API_KEY = OMDb.API_KEY;

class Muuvies extends Component {
    constructor() {
        super();

        this.state ={
            movies: [],
            error: "",
            searchedFor: "",
        };

        this.search = this.search.bind(this);
    }

    search ({searchText}) {
        fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${searchText}&type=movie`)
          .then(res => res.json())
          .then(res => {
            return res;
        }).then(json => this.setState({
            searchedFor: searchText,
            movies: propOr([], 'Search', json),
            error: json.Error
        })).catch(err => this.setState({
              error: 'Error Occurred: Try Again',
              movies: [],
              searchedFor: ''
        }));
    }

    render() {
      return (
        <Container>
            <Logo role="img" aria-label="search">🍿</Logo>
            <SearchWrapper>
                <Search search={this.search} />
                {this.state.error ? <Error><span role="img" aria-label="error" style={{marginRight: 2 + 'px'}}>⚠️</span>{this.state.error}</Error> : null}
            </SearchWrapper>
        </Container>
      );
    }
  }

export default Muuvies;
