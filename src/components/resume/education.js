import React, { Component } from 'react';

export default class Education extends Component {

    render() {

        return (

            <div className="four card mt-3 ml-5 mr-0 pb-0 mb-0">
                <h6 className="mt-0 text-info text-center mb-2">Education</h6>
                <ul className="ml-5 card-body p-0 mb-2">
                    <li>
                        <p className="mb-0 p-0">
                            Master of Engineering (Zhejiang Sci-Tech University, Hangzhou, China, 2015)
                        </p>
                    </li>
                    <li>
                        <p className="mb-0 p-0">
                            Bachelor of Technology Honours Degree (National University of
                            Science and Technology, Bulawayo, Zimbabwe, 2011)
                        </p>

                        <p className="mt-0 mb-0 italize">Relevant courses:</p>
                        <ul className="mt-0 mb-0 pb-0">
                            <li className="mb-0 pb-0 p-0 mt-0">Introduction to Computer Science and Programming</li>
                            <li className="mb-0 pb-0 p-0 mt-0">Software Engineering and Computer Engineering</li>
                        </ul>
                    </li>
                </ul>
            </div>

        )
    }
}