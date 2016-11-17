import React from 'react';
import {Link, IndexLink, withRouter} from 'react-router';


class NavItem extends React.Component {
    render () {
        const { router, index, to, children } = this.props;
        let isActive = router.isActive(to, true);
        const LinkComponent = index ?  IndexLink : Link;
        const href = router.createHref(to);

        return (
            <li className={isActive ? 'active' : ''}>
                <a href={href}>{children}</a>
                {/*<LinkComponent to={to}>{children}</LinkComponent>*/}
            </li>
        )
    }
}

NavItem = withRouter(NavItem);

class Nav extends React.Component{
    render(){
        return(
            <div className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    <NavItem to="/" index={true}>Home</NavItem>
                    <NavItem to="/timer">Timer</NavItem>
                    <NavItem to="/countdown">Countdown</NavItem>
                </ul>
            </div>
        );
    }
}

export default Nav;

/*
* <li>
 <IndexLink to="/" activeClassName="active">
 <i className="fa fa-home" aria-hidden="true"></i>
 </IndexLink>
 </li>
 <li>
 <Link to="timer" activeClassName="active">Timer</Link>
 </li>
 <li>
 <Link to="countdown" activeClassName="active">Countdown</Link>
 </li>
*
* */