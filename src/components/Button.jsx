const ButtonBlue = (props) => {
    return (
        <button className="bg-primary-blue text-white font-bold mt-5 px-6 md:px-10 py-3 lg:py-4 rounded-lg">
            {props.name}
        </button>
    )
}

export const ButtonTransparent = (props) => {
    return (
        <button className="bg-[#F7F7FD] py-3 lg:py-4 px-6 md:px-10 mt-5 rounded-lg text-[#A2B3BF] font-bold">
            {props.name}
        </button>
    )
}

export const ButtonGhost = (props) => {
    return (
        <button className="py-3 lg:py-4 px-6 md:px-10 mt-5 rounded-lg text-white font-bold">
            {props.name}
        </button>
    )
}

export default ButtonBlue;