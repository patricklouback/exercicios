import LinhaTabuleiro from "../../components/LinhaTabuleiro";

export default function projetoTabuleiro(){

    return (
        <div className="container">
        <LinhaTabuleiro branca/>
        <LinhaTabuleiro />
        <LinhaTabuleiro branca/>
        <LinhaTabuleiro />
        <LinhaTabuleiro branca/>
        <LinhaTabuleiro />
        <LinhaTabuleiro branca/>
        <LinhaTabuleiro />
        </div>
    )
}