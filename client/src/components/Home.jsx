import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Home extends PureComponent {
  active (path) {
    if (this.props.location.pathname === path) {
      return 'active';
    }
  }
  render () {
    return (
      <div className="main">
        <div className="site-wrapper">
          <div className="site-wrapper-inner">
            <div className="cover-container">
              <div className="masthead clearfix">
                <div className="inner">
                  <nav>
                    <img className="header-logo blitz" src="http://4vector.com/i/free-vector-nike-just-do-it-logo_090584_NIKE_Just_do_it_logo.png"/>
                    <ul className="nav masthead-nav">
                      <li className={this.active('/')}><Link to="/">Home</Link></li>
                      <li className={this.active('/about')}><Link to="/about">About</Link></li>
                      <li className={this.active('/contact')}><Link to="/contact">Contact</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}