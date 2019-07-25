import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as tasksActions from '../../actions/tasksActions'

import Loader from '../Loader'
import Error from '../NotFound'
import '../styles/Tasks.css'

class IndexTasks extends React.Component{

    componentDidMount(){
        if (!Object.keys(this.props.tasks).length){
            this.props.allTasks()
        }        
    }

    renderTasks = () =>{
       const { tasks, loading_tasks, error_tasks } = this.props;

       if (loading_tasks) {
         return <Loader />;
       }

       if (error_tasks) {
         return <Error mensaje={error_tasks} />;
       }

        //El método Object.keys() devuelve un array de las propiedades namesde un objeto, en el mismo orden como se obtienen en un loop normal
       return Object.keys(tasks).map((userId)=>(
            <div key={userId} className="container">
                <div className="row">
                    <h2>Usuario {userId}</h2>
                    {this.renderTasksByUser(userId)}
                </div>                
            </div>
       ))
    }

    renderTasksByUser = (userId) =>{
        const {tasks} = this.props
        const userTask = {...tasks[userId]}
        return(
            Object.keys(userTask).map((task)=>(
                <div key={userTask[task].id} className="taskContainer col-12">
                    <div className="task">
                        <p>
                            {userTask[task].id} - {userTask[task].title} - 
                            <span className={userTask[task].completed ? "taskCompleted" : "taskNotCompleted"}>{userTask[task].completed ? "Completed" : "Not Completed"}</span> 
                            <Link to={`/tasks/newtask/${userId}/${userTask[task].id}`}>
                                <button type="button" className="btn btn-info btn-sm">Edit</button>
                            </Link>
                            <Link to={`/tasks/newtask/${userId}/${userTask[task].id}`}>
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
                            </Link>
                        </p>
                    </div>                    
                </div>
            ))
        )
    }   

    render(){        
        return(
            <div className="container"> 
                <Link to="/tasks/newtask">
                    <button type="button" className="btn btn-primary">
                        Add Task
                    </button>  
                </Link>         
                {this.renderTasks()}
            </div>
        )
    }
}

const mapToStateToProps = ({tasksReducer}) => tasksReducer

export default connect(mapToStateToProps, tasksActions)(IndexTasks)