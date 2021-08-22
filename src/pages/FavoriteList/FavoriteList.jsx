import React, { useEffect, useState } from 'react'
import CustomPagination from '../../layouts/CustomPagination';
import FavoriteJobService from '../../services/favoriteJobService';
import JobAdvertisement from '../JobAdvertisement/JobAdvertisement';

function FavoriteList() {

    const [favoriteJobs, setFavoriteJobs] = useState([])

    useEffect(() => {
        let favoriteJobService = new FavoriteJobService();
        favoriteJobService.getByEmployeeId(7).then(result => setFavoriteJobs(result.data.data))
    }, [])

    const favoriteList = favoriteJobs.map(favoriteJob => (
        <JobAdvertisement key={favoriteJob.id} jobAdvertisement={favoriteJob.jobAdvertisement}></JobAdvertisement>
    ))

    return (
        <div>
            <CustomPagination displayItem ={favoriteList}/>
        </div>
    )
}

export default FavoriteList
