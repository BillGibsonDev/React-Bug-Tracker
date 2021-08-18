
import { useState } from 'react';

// styled
import styled from 'styled-components';

const CreateIssue = ({ issues, setIssues, setName, setDate, setDescription, setFile, setStatus }) => {

const createIssue = (e) => {
    setDate(document.getElementById('date').value);
    setName(document.getElementById('name').value);
    setStatus(document.getElementById('status').value);
    setDescription(document.getElementById('description').value);
    setFile(document.getElementById('file').files[0].name);
}

const submitIssueHandler = (e) => {
    e.preventDefault();
    setIssues([
        ...issues, { 
            name: document.getElementById('name').value, 
            date: document.getElementById('date').value, 
            status: document.getElementById('status').value, 
            description: document.getElementById('description').value,
            file: document.getElementById('file').files[0].name,
            id: Math.random() * 100 }
    ]);
}

    return (
        <StyledCreateIssueForm onSubmit={createIssue}>
                <h3>Enter an Issue</h3>
                <label htmlFor="title">Your Name:
                    <input type="text" id='name' required />
                </label>
                <label htmlFor="date">Date: 
                    <input type="date" id='date' required />
                </label>
                <select name="status" id="status" required>
                    <option value="Pending">Pending</option>
                    <option value="InProgress">In Progress</option>
                    <option value="ToReview">To Be Reviewed</option>
                    <option value="Approved">Approved</option>
                </select>
                <label htmlFor="title">Description:
                    <textarea cols="30" rows="10" id="description"  required />
                </label>
                <label htmlFor="file">Image or File:
                    <input type="file" id='file' />
                </label>
                <button type="submit" onClick={submitIssueHandler}>Submit</button>
                <button>Clear</button>
        </StyledCreateIssueForm>
    )
}


const StyledCreateIssueForm = styled.form`
z-index: 99;
height: 80%;
width: 40%;
display: flex;
flex-direction: column;
margin: auto;
`;


export default CreateIssue;