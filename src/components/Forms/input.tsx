import { InputHTMLAttributes } from 'react'

// Props will have any number of input attributes
interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: Props){
  return(
    <input
      {...props}
      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
    />
  )
}
