import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      // redirect: false,
    };
  }

  // componentDidUpdate(){
  //   if(!this.props.userInSession){
  //     this.setState({
  //       ...this.state,
  //       redirect: true,
  //     })
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  // }


  render() {
    //if (!this.props.userInSession) return <Redirect to={"/login"}/>
    return (
      <React.Fragment>
        {/* {
          this.state.redirect ? <Redirect to="/login"/> : null
        } */}
        <h1>Home page</h1>
        
      </React.Fragment>
    )
  }
}

export default Home;