export default function Repeticao1(){

    const listaAprovados = [
        "João",
        "Maria",
        "Pedro",
        "Ana"
    ]

    function renderizarLista(){
        return listaAprovados.map((nome,i) => <li key={i}>{nome}</li>)
    }
    return(
        <ul>
           {renderizarLista()}
        </ul>
    )
}