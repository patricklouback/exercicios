export default function CasaTabuleiro(props){
    return (
        <div style={{
            width: "50px",
            height: "50px",
            backgroundColor: props.branca ? "#FFF" : "#000"
        }}></div>
    )
}