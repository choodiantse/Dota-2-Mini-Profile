import React from 'react'

export default function Topbar(props){
    const info = props.playerdata
    
    return(
        <nav className="topbar">
            <img className="dp" src={info.profile.avatarfull} />
            <h1 className="profilename">{info.profile.personaname}</h1>
            <img className="close" src="close.svg" />
        </nav>
    )
}