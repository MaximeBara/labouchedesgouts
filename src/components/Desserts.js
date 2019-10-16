import React from 'react';
import axios from 'axios';


export default class Desserts extends React.Component {

    constructor() {
        super();
        this.state = { desserts: [] };
    }

    componentWillMount() {
        axios.get('http://10.115.21.250:3000/dessert')
            .then(res => {
                this.setState({
                    desserts: res.data
                });
            });
    }

    render() {
        const { desserts } = this.state;
        const length = desserts.length;
        var iteration = 0;
        return (
            <div class='centerSection'>
                <div class='rectangle'>
                    {
                        desserts.map(dessert => {
                            const { nom, descr, prix } = dessert;
                            iteration++;
                            return (
                                <div class='item cestlapolice'>
                                {nom}<br/>
                                {descr}<br/>
                                {prix}€<br/>
                                {iteration !== length && <hr class='hrStyle'></hr>}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );

    }
}
