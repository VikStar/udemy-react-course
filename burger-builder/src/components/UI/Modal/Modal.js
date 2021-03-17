import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }
    
    render() {
        const style = {
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
        };
        
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className={classes.Modal} style={style}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
};

export default Modal;