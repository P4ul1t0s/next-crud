import { useState } from 'react'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    const clientes = [
        new Cliente("Ana", 34, "1"),
        new Cliente("Bia", 45, "2"),
        new Cliente("Carlos", 23, "3"),
        new Cliente("Pedro", 54, "4")
    ]

    function clienteSelecionado(cliente: Cliente){
        console.log(cliente.nome + " selecionado")
    }

    function clienteExcluido(cliente: Cliente){
        console.log(cliente.nome + " excluido")
    }

    function salvarCliente(cliente: Cliente){
        console.log(cliente)
    }

    return (
        <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-400 to-purple-600 text-white">
            <Layout titulo="Cadastro Simples">
                {visivel === 'tabela' ? (
                    <>
                        <div className="flex justify-end">
                            <Botao
                                onClick={() => setVisivel('form')}
                                cor="green"
                                classname="mb-4">
                                Novo Cliente
                            </Botao>
                        </div>
                        <Tabela
                            clientes={clientes}
                            clienteSelecionado={clienteSelecionado}
                            clienteExcluido={clienteExcluido}>
                        </Tabela>
                    </>
                ) : (
                    <>
                        <Formulario 
                            cliente={clientes[0]}
                            clienteMudou={salvarCliente}
                            cancelado={() => setVisivel('tabela')}
                        />
                    </>
                )}
            </Layout>
        </div>
    )
}