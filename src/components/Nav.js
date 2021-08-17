// styled
import styled from 'styled-components';


// components
import Nav from './compnents/Nav.js';

export default function Nav() {
    return (
        <StyledNav>
            <h3>Buggy</h3>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </StyledNav>
    )
}

const StyledNav = styled.div`
height: 10vh;
`;
