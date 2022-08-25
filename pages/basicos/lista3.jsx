export default function lista3(){
    return (
        <div>
            <div>
            {gerarLista(20)}
            </div>
            <div>
            {gerarLista(230)}
            </div>
        </div>
    )
}

function gerarLista(final = 10){
    const lista = []
    for (let i = 1; i <= final; i++) {
        lista.push(<span>{i},</span>)   
    }
    return lista
}