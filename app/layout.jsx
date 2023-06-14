import Footer from './components/Footer'
import Header from './components/Header'
import { saira } from './font'
import './globals.css'

export const metadata = {
  title: 'acksession clone',
  description: 'acksession.com clone using next js by Tareq El-Ali',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={saira.className}>
        <Header/>
        <main className='min-h-screen pt-28 lg:pt-36 overflow-hidden '>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
