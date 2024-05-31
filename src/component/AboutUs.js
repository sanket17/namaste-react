import React from "react";
import AboutMe from "./About/AboutMe";

// export default function AboutUs() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // let interval = setInterval(() => setCount(count + 1), 1000);
//     return () => {
//       console.log("Inside unmount");
//       // clearInterval(interval);
//     };
//   }, [count]);
//   return (
//     <>
//       <h1>AboutUs</h1>
//       <button onClick={() => setCount(count + 1)}>Add</button>
//       {count}
//       {/* <AboutMe count={1} />
//       <AboutMe count={2} /> */}
//     </>
//   );
// }

export default class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  componentDidUpdate() {
    console.log("Parent ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Parent ComponentWillMount");
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
    console.log("Parent render");

    return (
      <>
        <h1>AboutUs</h1>
        <AboutMe count={1} />
        <button onClick={() => this.increaseCount()}>+ in Parent</button>
        {this.state.count}
        <button onClick={() => this.decreaseCount()}>- in Parent</button>
        {/* <AboutMe count={2} /> */}
      </>
    );
  }
}
