import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Javascript",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: "Flutter", handler: props.actionProvider.handleFlutterList, id: 2 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className='learning-option-button'
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className='learning-options-container'>{optionsMarkup}</div>;
};

export default LearningOptions;
