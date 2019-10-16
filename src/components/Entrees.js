import React from 'react';
import axios from 'axios';


export default class Entrees extends React.Component {

    constructor() {
        super();
        this.state = { entrees: [] };
    }

    componentWillMount() {
        axios.get('http://labouchedesgouts-api.herokuapp.com/entree')
            .then(res => {
                this.setState({
                    entrees: res.data
                });
            });
    }

    render() {
        const { entrees } = this.state;
        const length = entrees.length;
        var iteration = 0;
        return (
            <div class='centerSection'>
                <div class='rectangle'>
                    {
                        entrees.map(entree => {
                            const { nom, descr, prix } = entree;
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
