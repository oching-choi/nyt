import styled from 'styled-components'

const HeaderDiv = styled.div`
    height:70px;
    ul{
        height:100%;
        display:flex;
        box-sizing:border-box;
        padding:0 20px; 
        justify-content: flex-start;
        align-items: center;
    }
    li{
        font-weight: 600;
        vertical-align:center;
        padding:8px 15px;
        border-radius: 5px;
        background-color: palegreen;
        cursor: pointer;
    }
    li:first-child{
        margin-right:20px;
    }
`
export default HeaderDiv;