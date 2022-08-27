import { useState } from "react"

export default function contador () {
    const [valor, setValor] = useState(0)
    function soma() {
        setValor(valor+1)
    }

    function subtrai() {
        setValor(valor-1)
    }

    return (
        <div
        style={{
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <h1>Contador</h1>
            <div>Valor: {valor}</div>
            <div>
            <button onClick={soma}>+</button>
            <button onClick={subtrai}>-</button>
            </div>
        </div>
    )
}