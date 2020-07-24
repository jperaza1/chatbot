import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage(
      "Hola, estoy aqui para ayudar. Que quieres aprender?",
      {
        widget: "learningOptions",
      }
    ),
  ],
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "flutterLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to Dart",
            url: "https://dart.dev/",
            id: 1,
          },
          {
            text: "Flutter Guide",
            url: "https://flutter.dev/",
            id: 2,
          },
          {
            text: "Material Desing",
            url: "https://material.io/design/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};

export default config;
