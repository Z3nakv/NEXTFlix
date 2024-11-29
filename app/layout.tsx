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
  title: "NEXTFlix - Disfruta del mejor entretenimiento",
  description: "Explora películas, series y contenido exclusivo con NEXTFlix. Una plataforma creada para los amantes del cine y la televisión, diseñada con tecnología moderna para ofrecerte una experiencia única.",
  keywords: [
      'Streaming de Películas y Series',
      'Entretenimiento Online',
      'Descubre Nuevas Series',
      'Trailers Exclusivos',
      'Detalles de Películas',
      'Plataforma de Series Populares',
      'Cine en Línea',
      'Últimos Estrenos',
      'Películas para Familias',
      'Series Imprescindibles',
      'Explorar Películas',
      'Películas Recomendada',
      'Nuevas Series y Películas',
      'Gemas Ocultas de Películas',
      'Plataforma Interactiva de Streaming',
  ],
  openGraph: {
      title: 'NEXTFlix - Todo el cine y las series en un solo lugar',
      images: '/public/page-image.png', // Reemplaza con el path real de tu imagen.
      description:
          '"Sumérgete en el mejor contenido audiovisual con NEXTFlix. Descubre los últimos estrenos, accede a trailers, detalles exclusivos y encuentra el próximo título que no te querrás perder. ¡El entretenimiento comienza aquí!"',
  },
  referrer: 'origin-when-cross-origin',
  creator: 'Adrián Rivarola',
  publisher: 'Adrián Rivarola',
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
}


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
