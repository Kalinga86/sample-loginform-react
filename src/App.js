import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
          <div class="App-header">
            
            <form method="post" class="App-form">
              
              <h3 class="App" >Log In</h3>
              Username <input type="text" name="username" style={{padding:'10px'}} placeholder="Type your username here"/>
              <br/>
              <br/>
              Password <input type="password" name="password" style={{padding:'10px'}} placeholder="Type your password here"/>
              <br/>
              <br/>
              <button type="reset" name="Clear" style={{float: 'left'}} class="btn btn-info">Clear</button>
              <button type="submit" name="Login" style={{float: 'right'}} color="primary" class="btn btn-primary">Login</button>
              <br/> <br/> <br/>
              
              <div class="app-modal-footer">
				      <a href="#">Forgot Password?</a>
			        </div>            
              
              </form>
            
          </div>
    )

  }
}

export default App;
