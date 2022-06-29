
import React from 'react'
import Topbar from './Topbar'
import RecentGames from './RecentGames.js'
import './App.css'
import data from './data/heroes.json'
function App() {
 
  const [playerdata, setPlayerdata] = React.useState()
  const [recentMatches, setRecentMatches] = React.useState()
  const [numberOfGames, setNumberOfGames] = React.useState(30)
  React.useEffect(() =>{
   fetch("https://api.opendota.com/api/players/86747043")
    .then(res => res.json())
    .then(data => setPlayerdata(data))
    fetch("https://api.opendota.com/api/players/86747043/matches?limit=10")
    .then(res => res.json())
    .then(data =>setRecentMatches(data))
    .then(data => console.log("fetched"))
  },[]
  )

 const heroArray = Object.values(data)



  
 
  return (
    
    <div className="App" >{
      playerdata && recentMatches?.length > 0 ? <>
       <Topbar playerdata={playerdata} />
       <div className="stuff">   <RecentGames 
        recentMatches={recentMatches} 
        numberOfGames={numberOfGames}
        data={data}
      /></div>
   
      </> : null
    }
     
     
    </div>
  );
}

export default App;
