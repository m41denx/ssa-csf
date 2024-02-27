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

import Cover from "@/assets/cover.jpg"
import {Button} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVk} from "@fortawesome/free-brands-svg-icons";

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

const orgs = [
  {
    ava:"https://sun130-2.userapi.com/s/v1/if2/1_QPl7gUYeAXgJS66jBBmSDWbZdVUwryBoWwpBxdVsb7s0WTsnWMlOn8mNFfpd96KQ-HPTUSHxHCPh8NIv5VBzRJ.jpg?quality=95&crop=268,531,1331,1331&as=50x50,100x100,200x200,400x400&ava=1&u=8PjoiJPSlwe-sMUzhZ7OG6clRrq-MbDYHdynufC-fYQ&cs=200x200",
    name: "Анастасия Лучкова",
    position: "Председатель"
  },
  {
    ava:"https://sun130-1.userapi.com/s/v1/if2/5Hrwcf9VkOHwo8hyF3zh6DtZJWS5ZNjIfKOhM7teKqjd5vSeVcZpXxHU6a7-G35gri3fJwXTEqS4piZRaGwx4XHW.jpg?quality=95&crop=40,258,631,631&as=50x50,100x100,200x200,400x400&ava=1&u=asVpG0hFBqZlF7lGEJQ-lRBRTR0Txn3yPL7_N6tKnqU&cs=200x200",
    name: "Маргарита Бугакова",
    position: "Зам. председателя"
  },
  {
    ava:"https://sun130-2.userapi.com/s/v1/if2/yOi6fYwfhU1MBNEscMLNBFZkyNM43XUdegQDaWUa0aRF9eryp_y8oUvkK0t90DgwHfbJlI8Y5nuqLf1JEJ8g1Q3m.jpg?quality=96&crop=73,0,261,261&as=50x50,100x100,200x200&ava=1&u=q7WmDyoBoRwShPW_BIl2tSEd__J86FpKOT1dAiVM5cw&cs=200x200",
    name:"Сергей Киселев",
    position: "Куратор"
  },
  {
    ava:"https://sun130-2.userapi.com/s/v1/if2/v0QJa6ZxvmIlPQIx_qtSqECMwAQrEuIjC9Gly0nt5D1nHW9OwvkPVpbLVY3SwhHFxWZhv5_MBE5XnI0HUaSwhzVw.jpg?quality=95&crop=66,211,1602,1602&as=50x50,100x100,200x200,400x400&ava=1&u=SIT_m4gstWUe_MELLFNHqzcyhhUHnZuEN2ZDbONwANo&cs=200x200",
    name:"Полина Васильева",
    position: "Медиа"
  }
]

const IndexPage = (props) => {
  const sts = (typeof window !== 'undefined'?window.innerWidth:200) / 200

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
      <div className="py-4">
        <p className="text-3xl font-bold text-blue-vsu text-center mb-6">Наши СНО</p>
        <Slider accessibility={false} dots={false} infinite slidesToShow={sts} slidesToScroll={1} autoplay speed={5000}
                autoplaySpeed={0} cssEase="linear">
          {faculties.map((fac, i) => {
            return <Link key={i} href={fac.link} className="flex flex-col justify-center items-center gap-4 px-8">
              <img src={fac.img} className="h-20 grayscale hover:grayscale-0 transition-all duration-500"
                   alt={fac.name.replace("?", " Факультет ")}/>
            </Link>
          })}
        </Slider>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 p-8 gap-8" id="contacts">
      <div className="rounded-xl flex flex-col bg-slate-100 p-4 gap-4 drop-shadow-lg">
        <div className="relative">
          <img src={Cover.src} className="rounded-lg"/>
          <Link href="https://vk.com/snovsu" legacyBehavior>
            <Button type="primary" className="w-fit gap-2 flex items-center absolute bottom-1 right-1 drop-shadow-md z-10">
              <FontAwesomeIcon icon={faVk}/> ВКонтакте
            </Button>
          </Link>
        </div>
        <p>
          Присоединяйтесь к нашему сообществу ВК чтобы быть в курсе всех событий!
        </p>
      </div>
      <div className="flex flex-col items-center gap-8">
        <p className="text-blue-vsu text-xl font-bold">Организаторы</p>
        <div className="flex gap-2 items-center">
          {orgs.map((o,i)=>{
            return <div className="flex flex-col items-center" key={i}>
              <img src={o.ava} className="rounded-full w-24"/>
              <p className="text-blue-vsu text-lg">{o.name}</p>
              <span>{o.position}</span>
            </div>
          })}
        </div>
      </div>
    </div>
  </>
}

export default IndexPage