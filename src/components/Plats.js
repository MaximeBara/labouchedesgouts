import React from 'react';
import axios from 'axios';


export default class Plats extends React.Component {

    constructor() {
        super();
        this.state = { plats: [] };
    }

    componentWillMount() {
        axios.get('http://10.115.21.250:3000/plat')
            .then(res => {
                this.setState({
                    plats: res.data
                });
            });
    }

    render() {
        const { plats } = this.state;
        const length = plats.length;
        var iteration = 0;
        return (
            <div class='centerSection'>
                <div class='rectangle'>
                    {
                        plats.map(plat => {
                            const { nom, descr, prix } = plat;
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
