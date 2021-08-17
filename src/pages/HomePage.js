import React from 'react'

// styled
import styled from 'styled-components';

// components
import Issue from '../components/Issue.js';

export default function HomePage({ issues, name, date, description, status, file }) {
    return (
        <StyledHomePage>
            <Issue 
                name={name}
                date={date}
                description={description}
                status={status}
                file={file}
            />

        </StyledHomePage>
    )
}

const StyledHomePage = styled.div`
height: 100%;
`;