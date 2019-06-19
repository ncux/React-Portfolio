import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import avatar from "../assets/images/me.png";

export default class Contact extends Component {

    state = {

    };

    render() {

        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Talent Malaba</h2>
                        <img src={ avatar } alt="Avatar" className="avatar" />
                        <p className="contact-text">
                            It's not exactly huge. Guy has been blamed for everything that went wrong in the revolution as part of the blowback and was mistreated for years.
                            At his age, that can take a toll.

                            If you really want to see Europe and are willing to leave your jobs behind anyway, it may be smarter to take a month or two off work and just travel Europe.
                            You’d obviously need money to do so, but you’ve got a year or two to save. Work remotely if you can and if not then just go unpaid and take a trip of a lifetime.
                            If you still really want to leave, then seriously look for jobs.
                        </p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent className="ListItemContent">
                                        <i className="fas fa-phone"></i> +(86) 188 8897 2045
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="ListItemContent">
                                        <i className="fab fa-weixin"></i> WeChat ID: Pathington
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="ListItemContent">
                                        <i className="fas fa-envelope"></i> <a href="mailto:malabatalent@gmail.com">malabatalent@gmail.com</a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="ListItemContent">
                                        <i className="fab fa-skype"></i> Skype ID: malabamodel@live.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}
