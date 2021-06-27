import React, { useState } from "react";
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';
import { Container, Menu } from "semantic-ui-react";
import FavoritesSummary from "./FavoritesSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const {favoritesItems} = useSelector(state => state.favorites)
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();


  function handleSignOut(params) {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn(params) {
    setIsAuthenticated(true)   
  }

  return (

    <div>
      <Menu size="large" inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            {favoritesItems.length>0&&<FavoritesSummary/>}
            {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
