import { Helmet } from "react-helmet-async";

const Gallery = () => {
    return (
        <div className="bg-black">
            <Helmet>
                <title>Thrive | Gallery</title>
            </Helmet>
            <p className='text-xl md:text-2xl lg:text-4xl font-bold text-center py-20 text-amber-400'>Our Gallery</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 p-5 lg:p-20">
                <img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fHww" className="w-full border-[1.5px] border-amber-400 rounded-lg" />
                <img src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full border-[1.5px] border-amber-400 rounded-lg" />
                <img src="https://plus.unsplash.com/premium_photo-1664304782996-2ebdd47049f6?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full border-[1.5px] border-amber-400 rounded-lg" />
                <img src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full border-[1.5px] border-amber-400 rounded-lg" />
                <img src="https://images.unsplash.com/photo-1587938745570-681161dcfe17?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full border-[1.5px] border-amber-400 rounded-lg" />
                <img src="https://images.unsplash.com/photo-1593476123561-9516f2097158?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full border-[1.5px] border-amber-400 rounded-lg" />
                <img src="https://images.unsplash.com/photo-1590771998996-8589ec9b5ac6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full border-[1.5px] border-amber-400 rounded-lg" />
                <img src="https://images.unsplash.com/photo-1637430308606-86576d8fef3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGd5bXxlbnwwfHwwfHx8MA%3D%3D" className="w-full border-[1.5px] border-amber-400 rounded-lg" />
                <img src="https://plus.unsplash.com/premium_photo-1676320514031-afb35b817a3c?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full border-[1.5px] border-amber-400 rounded-lg" />
                <img src="https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxneW18ZW58MHx8MHx8fDA%3D" className="w-full border-[1.5px] border-amber-400 rounded-lg" />
                <img src="https://images.unsplash.com/photo-1637870473618-8c9fa7d11f0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full border-[1.5px] border-amber-400 rounded-lg" />
                <img src="https://images.unsplash.com/photo-1603734220970-25a0b335ca01?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full border-[1.5px] border-amber-400 rounded-lg" />
            </div>
        </div>
    );
};

export default Gallery;
