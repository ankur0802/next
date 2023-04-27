import Link from 'next/link'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <>

<div className="container">
      <form className="form-1">
        <h1>Login</h1>
        
        <input type="email" name="email" id="email" required  placeholder='Email'/>
       
        <input type="password" name="password" id="password" required placeholder='Password'/>
        <span >

        <Link href='#'>Forgot Password</Link>
        </span>
        <button className='btnn'>Login</button>

      </form>
    </div>

  </>
}

export default page