import styled from 'styled-components'

const HomeDiv = styled.div`
    form{
        width:80%;
        max-width: 500px;
        height:40px;
        margin: 30px auto 0;
    }
    input[type=text]{
        width:100%;
        height:100%;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-sizing: border-box;
        padding: 0 10px;
    }
    input:focus {outline:none;}
`
export default HomeDiv;