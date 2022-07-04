import React from 'react'

export default function MainMenu(props){
    
    function handleClick(){
        props.toggleMain()
        document.body.style = 'background: white;'

    }

    function changeId(event){
 
        props.setId(event.target.value)
    }

    return(
        <div className="mainMenu" style={{ 
            backgroundImage : "url(dota2bg.jpg)"
          }}>
            <h1 className="mainTitle">Dota 2 Mini Profile</h1>
            <h3 className="mainErrorMsg">{props.errorMsg ? "Invalid Steam ID" : "Enter your Steam ID32 / Friend ID"}</h3>
            <input className="input" onChange={changeId} placeholder="Steam ID" type="text"></input>
            <button className="submit" onClick={handleClick}>Submit</button>
            <h3 className="credit">Art (c) Brea Foster</h3>
        </div>
    )
}