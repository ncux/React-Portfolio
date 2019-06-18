import React, { Component } from 'react';
import ReactLogo from '../assets/images/react.jpg';
import AngularLogo from '../assets/images/angular.png';
import html5css3 from '../assets/images/HTML5-CSS3.png';
import nodeExpress from '../assets/images/node+express.png';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from "react-mdl";

export default class Projects extends Component {

    state = {
        activeTab: 0
    };

    toggleCategories = () => {

        switch(this.state.activeTab) {
            case 0:
                return (
                    <div className="projects-grid">
                        <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                            <CardTitle style={{color: 'blue', height: '176px', background: `url(${ReactLogo}) center/cover`}}>
                                React Project 1
                            </CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub repo</Button>
                                <Button colored>Active site</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                            <CardTitle style={{color: 'blue', height: '176px', background: `url(${ReactLogo}) center/cover`}}>
                                React Project 2
                            </CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub repo</Button>
                                <Button colored>Active site</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                            <CardTitle style={{color: 'blue', height: '176px', background: `url(${ReactLogo}) center/cover`}}>
                                React Project 3
                            </CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub repo</Button>
                                <Button colored>Active site</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>

                );
            case 1:
                return (
                    <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: `url(${nodeExpress}) center/cover`}}>
                            Node.js Project
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub repo</Button>
                            <Button colored>Active site</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                );
            case 2:
                return (
                    <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: 'red', height: '176px', background: `url(${AngularLogo}) center/cover`}}>
                            Angular Project
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub repo</Button>
                            <Button colored>Active site</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                );
            case 3:
                return (
                    <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: 'lightblue', height: '176px', background: `url(${html5css3}) center/cover`}}>
                            Responsive Project
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub repo</Button>
                            <Button colored>Active site</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                );
            default:
                return (
                    <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: 'lightblue', height: '176px', background: `url(${ReactLogo}) center/cover`}}>
                            React Project
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub repo</Button>
                            <Button colored>Active site</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                );
        }
    };

    render() {

        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={ tabId => this.setState({ activeTab: tabId }) } ripple>
                    <Tab>React</Tab>
                    <Tab>Node.js</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Responsive</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                { this.toggleCategories() }
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}
