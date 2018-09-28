import React, { Component } from 'react';

import {
    withRouter,
    Redirect
} from 'react-router-dom';

import styled from 'styled-components';
import { propOr } from 'ramda';

import SearchBox from '../components/SearchBox.js';

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

const OMDB_API_KEY = OMDb.API_KEY;

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
        fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}&type=movie`)
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
            error: 'Error Occurred: Try Again',
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
                    <span role="img" aria-label="search" style={{ fontSize: 42 + 'px', marginBottom: -25 + 'px' }}>🔍</span>
                    <SearchWrapper>
                        <SearchBox search={this.search} />
                        {
                            this.state.error
                            ? <Error><span role="img" aria-label="error" style={{marginRight: 2 + 'px'}}>⚠️</span>{this.state.error}</Error>
                            : null
                        }
                    </SearchWrapper>
                </Container>
            );
        }
    }
  }

export default withRouter(Search);
