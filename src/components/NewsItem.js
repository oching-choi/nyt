import NewsItemDiv from "../style/NewsItemStyle"
import { useDispatch, useSelector } from "react-redux";


function NewsItem({item}){
   
    return(
        <NewsItemDiv>
            <span>{item.pub_date.substr(0,10)}</span>
            <strong>{item.headline.main}</strong>
            <p>{item.snippet}</p>
            <a href={item.web_url} target="_blank" rel="noopener noreferrer">More</a>
            <a>Clip</a>
        </NewsItemDiv>  
    )
}

export default NewsItem;