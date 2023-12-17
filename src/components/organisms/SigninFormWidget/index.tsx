import { useState } from 'react'
import { useEffect } from "react"
import { ChangeEvent } from "react"
import SigninForm from 'components/organisms/SigninForm/index'
import useSWR from 'swr'
import React from 'react'


const SigninFormWidget = () => {
  const [formPass, setFormPass] = useState<string>("")

  //レンダ確認
  useEffect(() => {
    console.log(`SigninFormWidget compo fresh render`);
  }); //依存配列なしの場合 render毎実行

  //---ログイン照合-s-
  const fetchDataAndExtractPassword = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.text()).then(text => JSON.parse(text)['password'])
  const apiEndpoint = '/api/hello?id=0'
  const {data: passwordData, error: fetchError} = useSWR<string, Error>(
    apiEndpoint,
    fetchDataAndExtractPassword,
    { //---無駄初期レンダを1回減らす効果あり
      revalidateOnMount: false, // 初期レンダリング時に再検証を行わない
      shouldRetryOnError: false, // エラーが発生したときに再試行しない
    }
  );
  const doLogoutAction = ()=>{setFormPass(() => "nillnillnill")}
  //---e-

  //blurFlagを変えて再レンダ
  const changeBlur = (e: ChangeEvent<HTMLInputElement>) => {
    //setBlurFlag((blurFlag) => !blurFlag) //e.target.checked
  }

  return (
    <div>

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

    </div>
  )
}

export default SigninFormWidget