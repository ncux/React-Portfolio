import React, { Component } from 'react';
import Header from "./header";
import ProfessionalTitle from './proffesional-title';
import Experience from "./experience";
import Skills from "./skills";
import Education from "./education";

export default class Resume extends Component {

    bodyStyle = {
        header: { backgroundColor: 'lightgray' },
        a: {
            textDecoration: 'none',
            textDecorationColor: 'aqua'
        }
    };

    render() {

        return (
            <div style={this.bodyStyle}>

                <Header />

                <ProfessionalTitle />

                <br />

                <Experience />

                <br />
                <br />

                <Skills />

                <br />

                <Education />

            </div>
        )
    }
}
