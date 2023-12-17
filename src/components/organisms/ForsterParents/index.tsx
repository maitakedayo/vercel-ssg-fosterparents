import { useEffect } from "react"
import styles from 'styles/styles.module.css'

const ForsterParents = () => {

  //レンダ確認
  useEffect(() => {
    console.log(`ForsterParents compo fresh render`);
  }); //依存配列なしの場合 render毎実行

  const timestamp = "2023/12/16 18:43:20";

  return (
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
                    <time className={styles.bl_vertPosts_date}>{timestamp}</time>
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
                    <time className={styles.bl_vertPosts_date}>{timestamp}</time>
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
                    <time className={styles.bl_vertPosts_date}>{timestamp}</time>
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
  )
}

export default ForsterParents
