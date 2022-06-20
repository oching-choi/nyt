import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 1,
    newsList:[],  
    history:[],
    clipList:[]  
};

const newsSlice = createSlice({
    name : 'newsSlice',
    initialState,
    reducers : {
      //초기 new rendering
      searchNews(state,action){
        const newsList = action.payload;
        return{
            ...state,
            page: 2,
            newsList
        }       
      }, 
      //infinity scroll
      addNews(state, action){
        const newsList = action.payload;
        return{
          ...state,
          page : state.page + 1,
          newsList: state.newsList.concat(newsList),
        }
      }, 
      //input onChange시, localStorage 'history'에 topic 5개까지 저장
      addHistory(){

      },
      //clip버튼 onClip시(토글), newsItem 저장
      addClipList(){

      }, 
      //clip버튼 onClip시(토글), newsItem 제거
      removeClipList(){

      }
    }
  }) 

  export default newsSlice; 
  export const { searchNews, addNews } = newsSlice.actions 