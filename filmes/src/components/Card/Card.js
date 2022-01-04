import './Card.scss';

export default function Card(props){
    return(
        <div className='card'>
            <img src ={props.img} alt={props.alt} />
            <span>{props.name}</span>
        </div>
    )
}

