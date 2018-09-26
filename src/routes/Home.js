import React, { Component } from 'react';

import styled from 'styled-components';

import tmdb from '../images/tmdb.js';

import OMDb from '../OMDb/OMDb.json';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Logo = styled.img`
    width: 80px;
    height: 80px;
    margin-right: 20px;
`;

const OMDB_API_KEY = OMDb.API_KEY;

class Home extends Component {
    render() {
      return (
        <Container>
            <Row>
                <Logo src={tmdb} />
                <p>API Key: {OMDB_API_KEY}</p>
            </Row>
        </Container>
      );
    }
  }

export default Home;
