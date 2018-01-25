import React from 'react';

export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    onHamburgerClick = () =>  {
      this.props.onHamburgerClick && this.props.onHamburgerClick();
    };

    render(){
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-btn navbar-toggle collapsed" onClick={this.onHamburgerClick}>
                            <span className="sr-only">Toggle Navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    {this.props.children}
                </div>
            </nav>
        );
    }
}