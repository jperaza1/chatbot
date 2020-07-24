class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantástico, tengo los siguientes recursos para ti en Javascript:",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleFlutterList = () => {
    const message = this.createChatBotMessage(
      "Fantástico, tengo los siguientes recursos para ti en Flutter:",
      {
        widget: "flutterLinks",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
