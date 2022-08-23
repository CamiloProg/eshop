import React from 'react';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import ProductList from '../containers/ProductList';

const Home = () => {
    return (
        <>
        <Header />
        <ProductList />
        </>
    );
}

export default Home;