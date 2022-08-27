import NumeroMega from "../../components/NumeroMega";

export default function megasena() {

    function sortear(){
        return <NumeroMega numero={50}/>
    }

    return (
        <div 
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <h1>Numeros Mega Sena</h1>
            <div>
                {sortear()}
            </div>
            <button onClick={sortear}>Sorteio</button>
        </div>
    )
}