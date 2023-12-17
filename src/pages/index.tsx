import { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from 'components/templates/Layout'
import { useState } from 'react'
import { useEffect } from "react"
import { ChangeEvent } from "react"
import BlockBtn from 'components/atoms/BlockBtn'
import React from 'react'
import { LicenseProcessProps } from 'types/data';
import LicenseProcessesData from 'components/licenseProcessData';

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>

const MemoizedBlockBtn = React.memo(BlockBtn)

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

type SSGProps = {
  ssgMessage: string
}

//---親関数コンポ
const HomePage: NextPage<HomePageProps> = (props: HomePageProps) => {  
  const licenseProcesses: LicenseProcessProps[] = props.licenseProcesses; //SSG
  //const [blurFlag, setBlurFlag] = useState<boolean>(false);

  //レンダ確認
  useEffect(() => {
    console.log(`HomePage compo fresh render ----------`);
  }); //依存配列なしの場合 render毎実行

  //blurFlagを変えて再レンダ
  const changeBlur = (e: ChangeEvent<HTMLInputElement>) => {
    //setBlurFlag((blurFlag) => !blurFlag) //e.target.checked
  }

  //フォールバック用のjsxを返す
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // SSG切り出しコンポ化 
  const renderBtnCard = (licenseProcesses: LicenseProcessProps[]) => {   
    return (
      <>
        {licenseProcesses.map((lpp: LicenseProcessProps, index: number) => (
          <MemoizedBlockBtn key={index} title={lpp.title} text={lpp.text} btnText={lpp.btnText} />
        ))}
      </>
    );
  };

  return (
    <div>
      <Head>
        <title>Utilizing the Foreign Driver’s License Conversion System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
          <div className="text-center bg-blue-100 p-8">
            <h5 className="text-2xl font-extrabold text-blue-500 hover:text-blue-700">
              <a className="">The three ways to obtain a driver's license in Japan are as follows</a>
            </h5>
            <h5 className="text-2xl font-extrabold text-blue-500 hover:text-blue-700 mb-4">
              <a className="">日本で運転免許を取る方法は以下の3点です</a>
            </h5>

            <ul className="list-disc text-left">
              <li>ⅰ) Utilizing the Foreign Driver’s License Conversion System</li>
              <li>ⅱ) At the Driver’s License Center, taking the on-the-spot license examination (general test)</li>
              <li>ⅲ) Through Designated Driving Schools</li>
              <li>ⅰ) 外国免許切替制度の利用</li>
              <li>ⅱ) 飛び込み一発免許試験（一般試験）</li>
              <li>ⅲ) 指定自動車学校での教習と試験</li>
            </ul>
            <p className="text-lg mt-4">
              Here, we will share the <strong className="text-blue-500">essential tips</strong> for passing the practical or provisional license skills test for foreign license conversion, all <strong className="text-blue-500">completely free</strong>.<br/>
              Some may argue that there are no secrets to the skills test, but in reality, that's not the case. The mindset and actions of those who pass are different from beginners. Just like the <strong className="text-blue-500">multiple-choice questions</strong> on the written test, there are also ✖️'s on the skills test. So, what becomes an ✖️? To pass, you need to memorize many anti-patterns in advance, but memorizing all traffic laws is not realistic.<br/>
              Therefore, let's focus on memorizing only the 〇. <strong className="text-orange-500">In fact, those answers are available on the internet.</strong><br/>
              Knowing those <strong className="text-orange-500">example answers</strong> will allow you to create a set of only the necessary 〇s.
              Below, we'll explain the important points by acquisition type.
            </p>
            <p className="text-lg mt-4">
              こちらでは<strong className="text-blue-500">完全無料</strong>で外国免許切り替え実技もしくは仮免許技能試験に合格するための<strong className="text-blue-500">秘訣</strong>をお教えします。<br/>
              技能試験には秘訣がないと主張する方もいますが、実際にはそうではありません。合格した者の考え方と行動は受験初心者とは異なります。<strong className="text-blue-500">筆記試験の〇✖問題</strong>と同じように、技能試験にも✖が存在します。では、何が✖になるのでしょうか。合格するためには、✖となる多くのアンチパターンを事前に覚える必要がありますが、道路交通法の全てを覚えることは現実的ではありません。<br/>
              そこで、一通りしかない〇を覚えることに焦点を当てましょう。<strong className="text-orange-500">実はその〇はインターネットに落ちています。</strong><br/>
              その<strong className="text-orange-500">答えの範例</strong>を知ることで、一通りしかない〇を作り出すことができます。
              以下に取得タイプ別で重要なポイントを解説していきます。
            </p>


          </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5"> {/* スマホは2列 PCは6列*/}
          {renderBtnCard(licenseProcesses)}
        </div>
      </Layout>
    </div>
  )
}



export default HomePage