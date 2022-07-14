interface BotaoProps{
    cor?: string
    classname?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps){
    const cor = props.cor
    return(
        <button onClick={props.onClick} className={`bg-gradient-to-r from-${cor}-400 to-${cor}-700 text-white px-4 py-2 rounded-md ${props.classname}`}>
            {props.children}
        </button>
    )
}