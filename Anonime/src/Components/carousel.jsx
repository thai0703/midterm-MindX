import App from "../App";
import './carousel.css'

const Carousel = (props) =>{
    return(
        <>
        <div className="carousel">
            <img src={props.image} alt="" />
            <div className="content">
                <h3>{props.name}</h3>
                <p> Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis.</p>
            </div>
        </div>
        </>
    )
}

export default Carousel