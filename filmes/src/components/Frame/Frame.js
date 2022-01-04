import './Frame.scss';

export default function Frame(props){
    return(
        <div className='frame'>
            <img src = {props.image} alt={props.imageAlt} />
            <div className='textline'>
                <h2>{props.text}</h2>
            </div>

        </div>
    )
}