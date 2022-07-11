import React from 'react'

export default function Topbar(props){
    const info = props.playerdata
    const rankTier = info.rank_tier
    const medal = rankTier.toString().charAt(0)
    const star = rankTier.toString().charAt(1)
 
    var limit = 0
    function handleChange(event){
        limit = event.target.value
    }

    function handleClick(){
        props.setNumberOfGames(limit)
        console.log(limit)
    }
    return(
        <nav className="topbar">
            <img className="dp" src={info.profile.avatarfull} />
            <div className="nameAndMedal">
                <h1 className="profilename">{info.profile.personaname}</h1>
                <img className="medal" src={require(`./images/medals/SeasonalRank${rankTier===80 ? "Top0" : medal+"-"+star}.webp`)} />
            </div>
            <div className="inputAndSubmit">    
                <input className="changeLimitInput" type="text" placeholder="Number of games" onChange={event => handleChange(event)} 
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                    }}}
                    />
                <button className="changeLimitButton" onClick={handleClick}>Submit</button>
            </div>
        
            <img onClick={props.toggleMain} className="close" src={require("./images/close.png")} />
        </nav>
    )
}