
import React from 'react'
import Topbar from './Topbar'
import RecentGames from './RecentGames.js'
import './App.css'
import data from './data/heroes.json'
import MostPlayed from './MostPlayed.js'
import Winrate from './Winrate.js'

function App() {
 
  const [playerdata, setPlayerdata] = React.useState()
  const [recentMatches, setRecentMatches] = React.useState()
  const [numberOfGames, setNumberOfGames] = React.useState(30)
  const [heroPlayedCount, setHeroPlayedCount] = React.useState()
  const [totalWinLoss, setTotalWinLoss] = React.useState([0,0,0])

  React.useEffect(() =>{
   fetch("https://api.opendota.com/api/players/86747043")
    .then(res => res.json())
    .then(data => setPlayerdata(data))
    fetch("https://api.opendota.com/api/players/86747043/matches?limit=25")
    .then(res => res.json())
    .then(data =>setRecentMatches(data))
    .then(data => console.log("fetched"))

    initializeHeroPlayedCount()
    
  },[]
  )

  const heroes = Object.values(data)

  function initializeHeroPlayedCount(){
    

    var countArray = heroes.map(hero => {
        return ({
            id: hero.id,
            count: 0 
        })
    })

    setHeroPlayedCount(countArray)
    
  }
  
  function update(){
    for (let i=0; i<recentMatches.length; i++){
      setHeroPlayedCount(prevHeroPlayedCount => prevHeroPlayedCount.map(hero =>{
        return (hero.id===recentMatches[i].hero_id ? {id: hero.id, count: hero.count+1}:hero)
      }))
  }
 
  }

  function display(){
    console.log(heroPlayedCount)
  }

 
  

  
 
  return (
    
    <div className="App" >{
      playerdata && recentMatches?.length > 0  ? <>
       <Topbar playerdata={playerdata} />
       <div className="stuff">   
          <RecentGames 
          recentMatches={recentMatches} 
          numberOfGames={numberOfGames}
          data={data}
          />
       <Winrate recentMatches={recentMatches} />
      </div>
     
   
      </> : null
    }
     
     
    </div>
  );
}

export default App;
