'use client';


import Link from "next/link";
import { useState } from "react";


const RegisterFrom = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {e.preventDefault();
        if(!name || !email || !password) {
            setError("Bitte alle Felder ausfüllen");
            return;
        }

        try {
            const resUserExists = await fetch('api/userExists', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email})
            });

            const {user} = await resUserExists.json();

            if (user) {
                setError('Benutzer existiert bereits');
                return;
            } 

            const res = await fetch('api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name, email, password
                })
            })

            if(res.ok) {
                const form = e.target;
                form.reset();
            }
        } catch (error) {
            console.log('Registieren fehlgeschlagen');
        }
    };




  return (
    <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-black">
            <h1 className="text-xl font-bold my-4">Registriere Dich hier!</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name"/>
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"/>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Passwort"/>
                <button className="bg-black text-white font-bold curser-pointer px-6 py-2">Registrieren</button>

                {error && (
                    <div className="text-white bg-red-600 w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
                )}
                
            </form>
            <Link className='text-sm mt-3' href={'/'}>Hast du schon einen Account?
                <span className="underline text-right">Anmelden</span>
            </Link>
        </div>
    </div>
  )
}

export default RegisterFrom