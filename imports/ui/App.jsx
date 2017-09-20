import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

import { Messages } from '../api/Message.js';

import Message from './Message.jsx';

// App component - represents the whole app
class App extends Component {
  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
    Messages.insert({
      text,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),           // _id of logged in user
      username: Meteor.user().username,  // username of logged in user
    });
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
  renderTasks() {
    return this.props.message.map((message) => (
      <Message key={message._id} task={message} />
    ));
  }
  salirAplication = () => {
    Meteor.logout();
    this.props.router.push('/')
  }
  render() {
    if (this.props.currentUser){
      const {
        username
      } = this.props.currentUser
      return (
        <div className="container-app">
          <div className='chat'>
            <div className='chat-header'>
              {username ? `Hola, ${username} ...` : ''}
              <p className='chat-close' onClick={()=> this.salirAplication()}>X</p>
            </div>
            <ul>
              {this.renderTasks()}
            </ul>
            <div className='write-message'>
              { username ?
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="textInput"
                    placeholder="Type to add new message"
                  />
                </form> : ''
              }
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <h1>lo siento estas en lugar equivocado</h1>
      )
    }
  }
}

App.propTypes = {
  message: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    message: Messages.find({}).fetch(),
    currentUser: Meteor.user(),
  };
}, App);