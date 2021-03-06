import React from 'react';
import './style.css';


export class MemberField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: String
    }

    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    this.setState({
      name: this.props.name
    })
  }

  handleChange(event) {
    let target = event.target;
    let value = target.value;
    
    this.setState({
      name: value
    });

    this.props.handleMembers(event,this.props.index-1);
  }

  render() {
    return (
      <div className="member-name signup-form-part">
        <div className="input-icon">
          <i className="fa fa-user fa-2x" aria-hidden="true" />
        </div>
        <div className="input-part">
          <input
            type="text"
            className="member-name-input"
            placeholder={"member name " + this.props.index}
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>
      </div>
    );
  }
}