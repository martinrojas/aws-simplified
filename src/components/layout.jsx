import Footer from "./footer";
import HeaderBar from "./header";
import React from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export const Layout = () => {
  return (
    <div>
      <HeaderBar />
      <main className='container mx-auto'>
        <TodoForm />
        <TodoList />
      </main>
      <Footer />
    </div>
  );
};
