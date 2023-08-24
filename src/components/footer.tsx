import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="container px-6 py-12 mx-auto">
                <div className="flex flex-col items-center justify-between text-sm md:flex-row">
                    <p className="mb-6 md:mb-0">
                        Copyright © {new Date().getFullYear()} <span className="text-blue-800">Delta</span> Inc.
                    </p>
                    <ul className="flex gap-4">
                        <li>
                            <Link href="/">
                                <h4>
                                    <span className="hover:underline">Politica de privacidade</span> |
                                    <span className="hover:underline"> Termos e Condições</span>
                                </h4>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}