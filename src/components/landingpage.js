import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="data:image/png;base64,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"
                            alt="avatar"
                            className="avatar-img" />

                        <div className="banner-text">
                            <h1>Januka Madushan Dharmapriya</h1>
                            <hr />
                            <p>HTML/CSS | Bootstrap | Python | JavaScript | React | PHP </p>

                            <div className="social-links">

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-google-plus-square" aria-hidden="true" />
                                </a>

                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;