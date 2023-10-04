'use client';

import { signIn } from "next-auth/react";
import Link from "next/link"
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn('credentials',{
        email, password, redirect:false,
      });

      if(res.error) {
        setError('Anmeldedaten inkorrekt');
        return;
      }
      router.replace('dashboard')
    } catch (error) {
        console.log(error);
      }
    }




  return (
    <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-black">
            <h1 className="text-xl font-bold my-4">Melde Dich Hier An!</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Passwort"/>
                <button className="bg-black text-white font-bold curser-pointer px-6 py-2">Anmelden</button>
                {error && (
                <div className="text-white bg-red-600 w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
                )}
                
            </form>
            <Link className='text-sm mt-3' href={'/Register'}>Noch kein Account?
                <span className="underline text-right">Registieren</span>
            </Link>
        </div>
    </div>
  )
}

export default LoginForm