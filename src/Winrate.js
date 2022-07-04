import React from 'react'
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

    const winrate = Math.round(wins*100/total)
    const lossrate = Math.round(losses*100/total)

  
   
    const positive={
        color: "green"
    }

    const negative={
        color: "red"
    }

    const winWidth={
        width: winrate*2 + "px"
    }

    const lossWidth={
        width: lossrate*2 + "px"
    }
    
    return(
        <div className="winrateContainer">
            <h3 className="winrateTitle">Winrate</h3>
            <h1 className="wr" style={winrate>=50 ? positive : negative}>{`${winrate}%`}</h1>
            <span className="chart">
                    <div style={winWidth} className="winRect"></div>
                    <div style={lossWidth} className="lossRect"></div>
                </span>
            <div className="graphLine">
                <h1>{`W:${wins}`}</h1>
             
                <h1>{`L:${losses}`}</h1>
            </div>
        </div>
    )
}