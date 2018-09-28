import React, { Component } from 'react';

import {
    Link
} from 'react-router-dom';

import styled from 'styled-components';

import OMDb from '../OMDb/OMDb.json';

const Container = styled.div`
    margin: 25px;

    #search {
        text-decoration: none;
    }

    #search > span {
        margin: 10px;
    }
`;

const MovieWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;

    #details-wrapper {
        flex-direction: column;
        margin-left: 25px;

        .imdb-link {
            color: black;
        }
    }

    margin-top: 25px;

    font-family: 'Roboto', sans-serif;

    img {
        width: 25%;
    }

    h1, h2 {
        margin: 18px 0;

        :first-child {
            margin-top: 0;
        }
    }

    .title-wrapper {
        display: flex;
        flex-direction: row;

        .title {
            margin-bottom: 10px;

            font-size: 32px;
        }

        .year {
            margin-left: 5px;
            color: #BBBBBB;
            font-size: 32px;
            font-weight: 300;
        }
    }

    #meta-wrapper {
        color: #BBB;

        .seperator {
            position: relative;
            bottom: 2px;

            margin: 0 5px;

            font-size: 12px;
        }
    }

    .overview {
        font-size: 24px;
    }

    .plot {
        width: 45%;
        line-height: 2;
    }

    .list > span {
        font-weight: bold;
    }

    .link {
        color: black;
    }
`;

const OMDB_API_KEY = OMDb.API_KEY;

class Movie extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
        };
    }

    componentWillMount() {
        const movie = this.props.location.state.movie;

        fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${movie.imdbID}&type=movie`)
            .then(res => res.json())
            .then(res => {
                return res;
            }).then(json => {
                this.setState({
                    data: json,
                });
            }).catch(err => this.setState({
                error: 'Error Occurred: Try Again',
                data: [],
                query: ''
            }));
    }

    render() {
        const movie = this.props.location.state.movie;
        const movieMeta = this.state.data;

        return(
            <Container>
                <Link to="/" id="search">
                    <span role="img" aria-label="search" style={{ fontSize: 42 + 'px' }}>🔍</span>
                </Link>
                <MovieWrapper>
                    <img key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
                    <div id="details-wrapper">
                        <div class="title-wrapper">
                            <a href={'https://www.imdb.com/title/' + movie.imdbID + '/'} class="imdb-link" target="_blank">
                                <h1 class="title">
                                    {movie.Title}
                                </h1>
                            </a>
                            <span class="year"> ({movie.Year})</span>
                        </div>
                        <div id="meta-wrapper">
                        <span role="img" aria-label="popcorn">🍿</span>
                            <span class="seperator">|</span>
                            <span class="rated">{movieMeta.Rated}</span>
                            <span class="seperator">|</span>
                            <span class="Runtime">{movieMeta.Runtime}</span>
                            <span class="seperator">|</span>
                            <span class="Genre">{movieMeta.Genre}</span>
                            <span class="seperator">|</span>
                            <span class="Boxoffice">{movieMeta.BoxOffice}</span>
                            <span class="seperator">|</span>
                            <span class="Released">{movieMeta.Released} ({movieMeta.Country})</span>
                        </div>
                        <h2 class="overview">
                            Overview
                        </h2>
                        <p class="plot">{movieMeta.Plot}</p>
                        <p class="list"><span><span role="img" aria-label="Directors">🎬</span>Directors:</span> {movieMeta.Director}</p>
                        <p class="list"><span><span role="img" aria-label="actors">🎭</span> Actors:</span> {movieMeta.Actors}</p>
                        <p class="list"><span><span role="img" aria-label="awards">🏆</span>Awards:</span> {movieMeta.Awards}</p>
                        <p class="list">
                            <span>
                                <span role="img" aria-label="star">🌟</span>
                                <a href={'https://www.imdb.com/title/' + movie.imdbID + '/criticreviews?ref_=tt_ov_rt'} class="link" target="_blank">Metascore</a>
                                :
                            </span> {movieMeta.Metascore}/100
                        </p>
                        <p class="list">
                            <span>
                                <span role="img" aria-label="star">🌟</span>
                                <a href={'https://www.imdb.com/title/' + movie.imdbID + '/ratings?ref_=tt_ov_rt'} class="link" target="_blank">IMDb Rating</a>
                                :
                            </span> {movieMeta.imdbRating}/100 with {movieMeta.imdbVotes} votes
                        </p>
                    </div>
                </MovieWrapper>
            </Container>
        )
    }
}

export default Movie;