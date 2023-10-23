import React, { Component } from "react";
import { TbProgress, TbCheck } from "react-icons/tb";

import Tabs from "./Tabs";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backlog: this.props.steps,
      inProgress: [],
      completed: [],
    };
  }

  moveToInProgress = (stepIndex, subStepIndex) => {
    const { backlog, inProgress } = this.state;
    const selectedStep = backlog[stepIndex].steps[subStepIndex];

    const updatedInProgress = [...inProgress, { value: selectedStep }];
    const updatedBacklog = [...backlog];
    updatedBacklog[stepIndex].steps = updatedBacklog[stepIndex].steps.filter(
      (_, index) => index !== subStepIndex
    );
    this.setState({
      backlog: updatedBacklog,
      inProgress: updatedInProgress,
    });
  };

  moveToCompleted = (stepIndex, subStepIndex) => {
    const { backlog, completed } = this.state;
    const selectedStep = backlog[stepIndex].steps[subStepIndex];

    const updatedCompleted = [...completed, selectedStep];
    const updatedBacklog = [...backlog]; // Create a shallow copy of backlog
    updatedBacklog[stepIndex].steps = updatedBacklog[stepIndex].steps.filter(
      (_, index) => index !== subStepIndex
    );

    this.setState({
      backlog: updatedBacklog,
      completed: updatedCompleted,
    });
  };

  render() {
    console.log(this.state.inProgress);
    return (
      <main className="grid-area-main">
        <div className="flex gap-3 flex-1 flex-col">
          <div className=" py-6 px-3">
            <h2 className="text-2xl font-bold">
              {this.props.projectName || "your project"}
            </h2>
          </div>
          <Tabs />
          <div className="p-2 grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="p-2 rounded">
              <div className="flex justify-between items-center">
                <h5 className="font-bold pb-4 pt-2">Backlog</h5>
                <h5 className="font-bold pb-4 pt-2">
                  {this.state.backlog.length}
                </h5>
              </div>
              <div className="h-full overflow-auto">
                <ul className="flex flex-col gap-2">
                  {this.state.backlog.length > 0 ? (
                    this.state.backlog.map((step, stepIndex) => {
                      return step?.steps?.map((st, i) => {
                        return (
                          <li
                            key={i}
                            className="p-2 rounded flex flex-col gap-1  bg-gray-800 hover:bg-gray-800/70 border border-gray-700"
                          >
                            <small>{step.title}</small>
                            <small className="font-bold text-gray-200">
                              {step.value}
                            </small>
                            <p>{st}</p>
                            <div className=" flex gap-1">
                              <span
                                onClick={() =>
                                  this.moveToInProgress(stepIndex, i)
                                }
                                className=" cursor-pointer text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 bg-gray-700 text-gray-400 border border-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-500"
                              >
                                <TbProgress className="w-2.5 h-2.5 mr-1.5" />
                                to progress
                              </span>
                              <span
                                onClick={() =>
                                  this.moveToCompleted(stepIndex, i)
                                }
                                className=" cursor-pointer text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 bg-gray-700 text-gray-400 border border-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-500"
                              >
                                <TbCheck className="w-2.5 h-2.5 mr-1.5" />
                                to completed
                              </span>
                            </div>
                          </li>
                        );
                      });
                    })
                  ) : (
                    <li className="p-2 rounded flex flex-col gap-1  cursor-pointer bg-gray-800 hover:bg-gray-800/70 border border-gray-700">
                      <p>Add new element</p>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="p-2 rounded">
              <div className="flex justify-between items-center">
                <h5 className="font-bold pb-4 pt-2">In progress</h5>
                <h5 className="font-bold pb-4 pt-2">
                  {this.state.inProgress.length}
                </h5>
              </div>
              <ul className="flex flex-col gap-2">
                {this.state.inProgress.length ? (
                  this.state.inProgress.map((step, i) => (
                    <li
                      key={i}
                      className="p-2 rounded flex flex-col gap-1  bg-gray-800 hover:bg-gray-800/70 border border-gray-700"
                    >
                      <small>{step.title}</small>

                      <p>{step.value}</p>
                      <div className=" flex gap-1">
                        <span className="cursor-default text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 bg-yellow-600  border border-yellow-500  text-white ">
                          <TbProgress className="w-3 h-3 mr-1.5" />
                          In progress
                        </span>
                        <span className=" cursor-pointer text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 bg-gray-700 text-gray-400 border border-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-500">
                          <TbCheck className="w-2.5 h-2.5 mr-1.5" />
                          to completed
                        </span>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="p-2 rounded flex flex-col gap-1  cursor-pointer bg-gray-800 hover:bg-gray-800/70 border border-gray-700">
                    <p>Add new element</p>
                  </li>
                )}
              </ul>
            </div>
            <div className="p-2 rounded">
              <div className="flex justify-between items-center">
                <h5 className="font-bold pb-4 pt-2">Completed</h5>
                <h5 className="font-bold pb-4 pt-2">
                  {this.state.completed.length}
                </h5>
              </div>
              <ul className="flex flex-col gap-2">
                {this.state.completed.length ? (
                  this.state.completed.map((step, i) => (
                    <li
                      key={i}
                      className="p-2 rounded flex flex-col gap-1  bg-gray-800 hover:bg-gray-800/70 border border-gray-700"
                    >
                      <small>{step.title}</small>
                      <small className="font-bold text-gray-200">
                        {step.value}
                      </small>
                      <p>{step}</p>
                      <div className=" flex gap-1">
                        <span className="cursor-default text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 bg-green-700  border border-green-500  text-white ">
                          <TbCheck className="w-3 h-3 mr-1.5" />
                          completed
                        </span>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="p-2 rounded flex flex-col gap-1  cursor-pointer bg-gray-800 hover:bg-gray-800/70 border border-gray-700">
                    <p>Add new element</p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
