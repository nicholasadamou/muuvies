import React, { Component } from 'react';

import {
    Link
} from 'react-router-dom';

import styled from 'styled-components';

import Posters from '../components/Posters.js';

const Container = styled.div`
    a {
        text-decoration: none;
    }
`;

const Search = styled.span`
    font-size: 42px;
`;

class Results extends Component {
    render() {
        return(
            <Container>
                <Link to="/">
                    <Search role="img" aria-label="search">🔍</Search>
                </Link>
                <Posters movies={this.props.location.state.data} />
            </Container>
        )
    }
}

export default Results;