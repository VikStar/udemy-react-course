import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.scss';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => ({ showSideDrawer: !prevState.showSideDrawer }));
    }
    
    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClecked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

export default Layout;