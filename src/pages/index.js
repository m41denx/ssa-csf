import NavBar from "@/components/NavBar";
import Logo from  "@/assets/logo.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Chem from "@/assets/faculties/chem.png"
import CS from "@/assets/faculties/cslogo.svg"
import Econom from "@/assets/faculties/econom.png"
import FMO from "@/assets/faculties/fmo.png"
import Geol from "@/assets/faculties/geol.png"
import Ggit from "@/assets/faculties/ggit.png"
import Hist from "@/assets/faculties/hist.png"
import Jour from "@/assets/faculties/jour.png"
import Law from "@/assets/faculties/law.png"
import Math from "@/assets/faculties/matfak.png"
import MBF from "@/assets/faculties/mbf.png"
import Pharm from "@/assets/faculties/pharm.png"
import Phil from "@/assets/faculties/phil.png"
import Phipsy from "@/assets/faculties/phipsy.png"
import Phys from "@/assets/faculties/phys.png"
import Pmm from "@/assets/faculties/pmm.png"
import RGPH from "@/assets/faculties/rgph.png"
import Link from "next/link";

const faculties = [
  {img: CS.src, name: "?компьютерных наук", link: "https://vk.com/ssa_csf"},
  {img: Chem.src, name: "Химический?", link: "https://vk.com/sno_chem"},
  {img: Math.src, name: "Математический?", link: "https://vk.com/sno_math"},
  {img: Geol.src, name: "Геологический?", link: "https://vk.com/geosno"},
  {img: Hist.src, name: "Исторический?", link: "https://vk.com/histvsu"},
  {img: Jour.src, name: "?журналистики", link: "https://vk.com/public210972608"},
  {img: Pmm.src, name: "?прикладной математики, информатики и механики", link: "https://vk.com/sciamm"},
  {img: Phipsy.src, name: "?Философии и психологии", link: "https://vk.com/sno_fipsi"},
  {img: Phys.src, name: "Физический?", link: "https://vk.com/snovsuphys"},
  {img: Law.src, name: "Юридический?", link: "https://vk.com/law_ssc"},
  {img: Econom.src, name: "Экономический?", link: "https://vk.com/public222719412"},
  {img: FMO.src, name: "?международных отношений", link: "https://vk.com/eurasianclubvsu"},
  {img: Ggit.src, name: "?географии, геоэкологии и туризма", link: "https://vk.com/sno_ggit"},
  {img: MBF.src, name: "Медико-биологический?", link: "https://vk.com/sno_mbf"},
  {img: RGPH.src, name: "?Романо-германской филологии", link: "https://vk.com/science_rgph_vsu"},
  {img: Phil.src, name: "Филологический?", link: "https://vk.com/sno_phil_vsu"},
  {img: Pharm.src, name: "Фармацевтический?", link: "https://vk.com/sno_farm"},
]

const IndexPage = (props) => {
  return <>
    <NavBar/>
    <div className="h-screen flex flex-col">
      <div className="flex items-center justify-center flex-col flex-1 gap-4">
        <img src={Logo.src} className="h-40"/>
        <p className="text-blue-vsu text-2xl font-bold max-w-3xl">Добро пожаловать в Студенческое Научное Объединение
          ВГУ!</p>
        <p className="text-blue-vsu text-xl max-w-3xl text-center">Здесь не только наука, но и возможность развивать
          soft skills в команде. Прокачайте навыки в продвижении, переговорах, публичных выступлениях и управлении
          проектами. Присоединяйтесь к нам и станьте частью увлекательного научного путешествия!</p>
      </div>
      <div className="">
        <p className="text-3xl font-bold text-blue-vsu text-center mb-4">Наши СНО</p>
        <Slider accessibility={false} dots={false} infinite slidesToShow={6} slidesToScroll={1} autoplay speed={5000}
                autoplaySpeed={0} cssEase="linear">
          {faculties.map((fac, i) => {
            return <Link href={fac.link} className="flex flex-col justify-center items-center gap-4 px-8">
              <img src={fac.img} className="h-24 grayscale hover:grayscale-0 transition-all duration-500"
                   alt={fac.name.replace("?"," Факультет ")}/>
            </Link>
          })}
        </Slider>
      </div>
    </div>


    <div className="flex items-center justify-between p-16">
      <div className="flex-col flex">
        <span className="text-6xl font-bold">Мы охуенны 👍</span>
        <span className="text-xl font-bold">Вы умрете, когда узнаете насколько</span>
      </div>
      <img className="w-1/2 rounded-xl rotate-3"
           src="https://sun9-59.userapi.com/impg/dtEbda9AV_L2Lg_HoB1RN0Msdkspkqf0DMqlxw/4TtHTuYB8BM.jpg?size=2560x1440&quality=95&sign=7dc660f09e37e41eebe02a67412eabcc&type=album"/>
    </div>
    <div className="flex items-center justify-between p-16">

      <img className="w-1/2 rounded-xl rotate-3"
           src="https://sun9-59.userapi.com/impg/dtEbda9AV_L2Lg_HoB1RN0Msdkspkqf0DMqlxw/4TtHTuYB8BM.jpg?size=2560x1440&quality=95&sign=7dc660f09e37e41eebe02a67412eabcc&type=album"/>
      <div className="flex-col flex">
        <span className="text-6xl font-bold">Я скопипастил</span>
        <span className="text-xl font-bold">это раз 20 и понял что фигню сделал</span>
      </div>
    </div>
  </>
}

export default IndexPage