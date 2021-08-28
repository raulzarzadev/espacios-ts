import Division from '@comps/Division'
import Button from '@comps/inputs/Button'
import Text from '@comps/inputs/Text'
import Link from '@comps/Link'

export default function Signin() {
  return (
    <div className="">
      <div>Logo</div>
      <div className="flex flex-col items-center">
        <div className="my-2">
          <Text placeholder="correo" />
        </div>
        <div className="my-2">
          <Text placeholder="contraseña" />
        </div>

        <div>
          <Button label='Ingresar'/>
        </div>

        <div>
          <Link href='/'>
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <Division/>
        <div className='my-2'>
          <Button label='Registrate' variant='third'/>
        </div>
      </div>
    </div>
  )
}
