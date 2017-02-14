// @flow

import React from 'react'
import FBSDK from 'react-native-fbsdk'

const { LoginButton, AccessToken } = FBSDK

// https://developers.facebook.com/docs/react-native/login
export default class FacebookLogin extends React.Component {

  // https://developers.facebook.com/docs/facebook-login/permissions
  getPermissions () {
    return ['public_profile', 'user_friends', 'user_location']
  }

  onLoginFinished (error: boolean, result: Object) {
    if (error) {
      window.alert('login has error: ' + result.error)
    } else if (result.isCancelled) {
      window.alert('login is cancelled.')
    } else {
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          window.alert(data.accessToken.toString())
        }
      )
    }
  }

  onLogoutFinished () {
    window.alert('logout.')
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
