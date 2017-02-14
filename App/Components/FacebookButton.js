import React, { Component } from 'react'
import { Button, Alert } from 'react-native'

import { LoginManager } from 'react-native-fbsdk'

export default class FacebookButton extends Component {
  handleFacebookLogin () {
    LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
      function (result) {
        if (result.isCancelled) {
          Alert.alert('ALERT', 'Login cancelled')
        } else {
          Alert.alert('ALERT', 'Login success with permissions: ' + result.grantedPermissions.toString())
        }
      },
      function (error) {
        Alert.alert('ALERT', 'Login fail with error: ' + error)
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
