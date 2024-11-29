import type { Metadata } from "next";
import localFont from "next/font/local";
import MovieCardModal from "@/components/modal/MovieCardModal";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Trailer from "@/components/Trailer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://next-flix-kappa.vercel.app/'), // Cambia al dominio real de tu sitio
  title: {
    default: 'NEXTFlix: Disfruta de las Mejores Películas y Series en Línea',
    template: '%s - NEXTFlix',
  },
  description:
    'Explora un mundo de entretenimiento con NEXTFlix. Descubre los últimos estrenos, series populares y películas recomendadas. ¡Tu plataforma de streaming perfecta para disfrutar en familia!',
  keywords: [
    'Streaming de Películas y Series',
    'Plataforma de Entretenimiento Online',
    'Últimos Estrenos',
    'Series Populares',
    'Detalles de Películas',
    'Recomendaciones de Cine',
    'Trailers Exclusivos',
    'Reseñas de Películas',
    'Gemas Ocultas del Cine',
    'Entretenimiento Interactivo',
  ],
  openGraph: {
    title: 'NEXTFlix: Todo el Cine y Series en un Solo Lugar',
    images: '/public/page-image.png', // Cambia a la URL completa de tu imagen
    description:
      'Descubre las mejores películas, series y estrenos en NEXTFlix. Una plataforma hecha para disfrutar en familia, con una experiencia visual única.',
    url: 'https://next-flix-kappa.vercel.app/', // Asegúrate de usar tu URL final
    type: 'website',
  },
  referrer: 'origin-when-cross-origin',
  creator: 'Adrian Rivarola',
  publisher: 'NEXTFlix by Adrian Rivarola',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}select-none h-screen mx-auto antialiased overflow-x-hidden bg-[#141414] grid grid-cols-1`}
      >
        
          <Navbar />
          {children}
          <MovieCardModal />
          <Trailer />
          <Footer />
        
      </body>
    </html>
  );
}
