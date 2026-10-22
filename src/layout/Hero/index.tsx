import { HiOutlineSquares2X2 } from "react-icons/hi2";
import Petcard from "../../components/Petcard";


function Hero() {
  return (
    <section className="px-10 pt-5">
        <div>
            <div className="flex gap-7 items-center ">
                    <p className="font-bold text-4xl">Pets</p>
                <div className="flex items-center gap-3 bg-[#0F8A7E] rounded-2xl p-3">
                    <HiOutlineSquares2X2 size={20} color="#F3FAF8"/>
                    <a className="text-white font-medium">Ver Todos</a>
                </div>
            </div>
                <div className="grid grid-cols-4 gap-3">
                    <Petcard img="../../../public/img/pets/bidu.png" nome="Thor" tipo="Cachorro" raca="Golden Retriever" tutor="Ana Souza" />
                    <Petcard img="../../../public/img/pets/frajola.png" nome="Mia" tipo="Gata" raca="Siamês" tutor="Carlos Lima" />
                    <Petcard img="../../../public/img/pets/bidu.png" nome="Thor" tipo="Cachorro" raca="Golden Retriever" tutor="Ana Souza" />
                    <Petcard img="../../../public/img/pets/mia.png" nome="Mia" tipo="Gata" raca="Siamês" tutor="Carlos Lima" />
                    <Petcard img="../../../public/img/pets/bidu.png" nome="Thor" tipo="Cachorro" raca="Golden Retriever" tutor="Ana Souza" />
                    <Petcard img="../../../public/img/pets/frajola.png" nome="Mia" tipo="Gata" raca="Siamês" tutor="Carlos Lima" />
                    <Petcard img="../../../public/img/pets/bidu.png" nome="Thor" tipo="Cachorro" raca="Golden Retriever" tutor="Ana Souza" />
                    <Petcard img="../../../public/img/pets/mia.png" nome="Mia" tipo="Gata" raca="Siamês" tutor="Carlos Lima" />
                </div>
            </div>

    </section>
  )
}


export default Hero
