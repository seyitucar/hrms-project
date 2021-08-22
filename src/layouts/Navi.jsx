import React, { useState } from "react";
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';
import { Container, Menu } from "semantic-ui-react";
import FavoritesSummary from "./FavoritesSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { Link } from 'react-router-dom';

export default function Navi() {
  const { favoritesItems } = useSelector(state => state.favorites)
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
          <Menu.Item name="Home" ><Link to={`/`}>Home</Link></Menu.Item>
          <Menu.Item name="Kullanıcılar"><Link to={`/allUsers`}>Kullanıcılar</Link></Menu.Item>
          <Menu.Item name="Cv"><Link to={`/resumeDetail/4`}>CV</Link></Menu.Item>
          <Menu.Item name="Favori İlanlar" ><Link to={`/favoriteList`}>Favori İlanlar</Link></Menu.Item>
          <Menu.Menu position="right">
            {favoritesItems.length > 0 && <FavoritesSummary />}
            {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
