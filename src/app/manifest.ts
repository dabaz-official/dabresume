import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DabAZ's Resume - Cyber Security Engineer Specializing in Penetration Testing",
    short_name: "DabAZ's Resume",
    description: "DabAZ, a dedicated Cyber Security Engineer with a focus on vulnerability discovery and security strategies. Possesses in-depth knowledge and hands-on experience in identifying and resolving security vulnerabilities. Passionate about UI design and front-end development in his spare time, and also keen on music production, creatively blending technology with art.",
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAFA',
    theme_color: '#0A0A0A',
    icons: [
      {
        src: '/icon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}