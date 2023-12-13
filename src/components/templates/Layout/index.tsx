import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <hr className="border-t border-gray-300 my-4"></hr>
      <div className="p-6">
        <Footer />
      </div>
    </>
  )
}

export default Layout
