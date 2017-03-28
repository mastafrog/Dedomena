import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Layout extends PureComponent {
  render () {
    return (
      <div className="view">
        <nav className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link className="navbar-brand" to="/">
                    <img className="header-logo" src="http://4vector.com/i/free-vector-nike-just-do-it-logo_090584_NIKE_Just_do_it_logo.png"/>
              </Link>
            </div>
          </div>
        </nav>
        {this.props.children}
        <footer className="text-center">
          <p></p>
        </footer>
      </div>
    );
  }
}
