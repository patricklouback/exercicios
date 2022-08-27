import If from "../../components/If";

export default function condicional2() {
    const numero = 3

    return (
        <div>
            <If teste={numero % 2 === 0}>
                <h1>O numero é par</h1>
            </If>
        </div>
    )
}