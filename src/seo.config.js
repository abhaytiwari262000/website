export const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL

export default {
  defaultTitle: 'Abhay Tiwari | Full Stack Developer',
  titleTemplate: '%s | AbhayTiwari',
  description:
    'A full-stack engineer specializing in building & designing scalable applications with great user experience.',
  openGraph: {
    title: 'Abhay Tiwari',
    description:
      'A full-stack engineer specializing in building & designing scalable applications with great user experience.',
    images: [
      {
        url: `${baseUrl}api/og?title=home`,
        width: 1200,
        height: 600,
        alt: `Abhay Tiwari | Full Stack Developer`,
      },
    ],
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    site_name: 'Abhay Tiwari',
  },
}
