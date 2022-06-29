import React,{Fragment,useState} from 'react';

const InputTodo = () => {

    const [title, setTitle] = useState('');

    const onSubmitFrom = async(e) => {
        e.preventDefault();
        try{
            const body = {title: title};
            const response = await fetch('http://localhost:8000/api/todos',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
        } catch(err){
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <h1 className='text-center mt-5'>MyList</h1>
                <form className='d-flex' onSubmit={onSubmitFrom}>
                    <input type='text' className='from-control' value={title} 
                    onChange={e => setTitle(e.target.value)} />
                    <button className='btn btn-success'>submit</button>
                </form>
        </Fragment>
    )
};

export default InputTodo;