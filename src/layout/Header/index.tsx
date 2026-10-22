import logo from "../../../public/img/logo.png"
import Button from "../../components/Button"
import hero_svg from "../../../public/img/hero.svg"

function Header() {
  return (
    <section className='px-10 pt-10 '>
        <div className="flex justify-between">
            <img src={logo} className='w-50' />
            <Button text="Lista de Favoritos"  />
        </div>
        <div className="flex justify-between items-baseline-last border-b-2 border-[#0B6E64] ">
            <div className="pt-30">
                <p className="text-5xl w-120 font-bold pb-5">Cuidado completo em um só <span className="text-[#0B6E64]">lugar.</span></p>
                <p className="text-xl w-100 text-[#4A5859]">Clientes, pets e serviços organizados para o atendimento do dia a dia</p>
                <p className="text-[#0B6E64] font-bold pt-5">Patinhas felizes, tutores tranquilos.</p>
            </div>
            <img src={hero_svg} className="w-120"/>
        </div>
    </section>
  )
}

export default Header