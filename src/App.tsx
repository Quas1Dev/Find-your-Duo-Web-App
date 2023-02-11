import { MagnifyingGlassPlus, GameController } from "phosphor-react"
import { Root, Portal, Trigger, Overlay, Close, Title, Content } from "@radix-ui/react-dialog"
import './styles/main.css'
import logo from './assets/logo.svg'
import gamesList from './data/gameslist'
import Game from './components/game'
import Input from './components/Forms/input'

function App() {
  let gamesComponents = gamesList.map((game) =>
    <Game thumbnail={game.thumbnail} name={game.name} ads={game.ads} />
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
      <div className="max-w-full overflow-scroll">
        <div className="grid grid-cols-6 gap-6 mt-16 min-w-[996px]">
          {gamesComponents}
        </div>
      </div>

      {/* Create a modal *2 */}
      <Root>
        {/* Footer */}
        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
          <div className="bg-[#2A2634] px-8 py-6  flex justify-between items-center">
            <div>
              <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
              <span className="text-white block text-zinc-400">Publique um anúncio para encontrar novos players!</span>
            </div>
            <Trigger className="py-2 px-4 bg-violet-500 text-white rounded hover:bg-violet-700 flex items-center gap-3">
              <MagnifyingGlassPlus size={24} />
              Publicar anúncio
            </Trigger>
          </div>
        </div>

        <Portal>
          <Overlay className="bg-black/60 inset-0 fixed" />

          <Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Title className="text-3xl font-black">Publique um anúncio</Title>

            <form className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">Qual o game?</label>
                <Input id="game" placeholder="Selecione o game que deseja jogar" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input id="name" placeholder="Como te chamam dentro do game?" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                  <Input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual o seu Discord?</label>
                  <Input id="discord" type="text" placeholder="Usuario#0000" />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar?</label>

                  <div className="grid grid-cols-4 gap-2">
                    <button
                      title="Domingo"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      D
                    </button>
                    <button
                      title="Segunda"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      S
                    </button>
                    <button
                      title="Terça"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      T
                    </button>
                    <button
                      title="Quarta"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      Q
                    </button>
                    <button
                      title="Quinta"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      Q
                    </button>
                    <button
                      title="Sexta"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      S
                    </button>
                    <button
                      title="Sábado"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      S
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input id="hourStart" type="time" placeholder="De" />
                    <Input id="hourEnd" type="time" placeholder="Até" />
                  </div>
                </div>
              </div>

              <div className="mt-2 flex gap-2 text-sm">
                <Input type="checkbox" />
                Costumo me conectar ao chat de voz
              </div>

              <footer className="mt-4 flex justify-end gap-4">
                <Close
                  type="button"
                  className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                >
                  Cancelar
                </Close>
                <button
                  type="submit"
                  className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                >
                  <GameController className="w-6 h-6" />
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Content>
        </Portal>

      </Root>
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
