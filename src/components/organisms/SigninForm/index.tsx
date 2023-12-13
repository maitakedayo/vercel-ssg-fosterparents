import { useForm } from 'react-hook-form'


export type SigninFormData = {
  username: string
  password: string
}

interface SigninFormProps {
  setFormpass: React.Dispatch<React.SetStateAction<string>>
}

const SigninForm = ({ setFormpass }: SigninFormProps) => {

  console.log("SigninForm compo")

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
              {...register('username', { required: true })}
              name="username"
              type="text"
              placeholder="ユーザ名"
              //hasError={!!errors.username}
            />
            {errors.username && (
              <p className="text-red-600 text-sm pl-2">
                ユーザ名は必須です
              </p>
            )}
          </div>
          <div className="mb-2">
            {/* サインインパスワードの入力 */}
            <input className="w-full border-2 rounded"
              {...register('password', { required: true })}
              name="password"
              type="password"
              placeholder="パスワード"
              //hasError={!!errors.password}
            />
            {errors.password && (
              <p className="text-red-600 text-sm pl-2">
                パスワードは必須です
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
