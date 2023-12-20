import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header'
import ForsterParents from 'components/organisms/ForsterParents'
import CarouselWidget from 'components/organisms/CarouselWidget'
import SigninFormWidget from 'components/organisms/SigninFormWidget'
import React from 'react'
import { useEffect } from "react"
import stopLinePng from "/public/Images/stopLine.png";
import leftTurnPng from "/public/Images/leftTurn.png";
import convCoursePng from "/public/Images/conversionCourse.png";
import course1Png from "/public/Images/course1.png";
import exAns1Png from "/public/Images/exampleAns1.png";
import slide1 from "/public/Images/cat1.png";
import slide2 from "/public/Images/cat2.png";
import slide3 from "/public/Images/cat3.png";
import slide4 from "/public/Images/cat1.png";
import slide5 from "/public/Images/cat2.png";


interface LayoutProps {
  children: React.ReactNode
}

const MemoizedHeader = React.memo(Header);
const MemoizedFooter = React.memo(Footer);
const MemoizedForsterParents = React.memo(ForsterParents);
const MemoizedSigninFormWidget = React.memo(SigninFormWidget)

const MemoizedCarouselWidget = React.memo(CarouselWidget, (prevProps, nextProps) => {
  // 無駄な再レンダーを防ぐ
  return (
    prevProps.autoplay === nextProps.autoplay
  );
});

const Layout = ({ children }: LayoutProps) => {  

  //レンダ確認
  useEffect(() => {
    console.log(`Layout compo fresh render`);
  }); //依存配列なしの場合 render毎実行
 
  const carImages = [stopLinePng, leftTurnPng, convCoursePng, course1Png, exAns1Png];
  const catImages = [slide1, slide2, slide3, slide4, slide5];

  return (
    <>
      <MemoizedHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-40"> {/* スマホは1列 PCは2列*/}
        <MemoizedCarouselWidget images={carImages} autoplay={true} navigation={true} pagination={true} />
        <MemoizedCarouselWidget images={catImages} autoplay={true} navigation={true} pagination={true} />
      </div>
      
      <main>{children}</main>
        <div className="text-center">
          <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-lg m-4">
            Under Maintenance: Check Example Answers
          </a>
        </div>
      <MemoizedSigninFormWidget />
      <MemoizedForsterParents />
      <hr className="border-t border-gray-300 my-4"></hr>
      <div className="p-6">
        <MemoizedFooter />
      </div>
    </>
  )
}

export default Layout
