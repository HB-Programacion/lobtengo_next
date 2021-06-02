import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //     const initialProps = await Document.getInitialProps(ctx)
  //     return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="icon" type="image/png" sizes="96x96" href="/image/yesmom-favicon.png"/> */}
          <link
            rel="icon"
            type="image/x-icon"
            href="/image/yesmom-favicon.png"
          />
          <script async
            src={`https://www.googletagmanager.com/gtm.js?id=${6003087391}`}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${6003087391}');
                  `}}
          />
          {/* <!-- Google Tag Manager -->
          <>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MG8C235');</>
          <!-- End Google Tag Manager --> */}
          {/* <!-- Google Tag Manager (noscript) -->
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MG8C235"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          <!-- End Google Tag Manager (noscript) --> */}
          {/* <link rel="shortcut icon" href="%PUBLIC_URL%/yesmom-favicon.png" type="image/x-icon"/> */}
        </Head>
        <style jsx>
         {`
          @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap');

            body{
              font-family: 'Baloo 2'
            }

           `}
        </style>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
