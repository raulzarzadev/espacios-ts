import Division from '@comps/Division'
import Button from '@comps/inputs/Button'
import Text from '@comps/inputs/Text'
import Link from '@comps/Link'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required()
})
export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = (form: object) => console.log(form)

  return (
    <div className=" p-4 rounded-xl shadow-2xl">
      <div className="my-12 flex mx-auto justify-center text-3xl font-bold">
        {'< Logo />'}
      </div>
      <p className="w-4/5 mx-auto text-center my-4">
        Optimiza la gestión de espacios. Incrementa tus ganancias.
      </p>
      <form
        className="flex flex-col items-center w-3/5 mx-auto "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="my-2 w-full">
          <Text
            {...register('email')}
            placeholder="correo"
            errorText={errors?.email?.message}
            fullWidth
          />
        </div>
        <div className="my-2 w-full">
          <Text
          type='password'
            {...register('password')}
            placeholder="contraseña"
            errorText={errors?.password?.message}
            fullWidth
          />
        </div>
        <div className="my-4 w-full">
          <Button label="Ingresar" fullWidth/>
        </div>
      </form>
      <div className="flex flex-col items-center ">
        <div className="my-4">
          <Link href="/">¿Olvidaste tu contraseña?</Link>
        </div>
        <Division />
        <div className="my-4">
          <Button label="Registrate" variant="third" />
        </div>
      </div>
    </div>
  )
}
