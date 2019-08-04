import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {description:'', list:[]}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.refresh()
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description:'', list:resp.data}))
    }
    handleChange(event){
        this.setState({ ...this.state, description:event.target.value })
    }
    handleAdd(){
        const description = this.state.description
        axios.post(URL,{description})
            .then(resp=> this.refresh())
    }
    handleRemove(todo){
        console.log(todo)
        axios.delete(`${URL}/${todo._id}`)
            .then(resp=> this.refresh())
    }

    render(){
        return(
            <div className='title'>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm description={this.state.description} 
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}/>
                <TodoList 
                    list={this.state.list} 
                    handleRemove={this.handleRemove}/>
            </div>
        )
    }
}