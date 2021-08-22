import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Dropdown, Grid } from 'semantic-ui-react'
import CityService from '../services/cityService'
import WorkingPlaceService from '../services/workingPlaceService'
import WorkingTypeService from '../services/workingTypeService'
import { filterAdvertsByCity, filterAdvertsByWorkingPlace, filterAdvertsByWorkingType } from '../store/actions/filterActions'

function HrmsFilter() {

    const [cities, setCities] = useState([])
    const [workingPlaces, setWorkingPlaces] = useState([])
    const [workingTypes, setWorkingTypes] = useState([])

    const dispatch = useDispatch()

    const cityOptions = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city.cityName
    }))

    const workingPlaceOptions = workingPlaces.map((workingPlace, index) => ({
        key: index,
        text: workingPlace.workingPlaceName,
        value: workingPlace.workingPlaceName
    }))

    const workingTypeOptions = workingTypes.map((workingType, index) => ({
        key: index,
        text: workingType.workingTypeName,
        value: workingType.workingTypeName
    }))

    useEffect(() => {
        let cityService = new CityService();
        cityService.getAll().then(result => setCities(result.data.data));

        let workingPlace = new WorkingPlaceService();
        workingPlace.getAll().then(result => setWorkingPlaces(result.data.data))

        let workingType = new WorkingTypeService();
        workingType.getAll().then(result => setWorkingTypes(result.data.data))

    }, [])

    const handleCityChange = (e, data) => {
        dispatch(filterAdvertsByCity(data.value.length > 0 ? data.value : cities.map(city => city.cityName)))
        console.log("datavalue", data.value)
    }

    const handleWorkingPlaceChange = (e, data) => {
        dispatch(filterAdvertsByWorkingPlace(data.value.length > 0 ? data.value : workingPlaces.map(workingPlace => workingPlace.workingPlaceName)))
        console.log("datavalue", data.value)
    }

    const handleWorkingTypeChange = (e, data) => {
        dispatch(filterAdvertsByWorkingType(data.value.length > 0 ? data.value : workingTypes.map(workingType => workingType.workingTypeName)))
        console.log("datavalue", data.value)
    }

    return (

        <div>
            <Grid>
                <Grid.Row >
                    <Grid.Column width={4}>
                        <Dropdown onChange={handleCityChange} placeholder='Lokasyon' fluid selection multiple options={cityOptions} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Dropdown onChange={handleWorkingPlaceChange} placeholder='Çalışma Yeri' fluid multiple selection options={workingPlaceOptions} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Dropdown onChange={handleWorkingTypeChange} placeholder='Çalışma Tipi' fluid multiple selection options={workingTypeOptions} />
                    </Grid.Column>
                </Grid.Row>
            </Grid >
        </div>
    )
}

export default HrmsFilter;
