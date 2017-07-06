import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';


export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html lang="en">
        <Head>
          <meta charset="UTF-8" />
          {/*<link type="text/css" href="/static/styles/bundle.css" />*/}
        </Head>
        <body >
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}