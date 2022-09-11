import React from 'react';
import styled from 'styled-components';

function EditAndDelete(props) {
  return (
    <div>
        <Buttons>
            <EditButton>
                <img src="/Assets/editicon.svg" alt="" />
                Edit
            </EditButton>
            <DeleteButton>
                <img src="/Assets/deleteicon.svg" alt=""/>
                Remove
            </DeleteButton>
        </Buttons>
    </div>
  )
}

const Buttons = styled.div`
    width: 220px;
    height: 50px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

`

const EditButton = styled.div`
    width: 90px;
    height: 20px;
    border: 1px solid green;
    color: #2C8E71;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const DeleteButton = styled.div`
    width: 90px;
    height: 20px;
    border: 1px solid brown;
    color: #DF1A1A;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export default EditAndDelete