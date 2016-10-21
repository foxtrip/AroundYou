import { createStore, compose } from 'redux'
import { connect } from 'react-redux'

//1. initialState 
const initialState = {
      mapList : [], 
      newmarker : false,  //upload click 시 marker 생성시킴 
      pinLocation : {} //uploadView에서 post 로 db에 저장됨. 
};

//2. action : 1. mapList 를 새로 바꿈. 2.newmarker 를 true, false 로 변경시킴 3. 클릭시 pinLocation 값을 받음. 
const GET_MAPLIST = "getMaplist"//ajax 요청후 결과값을 받아 처리하는 action 
const GET_NEW_MARKER = "getNewmarker"
const GET_PINLOCA = "getPinlocation"

//3. reducer 
const reducer = (state, action) => {
  switch(action.type){
     case GET_MAPLIST:
       return Object.assign({}, state , {mapList: action.value})
    case GET_NEW_MARKER:
      return Object.assign({}, state , {newmarker: action.value})
    case GET_PINLOCA:
      return Object.assign({}, state , {pinLocation: action.value})
    default:
      return state
  }
}

// {store}
const store = createStore(reducer, initialState, compose(
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

// {connector}
const mapStateToProps = (state) => ({ mapList: state.mapList, newmarker: state.newmarker, pinLocation: state.pinLocation }) //  helper1 : 전체 시스템의 state Tree (무조건 한개. 변형불가)를 스토어 => 컴포넌트로 전달
const mapDispatchToProps = (dispatch) => {  //helper2 :  하위 컴포넌트에서 올라오는 요청(dispatch)을 해석하여 시스템의 어느 쪽으로 요청을 전달(mapDispatchToProps) 할 것인지를 결정
    return { 
      getMaplist: (data) => { dispatch({type: GET_MAPLIST , value: data }) } ,
      getNewmarker: (bool) => { dispatch({type:GET_NEW_MARKER, value:bool}) },
      getPinlocation: (loca) => { dispatch({type:GET_PINLOCA, value:loca}) }
    } //component 에서 setSearchTerm(term)을 dispatch 시에는 {type:SET_SEARCH_TERM, value:term}을 dispatch
}

const connector = connect(mapStateToProps, mapDispatchToProps) 
module.exports = { connector, store } 