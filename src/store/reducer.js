import {DEL_ITEM,GET_LIST} from './action-types'
const defaultState = {
    inputValue:"write something",
    list:[]
}

export default (state = defaultState,action) =>{
    if (action.type === GET_LIST){
        const newstate = {...state,list:action.data.list}
        console.log('newState',newstate)
        return newstate
    }
    if (action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if(action.type === 'addItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if (action.type === DEL_ITEM){
        state.list.splice(action.index, 1)
        console.log(action.index,state)
        return state
    }
    return state
}