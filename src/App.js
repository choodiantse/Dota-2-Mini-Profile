
import React from 'react';
import Topbar from './Topbar'
import './App.css'

function App() {

  const [playerdata, setPlayerdata] = React.useState({tracked_until: "1658950939", profile: {account_id: 86747043, personaname: "DESPAIR", name: null, plus: true, cheese: 0, steamid: "76561198047012771", avatar: "https://avatars.akamai.steamstatic.com/95f28068a719e9eaf5509547ba62c7cea81203aa.jpg", avatarmedium: "https://avatars.akamai.steamstatic.com/95f28068a719e9eaf5509547ba62c7cea81203aa_medium.jpg", avatarfull: "https://avatars.akamai.steamstatic.com/95f28068a719e9eaf5509547ba62c7cea81203aa_full.jpg", profileurl: "https://steamcommunity.com/profiles/76561198047012771/", last_login: "2022-06-27T19:42:01.711Z", loccountrycode: "MY", is_contributor: false}, leaderboard_rank: 3557, solo_competitive_rank: 4298, competitive_rank: 4806, rank_tier: 80, mmr_estimate: {estimate: 4215}})
  React.useEffect(() =>{
    fetch("https://api.opendota.com/api/players/86747043")
    .then(res => res.json())
    .then(data => setPlayerdata(data))
  },[]
  )


  
 
  return (
    <div className="App">
      <Topbar playerdata={playerdata} />
      <h3></h3>
     
    </div>
  );
}

export default App;
