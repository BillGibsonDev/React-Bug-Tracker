
import { useEffect } from 'react';

// styled
import styled from 'styled-components';

const Issue = ({name, date, description, status, file}) => {

const colorCode = (e) => {
    let x = e.target
    if ({status} == 'Pending'){
        x.style.background = 'red';
    } else if ({status} == 'InReview'){
        x.style.background = 'blue';
    } else {
        x.style.background = 'black';
    }
}


    return (
        <StyledIssue id="issue" onClick={colorCode}>
            <h3>{name}</h3>
            <h3>{date}</h3>
            <h3>{status}</h3>
            <p>{description}</p>
            <img src={file} alt={file} />
            
        </StyledIssue>
    )
}

const StyledIssue = styled.div`
height: 20%;
h3 {
    font-size: 1em;
}
p {
    font-size: 2em;
}
`;

export default Issue;