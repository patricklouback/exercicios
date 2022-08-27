export default function NumeroMega(props) {
    return (
        <div
        style={{
            height: '70px',
            width: '70px',
            borderRadius: '35px',
            backgroundColor: '#000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px'
        }}>
            <h1>{props.numero}</h1>

        </div>
    )
}