interface BotaoProps{
    cor?: string
    classname?: string
    children: any
}

export default function Botao(props: BotaoProps){
    const cor = props.cor
    return(
        <button className={`bg-gradient-to-r from-${cor}-400 to-${cor}-700 text-white px-4 py-2 rounded-md ${props.classname}`}>
            {props.children}
        </button>
    )
}