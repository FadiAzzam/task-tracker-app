import React, { Component } from "react";
import steps from "./data/responceSteps.json";
import uuid from "react-uuid";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import MultiStepForm from "./components/MultiStepForm";
import Dashboard from "./components/Dashboard";

const data = [
  {
    id: 1,
    task: "Termin 1",
    day: "2021-12-12",
    reminder: true,
  },
  {
    id: 2,
    task: "Termin 2",
    day: "2021-12-12",
    reminder: true,
  },
  {
    id: 3,
    task: "Termin 3",
    day: "2021-12-12",
    reminder: true,
  },
];

export default class App extends Component {
  state = { tasks: data };

  constructor() {
    super();
    this.state = {
      surveyCompleted: false,
      customizedSteps: [],
      projectName: "",
    };
  }

  deleteTask = (id) => {
    this.setState({ tasks: this.state.tasks.filter((task) => task.id !== id) });
  };

  addTask = (task) => {
    const id = uuid();
    const newTask = { id, ...task };
    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  handleSurveySubmit = (responce) => {
    const customizedSteps = this.processResponses(responce);
    this.setState({ surveyCompleted: true, customizedSteps: customizedSteps });
  };

  updateProjectName = (value) => {
    this.setState({ projectName: value });
  };

  processResponses(response) {
    const customizedSteps = response.map((res) => {
      const stepsForAnswer = steps.find((step) => step.value === res.value);
      if (stepsForAnswer) {
        return { ...res, steps: stepsForAnswer.steps };
      }
      return res;
    });

    return customizedSteps;
  }

  render() {
    if (this.state.surveyCompleted) {
      return (
        <div className="mainContainer">
          <Header title="Task Tracker" />
          <Sidebar projectName={this.state.projectName} />
          <Dashboard
            steps={this.state.customizedSteps}
            projectName={this.state.projectName}
          />
        </div>
      );
    }
    return (
      <div>
        <MultiStepForm
          onSubmit={this.handleSurveySubmit}
          projectName={this.state.projectName}
          updateProjectName={this.updateProjectName}
        />
        {/*

        <div className="body">
           <AddTask onAdd={this.addTask} />
          {this.state.tasks.length > 0 ? (
            <Tasks
              className="taskContainer"
              tasks={this.state.tasks}
              onDelete={this.deleteTask}
            />
          ) : (
            "Nothing to show"
          )}
        </div>
        */}
      </div>
    );
  }
}
