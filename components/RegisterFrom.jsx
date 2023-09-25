import Link from "next/link";


const RegisterFrom = () => {
  return (
    <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-black">
            <h1 className="text-xl font-bold my-4">Registriere Dich hier!</h1>

            <form className="flex flex-col gap-3">
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Passwort"/>
                <button className="bg-black text-white font-bold curser-pointer px-6 py-2">Registrieren</button>
                <div className="text-white bg-red-600 w-fit text-sm py-1 px-3 rounded-md mt-2">Error</div>
            </form>
            <Link className='text-sm mt-3' href={'/'}>Hast du schon einen Account?
                <span className="underline text-right">Anmelden</span>
            </Link>
        </div>
    </div>
  )
}

export default RegisterFrom