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

class Results extends Component {
    render() {
        return(
            <Container>
                <Link to="/">
                    <span role="img" aria-label="search" style={{ fontSize: 42 + 'px'}}>🔍</span>
                </Link>
                <Posters movies={this.props.location.state.data} />
            </Container>
        )
    }
}

export default Results;