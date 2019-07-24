import React from 'react'

class NewTask extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <h1>
                        New Task
                    </h1>                    
                </div>
                <div className="row">
                    <form action="">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Usuario ID</label>
                            <input type="number" class="form-control" id="userid" aria-describedby="userid" placeholder="Enter User ID"/>
                            <small id="userid" class="form-text text-muted">Asegurese de ingresar el ID correcto</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Task Title</label>
                            <input type="text" class="form-control" id="tasktitle" aria-describedby="tasktitle" placeholder="Enter Task Title"/>                            
                        </div>
                        <button type="button" class="btn btn-success">
                           Save Task
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewTask