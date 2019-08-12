import React,{Component} from 'react';
import {Input,Button,List} from 'antd'
import 'antd/dist/antd.css'
import {store} from "./store";
import {DEL_ITEM} from "./store/action-types"
import {del_item,get_list} from './store/actions'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state=store.getState()
        store.subscribe(()=>{this.setState(store.getState())})
    }

    changeInputValue = (e) =>{
        const action = {
            type:'changeInput',
            value:e.target.value
        }

        store.dispatch(action)
    }

    clickBtn = () =>{
        const action = {type:'addItem'}
        store.dispatch(action)
    }
    delItem =(index)=>{
        console.log('index,',index,del_item(index))
        store.dispatch(del_item(index))
    }

    componentDidMount(){
        // store.dispatch(get_list())
    }


    render(){
        return(
            <div>
                <div>
                    <Input placeholder={this.state.inputValue} style={{width:250}} onChange={this.changeInputValue} value={this.state.inputValue}>

                    </Input>
                    <Button type="primary" onClick={this.clickBtn}>增加</Button>
                </div>

                <div>
                    <List  style={{width:300}} bordered dataSource={this.state.list} renderItem={(item,index)=>(<List.Item onClick={()=>{this.delItem(index)}}>{item}</List.Item>)}>

                    </List>
                </div>
            </div>



        )
    }
}

export default TodoList