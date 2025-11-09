import React from 'react';
import Banner from '../Components/Banner';
import LatestJobs from '../Components/LatestJobs';
import TopCategories from '../Components/TopCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestJobs></LatestJobs>
            <TopCategories></TopCategories>
        </div>
    );
};

export default Home;