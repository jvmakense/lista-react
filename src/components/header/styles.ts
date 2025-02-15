import styled from "styled-components";

export const HeaderStyles = styled.header`
    background-color: #F5F5DC;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #333333;

    .titulo {
        text-align: center;
    }

    form {
        display: flex;
        flex-wrap: wrap;
        padding: 8px;
    }
    input{
        flex: 1;
        border: none;
        border-radius: 8px;
        box-shadow: 1px 1px 4px #333333;
        margin: 25px 8px;
        padding-left: 8px;
        height: 50px;
        min-width: 300px;
    }
    input:focus{
        outline: 1px solid #333;
    }
    button{
        background-color: #333333;
        color: #F5F5DC;
        height: 50px;
        padding: 0 16px;
        margin:0 32px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.5s;
    }
    button:hover{
        transition: 0.5s;
        background-color: #555;
    }
`