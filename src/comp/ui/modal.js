import { Fragment } from 'react';
import  ReactDOM  from 'react-dom';
import classes from './modal.module.css';

const Backdrop = props => {
    return <div onClick={props.onClick} className={classes.backdrop}/>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal = props => {
    const portal = document.getElementById('overlays');
    return( 
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/> , portal)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , portal)}
        </Fragment>
    ); 
}

export default Modal;