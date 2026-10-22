import { CiLocationOn } from "react-icons/ci";
import { GiFamilyTree } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";


interface PetProps {
    img: string;
    nome: string;
    tipo: string;
    raca: string;
    tutor: string
}
function Petcard({img, nome, tipo, raca, tutor}: PetProps) {
  return (
    <div>
        <div className="bg-[#f5f3f3] p-3 rounded-2xl w-70 shadow-2xl">
            <img src={img} className="w-100 rounded-xl" />
            <div>
                <div>
                    <p className="text-2xl font-bold">{nome}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <CiLocationOn size={15} />
                    <p>{tipo}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <GiFamilyTree size={15} />
                    <p>{raca}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <IoPersonOutline size={15} />
                    <p>Tutor: {tutor}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Petcard