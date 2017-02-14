import React, { Component } from 'react'
import { Button } from 'react-native'

import { LoginManager } from 'react-native-fbsdk'

export default class FacebookButton extends Component {
  handleFacebookLogin () {
    LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
      function (result) {
        if (result.isCancelled) {
          window.alert('Login cancelled')
        } else {
          window.alert('Login success with permissions: ' + result.grantedPermissions.toString())
        }
      },
      function (error) {
        window.alert('Login fail with error: ' + error)
      }
    )
  }
  render () {
    return (
      <Button
        onPress={this.handleFacebookLogin}
        title='Continue with fb'
        color='#4267B2'
      />
    )
  }
}
