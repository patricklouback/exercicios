import CasaTabuleiro from "./CasaTabuleiro"
import styles from "../styles/linha.module.css"

export default function LinhaTabuleiro(props){
    return (
        <div className={styles.linha}>
            <CasaTabuleiro branca={props.branca}/>
            <CasaTabuleiro branca={!props.branca}/>
            <CasaTabuleiro branca={props.branca}/>
            <CasaTabuleiro branca={!props.branca}/>
            <CasaTabuleiro branca={props.branca}/>
            <CasaTabuleiro branca={!props.branca}/>
            <CasaTabuleiro branca={props.branca}/>
            <CasaTabuleiro branca={!props.branca}/>
        </div>
    )
}