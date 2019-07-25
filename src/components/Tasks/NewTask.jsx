import React from 'react'
import {connect} from 'react-redux'
import * as tasksActions from '../../actions/tasksActions'

import Loader from '../Loader'
import Error from '../NotFound'
import {Redirect} from 'react-router-dom'

class NewTask extends React.Component{

    changeUserID_Task= (event) =>{
        console.log(event.target.value)
        this.props.changeUserID_Task(event.target.value)
    }

    changeTitle_Task = (event) =>{
        console.log(event.target.value)
        this.props.changeTitle_Task(event.target.value)
    }

    saveNewTask = () =>{
        const {userId, title, saveNewTask} = this.props
        const NewTask = {
            userId: userId, 
            title: title,
            completed: false
        }
        saveNewTask(NewTask)
    }
    enabled = () =>{
        const {userId, title, loading_tasks} = this.props        
        if (loading_tasks){
            return true
        }
        if (!userId || !title){
            return true
        }
        return false
    }
    render(){
        const { loading_tasks, error_tasks } = this.props;
 
        if (loading_tasks) {
          return <Loader />;
        } 
        if (error_tasks) {
          return <Error mensaje={error_tasks} />;
        }
        return(            
            <div className="container">
                {
                    (this.props.return) ? <Redirect to="/tasks"/> : ""
                }
                <div className="row">
                    <h1>
                        New Task
                    </h1>                    
                </div>
                <div className="row">
                    <form action="">
                        <div className="form-group">
                            <label>Usuario ID</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="userid" 
                                aria-describedby="userid" 
                                placeholder="Enter User ID"
                                defaultValue={this.props.userID}
                                onChange={this.changeUserID_Task}
                            />
                            <small id="userid" className="form-text text-muted">Asegurese de ingresar el ID correcto</small>
                        </div>
                        <div className="form-group">
                            <label>Task Title</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="tasktitle" 
                                aria-describedby="tasktitle" 
                                placeholder="Enter Task Title"
                                defaultValue={this.props.taskTitle}
                                onChange={this.changeTitle_Task}
                            />                            
                        </div>
                        <button 
                            type="button" 
                            className="btn btn-success"
                            onClick={this.saveNewTask}
                            disabled={this.enabled()}
                        >
                           Save Task
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({tasksReducer}) => tasksReducer

export default connect(mapStateToProps, tasksActions)(NewTask)