import CreateAdModal from './CreateAdModal';
import { MagnifyingGlassPlus, GameController } from "phosphor-react"

import * as Dialog from "@radix-ui/react-dialog"

export default function CreateAdBanner() {
    return (
        // {/* Create a modal *2 */ }
        <Dialog.Root>
            {/* Footer */}
            <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
                <div className="bg-[#2A2634] px-8 py-6  flex justify-between items-center">
                    <div>
                        <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
                        <span className="text-white block text-zinc-400">Publique um anúncio para encontrar novos players!</span>
                    </div>
                    <Dialog.Trigger className="py-2 px-4 bg-violet-500 text-white rounded hover:bg-violet-700 flex items-center gap-3">
                        <MagnifyingGlassPlus size={24} />
                        Publicar anúncio
                    </Dialog.Trigger>
                </div>
            </div>
            <CreateAdModal/>
        </Dialog.Root >
    )
}