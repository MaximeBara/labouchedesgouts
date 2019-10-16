import React from 'react';
import axios from 'axios';

export default class Menus extends React.Component {

    constructor() {
        super();
        this.state = { menus: [] };
    }

    componentWillMount() {
        axios.get('https://labouchedesgouts-api.herokuapp.com/menu?asc')
            .then(res => {
                this.setState({
                    menus: res.data
                });
            });
    }

    render() {
        const { menus } = this.state;
        return (
            <div class='centerSection'>
                <div class='rectangle'>
                    {menus.map(menu => {
                        const { nom_entree, nom_plat, nom_dessert, prix_menu } = menu;
                        return (
                            <div class='item cestlapolice'>
                            <h3>Menu à {prix_menu}€</h3>
                            <hr class='hrStyle'></hr>
                            {nom_entree}<br/>
                            {nom_plat}<br/>
                            {nom_dessert}</div>
                        )
                    })}
                </div>
            </div>
        );

    }
}
