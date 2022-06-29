import React, {Fragment, useState} from "react";

const EditTodo =({todo})=>{
    const [title, setTitle] = useState(todo.title);
    return (
        <Fragment>
            <button type="button" 
                className="btn btn-primary" 
                data-toggle="modal" 
                data-target={`#id${todo.id}`}>
                Edit
            </button>

        <div className="modal" id={`id${todo.id}`}>
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Edit Todo</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div className="modal-body">
                        <input type='text' className="form-control" value={title} onChange={e => setTitle(e.target.value)}/>
                    </div>
                    <div className="modal-footer">
                        <button type='button' className='btn btn-warning' data-dismiss='modal'>Edit</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default EditTodo;