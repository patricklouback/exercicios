import Filho from "./Filho";

export default function Pai(props){
    return (
        <div>
            <Filho nome="Joana" familia={props.familia}/>
            <Filho nome="Ana" familia={props.familia}/>
        </div>
    )
}