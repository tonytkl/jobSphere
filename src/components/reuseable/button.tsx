type Props = {
    text: string
    onClick: () => void
    color: string
}

const Button = ({ text, onClick, color }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`rounded bg-${color} p-2 text-sm text-white`}
        >
            {text}
        </button>
    )
}

export default Button
