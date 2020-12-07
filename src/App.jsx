import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

function App() {
    return (
        <Layout>
            <Header />
            <Banner />
            <Body />
            <Footer />
        </Layout>
    );
}

export default App;
