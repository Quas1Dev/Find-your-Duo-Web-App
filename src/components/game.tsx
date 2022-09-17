interface GameDetails{
  name: string,
  thumbnail: string,
  ads: number
}

export default function Game(props : GameDetails){
  return(
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={props.thumbnail} />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{props.name}</strong>
        <span className="text-zinc-300 text-sm block">{props.ads} anúncios</span>
      </div>
    </a>
  )
}
