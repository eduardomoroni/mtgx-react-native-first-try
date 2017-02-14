// @flow

import React from 'react'
import FBSDK from 'react-native-fbsdk'

const { LoginButton, AccessToken } = FBSDK

export default class FacebookLogin extends React.Component {
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

  render () {
    return (
      <LoginButton
        publishPermissions={['publish_actions']}
        onLoginFinished={this.onLoginFinished}
        onLogoutFinished={() => window.alert('logout.')} />
    )
  }
}
