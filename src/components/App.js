import React from "react";
import { GlobalStyle } from "../GlobalStyle";
import { Layout } from "components/Layout/Layout";
import { AppBar } from "components/AppBar/AppBar";
import { TaskForm } from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <AppBar />
        <TaskForm />
        <TaskList />
      </Layout>
    </>
  );
};

export default App;
