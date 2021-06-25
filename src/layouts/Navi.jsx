import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Container, Dropdown, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  
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
            <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item>Sepete Git</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
