import React from 'react'

// styled
import styled from 'styled-components';

// components
import Pending from '../components/Pending.js';
import InProgress from '../components/InProgress.js';
import ToBeReviewed from '../components/ToBeReviewed.js';
import Published from '../components/Published.js';



export default function BugContainer() {
    return (
        <StyledBugContainer>

            <Pending />
            <InProgress />
            <ToBeReviewed />
            <Published />

        </StyledBugContainer>
    )
}

const StyledBugContainer = styled.div`
height: 100%;
`;