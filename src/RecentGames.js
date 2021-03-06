import React from 'react'

export default function RecentGames(props){
const recent = props.recentMatches
const heroes = Object.values(props.data)

   let array = []
//switch recent.length to props.NumberOfGames eventually 
    for (let i=0; i<recent.length; i++){

        let win = true
        if ((recent[i].player_slot < 128 && recent[i].radiant_win===true) ||
            (recent[i].player_slot >= 128 && recent[i].radiant_win===false)){
            win = true
        }
        else(
            win = false
        )

        var hero = heroes.filter(hero => hero.id === recent[i].hero_id)

        array.push(
            <a key={recent[i].match_id} href={`https://www.opendota.com/matches/${recent[i].match_id}`} target="_blank">
                <div  className="matchInfo">
                    <img className="icon" src={`http://cdn.dota2.com${hero[0].icon}`} />
                    <p className={win ? "winText" : "lossText"}>
                    {win ? "W" : "L"} </p>
                    <p>{`${recent[i].kills}/${recent[i].deaths}/${recent[i].assists}`}</p>
                </div>
            </a>
        )
    }
    return(
        <div className="recentGames">
            <h3 className="recentGamesTitle">Recent Matches</h3>
            <div className="scrollable">
                {array}
            </div>
            
        </div>
    )
}