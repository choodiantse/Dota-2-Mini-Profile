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
  const [playerId, setPlayerId] = React.useState(0)
  const [errorMsg, setErrorMsg] = React.useState(false)
  //129050083
  //86747043
  // fetch(`https://api.opendota.com/api/players/${playerId}/recentMatches`)
  React.useEffect(() =>{
    if(main===false){
      
   fetch(`https://api.opendota.com/api/players/${playerId}`)
    .then(res => res.json())
    .then(data => {if (JSON.stringify(data)===`{"error":"invalid account id"}`){
      console.log("undefined data")
      setMain(true)
      setErrorMsg(true)}
      else{
        setPlayerdata(data)
      }
    })
   // .then(data => setPlayerdata(data))
    
  
    fetch(`https://api.opendota.com/api/players/${playerId}/matches?limit=${numberOfGames}&project=hero_id&project=xp_per_min&project=gold_per_min&project=last_hits&project=kills&project=deaths&project=assists`)
    .then(res => res.json())
    .then(data =>setRecentMatches(data))
    .then(data => console.log("fetched")) }
  },[main, numberOfGames]
  )

 function toggleMain(){
    setMain(prevMain => !prevMain)
    setErrorMsg(false)
 }
 
 function setId(id){
  setPlayerId(id)
 }


  return (
    
    <div className="App" >
      { main ? <MainMenu toggleMain={toggleMain} setId={setId} errorMsg={errorMsg}/> : 
      playerdata && recentMatches?.length > 0  ? <>
       <Topbar playerdata={playerdata} toggleMain={toggleMain} setNumberOfGames={setNumberOfGames}/>
          <div className="stuff">   
              <RecentGames 
              recentMatches={recentMatches} 
              data={data} />

              <div className="WRandMP">
                <Winrate recentMatches={recentMatches} />
                <MostPlayed  
                recentMatches={recentMatches} 
                data={data} />
              </div>
              <BestStats recentMatches={recentMatches} 
                
                data={data} />   
          </div>
      </> : null
    }</div>
  
  

  );
}