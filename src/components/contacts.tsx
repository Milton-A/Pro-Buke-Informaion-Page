export default function Contacts() {
    return (
        <section className="grid grid-cols-2 gap-4 mt-4" id="contactos">
            <div className="01 isolate px-6">
                <div className="mx-auto max-w-2xl text-center mt-24">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Entre em Contato Conosco</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Estamos ansiosos para ouvir de você e responder a quaisquer perguntas que possa ter.
                        Sua opinião e suas necessidades são de extrema importância para nós.
                    </p>
                </div>
                <div>
                    <p>Telefone <span>+244 924687596</span> </p>
                    <p>Endereço <span> Camama, Distrito urbano da cidade Universitária, Talatona/Luanda-Angola</span></p>
                    <p>Email <span>comunicacao@probuke.ao</span></p>
                    <p>Siga-nos <span>Facebook</span> <span>Instagram</span></p>
                </div>
            </div>
            <div className="02 isolate bg-white px-6">
                <form className="mx-auto mt-16 max-w-xl pb-24">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Nome
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    placeholder="Escreva o seu nome..."
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Apelido
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    placeholder="Escreva o seu Apelido..."
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Escreva o seu Email..."
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                Mensagem
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    placeholder="Escreva aqui a sua mensagem..."
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}