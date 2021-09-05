import React from 'react'

// styled
import styled from 'styled-components';

// components
import Issue from '../components/Issue.js';

const HomePage = ({ issues }) => {
     console.log(issues);
    
    return (
        <StyledHomePage>
            {issues.map((issues, key) => {
                return(
                    <Issue 
                        name={issues.name}
                        date={issues.date}
                        description={issues.description}
                        status={issues.status}
                        file={issues.file}
                        key={issues.id}
                    />
                )
            })}
        </StyledHomePage>
    )
}

const StyledHomePage = styled.div`
height: 100%;
`;

export default HomePage;