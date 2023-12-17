import { useEffect } from "react"
import styles from 'styles/styles.module.css'

const BlockBtn = (props: { title: string, text: string, btnText: string }) => {
  const { title, text, btnText } = props;
  //レンダ確認
  useEffect(() => {
    console.log(`Btn compo fresh render`);
  }); //依存配列なしの場合 render毎実行

  return (

    <section className="">
      <div className={`${styles.ly_cont} ${styles.ly_cont__col}`}>
        <div className={styles.bl_cta}>
          <h2 className={styles.bl_cta_ttl}>
            {title}
          </h2>
          <p className={styles.bl_cta_txt}>
            {text}
          </p>
          <a className={styles.el_btn}>{btnText}</a>{/**href="#" */}
        </div>
        {/**<!-- /.bl_cta --> */}
      </div>
      {/**<!-- /.ly_cont ly_cont__col --> */}
    </section>
  )
}

export default BlockBtn
