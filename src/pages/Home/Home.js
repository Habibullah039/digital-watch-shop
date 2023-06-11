import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import Blog from './Blog';
import NewsLetter from './NewsLetter';
import Store from './Store';
import Time from './Time';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Banner2></Banner2>
            <Store></Store>
            <Time></Time>
            <Blog></Blog>
            <NewsLetter></NewsLetter>
            
           
        </div>
    );
};

export default Home;