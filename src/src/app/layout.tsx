import Providers from "@/components/Providers"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Medals and Trophies",
  description:
    "Medals and Trophies adalah sebuah website yang menyediakan platform untuk mencari berbagai jenis perlombaan dan kompetisi yang berlangsung di berbagai bidang dan tingkatan. Dengan berbagai kategori yang lengkap, seperti seni, olahraga, teknologi, akademik, dan banyak lagi, website ini membantu pengguna untuk menemukan lomba yang sesuai dengan minat, bakat, dan keahlian mereka.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-8 pb-24 px-4 md:px-32`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
