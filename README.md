# MTGX
[![Build status](https://ci.appveyor.com/api/projects/status/bhxbk35x0ni3u679?svg=true)](https://ci.appveyor.com/project/eduardomoroni/mtgx)
[![Codefresh build status]( https://g.codefresh.io/api/badges/build?repoOwner=eduardomoroni&repoName=mtgx&branch=master&pipelineName=mtgx-pipeline&accountName=eduardomoroni&type=cf-1)]( https://g.codefresh.io/repositories/eduardomoroni/mtgx/builds?filter=trigger:build;branch:master;service:589cb2ba8f6965010014edd7~mtgx-pipeline)
[![BuddyBuild](https://dashboard.buddybuild.com/api/statusImage?appID=589b3f3345295901002c525a&branch=master&build=latest)](https://dashboard.buddybuild.com/apps/589b3f3345295901002c525a/build/latest?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e74a0351ec794f2a9eda900f3e79893f)](https://www.codacy.com/app/eduardomoroni/mtgx?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=eduardomoroni/mtgx&amp;utm_campaign=Badge_Grade)
[![Code climate](https://codeclimate.com/github/eduardomoroni/mtgx/badges/gpa.svg)](https://codeclimate.com/github/eduardomoroni/mtgx)
[![Test Coverage](https://codeclimate.com/github/eduardomoroni/mtgx/badges/coverage.svg)](https://codeclimate.com/github/eduardomoroni/mtgx/coverage)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/eduardomoroni/mtgx/blob/master/LICENSE)

## :arrow_up: How to Setup

**Step 1:** make sure you have [React Native environment ready](https://facebook.github.io/react-native/docs/getting-started.htmlw).

**Step 2:** git clone this repo && cd to the cloned repo:

**Step 3:** Install the Application with `npm install` or `yarn install`


## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`

## :no_entry_sign: Standard Compliant [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

This project adheres to JS Standard and our CI enforces this. Every time that you commit is verified if code is compliant, If you have to bypass lint for a special commit that you will come back and clean then you can bypass git hooks with adding `--no-verify` to your commit command.

## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

## Reactotron
This project is [Reactotron](https://github.com/infinitered/reactotron) ready

## Atom config
We also have a fully customized ATOM config to boost your performance contributing with MTGX, take a look at atom package [sync-settings](https://atom.io/packages/sync-settings) and restore this config [backup](https://gist.github.com/eduardomoroni/a932ad447f9e1dbcd638de0b35b6b65e).
