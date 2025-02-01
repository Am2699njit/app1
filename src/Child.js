/*import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);
    this.state={data:{}}
  }

  componentDidMount() {
    fetch('https://ipinfo.io/161.185.160.93/geo')
      .then(response => response.json())
      .then(temp_data=> this.setState({ data:temp_data }));
  }

 render() {

  let temp = Object.values(this.state.data)
    return (
      <div>
        {temp.map(item=><p>{item}</p>)}
      </div>
    );
  }
}
export default Child;*/
/*import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <div> Hello {this.props.name+ " you are " + this.props.age + " years old"} </div>
    );
  }
}

export default Child;*/
import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputText: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  addTodo = () => {
    this.setState({ todos: [...this.state.todos, this.state.inputText], inputText: ''});
  };
  removeTodo = (task) => {
    var filtered_todos = this.state.todos.filter(item=>item!=task)
    this.setState({todos:filtered_todos})
  };


  render() {
    return (
      <div style={{padding:20}}>
        <p>{this.props.day}</p>
        <input type="text" value={this.state.inputText} onChange={this.handleInputChange} placeholder="Add a todo" />
        <button onClick={this.addTodo}>Add Todo</button>
        {this.state.todos.map(item=><div>
            <label>{item}</label>
            <button onClick={()=>this.removeTodo(item)}>Remove</button>
            </div>)}
      </div>
    );
  }
}

export default TodoList;