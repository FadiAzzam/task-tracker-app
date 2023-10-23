import React, { Component } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt, BiCheck } from "react-icons/bi";
import questions from "../data/questions.json";
import Button from "./Button";

class MultiStepForm extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 0,
      responses: [],
      questions: questions,
      selectedOptions: {},
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const { currentStep, selectedOptions } = this.state;

    if (name === "projectInformation") {
      this.props.updateProjectName(value);
    } else {
      if (currentStep < this.state.questions.length - 1) {
        // Store the selected option in the state
        selectedOptions[currentStep] = { title: name, value };
      }

      this.setState((prevState) => ({
        responses: [...prevState.responses, { title: name, value: value }],
      }));

      // Automatically navigate to the next step after the user inputs a response
      if (this.state.currentStep < this.state.questions.length - 1) {
        this.goToNextStep();
      }
    }
  };

  goToNextStep = () => {
    this.setState((prevState) => ({
      currentStep: prevState.currentStep + 1,
    }));
  };

  goToPreviousStep = () => {
    this.setState((prevState) => ({
      currentStep: prevState.currentStep - 1,
    }));
  };

  render() {
    const { currentStep, responses } = this.state;
    const currentQuestion = this.state.questions[currentStep];
    return (
      <div className="flex justify-start items-center h-screen container mx-auto p-3">
        <div className="flex flex-col h-1/2 gap-3 ">
          <div className="w-min relative rounded-full px-3 py-1 text-sm leading-6  ring-1 ring-gray-700">
            <span className="whitespace-nowrap ">
              Question {currentStep + 1}
            </span>
          </div>
          <p className="text-2xl ">{currentQuestion.question}</p>
          <div className="flex-auto flex flex-col gap-9 ">
            <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl">
              {currentQuestion.description}
            </h1>

            {currentQuestion.options ? (
              <div className="flex gap-3 items-baseline flex-wrap">
                {currentQuestion.options.map((option, index) => (
                  <label
                    key={index}
                    className="flex border rounded-full text-lg px-3 py-1 gap-3 cursor-pointer hover:bg-blue-700 text-white focus:bg-blue-900 border-gray-700"
                  >
                    <input
                      type="radio"
                      name={currentQuestion.stateKey}
                      value={option}
                      checked={
                        this.state.selectedOptions[currentStep]?.value ===
                        option
                      }
                      onChange={this.handleInputChange}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ) : (
              <input
                className="border rounded text-lg px-3 py-1  bg-gray-900 text-white border-gray-800"
                type="text"
                name="projectInformation"
                value={this.props.projectName}
                onChange={this.handleInputChange}
                placeholder="Enter your project name"
              />
            )}
          </div>
          <div className="flex gap-3">
            {currentStep > 0 && (
              <Button variant="secondary" handleClick={this.goToPreviousStep}>
                <BiLeftArrowAlt className="w-5 h-5 mr-2" />
                Previous
              </Button>
            )}

            {currentStep < this.state.questions.length - 1 && (
              <Button handleClick={this.goToNextStep}>
                Next
                <BiRightArrowAlt className="w-5 h-5 ml-2" />
              </Button>
            )}

            {currentStep < this.state.questions.length - 1 && (
              <Button
                variant="success"
                handleClick={() => this.props.onSubmit(this.state.responses)}
              >
                Save
                <BiCheck className="w-5 h-5 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MultiStepForm;
