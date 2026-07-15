import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fayis Kanthapuram - MERN Stack Developer',
    short_name: 'Fayis Portfolio',
    description: 'Portfolio of Fayis Kanthapuram, a passionate MERN Stack Developer building scalable, modern, and high-performance web applications.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#00f0ff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
