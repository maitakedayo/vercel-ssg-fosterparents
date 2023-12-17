import { useForm } from 'react-hook-form'
import { useEffect } from "react"

export type SigninFormData = {
  username: string
  password: string
}

interface SigninFormProps {
  setFormpass: React.Dispatch<React.SetStateAction<string>>
}

const SigninForm = ({ setFormpass }: SigninFormProps) => {
  
  //レンダ確認
  useEffect(() => {
    console.log(`SigninForm compo fresh render`);
  }); //依存配列なしの場合 render毎実行

  // React Hook Formの使用
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>()

  const onSubmit = (data: SigninFormData) => {
    const { username, password } = data
    setFormpass(()=>password)
  }

  return (
    <div className="flex justify-center py-2 px-2 ">
      <div className="flex w-96 flex-col justify-center justify-items-center">{/**中央配置 */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-1">
            {/* サインインユーザー名の入力 */}
            <input className="w-full border-2 rounded"
              {...register('username', { 
                required: true,
                maxLength: 20,
                pattern: /^[^<>&%$]+$/, // <>&%$などの特定の文字を禁止
              })}
              name="username"
              type="text"
              placeholder="ユーザ名"
              //hasError={!!errors.username}
            />
            {errors.username && (
              <p className="text-red-600 text-sm pl-2">
                ユーザ名は必須で、20文字以内で入力してください。特定の文字（&lt;, &gt;, &, %, $）は使用できません。
              </p>
            )}
          </div>
          <div className="mb-2">
            {/* サインインパスワードの入力 */}
            <input className="w-full border-2 rounded"
              {...register('password', {
                required: true,
                maxLength: 20,
                pattern: /^[^<>&%$]+$/, // <>&%$などの特定の文字を禁止
              })}
              name="password"
              type="password"
              placeholder="パスワード"
              //hasError={!!errors.password}
            />
            {errors.password && (
              <p className="text-red-600 text-sm pl-2">
                パスワードは必須で、20文字以内で入力してください。特定の文字（&lt;, &gt;, &, %, $）は使用できません。
              </p>
            )}
          </div>
          <button className="w-full bg-gradient-to-br from-blue-300 to-blue-800 hover:bg-gradient-to-tl text-white rounded px-4 py-2" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  )
}

export default SigninForm
