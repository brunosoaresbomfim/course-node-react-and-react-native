import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;
`;

export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .inative {
        opacity: 0.5;
    }

    button {
        border: none;
        background: none;
    }

    img {
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }
`;

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    span {
        color: #707070;
    }

    input {
        font-size: 16px;
        padding: 12px;
        border: none;
        border-bottom: 1px solid #EE6D26;
    }

    img {
        width: 20px;
        height: 20px;
        position: relative;
        left: 92%;
        bottom: 35px;
    }
`;


export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    span {
        color: #707070;
    }

    textarea {
        font-size: 16px;
        padding: 12px;
        border: none;
        border: 1px solid #EE6D26;
        border-radius: 5px;
    }
`;

export const Options = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        cursor: pointer;
        font-weight: bold;
        color: #2029f5;
        border: none;
        background: none;

        &:hover {
            opacity: 0.7;
        }
    }

    div {
        display: flex;
        align-items: center;
        color: #EE6B26;
        font-weight: bold;
    }

`;

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;
    
    button {
        width: 100%;
        cursor: pointer;
        background-color: #EE6B36;
        border: none;
        font-size: 20px;
        color: #FFF;
        font-weight: bold;
        padding: 20px;
        border-radius: 30px;

        &:hover {
            opacity: 0.7;
        }
    }
`
