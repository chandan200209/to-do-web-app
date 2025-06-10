import React, { useEffect, useState } from 'react'
import trashSolid from '../assets/trash-solid.svg';
import editSolid from '../assets/pen-solid.svg';
import { v4 as uuidv4 } from 'uuid';

const ToDo = () => {
    // single input text
    const [todo, setToDo] = useState("");
    // array of todo's
    const [todos, setToDos] = useState([]);
    // show finished todos
    const [showFinished, setShowFinished] = useState(true);

    useEffect(() => {
        let todoString = localStorage.getItem("todos");
        if (todoString) {
            let todos = JSON.parse(localStorage.getItem("todos"));
            setToDos(todos);
        }
    }, []);

    const saveToLS = (params) => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const toggleFinished = () => {
        setShowFinished(!showFinished);
    }

    const handleAdd = () => {
        setToDos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
        setToDo("");
        saveToLS();
    }
    const handleEdit = (e, id) => {
        let t = todos.filter(i => i.id === id);
        setToDo(t[0].todo);
        let newTodos = todos.filter(item => {
            return item.id !== id;
        })
        setToDos(newTodos);
        saveToLS();
    }
    const handleDelete = (e, id) => {
        let newTodos = todos.filter(item => {
            return item.id !== id;
        })
        setToDos(newTodos);
        saveToLS();
    }
    const handleChange = (e) => {
        setToDo(e.target.value)
    }
    const handleCheckBox = (e) => {
        e.preventDefault();
        let id = e.target.name;
        let index = todos.findIndex(item => {
            return item.id === id;
        });
        let newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setToDos(newTodos);
        saveToLS();
    }

    return (
        <div className="container border-2 border-black border-b-0 md:mx-auto md:w-1/2">
            <div className="bg-[#7AE2CF] md:min-h-[480px] min-h-[650px] ">
                <div className='addToDo px-6 py-4 h-[150px]'>
                    <h1 className='text-2xl font-bold font-edu underline'>Add a To-Do</h1>
                    <div className='flex py-3 justify-between'>
                        <input value={todo} onChange={handleChange} className='w-md h-12 focus:outline-0 font-beg text-gray-800 font-bold' placeholder='Enter your To-do here :'></input>
                        <button onClick={handleAdd} disabled={todo.length <= 1} className='w-24 cursor-pointer rounded-2xl bg-[#06202B] disabled:bg-[#06202be4] hover:border-2 hover:border-[#39aaad] hover:outline-2 hover:outline-offset-2 font-beg text-[#F5EEDD]'>Add</button>
                    </div>
                </div>
                <div className='px-6 py-4 bg-[#39aaad] md:min-h-[340px] min-h-[550px]'>
                    <div className=' flex items-center justify-between mb-3'>
                        <div><h1 className='font-bold text-2xl font-edu underline'>Your To-Do's</h1></div>
                        <div className='flex gap-2.5'><input onChange={toggleFinished} type="checkbox" checked={showFinished} /><span className='font-bold'>Show Finished</span></div>
                    </div>
                    {(todos.length) === 0 && <div className='font-bold my-6 uppercase font-mono flex justify-center text-2xl'>No ToDo's here to display.</div>}
                    {todos.map(item => {

                        return (showFinished || !item.isCompleted) && <div key={item.id} className='todo py-1 px-6'>
                            <div className='font-marck text-xl flex justify-between items-center'>
                                <div className='w-[80%]'>
                                    <p className="flex items-center">
                                        <span className='mr-2 flex items-center font-bold'>
                                            <input onChange={handleCheckBox} className="text-[50px] relative top-1" type='checkbox' checked={item.isCompleted} name={item.id} id="">
                                            </input>
                                        </span><span className={item.isCompleted ? "line-through pl-3" : "pl-3"}>{item.todo}</span>
                                    </p>
                                </div>
                                <div className='buttons flex gap-6'>
                                    <button onClick={(e) => { handleEdit(e, item.id) }} type='submit' className=''><img className='w-9 cursor-pointer hover:border-2 rounded-lg p-1.5 hover:p-1 relative left-3' src={editSolid}></img></button>
                                    <button onClick={(e) => { handleDelete(e, item.id) }} type='submit' className=''><img className='w-8 cursor-pointer hover:border-2 rounded-lg p-1.5 hover:p-1' src={trashSolid}></img></button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ToDo;
