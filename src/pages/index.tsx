import { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from 'components/templates/Layout'
import { useState } from "react";
import { useEffect, useCallback, useRef } from "react"
import BlockBtn from 'components/atoms/BlockBtn'
import React from 'react'
import { LicenseProcessProps } from 'types/data';
import LicenseProcessesData from 'components/licenseProcessData';
import Image from "next/image";
import stopLinePng from "/public/Images/stopLine.png";
import leftTurnPng from "/public/Images/leftTurn.png";
import convCoursePng from "/public/Images/conversionCourse.png";
import course1Png from "/public/Images/course1.png";
import exAns1Png from "/public/Images/exampleAns1.png";


type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>

const MemoizedBlockBtn = React.memo(BlockBtn, (prevProps, nextProps) => {
  // 無駄な再レンダーを防ぐ
  return prevProps.btnText === nextProps.btnText;
});

//---SSG(静的サイト生成StaticGene)でssgMessageを作る
export const getStaticProps: GetStaticProps = async () => { //contextは実行関連情報オブジェクト

  const licenseProcesses = await LicenseProcessesData();

  console.log("SSG内部 compo");
  return {
    props: {
      licenseProcesses,
    },
    // revalidate: 60,  // 60秒ごとに再生成 再生成を無効にする場合、revalidateを指定しないか0に設定
  };
};

//---親関数コンポ
const HomePage: NextPage<HomePageProps> = (props: HomePageProps) => {
  const licenseProcesses: LicenseProcessProps[] = props.licenseProcesses; //SSG
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const focusDivRef = useRef<HTMLDivElement | null>(null);

  // レンダ確認
  useEffect(() => {
    console.log(`HomePage compo fresh render ----------`);
  }); //依存配列なしの場合 render毎実行  

  // clickedIndexが変更されたときにフォーカスを移動
  useEffect(() => {
    if (focusDivRef.current !== null && clickedIndex !== null) {
      focusDivRef.current.focus();
    }
  }, [clickedIndex]);
  
  const handleBtnClick = useCallback((index: number) => {
    console.log(`Button clicked at index ${index}`);
    setClickedIndex(index);
  }, [setClickedIndex]);

  // フォールバック用のjsxを返す
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // SSG切り出しコンポ化 
  const renderBtnCard = (licenseProcesses: LicenseProcessProps[]) => {   
    return (
      <>
        {licenseProcesses.map((lpp: LicenseProcessProps, index: number) => (
          <MemoizedBlockBtn 
            key={index}
            title={lpp.cardTitle}
            text={lpp.cardText}
            btnText={lpp.btnText}
            onClick={() => handleBtnClick(index)}
            index={index}
          />
        ))}
      </>
    );
  };

  return (
    <div>
      <Head>
        <title>Utilizing the Foreign Drivers License Conversion System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <div className="text-center bg-blue-100 p-8">
          <h5 className="text-2xl font-extrabold text-blue-500 hover:text-blue-700">
            <a className="">The three ways to obtain a drivers license in Japan are as follows</a>
          </h5>
          <h5 className="text-2xl font-extrabold text-blue-500 hover:text-blue-700 mb-4">
            <a className="">日本で運転免許を取る方法は以下の3点です</a>
          </h5>
          <ul className="list-disc text-left">
            <li>ⅰ) Utilizing the Foreign Drivers License Conversion System</li>
            <li>ⅱ) At the Drivers License Center, taking the on-the-spot license examination (general test)</li>
            <li>ⅲ) Through Designated Driving Schools</li>
            <li>ⅰ) 外国免許切替制度の利用</li>
            <li>ⅱ) 飛び込み一発免許試験（一般試験）</li>
            <li>ⅲ) 指定自動車学校での教習と試験</li>
          </ul>
          <p className="text-left text-sm mt-4">
            Here, we will share tips for passing the practical or provisional license skills test for <strong className="text-blue-500">completely free</strong>.<br/>
            Some may argue that there are no secrets to the skills test, but in reality, that is not the case. The mindset and actions of those who pass differ from beginners.<br/>
            Similar to the multiple-choice questions in the written test, there are also <strong className="text-blue-500">〇✖ patterns</strong> in the skills test. To pass, you need to memorize many anti-patterns that lead to ✖, but memorizing all of the road traffic laws is not realistic.<br/>
            Therefore, let is focus on memorizing the <strong className="text-orange-500">one and only example of 〇</strong>. The interesting part is that you can pick up this example from the internet.<br/>
            The secret to passing the practical and provisional license skills test is to focus on memorizing specific examples of 〇. We will explain key points for each type of acquisition, which are <strong className="text-orange-500">detailed below</strong>.
          </p>
          <p className="text-left text-sm mt-4">
            こちらでは<strong className="text-blue-500">完全無料</strong>で外国免許切り替え実技もしくは仮免許技能試験に合格するための<strong className="text-blue-500">秘訣</strong>をお教えします。<br/>
            技能試験には秘訣がないと主張する方もいますが、実際にはそうではありません。合格した者の考え方と行動は受験初心者とは異なります。<br/>
            筆記試験の〇✖問題と同じように、<strong className="text-blue-500">技能試験にも〇✖</strong>が存在します。合格するためには、✖となる多くのアンチパターンを事前に覚える必要がありますが、道路交通法の全てを覚えることは現実的ではありません。<br/>
            そこで、唯一となる〇の範例を覚えることに焦点を当てましょう。<strong className="text-orange-500">実はその範例はインターネットから拾うことができます。</strong><br/>
            外国免許切り替え実技や仮免許技能試験合格の秘訣は、特定の〇の範例を重点的に覚えることです。合格者の経験とアプローチに注目し、インターネットで入手可能な範例を以下に<strong className="text-orange-500">取得タイプ別で解説</strong>していきます。
          </p>
        </div>
        
        <div 
          ref={focusDivRef}
          tabIndex={-1} // tabIndexを設定することでフォーカス可能な要素になる
        >          
        </div>
        <div className="text-left bg-yellow-100 p-8 mt-4">          
          {clickedIndex == null
            ? <h3 className="text-sm mt-4">
                When you press the 『Check Example Answers』button, you can display the legend.
              </h3>
            : <div>
                <div>
                  <h3 className="">{licenseProcesses[clickedIndex].cardTitle}</h3>
                  <p className="">{licenseProcesses[clickedIndex].introduction}</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-5">
                  <Image src={stopLinePng}  alt="Description of the stop line image" className="my-4" />
                  <Image src={leftTurnPng}  alt="Description of the left turn image" className="my-4" />
                </div>
                <a className="">{licenseProcesses[clickedIndex].development}</a>
                {clickedIndex == 0
                  ? <Image src={convCoursePng}  alt="Description of the image" className="my-4" />
                  : <Image src={course1Png}  alt="Description of the image" className="my-4" />
                }
                <a className="">{licenseProcesses[clickedIndex].transition}</a>
                <Image src={exAns1Png}  alt="Description of the image" className="my-4" />
                <h1 className="">{licenseProcesses[clickedIndex].conclusion}</h1>
              </div>
          }
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5"> {/* スマホは1列 PCは3列*/}
          {renderBtnCard(licenseProcesses)}
        </div>


        
      </Layout>
    </div>
  )
}



export default HomePage