import {DEL_ITEM,GET_LIST} from './action-types'
import axios from 'axios'
export function del_item(index) {

    return {type:DEL_ITEM,index}
}

export function get_list() {
    return (
        (dispatch) =>{
            axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
                .then((res)=>{
                    console.log(res)
                    dispatch({type:GET_LIST,data:res.data.data})
                }).catch((err)=>{
                    console.log('请求错误',err)
            })
        }

    )
}