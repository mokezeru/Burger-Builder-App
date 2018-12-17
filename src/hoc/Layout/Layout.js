import React, { Component } from 'react';
import Auxl from '../Auxl/Auxl';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer:true
    }

    sideDrawerClosedHandler = ()=>{
        this.setState({showSideDrawer:false});
    }

    sideDrawerToggleHandler = ()=>{
        this.setState((prevState)=>{return{showSideDrawer:!prevState.showSideDrawer}
    });
    }
    render() {
        return (
            <Auxl>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxl>
        );
    }
}

export default Layout;