import { useEffect, useRef } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'
import 'highlight.js/styles/github-dark.css'
import { DefaultSeo } from 'next-seo'
import seoOptions from '../seo.config'
import * as gtag from '@/lib/gtag'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageView(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <DefaultSeo {...seoOptions} />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
