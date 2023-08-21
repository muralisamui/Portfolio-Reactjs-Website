import React, { Fragment } from 'react'
import DisplacementSphere from '../../components/DisplacementSphere/DisplacementSphere';
import SocialSideBar from '../../components/LeftSideBar/LeftSideBar';
import Footer from '../../components/Footer/Footer';
import Intro from './Intro/Intro';
import styles from './Home.module.css';
import About from './About/About';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';
import { NO_ABOUT, NO_PROJECTS } from "../../dev-env";

const Home = () => {
    return (
        <Fragment>
            <DisplacementSphere />
            <SocialSideBar />
            <main id="portfolio-main" className={styles.mainComponent}>
                <Intro />
                {NO_ABOUT ? null : <About />}
                <Experience />
                {NO_PROJECTS ? null : <Projects />}
                <Contact />
            </main>
            <Footer />
        </Fragment>
    )
}

export default Home;