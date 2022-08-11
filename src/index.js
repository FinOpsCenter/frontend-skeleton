import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import RepoFactory from './repo_factory'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import English from './locale/locale-en.json'

const repoFactory = new RepoFactory()

const locale = navigator.language
let lang
if (locale === 'en') {
  lang = English
} else {
  lang = English
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <IntlProvider locale={locale} messages={lang}>
        <App repoFactory={repoFactory} location={window.location} />
      </IntlProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('cloudscal3-web-root')
)

// If you want your store to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
