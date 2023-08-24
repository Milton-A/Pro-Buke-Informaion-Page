import Link from "next/link";

export default function NavBar() {
    return (
        <header className="static top-0 z-50 flex-shrink-0 py-2 bg-blue-600 md:sticky">
            <div className="container flex  flex-col items-start justify-between px-6 mx-auto md:flex-row md:items-center">
                <Link href="/">
                    <h1 className="text-lg font-bold text-slate-200">Pro Buke</h1>
                </Link>
                <Nav />
                <div className="absolute flex justify-end md:static top-2 right-4">
                    <div className="flex">
                        <Link href="/">
                            <h3 className="flex items-center justify-center p-2 uppercase">
                                <span className="text-slate-200">PT</span>/<span className="text-slate-400">EN</span>
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

function Nav() {
    return (
        <ul className="text-slate-200 grid grid-flow-col gap-4 mx-auto mt-6 md:mt-0 auto-cols-auto md:auto-rows-auto md:gap-8 lg:gap-12">
            <li className="py-4 hover:underline text-sm md:text-base">
                <Link href="#inicio"> Inicio </Link>
            </li>
            <li className="py-4 hover:underline text-sm md:text-base">
                <Link href="#sobre">  Sobre </Link>
            </li>
            <li className="py-4 hover:underline text-sm md:text-base">
                <Link href="#servicos"> Serviços </Link>
            </li>
            <li className="py-4 hover:underline text-sm md:text-base">
                <Link href="#politicas">  Políticas </Link>
            </li>
            <li className="py-4 hover:underline text-sm md:text-base">
                <Link href="#faqs">  FAQs </Link>
            </li>
            <li className="py-4 hover:underline text-sm md:text-base">
                <Link href="#contactos">  Contactos </Link>
            </li>
        </ul>
    );
}