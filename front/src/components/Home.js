import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
    };
  }

  render() {
    return (
      <React.Fragment>
      
        <h1>Home page</h1>
        
      </React.Fragment>
    )
  }
}

export default Home;