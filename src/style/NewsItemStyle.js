import styled from 'styled-components'

const NewsItemDiv = styled.li`
    background: #fff;
    /* box-shadow: 0 2px 5px 1px rgb(64 60 67 / .16); */
    box-sizing: border-box;
    padding:20px;
    width: 90%;
    max-width:800px;
    margin: 0 auto 25px;
    border-radius: 8px;
    text-align: right;
    line-height: 1.2;
    span{
        display: block;
        font-size:13px;
        text-align: left;
        color:#54BAB9;
        font-weight: 600;
    }
    strong{
        display: block;
        font-size: 18px;
        font-weight: 600;
        margin: 20px 0;
        text-align: left;
        width:60%;
        white-space : nowrap;
        text-overflow : ellipsis;
        overflow: hidden;
        line-height: 1.8;
        color:#707070;
    }
    p{
        font-size: 16px;
        margin-bottom: 15px;
        text-align: left;
        width:70%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height:1.5;
    }
    a{
        border:none;
        border-radius: 5px;
        color:#54BAB9;
        width: 70px;
        line-height:30px;
        display: inline-block;
        vertical-align: top;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: all .3s;
        background:#EEEEEE;
        text-decoration: none;
        text-align:center;
    }
    a:first-of-type{
        margin-right:15px;
    }
    a:hover{
        box-shadow: 0 2px 5px 1px rgb(64 60 67 / .16);
    }
`
export default NewsItemDiv;