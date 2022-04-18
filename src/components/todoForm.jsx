import { Field, Form } from "react-final-form";

import { DataStore } from "aws-amplify";
import React from "react";
import { ToDo } from "../models";

const TodoForm = () => {
  const onSubmit = async (values) => {
    // log values to the console
    console.log("form", values);
    const newTodo = await DataStore.save(new ToDo(values));
    console.log("newTodo", newTodo);
  };

  return (
    <section className='text-gray-600 body-font'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            Add to your Todo List
          </h1>
          <p className='mb-8 leading-relaxed'>
            This is meant to be a simple form to add to your todo list.
          </p>
          <div className='flex justify-center border-2 rounded-lg border-slate-500 px-6 py-4'>
            <Form
              onSubmit={onSubmit}
              initialValues={{
                completed: false,
                name: "creating new todo",
                description: "this is a new todo",
              }}
              render={({ handleSubmit, form, submitting, values }) => (
                <form onSubmit={handleSubmit}>
                  <div className='mb-4 grid-cols-3 grid'>
                    <label>Name</label>
                    <Field
                      name='name'
                      component='input'
                      type='text'
                      placeholder='Name'
                      className='form-input col-span-2 px-4 py-3 rounded-md'
                    />
                  </div>
                  <div className='mb-4 grid-cols-3 grid'>
                    <label>Description</label>
                    <Field
                      name='description'
                      component='input'
                      type='text'
                      className='form-input col-span-2 px-4 py-3 rounded-md'
                      placeholder='Description'
                    />
                  </div>
                  <div className='mb-4 grid-cols-3 grid'>
                    <label>Completed</label>
                    <Field
                      name='completed'
                      component='input'
                      type='checkbox'
                      className='form-checkbox '
                    />
                  </div>

                  <div className='mb-4 grid-cols-2 grid gap-4'>
                    <button
                      className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'
                      type='button'
                      onClick={form.reset}
                      disabled={submitting}
                    >
                      Clear
                    </button>
                    <button
                      className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                      type='submit'
                      disabled={submitting}
                    >
                      Add
                    </button>
                  </div>
                  <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoForm;
