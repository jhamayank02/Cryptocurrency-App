import ReactDOM from "react-dom";
import '../css/Modal.css';

const Backdrop = (props)=>{
    return <div className="backdrop" onClick={props.onClick}></div>
};

const ModalOverlay = (props)=>{
    return <div className="modal">
        <div className="modal-content">{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays');

const Modal = (props)=>{
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    );
};

export default Modal;