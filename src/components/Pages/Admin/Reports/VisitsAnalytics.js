import React, { Component } from 'react';
import ProgressBar from '../ProgressBar';

class VisitsAnalytics extends Component {

    render() {

        return (
            <div>
                <div className="title mb-4">
                    <h5 className="title-left">Number of Visits</h5>
                    <span className="title-right">Jan 2017 - Aug 2017</span>
                </div>

                <ProgressBar value={73} barColor={'#3A3A60'} backgroundBarColor={'#ebebee'} title={ '75 Spinka Parkwavs'} subtitle={'32'} strokeWidth={1.5} trailWidth={1.5} />
                <ProgressBar value={64} barColor={'#3A3A60'} backgroundBarColor={'#ebebee'} title={ '75 Spinka Parkwavs'} subtitle={'12'} strokeWidth={1.5} trailWidth={1.5} />
                <ProgressBar value={52} barColor={'#3A3A60'} backgroundBarColor={'#ebebee'} title={ '75 Spinka Parkwavs'} subtitle={'09'} strokeWidth={1.5} trailWidth={1.5} />               
                <ProgressBar value={43} barColor={'#3A3A60'} backgroundBarColor={'#ebebee'} title={ '75 Spinka Parkwavs'} subtitle={'33'} strokeWidth={1.5} trailWidth={1.5} />               
                <ProgressBar value={25} barColor={'#3A3A60'} backgroundBarColor={'#ebebee'} title={ '75 Spinka Parkwavs'} subtitle={'26'} strokeWidth={1.5} trailWidth={1.5} />                
                <ProgressBar value={29} barColor={'#3A3A60'} backgroundBarColor={'#ebebee'} title={ '75 Spinka Parkwavs'} subtitle={'22'} strokeWidth={1.5} trailWidth={1.5} />                 
                <ProgressBar value={70} barColor={'#3A3A60'} backgroundBarColor={'#ebebee'} title={ '75 Spinka Parkwavs'} subtitle={'32'} strokeWidth={1.5} trailWidth={1.5} /> 
            </div>                       
        );
    }
}

export default VisitsAnalytics;