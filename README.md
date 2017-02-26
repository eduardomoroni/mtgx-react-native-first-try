# React Native Playground

## Boas Práticas
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/758f357d201a404e9b8ad41dfd32b52f)](https://www.codacy.com/app/eduardomoroni/react-native-playground?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=eduardomoroni/react-native-playground&amp;utm_campaign=Badge_Grade)
[![Code Climate](https://codeclimate.com/github/eduardomoroni/react-native-playground/badges/gpa.svg)](https://codeclimate.com/github/eduardomoroni/react-native-playground)
[![Issue Count](https://codeclimate.com/github/eduardomoroni/react-native-playground/badges/issue_count.svg)](https://codeclimate.com/github/eduardomoroni/react-native-playground)

React Native é uma framework relativamente nova, e as vezes isso é ruim porque vemos exemplos na web de maneiras diferentes e ficamos confuso com que code pattern vamos adotar. Para ajudar nisto estou seguindo o [JSstandard](http://standardjs.com/) e tendo ajuda do [ESLint](http://eslint.org/) e [flow](https://flowtype.org/). Estou testando também ferramentas que checam a qualidade do código como [Code Climate](https://codeclimate.com) e [Codacy](https://www.codacy.com/).

## CI / CD
[![iOS Build](https://dashboard.buddybuild.com/api/statusImage?appID=58a457f4adc24901009cb0f1&branch=master&build=latest)](https://dashboard.buddybuild.com/apps/58a457f4adc24901009cb0f1/build/latest?branch=master)
[![Android Build](https://dashboard.buddybuild.com/api/statusImage?appID=58a453e9ef94d6010081d06a&branch=master&build=latest)](https://dashboard.buddybuild.com/apps/58a453e9ef94d6010081d06a/build/latest?branch=master)
[![Build status](https://ci.appveyor.com/api/projects/status/7nwvo4eeh1il2oip?svg=true)](https://ci.appveyor.com/project/eduardomoroni/react-native-playground)
[![Codefresh build status]( https://g.codefresh.io/api/badges/build?repoOwner=eduardomoroni&repoName=react-native-playground&branch=master&pipelineName=react-native-playground&accountName=eduardomoroni&type=cf-1)]( https://g.codefresh.io/repositories/eduardomoroni/react-native-playground/builds?filter=trigger:build;branch:master;service:58a4ac8fdf701f0100630d21~react-native-playground)
[![Test Coverage](https://codeclimate.com/github/eduardomoroni/react-native-playground/badges/coverage.svg)](https://codeclimate.com/github/eduardomoroni/react-native-playground/coverage)

Você deve estar se perguntando porque esse monte de badge aqui em cima. Pois bem, [BuddyBuild](https://www.buddybuild.com/) oferece build para android e iOS de maneira ridiculamente facil, mas não consegui encontrar [pipeline as code](https://www.thoughtworks.com/radar/techniques/pipelines-as-code) e não achei interessante aprofundar nas configurações via UI. [AppVeyor](https://www.appveyor.com/) me surpreendeu com a velocidade e com a facilidade para se configurar a pipeline. Gostei também do [Codefresh](http://codefresh.io/) logo que entrei para testar um humano entrou em contato perguntando se eu gostaria de ajuda para configurar algo o que me fez usar os dois somente para ver como funciona. Não vou entrar em detalhes sobre os dois, mas se eu pudesse escolher um seria o AppVeyor. Testei também [Circle CI](https://circleci.com/),[Travis CI](https://travis-ci.org), [CodeShip](https://codeship.com/) além do Jenkins. Mas no fim das contas temos um badge para a Build iOS, um para Build Android, um para cobertura de código e dois para os testes e verificações de código.
