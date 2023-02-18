import '@fontsource/roboto-mono'
import '../styles/globals.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gradient-to-r from-red-400 to-violet-400">
        {children}
      </body>
    </html>
  )
}
