import App from "../App";
import './card.css'

const Card = (props)=>{
    return(
        <>
        <div className="card" onClick={() => {props.onClick()}}>
            <img src={props.image} alt="" />
                <p>Episode {props.epi}</p>
                <h6>{props.name}</h6>
        </div>
        </>
    )
}

export default Card