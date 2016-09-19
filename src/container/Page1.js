import React, {
  Component
} from 'react'
import {
  DatePicker,
  Button
} from 'antd'

export default class Customers extends Component {
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
      <div>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="ghost">Ghost</Button>
      <Button type="dashed">Dashed</Button>
      </div>
      <div className="hello"></div>
      <div className="aaeee"></div>

    </div>
  }
}