import React from 'react'

export default function Topbar(props){
    const info = props.playerdata
    const rankTier = info.rank_tier
    const medal = rankTier.toString().charAt(0)
    const star = rankTier.toString().charAt(1)
    
    return(
        <nav className="topbar">
            <img className="dp" src={info.profile.avatarfull} />
            <h1 className="profilename">{info.profile.personaname}</h1>
            <img className="medal" src={`medals/SeasonalRank${rankTier===80 ? "Top0" : medal+"-"+star}.webp`} />
            <img  onClick={props.toggleMain} className="close" src="close.png" />
        </nav>
    )
}