import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        console.log("constructor")
        this.state={
            count: 0,
        };
    }
    componentDidMount(){
        console.log("ComponentDidMount")
    }
  render() {
    console.log("render") // so for class based components firstconstructor will be called then render 

    return (
      <div>
        <h1>Class Based Component</h1>
        <h3>Name: {this.props.name} </h3>
        <h3>Count : {this.state.count}</h3>
        <button onClick={()=>{
            this.setState({
                count:1,
            })
        }}>Count</button>
      </div>
    );
  }
}

export default Profile;
