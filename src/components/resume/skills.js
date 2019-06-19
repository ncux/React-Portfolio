import React, { Component } from 'react';

export default class Skills extends Component {

    render() {

        return (

            <div className="three card mt-1 ml-5 mr-0 mb-2">
                <h6 className="resume mt-0 text-info text-center mb-2">Skills & Knowledge</h6>
                <ul className="ml-5 card-body p-0 mb-2">
                    <li className="p-0 my-0"><span>Proficient in HTML5 & CSS3</span></li>
                    <li className="p-0 my-0">
                        <span>JavaScript</span> | DOM manipulation, events handling and
                        asynchronous programming | familiar with the ES2015 and ES2017 specs
                    </li>
                    <li className="p-0 my-0">
                        <span>React <i className="fab fa-react" style={{color: 'purple'}}></i></span> | possess hands-on
                        experience with the library | can incorporate Redux to manage state
                    </li>
                    <li className="p-0 my-0">
                        <span>Angular <i className="fab fa-angular" style={{color: 'red'}}></i></span> | comfortable with
                        TypeScript and OOP | familiar with the Angular CLI
                    </li>
                    <li className="p-0 my-0">
                        <span>Node.js + Express</span> | Express server setup and router
                        configuration | authentication with JWT
                    </li>
                    <li className="p-0 my-0"><span>MongoDB + Mongoose</span> | creating data models and connecting
                        to a MongoDB | use GridFS for large files
                    </li>
                    <li className="p-0 my-0"><span>Relational databases: MySQL and PostgreSQL</span></li>
                    <li className="p-1 my-0"><span>Familiar with basic Linux CLI commands</span> | directory and
                        file operations with commands such as <span className="resume code">pwd</span>, <span
                            className="resume code">cd</span>, <span className="resume code">ls</span>, <span
                            className="resume code">cp</span>, <span className="resume code">mv</span></li>
                    <li className="p-0 my-0"><span>Git version control</span> | know the basic commands of the git
                        CLI: <span className="code">pull,</span> <span className="code">push,</span> <span
                            className="code">add,</span> <span className="code">status,</span> <span
                            className="code">commit,</span> <span className="code">config</span></li>
                    <li className="p-0 my-0"><span>Familiar with Flexbox and CSS Grid </span> | incorporated into
                        most of my web projects
                    </li>
                    <li className="p-0 my-0"><span>Progressive web apps (<em>PWAs</em>)</span> | familiar with PWAs
                        | can create <em>service worker(s)</em> to turn an Angular app into a PWA
                    </li>
                </ul>
            </div>

        )
    }
}