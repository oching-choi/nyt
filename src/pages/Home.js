import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchNews, addNews } from '../reducers/newsSlice'
import { useInView } from "react-intersection-observer";
import HomeDiv from "../style/HomeSytle";
import NewsItem from "../components/NewsItem";

function Home(){
    const dispatch = useDispatch();
    //newsList
    const [topic, setTopic] = useState('');
    const newsList = useSelector(state=>state.newsSlice.newsList);
    //infinity scroll
    const page = useSelector(state=>state.newsSlice.page);  
    const { ref, inView } = useInView()

    console.log(newsList)
    console.log(page)

    //getNews
    async function getNews(type){
        if(topic){
            try{
                const APIKey ='5tlsZF2aqpG3Nr4wt98bY0uavE2xGx0p';
                const res = await axios.get(
                    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&page=${page}&api-key=${APIKey}`
                );
                const {docs: newsList} = res.data.response;
                switch(type) {
                    case 'SEARCH':
                        dispatch((searchNews(newsList)));
                        break;
                    case 'ADD' :
                        dispatch(addNews(newsList));
                        break;
                    default:
                        throw new Error('Type is not decieded')
                }
            } 
            catch{
                alert('erros')
            }
        }    
    }

    //topic 변경시마다 재렌더링 // searchNews용
    useEffect(()=>{
        const timer = setTimeout(()=>{
           //뉴스 api에서 기사 get 
           getNews('SEARCH');
        },500)
        return()=>{
            clearTimeout(timer);
        }
    },[topic])

    //infinity scroll // addNews용 
    React.useEffect(() => {
        if (inView) {
            if (!topic) return;
            getNews('ADD');
        }
    }, [inView]);
    

    return (
        <HomeDiv>
            <div className="input-area">
                <input type='text' value={topic} placeholder="검색어를 입력해주세요." onChange={(e)=>{
                    setTopic(e.target.value.trim());
                }}></input>
            </div>

            <ul className="news-area">
                {
                    newsList.length<=0
                    ? null
                    : (
                        newsList.map((item, idx)=>{
                            return <NewsItem item={item} key={item._id}/>
                        })
                        
                      )
                }
                <div ref={ref}></div>
            </ul>
        </HomeDiv>
    )
}

export default Home;