import React from 'react'
import {XYPlot, HorizontalBarSeries} from 'react-vis';
export default function Winrate(props){
    const recent = props.recentMatches
    var total = 0;
    var wins = 0;
    var losses = 0;

    
    for (let i=0; i<recent.length; i++){
        total++

        if ((recent[i].player_slot < 128 && recent[i].radiant_win===true) ||
            (recent[i].player_slot > 128 && recent[i].radiant_win===false)){
            wins++
        }
        else{
            losses++
        }
    }

    const winrate = wins*100/total

    const winData = [
        {x:wins, y:0}
    ]
    
    const lossData=[
        {x:losses, y:0}
    ]
   
    const positive={
        color: "green"
    }

    const negative={
        color: "red"
    }

    
    return(
        <div className="winrateContainer">
            <h3 className="winrateTitle">Winrate</h3>
            <h1 className="wr" style={winrate>=50 ? positive : negative}>{`${winrate}%`}</h1>
            <div className="graphLine">
                <h1>{`W:${wins}`}</h1>
                <XYPlot className="graph" height={120} width={300} stackBy='x'>
                    <HorizontalBarSeries color="#CBEAC0" data={winData} />
                    <HorizontalBarSeries color="#FF6961" data={lossData} />
                </XYPlot>
                <h1>{`L:${losses}`}</h1>
            </div>
        </div>
    )
}