import React, { Component } from "react";
import steps from "./data/responceSteps.json";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import MultiStepForm from "./components/MultiStepForm";
import Dashboard from "./components/Dashboard";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      surveyCompleted: false,
      customizedSteps: [],
      projectName: "",
    };
  }

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
      </div>
    );
  }
}
