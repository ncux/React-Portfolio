import React, { Component } from 'react';

export default class Header extends Component {

    render() {

        return (
            <header style={{color: 'black'}} className="one p-0 mb-1 ml-5 text-center mt-0">
                <h5 className="mb-0"><i className="fas fa-user text-info"></i> Talent Malaba</h5>
                <div>
                    <p className="p-0">
                        <i className="fa fa-map-marker text-info" aria-hidden="false"></i> Shanghai, China <br />
                        <i className="fa fa-mobile text-info"></i> (+86) 188 8897 2045 <br />
                        <i className="fa fa-envelope text-info" style={{color: 'black'}}></i>
                        <span> <a className="text-info">malabatalent@gmail.com</a> </span> <br />
                        <a className="text-info">
                            <span style={{textDecoration: 'none'}} className="text-info">Skype ID: </span>
                            malabamodel
                        </a> <br />
                        <span>GitHub  <i className="fab fa-github"></i> <b>(ncux) </b></span>
                        <a href="https://github.com/ncux" target="_blank">https://github.com/ncux</a>
                    </p>
                </div>
            </header>
        )
    }
}