import React from 'react'

export default function MostPlayed(props){
    const recent = props.recentMatches
    const heroes = Object.values(props.data)

    var countArray = heroes.map(hero => {
        return ({
            id: hero.id,
            total: 0,
            wins: 0,
            losses: 0,
        })
    })

    for (let i=0; i<recent.length;i++){
        for (let j=0; j<countArray.length; j++){
            if(recent[i].hero_id===countArray[j].id){
                countArray[j].total = countArray[j].total+1

                if ((recent[i].player_slot < 128 && recent[i].radiant_win===true) ||
                (recent[i].player_slot > 128 && recent[i].radiant_win===false)){
                    countArray[j].wins++
                }
                else{
                    countArray[j].losses++
                }

            }
        }
       
    }

    var heroesPlayed = []
    for (let i=0; i<countArray.length; i++){
        if (countArray[i].total!=0){
            heroesPlayed.push(countArray[i])
        }
    }

    heroesPlayed.sort((a,b) => {
        return b.total - a.total
    })
   

   const positive={
        color: "green"
   }

   const negative={
        color:"red"
   }

    var heroesPlayedDisplay = []
    for (let i=0; i<3; i++){
        var hero = heroes.filter(hero => hero.id === heroesPlayed[i].id)
        var winrate = Math.round((heroesPlayed[i].wins/heroesPlayed[i].total)*100)
        heroesPlayedDisplay.push(
            <div key={heroesPlayed[i].id} id={heroesPlayed[i].id} className="heroWr">
                <img className="icon" src={`http://cdn.dota2.com${hero[0].icon}`} />
                <p style={winrate>=50 ? positive : negative}className="heroIndWr">{heroesPlayed[i].wins} - {heroesPlayed[i].losses}</p>
                <p>{winrate}%</p>
            </div>
        )
    }
    return(
        <div className="heroWrContainer">
            <h3 className="heroWrTitle">Most Played</h3>
            {heroesPlayedDisplay}
        </div>
    )
}