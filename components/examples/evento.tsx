import { IconMinus, IconPlus } from "@tabler/icons-react"
import { useState } from "react"

export default function Evento() {
    const [valor, setValor] = useState(123)
    
    const incrementar = () => {
        setValor(valor + 1)
        console.log('Valor: ' + valor)
    }

    const decrementar = () => {
        setValor(valor - 1)
        console.log('Valor: ' + valor)
    }
    
    return (
        <div className={`
            flex flex-col gap-4
            bg-black text-white items-center`}>
            <span className="text-3xl"><strong>Valor: </strong>{valor}</span>
            <div className="flex gap-3">
                <IconPlus size={20}/>
                <button onClick={incrementar}>
                    Incrementar
                </button>
            </div>
            <div className="flex gap-3">
                <IconMinus size={20}/>
                <button onClick={decrementar}>
                    Decrementar
                </button>
            </div>
        </div>
    )
}