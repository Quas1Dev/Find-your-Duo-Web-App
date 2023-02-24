import './styles/main.css'
import logo from './assets/logo.svg'
import gamesList from './data/gameslist'
import Game from './components/game'
import CreateAdBanner from './components/CreateAdBanner'
import { useState, useEffect } from 'react';
import api from './AxiosConfig/AppServer'

interface GameData {
  "id": string;
  "title": string;
  "thumb": string;
  "num_ads": string;
}

function App() {
  const [games, setGames] = useState<GameData[]>([]);
  
  useEffect(() => {
    async function fetchGames() {
      const fetchedGames = await api.get<GameData[]>("games")
      setGames(fetchedGames.data)
    }
    fetchGames();
  }, [])

  let gamesComponents = games.map((game) =>
    <Game thumbnail={game.thumb} name={game.title} key={game.id} ads={Number(game.num_ads)} />
  )

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      {/* Site's logo */}
      <div className="max-w-[500px]">
        <img
          src={logo}
          alt="Site logo: the word eSports using a special font."
          className="max-w-full h-auto"
        />
      </div>

      {/* Main title */}
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui!
      </h1>

      {/* List of game cards */}
      <div className="max-w-full overflow-x-auto pl-3 pr-8">
        <div className="grid grid-cols-6 gap-6 mt-16 min-w-[996px]">
          {gamesComponents}
        </div>
      </div>
      <CreateAdBanner />
    </div>
  )
}

export default App

// Created to restrict the dat that should be received by Button
// interface ButtonProps{
//     title: string
// }
//
// function Button(props: ButtonProps){
//   return (
//     <button>Hello, {props.title}</button>
//   )
// }


/*
Important info

In tailwind any measuriment is a multiple of 4.
w-2 produces font-size of 4px.
w-3 produces font-size of 12px.

/*
  Content is a list of paths to files that will be using talewind css
  THe only path includes all files with .tsx
*/

/*
*2 - We place the Root around the component that display the Button
that fires the modal and the modal.
*/
