export default function Pagina(props : any) {
    return (
        <div className={
            `flex flex-col justify-center
            items-center h-screen w-screen
            text-white bg-[url('https://source.unsplash.com/random/1920x1080/?universe,abstract')]
            bg-no-repeat bg-cover`
        }>
            <div className={`
                flex flex-col h-full w-full
                justify-center items-center
                bg-black bg-opacity-80
            `}>
                {props.children}
            </div>
            
        </div>
    )
}