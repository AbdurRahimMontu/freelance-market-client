import React from 'react';
import Banner from '../Components/Banner';
import LatestJobs from '../Components/LatestJobs';
import TopCategories from '../Components/TopCategories';
import ClientComment from '../Components/ClientComment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestJobs></LatestJobs>
            <TopCategories></TopCategories>
            <ClientComment></ClientComment>
        </div>
    );
};

export default Home;