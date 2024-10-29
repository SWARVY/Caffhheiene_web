import Script from 'next/script'

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js
				?id=${process.env.GOOGLE_ANALYTICS_ID}`}
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
		`,
        }}
      />
    </>
  )
}