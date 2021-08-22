import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Dropdown } from "semantic-ui-react";

export default function FavoritesSummary() {

    const {favoritesItems} = useSelector(state => state.favorites)

    console.log(favoritesItems)

    return (
        <div>
            <Dropdown item text="Favoriler">
                <Dropdown.Menu>
                    {
                        favoritesItems.map((favoritesItem)=>(
                            <Dropdown.Item key={favoritesItem.jobAdvertisement.id} >{favoritesItem.jobAdvertisement.jobTitle.titleName} </Dropdown.Item>
                        ))
                    }                   
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/favoriteList">Favorilere Git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
