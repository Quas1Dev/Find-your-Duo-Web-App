import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Select from "@radix-ui/react-select";
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { Check, GameController, ArrowDown, ArrowUp } from "phosphor-react";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Input from './Forms/input'
import api from "../AxiosConfig/AppServer";

interface GameData {
    "id": string;
    "title": string;
}

export default function CreateAdModal() {
    const [games, setGames] = useState<GameData[]>([]);
    const [weekDays, setWeekDays] = useState<string[]>([]);
    const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false);
    const [selectedGame, setSelectedGame] = useState<string>("");

    useEffect(() => {
        async function fetchGames() {
            const fetchedGames = await api.get<GameData[]>("games")
            setGames(fetchedGames.data)
        }
        fetchGames();
    }, []);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        if (!data.name){
            return;
        }
        
        try {
            await api.post(`/games/${selectedGame}/ads`, {
                useVoiceChannel: useVoiceChannel,
                yearsPlaying: Number(data.yearsPlaying),
                weekDays: weekDays.map(Number),
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                name: data.name,
                discord: data.discord,
            })
            alert("Anúncio criado com sucesso!");
        } catch (err: any) {
            console.log("Message: ", err.message);
        }

    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

            <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
                <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="game" className="font-semibold">Qual o game?</label>
                        <Select.Root onValueChange={setSelectedGame}>
                            <Select.Trigger
                                className="bg-zinc-900 py-3 px-4 rounded text-sm text-zinc-500 text-left flex justify-between">
                                <Select.Value placeholder="Selecione o game que você quer jogar." />
                                <Select.Icon />
                            </Select.Trigger>


                            <Select.Portal>
                                <Select.Content className="bg-zinc-900 rounded">
                                    <Select.ScrollUpButton className="SelectScrollButton">
                                        <ChevronUpIcon />
                                    </Select.ScrollUpButton>

                                    <Select.Viewport className="py-3 px-4 absolute left-0">

                                        <Select.Group className="placeholder:text-zinc-500 text-left">
                                            {games.map(game => (
                                                <Select.Item key={game.id} value={game.id} className="text-zinc-500 cursor-pointer">
                                                    <Select.ItemText >{game.title} </Select.ItemText >
                                                </Select.Item>
                                            )
                                            )}
                                        </Select.Group>

                                    </Select.Viewport>
                                    <Select.ScrollDownButton className="SelectScrollButton">
                                        <ChevronDownIcon />
                                    </Select.ScrollDownButton>
                                </Select.Content>
                            </Select.Portal>
                        </Select.Root>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Seu nome (ou nickname)</label>
                        <Input name="name" id="name" placeholder="Como te chamam dentro do game?" />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                            <Input name="yearsPlaying" id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="discord">Qual o seu Discord?</label>
                            <Input name="discord" id="discord" type="text" placeholder="Usuario#0000" />
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2" >
                            <label htmlFor="weekDays">Quando costuma jogar?</label>

                            <ToggleGroup.Root
                                type="multiple"
                                className="grid grid-cols-4 gap-2"
                                value={weekDays}
                                onValueChange={setWeekDays}
                            >

                                <ToggleGroup.Item
                                    value="0"
                                    title="Domingo"
                                    className={`w-8 h-8 rounded  
                                        ${weekDays.includes('0')
                                            ? 'bg-violet-500'
                                            : 'bg-zinc-900'
                                        }`}
                                >
                                    D
                                </ToggleGroup.Item>

                                <ToggleGroup.Item
                                    value="1"
                                    title="Segunda"
                                    className={`w-8 h-8 rounded  
                                        ${weekDays.includes('1')
                                            ? 'bg-violet-500'
                                            : 'bg-zinc-900'
                                        }`}
                                >
                                    S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="2"
                                    title="Terça"
                                    className={`w-8 h-8 rounded  
                                        ${weekDays.includes('2')
                                            ? 'bg-violet-500'
                                            : 'bg-zinc-900'
                                        }`}
                                >
                                    T
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="3"
                                    title="Quarta"
                                    className={`w-8 h-8 rounded  
                                        ${weekDays.includes('3')
                                            ? 'bg-violet-500'
                                            : 'bg-zinc-900'
                                        }`}
                                >
                                    Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="4"
                                    title="Quinta"
                                    className={`w-8 h-8 rounded  
                                        ${weekDays.includes('4')
                                            ? 'bg-violet-500'
                                            : 'bg-zinc-900'
                                        }`}
                                >
                                    Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="5"
                                    title="Sexta"
                                    className={`w-8 h-8 rounded  
                                        ${weekDays.includes('5')
                                            ? 'bg-violet-500'
                                            : 'bg-zinc-900'
                                        }`}
                                >
                                    S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="6"
                                    title="Sábado"
                                    className={`w-8 h-8 rounded  
                                        ${weekDays.includes('6')
                                            ? 'bg-violet-500'
                                            : 'bg-zinc-900'
                                        }`}
                                >
                                    S
                                </ToggleGroup.Item>
                            </ToggleGroup.Root>

                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="hourStart">Qual horário do dia?</label>
                            <div className="grid grid-cols-2 gap-2">
                                <Input name="hourStart" id="hourStart" type="time" placeholder="De" />
                                <Input name="hourEnd" id="hourEnd" type="time" placeholder="Até" />
                            </div>
                        </div>
                    </div>

                    <label className="mt-2 flex gap-2 text-sm items-center">
                        <Checkbox.Root
                            onCheckedChange={(checked) => {
                                if (checked === true || checked === false) {
                                    setUseVoiceChannel(checked);
                                }
                            }}

                            className="w-6 h-6 p-1 flex gap-2 text-sm rounded bg-zinc-900"
                        >
                            <Checkbox.Indicator>
                                <Check className="w-4 h-4 text-emerald-400" />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        Costumo me conectar ao chat de voz
                    </label>

                    <footer className="mt-4 flex justify-end gap-4">
                        <Dialog.Close
                            type="button"
                            className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                        >
                            Cancelar
                        </Dialog.Close>
                        <button
                            type="submit"
                            className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                        >
                            <GameController className="w-6 h-6" />
                            Encontrar duo
                        </button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal >
    )
}