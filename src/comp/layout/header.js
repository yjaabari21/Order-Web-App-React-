import React , {Fragment} from "react";
import classes from './header.module.css';
import dinImg from '../others/dinImg.jpg';
import CartBtn from './cartBtn';

const Header = props => {
    return (<Fragment>
        <header className={classes.header}>
            <h1>title</h1>
            <CartBtn onClick={props.onShow}/>
        </header>
        <div className={classes['main-image']}>
            <img src={dinImg} alt=""/>
        </div>
    </Fragment>
    );
}

export default Header;