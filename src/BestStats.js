import React from "react"

export default function BestStats(props){
    const recent = props.recentMatches
    const heroes = Object.values(props.data)
//index 0=match ID, 1=stat, 2=hero id
    
    var highestGpm = [0,0,0,""]
    var highestXpm = [0,0,0,""]
    var highestKill = [0,0,0,""]
    var highestAssist = [0,0,0,""]
    var highestCs = [0,0,0,""]
    
    for (let i=0; i<recent.length; i++){
        var hero = heroes.filter(hero => hero.id === recent[i].hero_id)
        if (recent[i].gold_per_min > highestGpm[0]){
            highestGpm[0] = recent[i].gold_per_min
            highestGpm[1] = recent[i].match_id
            highestGpm[2] = recent[i].hero_id
            highestGpm[3] = hero[0]
        }
        if (recent[i].xp_per_min > highestXpm[0]){
            highestXpm[0] = recent[i].xp_per_min
            highestXpm[1] = recent[i].match_id
            highestXpm[2] = recent[i].hero_id
            highestXpm[3] = hero[0]
        }

        if (recent[i].kills > highestKill[0]){
            highestKill[0] = recent[i].kills
            highestKill[1] = recent[i].match_id
            highestKill[2] = recent[i].hero_id
            highestKill[3] = hero[0]
        }

        if (recent[i].assists > highestAssist[0]){
            highestAssist[0] = recent[i].assists
            highestAssist[1] = recent[i].match_id
            highestAssist[2] = recent[i].hero_id
            highestAssist[3] = hero[0]
        }

        if (recent[i].last_hits > highestCs[0]){
            highestCs[0] = recent[i].last_hits
            highestCs[1] = recent[i].match_id
            highestCs[2] = recent[i].hero_id
            highestCs[3] = hero[0]
        }
    }

    return(
        <div className="stats">
            <h3 className="statsTitle">Statistics</h3>
            <span className="indStats">
                <h2 className="statName">Highest GPM:</h2>
                <h2 className="statNumber">{highestGpm[0]}</h2>
                <img className="icon" src={`http://cdn.dota2.com${highestGpm[3].icon}`} />
            </span>
            <span className="indStats">
                <h2 className="statName">Highest XPM:</h2>
                <h2 className="statNumber">{highestXpm[0]}</h2>
                <img className="icon" src={`http://cdn.dota2.com${highestXpm[3].icon}`} />
            </span>
            <span className="indStats">
                <h2 className="statName">Most kills: </h2>
                <h2 className="statNumber">{highestKill[0]}</h2>
                <img className="icon" src={`http://cdn.dota2.com${highestKill[3].icon}`} />
            </span>
            <span className="indStats">
                <h2 className="statName">Most assists:</h2>
                <h2 className="statNumber">{highestAssist[0]}</h2>
                <img className="icon" src={`http://cdn.dota2.com${highestAssist[3].icon}`} />
                
            </span>
            <span className="indStats">
                <h2 className="statName">Most last hits:</h2>
                <h2 className="statNumber">{highestCs[0]}</h2>
                <img className="icon" src={`http://cdn.dota2.com${highestCs[3].icon}`} />
            </span>
            
            
           
        </div>
    )
}