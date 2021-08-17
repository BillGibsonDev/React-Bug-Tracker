
import styled from 'styled-components';

export default function Issue({name, date, description, status, file}) {
    return (
        <StyledIssue>
            <h3>{name}</h3>
            <h3>{date}</h3>
            <h3>{status}</h3>
            <p>{description}</p>
        </StyledIssue>
    )
}

const StyledIssue = styled.div`

`;