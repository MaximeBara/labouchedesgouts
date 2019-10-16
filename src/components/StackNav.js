import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class StackNav extends React.Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link className="cestlapolice" href="/">Accueil</Nav.Link>
                    <Nav.Link className="cestlapolice" href="/entrees">Entrées</Nav.Link>
                    <Nav.Link className="cestlapolice" href="/plats">Plats</Nav.Link>
                    <Nav.Link className="cestlapolice" href="/desserts">Desserts</Nav.Link>
                </Nav>
                <div class='title'>La bouche des goûts</div>
            </Navbar>
        );

    }
}
