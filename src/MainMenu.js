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
        <div className="mainMenu">
            <h1 className="mainTitle">Dota 2 Mini Profile</h1>
            <input className="input" onChange={changeId} placeholder="Steam ID" type="text"></input>
            <button className="submit" onClick={handleClick}>Submit</button>
        </div>
    )
}