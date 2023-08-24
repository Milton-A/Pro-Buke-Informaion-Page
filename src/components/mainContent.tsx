import Link from "next/link";

export default function MainContent() {
    return (
        <main className="bg-white" id="inicio">
            <div className="relative isolate overflow-hidden bg-white pb-24 sm:py-32" >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-screen-lg pb-4">
                        <h1 className="text-4xl text-center font-bold tracking-tight text-gray-900">
                            Bem-vindo à nossa Plataforma Facilitadora de Estudos!
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-700">
                            Junte-se a nós nessa jornada de aprendizado e alcance o sucesso acadêmico com confiança.
                            Estamos aqui para ajudar você a trilhar o caminho do conhecimento de forma assertiva e inspiradora.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-slate-200 shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                Baixr o App
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-10 max-w-screen-lg">
                    <dl className="mt-16 flex justify-between">
                        <div className="grid justify-items-center">
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-700">12+</dd>
                            <dt className="text-base leading-7 text-gray-700">Universidades</dt>
                        </div>
                        <div className="grid justify-items-center">
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-700">100+</dd>
                            <dt className="text-base leading-7 text-gray-700">Docentes</dt>
                        </div>
                        <div className="grid justify-items-center">
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-700">24/7h</dd>
                            <dt className="text-base leading-7 text-gray-700">Entregamos até ao seu destino</dt>
                        </div>
                        <div className="grid justify-items-center">
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-700">24/24h</dd>
                            <dt className="text-base leading-7 text-gray-700">Puro Conteúdo</dt>
                        </div>
                    </dl>
                </div>
            </div>
        </main>
    );
}