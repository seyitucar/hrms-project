import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Checkbox, Menu } from 'semantic-ui-react'
import CityService from '../services/cityService'
import { filterAdvertsByCity } from '../store/actions/filterActions'


function VerticalFilter(props) {

    const [cities, setCities] = useState([])
    const [cityIndex, setCityIndex] = useState([])
    const dispatch = useDispatch()

    const cityOptions = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city.id
    }))

     //Güzel bir search fonksiyonu
    // const filterItems = (array, query) => array.filter(item =>
    //     item.city.cityName.toLocaleLowerCase('tr').includes(query.toLocaleLowerCase('tr')))

    // console.log(filterItems(jobAdvertisements, "iz"))

    useEffect(() => {
        let cityService = new CityService();
        cityService.getAll().then(result => setCities(result.data.data));
    }, [])


    const handleFilters = (value) => {

        const currentIndex = cityIndex.indexOf(value);
        const newCheck = [...cityIndex]

        if (currentIndex === -1) {
            newCheck.push(value);
        } else {
            newCheck.splice(currentIndex, 1)
        }

        setCityIndex(newCheck);
        console.log(newCheck);
        dispatch(filterAdvertsByCity(newCheck))
    }


    // const onClickEvent = () => {
    //    let filteredBew = props.jobAdvertisements.filter(jobAdvertisement => cityIndex.some(cityFilter =>jobAdvertisement.city.cityName === cityFilter))
    //     console.log("filteredBew",filteredBew)
    // }

    return (
        <Menu vertical>
            <Menu.Item>
                <Menu.Header>Şehir Seçiniz</Menu.Header>
                {cityOptions.map(city => (
                    <Menu.Menu key={city.key}>
                        <Checkbox
                            onChange={() => handleFilters(city.text)}
                            type="checkbox" label={city.text}
                            style={{ margin: "0.3em" }}
                            checked={cityIndex.indexOf(city.text) === -1 ? false : true}
                        />
                    </Menu.Menu>
                ))}
            </Menu.Item>

            <Menu.Item>
                <Menu.Header>Hosting</Menu.Header>

                <Menu.Menu>
                    <Menu.Item
                        name='shared'
                    // active={activeItem === 'shared'}
                    // onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='dedicated'
                    // active={activeItem === 'dedicated'}
                    // onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
                <Menu.Header>Support</Menu.Header>

                <Menu.Menu>
                    <Menu.Item
                        name='email'
                    // active={activeItem === 'email'}
                    // onClick={this.handleItemClick}
                    >
                        E-mail Support
            </Menu.Item>

                    <Menu.Item
                        name='faq'
                    // active={activeItem === 'faq'}
                    // onClick={this.handleItemClick}
                    >
                        FAQs
            </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
        </Menu>
    )
}

export default VerticalFilter
