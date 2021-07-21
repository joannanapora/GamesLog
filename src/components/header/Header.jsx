import React from 'react';
import "./Header.scss";
import {ReactComponent as Logo} from '../../logo.svg'
import { withRouter} from 'react-router-dom';


const Header = ({history}) => {
    return (
        <div className='header'>
            <div><Logo onClick={()=>{history.push('/')}} className='logo' /></div>
            <div className='nav-option' >Parcel Delivery</div>
        </div>
    )
}
export default withRouter(Header);