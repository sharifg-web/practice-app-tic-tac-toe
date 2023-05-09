export default function Square(props){

    return <button onClick={props.onSquareClick} className='square'>{props.value}</button>
}