import Link from "next/link";

export default function AboutUs() {
    return (
        <section className="mt-1" id="sobre">
            <div className="relative isolate overflow-hidden bg-gray-950 py-24 sm:py-32">
                <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr bg-cyan-700 bg-blue-700 opacity-20"
                        style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }}
                    />
                </div>
                <div
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr bg-cyan-700 bg-blue-700 opacity-20"
                        style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }}
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-screen-lg pb-4">
                        <h2 className="text-4xl text-center font-bold tracking-tight text-slate-100 sm:text-6xl">
                            Desbravando o Caminho do Conhecimento!
                        </h2>
                        <p className="mt-6 text-center text-lg leading-8 text-gray-300">
                            Estudar de forma eficaz e bem orientada é essencial para o sucesso acadêmico.
                            É por isso que estamos aqui para oferecer a você uma solução abrangente para
                            suas necessidades de aprendizado. Seja você um estudante universitário ávido por
                            conhecimento ou um dedicado aprendiz de Direito, nossa plataforma foi projetada para
                            simplificar e aprimorar sua jornada educacional.
                        </p>
                        <p className="mt-6 text-center text-lg leading-8 text-gray-300">
                            Nossa plataforma se destaca como uma ferramenta indispensável para estudantes de todas as faculdades,
                            e em especial, para aqueles que frequentam a faculdade de Direito. Compreendemos as demandas e desafios
                            que surgem ao longo do percurso acadêmico, especialmente quando se trata da necessidade constante de materiais de apoio.
                        </p>
                    </div>
                    <div className="mx-auto max-w-screen-lg pb-4">
                        <h2 className="text-4xl text-center font-bold tracking-tight text-slate-100">
                            O Que Oferecemos?
                        </h2>
                        <p className="mt-6 text-center text-lg leading-8 text-gray-300">
                            Oferecemos uma ampla variedade de recursos que atendem às suas demandas educacionais.
                            Imagine ter acesso a matérias de apoio, livros essenciais, compilações de enunciados e
                            até mesmo provas resolvidas, tudo organizado por disciplina e ministrado por seus professores.
                            Vai além! Nossos serviços não se limitam apenas a texto. Áudios explicativos e vídeos instrutivos
                            gravados por monitores experientes e, quando possível, até mesmo por professores renomados,
                            garantem um entendimento mais profundo e claro do conteúdo.
                        </p>
                    </div>
                    <div className="mx-auto max-w-screen-lg pb-4">
                        <h2 className="text-4xl text-center font-bold tracking-tight text-slate-100">
                            Como Funciona?
                        </h2>
                        <p className="mt-6 text-center text-lg leading-8 text-gray-300">
                            Simplificamos o processo para você. Ao criar seu perfil em nossa plataforma,
                            você poderá personalizar sua experiência de aprendizado. Selecione os anos que deseja solicitar
                            materiais, escolha as disciplinas de interesse e até mesmo seus professores favoritos. Nossa equipe
                            de gestores diligentes revisará suas solicitações, garantindo que você receba exatamente o que
                            precisa para avançar em seus estudos.
                        </p>
                    </div>
                    <div className="mx-auto max-w-screen-lg pb-4">
                        <h2 className="text-4xl text-center font-bold tracking-tight text-slate-100">
                            A Entrega e o Pagamento
                        </h2>
                        <p className="mt-6 text-center text-lg leading-8 text-gray-300">
                            A entrega do material é um passo crucial em nosso serviço. Para sua conveniência,
                            oferecemos duas opções de pagamento: dinheiro em mãos ou transferência via IBAN,
                            com os detalhes fornecidos pela nossa plataforma. Qualquer que seja a opção escolhida,
                            registramos todos os pagamentos e entregas, garantindo total transparência.

                            Na Plataforma Facilitadora de Estudos, estamos empenhados em tornar seu percurso
                            acadêmico mais suave e produtivo. Combinamos recursos de alta qualidade, tecnologia
                            avançada e uma equipe dedicada para ajudar você a alcançar seus objetivos educacionais
                            de maneira eficaz e conveniente.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}