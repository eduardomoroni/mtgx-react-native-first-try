// @flow

import React from 'react'
import FBSDK from 'react-native-fbsdk'
import { Alert } from 'react-native'

const { LoginButton, AccessToken } = FBSDK

// https://developers.facebook.com/docs/react-native/login
export default class FacebookLogin extends React.Component {

  // https://developers.facebook.com/docs/facebook-login/permissions
  getPermissions () {
    return ['public_profile', 'user_friends', 'user_location']
  }

  onLoginFinished (error: boolean, result: Object) {
    if (error) {
      Alert.alert('ALERT', 'login has error: ' + result.error)
    } else if (result.isCancelled) {
      Alert.alert('ALERT', 'login is cancelled.')
    } else {
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          Alert.alert('ALERT', data.accessToken.toString())
        }
      )
    }
  }

  onLogoutFinished () {
    Alert.alert('ALERT', 'logout.')
  }

  render () {
    return (
      <LoginButton
        readPermissions={this.getPermissions()}
        onLoginFinished={this.onLoginFinished}
        onLogoutFinished={this.onLogoutFinished} />
    )
  }
}
