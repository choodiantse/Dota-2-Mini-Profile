import React from 'react'

export default function MostPlayed(props){
    const recent = props.recentMatches
    const heroes = Object.values(props.data)

  
  

    return(
        <div>
            <h1>{props.heroPlayedCount[8]}</h1>
        </div>
    )
}