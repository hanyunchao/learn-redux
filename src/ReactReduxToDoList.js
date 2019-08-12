import React, { Component } from 'react';
import {connect} from 'react-redux'
import {get_list} from './store/actions'
//-----关键代码--------end
class TodoList extends Component {
    //-----关键代码--------start
    // constructor(props){
    //     super(props)
    //
    // }

    //-----关键代码--------end
    render() {
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.inputChange.bind(this)}/>
                    <button>提交</button>
                </div>
                <ul>
                    <li>JSPang</li>
                </ul>
            </div>
        );
    }
}

const stateToProps = (state) =>{
    return{
        inputValue:state.inputValue
    }
}

const dispatchToProps = (dispatch) =>{
    return{
        inputChange(e){
            dispatch(get_list())
            console.log('mythis',this, e.target.value)
        }
    }
}
export default connect(stateToProps,dispatchToProps)(TodoList);