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
  title: "NEXTFlix",
  description: "Disfruta de los mejores estrenos con NEXTFlix, una plataforma de streaming hecha para ti y tu familia, empieza ahora!",
  keywords: [
    'Plataforma de Streaming',
    'Películas y Series en Línea',
    'Entretenimiento Audiovisual',
    'Trailers de Películas',
    'Detalles de Películas y Series',
    'Base de Datos de Películas',
    'Películas en línea',
    'Últimos estrenos',
    'Reseñas de películas',
    'Experiencia Interactiva',
    'Mejores Películas',
    'Series Populares',
    'Gemas Ocultas de Series',
    'Descubre qué Ver',
    'Trailers de películas',
],
openGraph: {
    title: 'Flix: Explora, Descubre, Disfruta.',
    images: '/og-image.png',
    description:
        '"Sumérgete en el fascinante universo del cine con Flix. Descubre los últimos estrenos, obtén reseñas y recomendaciones, y encuentra la mejor manera de disfrutar de tus películas favoritas. ¡Explora el cine como nunca antes con Flix!"',
},
referrer: 'origin-when-cross-origin',
creator: 'Adrian Rivarola',
publisher: 'Adrian Rivarola',
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
      {/* <link rel='icon' href='/favicon.ico' sizes='32x32' /> */}
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
