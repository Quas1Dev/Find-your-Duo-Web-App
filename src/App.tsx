import {MagnifyingGlassPlus} from "phosphor-react"

import './styles/main.css'
import logo from  './assets/logo.svg'
import gamesList from './data/images.js'
import Game from './components/game.js'

function App() {
  let gamesComponents = gamesList.map((game) =>
    <Game thumbnail={game.thumbnail} name={game.name} ads={game.ads}/>
  )

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img
        src={logo}
        alt="Site logo: the word eSports using a special font."
        className="max-w-[500px]"
      />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui!
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {gamesComponents}
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="bg-[#2A2634] px-8 py-6  flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
            <span className="text-white block text-zinc-400">Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className="py-2 px-4 bg-violet-500 text-white rounded hover:bg-violet-700 flex flex-item center gap-3">
          <MagnifyingGlassPlus size={24}/>
          Publicar anúncio</button>
        </div>
      </div>
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
