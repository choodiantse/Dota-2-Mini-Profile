import React from 'react'

export default function MainMenu(props){
    
    function handleClick(){
        props.toggleMain()
    }

    function changeId(event){
 
        props.setId(event.target.value)
    }

    return(
        <div>
            <h1>Dota 2 Mini Profile</h1>
            <input onChange={changeId} placeholder="Steam ID" type="text"></input>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}