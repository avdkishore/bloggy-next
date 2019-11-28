import React from 'react';
import App from 'next/app';

import './app.css';

export default class BlogApp extends App {
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
          <Component {...pageProps} />
    );
  }
}