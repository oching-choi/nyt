import styled from 'styled-components'

const HomeDiv = styled.div`
    div{
        width:90%;
        max-width: 600px;
        height:45px;
        margin: 30px auto 70px;
    }
    input[type=text]{
        width:100%;
        height:100%;
        border-radius: 7px;
        border:1px solid transparent;
        /* box-shadow: 0 2px 5px 1px rgb(64 60 67 / .16); */
        box-sizing: border-box;
        padding: 20px;
        font-size: 17px;
        color: #929292;
    }
    input::placeholder{ font-size: 15px; color: #929292;}
    input:focus {outline:none;}
`
export default HomeDiv;