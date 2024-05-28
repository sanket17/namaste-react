import { Component } from "react";

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sanket Tikam",
      location: "Pune, India",
      contact: "8983764017",
      count: props.count,
    };
    console.log(`Children ${props.count} Component Constructor`);
  }
  componentDidMount() {
    console.log(`Children ${this.props.count} ComponentDidMount`);
  }

  componentDidUpdate() {
    console.log(`Children ${this.props.count} ComponentDidUpdate`);
  }

  componentWillUnmount() {
    console.log(`Children ${this.props.count} ComponentWillUnmount`);
  }

  increaseCount() {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  }

  decreaseCount() {
    this.setState({
      ...this.state,
      count: this.state.count - 1,
    });
  }

  render() {
    console.log(`Children ${this.props.count} Compoennt render`);
    const { name, location, contact, count } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h2>{contact}</h2>
        <button
          onClick={() => {
            this.increaseCount();
          }}>
          +
        </button>
        {count}
        <button
          onClick={() => {
            this.decreaseCount();
          }}>
          -
        </button>
      </div>
    );
  }
}

export default AboutMe;
