import React from "react";
import { useState } from "react";
import './modal.css'

const Modal = (props) => {

    return (
        <div className="modal">
            <div className="content">
                <button style={{ float: 'right' }} onClick={props.onClose}>Close</button>
                <div className="wrapper">
                    <img src={props.datum.image} />
                    <div className="info">
                        <div>
                            <span>Tên bộ phim: {props.datum.movieName}</span>
                        </div>
                        <div className="des">
                            <span>Miêu tả: {props.datum.description}</span>
                        </div>
                        <div>
                            <span>Tập: {props.datum.episode}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;