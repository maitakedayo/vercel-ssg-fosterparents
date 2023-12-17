import { useEffect } from "react"

const Footer = () => {
  
  //レンダ確認
  useEffect(() => {
    console.log(`footer compo fresh render`);
  }); //依存配列なしの場合 render毎実行

  return (
    <footer>
      <div className='flex flex-col'>        
        <div className='mb-4 min-w-full'>     
          <nav className='flex flex-row'>
            <div className='mb-4 pr-4'>
                <div className='cursor-pointer hover:underline'>トップ</div>
            </div>
            <div className='mb-4 pr-4'>
                <div className='cursor-pointer hover:underline'>お知らせ</div>
            </div>
            <div className='mb-4 pr-4'>
                <div className='cursor-pointer hover:underline'>利用規約</div>
            </div>
            <div className='mb-4 pr-4'>
                <div className='cursor-pointer hover:underline'>プライバシーポリシー</div>
            </div>
            <div className='flex mb-4 pr-4'>
                <div className='cursor-pointer hover:underline'>お問い合わせ</div>
            </div>   
          </nav>
          <div className='py-2'>
            <>© 2023 maitakedayo Co., Ltd..</>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer