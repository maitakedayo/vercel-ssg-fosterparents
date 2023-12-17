import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header'
import ForsterParents from 'components/organisms/ForsterParents'
import CarouselWidget from 'components/organisms/CarouselWidget'
import SigninFormWidget from 'components/organisms/SigninFormWidget'
import React from 'react'
import { useEffect } from "react"

interface LayoutProps {
  children: React.ReactNode
}

const MemoizedHeader = React.memo(Header);
const MemoizedFooter = React.memo(Footer);
const MemoizedForsterParents = React.memo(ForsterParents);
const MemoizedCarouselWidget = React.memo(CarouselWidget)
const MemoizedSigninFormWidget = React.memo(SigninFormWidget)


const Layout = ({ children }: LayoutProps) => {  

  //レンダ確認
  useEffect(() => {
    console.log(`Layout compo fresh render`);
  }); //依存配列なしの場合 render毎実行
 
  return (
    <>
      <MemoizedHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5"> {/* スマホは1列 PCは4列*/}
        <MemoizedSigninFormWidget />   
        <MemoizedCarouselWidget />
      </div>
      
      <main>{children}</main>
        <div className="text-center">
          <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-lg m-4">
            Under Maintenance: Check Example Answers
          </a>
        </div>      
      <MemoizedForsterParents />
      <hr className="border-t border-gray-300 my-4"></hr>
      <div className="p-6">
        <MemoizedFooter />
      </div>
    </>
  )
}

export default Layout
