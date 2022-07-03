
import React from 'react'
import Topbar from './Topbar'
import RecentGames from './RecentGames.js'
import './App.css'
import data from './data/heroes.json'
import MostPlayed from './MostPlayed.js'
import Winrate from './Winrate.js'
import BestStats from './BestStats.js'
export default function App() {
 
  const [playerdata, setPlayerdata] = React.useState()
  const [recentMatches, setRecentMatches] = React.useState()
  const [numberOfGames, setNumberOfGames] = React.useState(30)
 

  //129050083
  
  React.useEffect(() =>{
   fetch("https://api.opendota.com/api/players/86747043")
    .then(res => res.json())
    .then(data => setPlayerdata(data))
    fetch("https://api.opendota.com/api/players/86747043/recentMatches")
    .then(res => res.json())
    .then(data =>setRecentMatches(data))
    .then(data => console.log("fetched")) 
  },[]
  )

 

  return (
    
    <div className="App" >{
      playerdata && recentMatches?.length > 0  ? <>
       <Topbar playerdata={playerdata} />
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
    }
    </div>
  );
}

