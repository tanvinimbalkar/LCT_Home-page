import React from 'react';

const Nav = () => {
    const [state,setState] = React.useState(true);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                <ul className="navbar__left">
                    <div className="navbar__left.logo">
                        <img src="./assets/logo.jpg" alt="img"/>
                    </div>
                </ul>
                {state ? 
                    <ul className="navbar__right">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li>
                        <a href="">Our Work</a>
                    </li>
                    <li>
                        <a href="">Content</a>
                    </li>
                    <li>
                        <a href="">Careers</a>
                    </li>
                    <li>
                        <a href="">Questionnaire</a>
                    </li>

                </ul> : ''}
                
                </div>
                
            </div>
            <div className="toggle" onClick={() => setState(!state)}>
                T
            </div>
        </nav>
    )
}

export default Nav;
