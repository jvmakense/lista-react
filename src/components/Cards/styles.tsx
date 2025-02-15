import styled from "styled-components";

export const CardsStyles = styled.div`
    color: black;

    .card{
        background-color: aliceblue;
        margin-left: 25%;
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid black;
        border-radius: 8px;
        justify-content: center;
        padding: 8px;
        max-width: 50vw;
    }
    .card-header {
        width: 100%;

        h3 {
            margin: 0;
        }
    }
    .card-body {
        width: 100%;
        display: flex;
        gap: 8px;
        padding: 0;
        p {
            flex: 1;
            border: 1px solid #aaa;
            border-radius: 4px;
            box-shadow: 1px 1px 1px;
            padding: 8px;
            margin: 0;
            background-color: aliceblue;
            width: 128px
        }
    }
`