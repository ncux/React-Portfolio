import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import avatar from '../assets/images/me.png';

export default class Home extends Component {

    render() {

        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={ avatar } alt="Avatar" className="avatar" />

                        <div className="banner">
                            <h1>Front End Web Developer</h1>
                            <hr />
                            <p>HTML & CSS | JavaScript | React | Node.js + Express | MongoDB + Mongoose | Git Version Control |  Linux CLI</p>

                            <div className="social-links">
                                <a href="https://youtube.com" target="_blank"  rel="noopener noreferrer">
                                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                                </a>
                                <a href="https://github.com/ncux" target="_blank"  rel="noopener noreferrer">
                                    <i className="fab fa-github" aria-hidden="true"></i>
                                </a>
                                <a href="https://youtube.com" target="_blank"  rel="noopener noreferrer">
                                    <i className="fab fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a href="https://youtube.com" target="_blank"  rel="noopener noreferrer">
                                    <i className="fab fa-youtube" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}
