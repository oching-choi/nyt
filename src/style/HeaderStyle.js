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
        background-color: #54BAB9;
        cursor: pointer;
        transition: all .2s;
        color:#fff;
    }
    li:first-child{
        margin-right:20px;
    }
    li:hover{
        box-shadow: 0 2px 5px 1px rgb(64 60 67 / .16);
        transform: scale(1.04)
    }
`
export default HeaderDiv;