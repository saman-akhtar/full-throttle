import React, { Component } from 'react';
import appData from '../data/data.json';
import DashboardItem from './DashboardItem';

class Dashboard extends Component {
    constructor() {
        
        super();
        this.state = {
            items: appData
        };
    }

    render() {
        return <div className="container-fluid">
            <div className="row">
            {
                this.state.items.members.map(e => {
                    return <div className="col-md-3">
                        <DashboardItem person={e}></DashboardItem>
                    </div>
                })
            }
            </div>
        </div>
    }
}
export default Dashboard; 