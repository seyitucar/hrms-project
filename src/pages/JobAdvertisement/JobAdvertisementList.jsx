import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../../services/jobAdvertisementService'
import CustomPagination from '../../layouts/CustomPagination'
import HrmsFilter from '../../layouts/HrmsFilter';
import JobAdvertisement from './JobAdvertisement';
import { useSelector } from 'react-redux';
import CityService from '../../services/cityService';
import WorkingPlaceService from '../../services/workingPlaceService';
import WorkingTypeService from '../../services/workingTypeService';


function JobAdvertisementList() {

    const [jobAdvertisements, setJobAdvertisements] = useState([]);
    const { cityFilterItems } = useSelector(state => state.filter)
    const { workingTypeFilterItems } = useSelector(state => state.filter)
    const { workingPlaceFilterItems } = useSelector(state => state.filter)



    const [cities, setCities] = useState([]);
    const [workingPlaces, setWorkingPlaces] = useState([])
    const [workingTypes, setWorkingTypes] = useState([])

    useEffect(() => {
        let cityService = new CityService();
        cityService.getAll().then(result=>setCities(result.data.data));

        let workingPlace = new WorkingPlaceService();
        workingPlace.getAll().then(result => setWorkingPlaces(result.data.data))

        let workingType = new WorkingTypeService();
        workingType.getAll().then(result => setWorkingTypes(result.data.data))
    }, [])

    const allCities = cities.map(city=>city.cityName)
    const allWorkingPlaces = workingPlaces.map(workingPlace=>workingPlace.workingPlaceName)
    const allWorkingTypes = workingTypes.map(workingType=>workingType.workingTypeName)



    const newCity = cityFilterItems.length > 0 ? cityFilterItems[cityFilterItems.length -1] : allCities
    const newWorkingType = workingTypeFilterItems.length > 0 ? workingTypeFilterItems[workingTypeFilterItems.length -1] : allWorkingTypes
    const newWorkingPlace = workingPlaceFilterItems.length > 0 ? workingPlaceFilterItems[workingPlaceFilterItems.length -1] : allWorkingPlaces


    const displayJobs = jobAdvertisements
    .filter(jobAdvertisement=>newCity.some(nc=>jobAdvertisement.city.cityName === nc))
    .filter(jobAdvertisement=>newWorkingType.some(nwt=>jobAdvertisement.workingType.workingTypeName === nwt))
    .filter(jobAdvertisement=>newWorkingPlace.some(nwp=>jobAdvertisement.workingPlace.workingPlaceName === nwp))
    .map
        ((jobAdvertisement => {
            return (
                <div key={jobAdvertisement.id}>
                    <JobAdvertisement jobAdvertisement={jobAdvertisement}></JobAdvertisement>
                </div>
            )
        }));


    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getByIsActiveTrue().then(result => setJobAdvertisements(result.data.data));
    }, [])


    return (
        <div>
            <HrmsFilter/>
            <CustomPagination displayItem={displayJobs} />
        </div >
    )
}

export default JobAdvertisementList;

