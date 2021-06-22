import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;

    width: 180px;
    height: 50px;

    border-radius: 5px;

    background: ${props => props.actived ? '#EE6B26' : '#20295f' };

    cursor: pointer;

    &:hover {
        background: #EE6B26;
    }

    img {
        width: 25px;
        height: 25px;
        margin: 10px;
    }

    span {
        color: #FFF;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }
`;