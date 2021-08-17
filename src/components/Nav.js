// styled
import styled from 'styled-components';

// router
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <StyledNav>
            <h3>Buggy</h3>
            <nav>
                <a href="#">Home</a>
                <a href="#">Create Bug</a>
                <a href="#">About</a>
                <a href="#">Help</a>
            </nav>
        </StyledNav>
    )
}

const StyledNav = styled.div`
height: 10vh;
display: flex;
width: 100%;
margin: auto;
justify-content: space-between;
align-items: center;
h3 {
    font-size: 3em;
}
nav {
    display: flex;
    justify-content: space-around;
    width: 30%;
    a {
        font-size: 1.5em;
    }
}
`;
