import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { propOr } from 'ramda';

import Search from '../components/Search.js';
import Posters from '../components/Posters.js';

import OMDb from '../OMDb/OMDb.json';

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;

    a {
        text-decoration: none;
    }

    a > span {
        font-size: 42px;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Error = styled.p`
    font-size: 14px;
    font-family: Roboto sans-serif;
    color: red;
`;

const Text = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85vh;

    font-size: 24px;
    font-family: Roboto sans-serif;
    color: grey;
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
        <div>
            <Header>
                <Link to="/">
                    <span role="img" aria-label="search">🍿</span>
                </Link>
                <Container>
                    <Search search={this.search} />
                    {this.state.error ? <Error><span role="img" aria-label="error" style={{marginRight: 2 + 'px'}}>⚠️</span>{this.state.error}</Error> : null}
                </Container>
            </Header>
            {this.state.movies.length > 0
                ? <Posters movies={this.state.movies} />
                : <Text><span role="img" aria-label="search" style={{marginRight: 5 + 'px'}}>🔎</span>Nothing to show here.</Text>
            }
        </div>
      );
    }
  }

export default Muuvies;
