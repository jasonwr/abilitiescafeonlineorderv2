import React from 'react';
import { Navbar, Icon, NavItem, Container } from 'react-materialize';
import { firebaseDB } from '../../firebase';

export default () => {
    return (
        <div style={{ background: 'royalblue' }}>
            <Container>
                <Navbar
                    alignLinks="left"
                    brand={<a className="brand-logo" href="#">Logo</a>}
                    centerLogo
                    id="mobile-nav"
                    className="custom-navbar"
                    menuIcon={<Icon>menu</Icon>}
                    options={{
                        draggable: true,
                        edge: 'left',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                        preventScrolling: true
                    }}
                    >
                    <NavItem 
                        href="components.html" 
                        onClick={event => {
                            // prevent page reload on logout
                            event.preventDefault();
                            firebaseDB.auth().signOut();
                            }}
                    >
                        Log Out
                    </NavItem>
                </Navbar>
            </Container>
        </div>
    )
}