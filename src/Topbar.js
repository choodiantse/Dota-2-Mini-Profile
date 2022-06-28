import React from 'react'

export default function Topbar(props){
    const info = props.playerdata
    
    return(
        <nav className="topbar">
            <img className="dp" src={info.profile.avatar} />
            <h1 className="profilename">{info.profile.personaname}</h1>
            <p className="country">{info.profile.loccountrycode}</p>
        </nav>
    )
}