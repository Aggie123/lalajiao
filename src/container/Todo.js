import React, {
  Component
} from 'react'
import {
  DatePicker,
  Button
} from 'antd'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.params.id
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.params.id
    });
  }

  render() {
    return <div>
      <p>page1</p>
      <DatePicker/>
      <Button type="primary">Add Todo</Button>
      <div>
        <p>Todo List:</p>
        <p>hello</p>
      </div>
    </div>
  }
}