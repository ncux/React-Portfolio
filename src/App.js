import React from 'react';
import { Link } from "react-router-dom";
import Main from './components/main';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import './App.css';

function App() {
  return (
    <div className="App">
        {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
        <div className="demo-big-content">
            <Layout>
                <Header title="Portfolio" scroll className="header-color">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/about">About me</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/about">About me</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Main>
                    <Content>
                        <div className="page-content" />
                    </Content>
                </Main>
            </Layout>
        </div>

    </div>
  );
}

export default App;
