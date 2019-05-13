import React from "react";
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';
import "./MainNav.css";
import "bulma/css/bulma.css";

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.service = new AuthService();
    this.state = {
      loggedInUser: null
    };
    // this.fetchUser();
  }

  componentWillMount() {
    this.fetchUser();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then(response => {
          console.log("MainNav constructor ", response)
          this.setState({
            loggedInUser: response
          })
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          })
        })
    }
  }

  getUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    return (
      <React.Fragment>
        {
          (this.props.user) ?
            <div>
              <div className='topHeader'>
                <div >
                  <img src="../img/logo.png" />
                </div>
              </div>
              <div className='loggedInIcons'>
                <Link to='/profile' className="icons"><i className="fas fa-user-circle" /></Link>
                <i className="fas fa-shopping-cart icons" />
              </div>
              <div id="menu">
                <div id='nav' className='columns'>
                  <Link className="column link" to="/about-us">About us</Link>
                  <Link className="column link" to="/events">Events</Link>
                  <Link className="column link" to="/voucher">Voucher</Link>
                  <Link className="column link" to="/contacts">Contacts</Link>
                </div>
              </div>
            </div>
            :
            <div className='topHeader2'>
              <div >
                <img src="../img/logo.png" />
              </div>
            </div>
        }
      </React.Fragment>
    );
  }
}

export default MainNav;

// render() {
//   let url = `${process.env.REACT_APP_URL}/art`;
//   const { match: { url } } = this.props;
  
//   if (url.startWith('/profile')) {
//     return null;
//   } else {
//     return (
//       <React.Fragment>
//         {
//           (this.props.user) ?
//             <div>
//               <div className='topHeader'>
//                 <div >
//                   <img src="../img/logo.png" />
//                 </div>
//               </div>
//               <div className='loggedInIcons'>
//                 <Link to='/profile' className="icons"><i className="fas fa-user-circle" /></Link>
//                 <i className="fas fa-shopping-cart icons" />
//               </div>
//               <div id="menu">
//                 <div id='nav' className='columns'>
//                   <Link className="column link" to="/about-us">About us</Link>
//                   <Link className="column link" to="/events">Events</Link>
//                   <Link className="column link" to="/voucher">Voucher</Link>
//                   <Link className="column link" to="/contacts">Contacts</Link>
//                 </div>
//               </div>
//             </div>
//             :
//             <div className='topHeader2'>
//               <div >
//                 <img src="../img/logo.png" />
//               </div>
//             </div>
//         }
//       </React.Fragment>
//     )
//   }
// }
// }

