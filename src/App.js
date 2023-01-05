import React from "react";
import ReactDOM from "react-dom";
import { MyHeader } from "./header";
import { MyChat } from "./chat";
import { MyInput } from "./input";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  handleInput = () => {
    let val = document.getElementById("message").value;
    let updatedMessages = this.state.messages.concat(val);
    this.setState({
      messages: updatedMessages,
    });
    document.getElementById("message").value = "";
  };

  render() {
    return (
      <div>
        <MyHeader name="Milly Brown" />
        <MyChat messages={this.state.messages} />
        <MyInput input={this.handleInput} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;