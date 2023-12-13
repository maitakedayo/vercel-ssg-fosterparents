import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from 'components/templates/Layout'
import { useState } from 'react'
import { ChangeEvent } from "react"
import SigninForm from 'components/organisms/SigninForm/index'
import useSWR from 'swr'
import styles from 'styles/styles.module.css'


//---SSG(静的サイト生成StaticGene)でssgMessageを作る
export const getStaticProps: GetStaticProps<SSGProps> = async (
  context
  ) => { //contextは実行関連情報オブジェクト
  const timestamp = new Date().toLocaleString();
  const ssgMessage = `${timestamp}: SSG`;
  console.log("SSG内部 compo");
  return {
    props: {
      ssgMessage,
    },
  };
};

type SSGProps = {
  ssgMessage: string
}

//---親関数コンポ
const HomePage: NextPage<SSGProps> = (props) => {  
  const {ssgMessage} = props
  const [formPass, setFormPass] = useState<string>("")
  const [blurFlag, setBlurFlag] = useState<boolean>(false);

  console.log(`HomePage compo ${ssgMessage}`)

  //---ログイン照合-s-
  const fetchDataAndExtractPassword = (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.text()).then(text => JSON.parse(text)['password'])
  const apiEndpoint = '/api/hello?id=0'
  const {data: passwordData, error: fetchError} = useSWR<string, Error>(apiEndpoint , fetchDataAndExtractPassword)
  const doLogoutAction = ()=>{setFormPass(() => "nillnillnill")}
  //---e-

  //blurFlagを変えて再レンダ
  const changeBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setBlurFlag((blurFlag) => !blurFlag) //e.target.checked
  }

  //フォールバック用のjsxを返す
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <main>
          {!(passwordData === formPass)?
            <div>
              <SigninForm setFormpass={setFormPass} />

              <div className="flex justify-center py-1 px-2">
                {/**自作のアニメーションanimate-disappear tailwind.config.jsに設定*/}
                <div className="animate-appear flex w-96 flex-col justify-center justify-items-center text-center text-red-600 text-xs pl-2">
                  <p className="w-full rounded px-4 pb-1">pass不一致(暇があればハックしてみてね💛)</p>
                </div>       
              </div>
            </div>
            :
            <div className="flex justify-center py-2 px-2 ">
              <div className="flex w-96 flex-col justify-center justify-items-center">{/**中央配置 */}
                <button onClick={doLogoutAction} className="w-full bg-gradient-to-br from-blue-300 to-blue-800 hover:bg-gradient-to-tl text-white rounded px-4 py-2" type="submit">
                  LOGOUT
                </button>
              </div>
            </div>
          }

          {(passwordData === formPass)?
          <div className="form-group h6 pt-3 px-6">
            <input type="checkbox" className="form-check-input" id="check1" onChange={changeBlur} />
            <label className="form-check-label" htmlFor="check1">
              ハック成功ですね💛
            </label>
          </div>
          :
          <div></div>
          }


          <section className={styles.ly_topcont}>
            <div className={`${styles.bl_topcont} ${styles.ly_cont__col}`}>

              <article>
                <section className={styles.hp_bgcBase__gray}>
                  <div className={styles.ly_cont}>
                    <h2 className={`${styles.el_lv2Heading} ${styles.hp_smSpace}`}>
                      スコティッシュフォールドクリームタビー 里親募集
                    </h2>
                    <div className={`${styles.bl_media} ${styles.ly_cont__col}`}>
                      <figure className={styles.bl_media_imgWrapper}>
                        <img alt="写真：猫1" src="Images/cat1.png"/>
                      </figure>
                      <div className={styles.bl_media_body}>
                        <h3 className={styles.bl_media_ttl}>
                          【簡単な紹介】
                        </h3>
                        <p className={styles.bl_media_txt}>
                          5歳の素敵なスコティッシュフォールドクリームタビーの里親を募集しています。この猫はすでに去勢手術を受けており、引っ掻き癖や噛み癖は一切ありません。その上、非常におとなしい性格です。<br/>
                          日頃のお世話は、愛情と定期的なブラッシングで十分です。おとなしい性格のため、新しい家族とのすぐに打ち解けることが期待できます。
                        </p>
                      </div>
                      {/**<!-- /.bl_media_body --> */}
                    </div>
                    {/**<!-- /.bl_media --> */}
                  </div>
                  {/**<!-- /.ly_cont --> */}
                </section>
                <section className={styles.hp_bgcBase__orange}>
                  <div className={styles.ly_cont}>
                    <h2 className={`${styles.el_lv2Heading} ${styles.hp_smSpace}`}>
                      スコティッシュフォールドクリームタビー 里親募集
                    </h2>
                    <div className={`${styles.bl_media} ${styles.bl_media__rev} ${styles.ly_cont__col}`}>
                      <figure className={styles.bl_media_imgWrapper}>
                        <img alt="写真：猫2" src="Images/cat2.png"/>
                      </figure>
                      <div className={styles.bl_media_body}>
                        <h3 className={styles.bl_media_ttl}>
                          【簡単な紹介】
                        </h3>
                        <p className={styles.bl_media_txt}>
                          血統書付きのスコティッシュフォールドクリームタビー！家猫です。<br/>
                          この素敵な猫との新しい出会いに興味をお持ちの方は、お気軽にご応募・お問い合わせください。
                        </p>
                      </div>
                      {/**<!-- /.bl_media_body --> */}
                    </div>
                    {/**<!-- /.bl_media bl_media__rev --> */}
                  </div>
                  {/**<!-- /.ly_cont --> */}
                </section>
                <section className={styles.hp_bgcBase__gray}>
                  <div className={styles.ly_cont}>
                    <ul className={styles.bl_vertPosts}>
                      <li className={styles.bl_vertPosts_item}>
                        <div className={styles.bl_vertPosts_header}>
                          <time className={styles.bl_vertPosts_date}>{ssgMessage}</time>
                          <ul className={styles.bl_vertPosts_labels}>
                            <li>
                              <span className={styles.el_label}>お知らせ</span>
                            </li>
                          </ul>
                        </div>
                        {/**<!-- /.bl_vertPosts_header --> */}
                        <a className={styles.bl_vertPosts_ttl}>【サイト】リンクを全て切っています</a>{/**href="#" */}
                      </li>
                      <li className={styles.bl_vertPosts_item}>
                        <div className={styles.bl_vertPosts_header}>
                          <time className={styles.bl_vertPosts_date}>{ssgMessage}</time>
                          <ul className={styles.bl_vertPosts_labels}>
                            <li>
                              <span className={`${styles.el_label} ${styles.el_label__yellow}`}>お知らせ</span>
                            </li>
                          </ul>
                        </div>
                        {/**<!-- /.bl_vertPosts_header --> */}
                        <a className={styles.bl_vertPosts_ttl}>【サイト】リンクを全て切っています</a>{/**href="#" */}
                      </li>
                      <li className={styles.bl_vertPosts_item}>
                        <div className={styles.bl_vertPosts_header}>
                          <time className={styles.bl_vertPosts_date}>{ssgMessage}</time>
                          <ul className={styles.bl_vertPosts_labels}>
                            <li>
                              <span className={styles.el_label}>お知らせ</span>
                            </li>
                          </ul>
                        </div>
                        {/**<!-- /.bl_vertPosts_header --> */}
                        <a className={styles.bl_vertPosts_ttl}>【サイト】リンクを全て切っています</a>{/**href="#" */}
                      </li>
                    </ul>
                  </div>
                  {/**<!-- /.ly_cont --> */}
                </section>

                <section className="">
                  <div className={`${styles.ly_cont} ${styles.ly_cont__col}`}>
                    <div className={styles.bl_cta}>
                      <h2 className={styles.bl_cta_ttl}>
                        お気軽にお問い合わせください
                      </h2>
                      <p className={styles.bl_cta_txt}>
                        気になることがございましたら、お気軽にお問い合わせください
                      </p>
                      <a className={styles.el_btn}>X(旧twitter)で問い合わせする</a>{/**href="#" */}
                    </div>
                    {/**<!-- /.bl_cta --> */}
                  </div>
                  {/**<!-- /.ly_cont ly_cont__col --> */}
                </section>
              </article>

              <div className={`${styles.bl_cardUnit} ${styles.bl_cardUnit__col3}`}>
                <div className={styles.bl_card}>
                  <figure className={styles.bl_card_imgWrapper}>
                    <img alt="写真：cat1画面" src="Images/cat1.png"/>
                  </figure>
                  <div className={styles.bl_card_body}>
                    <h3 className={styles.bl_card_ttl}>
                      画像その1
                    </h3>
                    <p className={styles.bl_card_txt}>
                      窓にもたれ掛かるポーズ。
                    </p>
                  </div>
                  {/**<!-- /.bl_card_body --> */}
                </div>
                {/**<!-- /.bl_card --> */}
                <div className={styles.bl_card}>
                  <figure className={styles.bl_card_imgWrapper}>
                    <img alt="写真：cat2画面" src="Images/cat2.png"/>
                  </figure>
                  <div className={styles.bl_card_body}>
                    <h3 className={styles.bl_card_ttl}>
                      画像その2
                    </h3>
                    <p className={styles.bl_card_txt}>
                      スフィンクスポーズ。
                    </p>
                  </div>
                  {/**<!-- /.bl_card_body --> */}
                </div>
                {/**<!-- /.bl_card --> */}
                <div className={styles.bl_card}>
                  <figure className={styles.bl_card_imgWrapper}>
                    <img alt="写真：cat3画面" src="Images/cat3.png"/>
                  </figure>
                  <div className={styles.bl_card_body}>
                    <h3 className={styles.bl_card_ttl}>
                      画像その3
                    </h3>
                    <p className={styles.bl_card_txt}>
                      睡眠中でリラックスポーズ。
                    </p>
                  </div>
                  {/**<!-- /.bl_card_body --> */}
                </div>
                {/**<!-- /.bl_card --> */}
              </div>
              {/**<!-- /.bl_cardUnit bl_cardUnit__col3 -->   */} 

            </div>
            {/**<!-- /.bl_topcont ly_cont__col--> */}
          </section>

        </main>
      </Layout>
    </div>
  )
}



export default HomePage