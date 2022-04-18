import { API, DataStore } from "aws-amplify";
import React, { useEffect } from "react";

import { ToDo } from "../models";
import { listToDos } from "../graphql/queries";

const TodoList = () => {
  async function onQuery() {
    const todoList = await DataStore.query(ToDo);
    // console.log(todoList);
    setTodos(todoList);
  }

  const [todos, setTodos] = React.useState([]);
  async function fetchTodos() {
    try {
      const todoData = await API.graphql({ query: listToDos });
      const todos = todoData.data.listToDos.items;
      setTodos(todos);
    } catch (err) {
      console.log("error fetching todos");
    }
  }
  useEffect(() => {
    // DataStore Query
    // onQuery();
    // GraphQL Query
    fetchTodos();
  }, []);
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-12 mx-auto'>
        <div className='flex flex-col text-center w-full mb-10'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Our Todo List
          </h1>
        </div>
        <div className='flex flex-wrap -m-2'>
          {todos.map((todo) => (
            <div key={todo?.id} className='p-2 lg:w-1/3 md:w-1/2 w-full'>
              <div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
                <div
                  className={`${
                    todo?.completed ? "bg-green-300" : "bg-slate-300"
                  } object-cover object-center flex-shrink-0 rounded-full mr-4`}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-14 h-14 text-white'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    {todo?.completed && (
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M5 13l4 4L19 7'
                      />
                    )}
                  </svg>
                </div>

                <div className='flex-grow'>
                  <h2 className='text-gray-900 title-font font-medium'>
                    {todo?.name}
                  </h2>
                  <p className='text-gray-500'>{todo?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodoList;
