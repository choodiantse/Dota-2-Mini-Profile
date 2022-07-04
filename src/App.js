import React from 'react'
import Topbar from './Topbar'
import RecentGames from './RecentGames.js'
import './App.css'
import data from './data/heroes.json'
import MostPlayed from './MostPlayed.js'
import Winrate from './Winrate.js'
import BestStats from './BestStats.js'
import MainMenu from './MainMenu.js'

export default function App() {
  const [main, setMain] = React.useState(true)
  const [playerdata, setPlayerdata] = React.useState()
  const [recentMatches, setRecentMatches] = React.useState()
  const [numberOfGames, setNumberOfGames] = React.useState(30)
  const [playerId, setPlayerId] = React.useState()

  //129050083
  //86747043
  
  React.useEffect(() =>{
    if(main===false){
      
   fetch(`https://api.opendota.com/api/players/${playerId}`)
    .then(res => res.json())
    .then(data => setPlayerdata(data))
    fetch(`https://api.opendota.com/api/players/${playerId}/recentMatches`)
    .then(res => res.json())
    .then(data =>setRecentMatches(data))
    .then(data => console.log("fetched")) }
  },[main]
  )

 function toggleMain(){
    setMain(prevMain => !prevMain)
 }
 
 function setId(id){
  setPlayerId(id)
 }
  return (
    
    <div className="App" >{ main ? <MainMenu toggleMain={toggleMain} setId={setId}/> : 
      playerdata && recentMatches?.length > 0  ? <>
       <Topbar playerdata={playerdata} toggleMain={toggleMain}/>
          <div className="stuff">   
              <RecentGames 
              recentMatches={recentMatches} 
              numberOfGames={numberOfGames}
              data={data} />

              <div className="WRandMP">
                <Winrate recentMatches={recentMatches} />
                <MostPlayed  
                recentMatches={recentMatches} 
                numberOfGames={numberOfGames}
                data={data} />
              </div>
              <BestStats recentMatches={recentMatches} 
                
                data={data} />   
          </div>
      </> : null
    }</div>
  
  

  );
}

