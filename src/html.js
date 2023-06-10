import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* following is script for using reach-adsense*/}
        <script
          async
          src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-H6YPG2DY78"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-H6YPG2DY78');
        </script>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

      </body>
      <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="kitsuneyk" data-description="Support me on Buy me a coffee!" data-message="支援して頂けると情報発信と個人開発の励みになります！" data-color="#FFDD00" data-position="Right" data-x_margin="12" data-y_margin="12"></script>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
