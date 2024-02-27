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
  {img: CS.src, name: "?компьютерных наук", link: "https://vk.com/ssa_csf", id:"210543832"},
  {img: Chem.src, name: "Химический?", link: "https://vk.com/sno_chem", id:"209474091"},
  {img: Math.src, name: "Математический?", link: "https://vk.com/sno_math", id:"209834276"},
  {img: Geol.src, name: "Геологический?", link: "https://vk.com/geosno", id:"209709246"},
  {img: Hist.src, name: "Исторический?", link: "https://vk.com/histvsu", id:"210569662"},
  {img: Jour.src, name: "?журналистики", link: "https://vk.com/public210972608", id:"210972608"},
  {img: Pmm.src, name: "?прикладной математики, информатики и механики", link: "https://vk.com/sciamm", id:"210663214"},
  {img: Phipsy.src, name: "?Философии и психологии", link: "https://vk.com/sno_fipsi", id:"211471229"},
  {img: Phys.src, name: "Физический?", link: "https://vk.com/snovsuphys", id:"210459813"},
  {img: Law.src, name: "Юридический?", link: "https://vk.com/law_ssc", id:"16158946"},
  {img: Econom.src, name: "Экономический?", link: "https://vk.com/public222719412", id:"222719412"},
  {img: FMO.src, name: "?международных отношений", link: "https://vk.com/eurasianclubvsu", id:"183751330"},
  {img: Ggit.src, name: "?географии, геоэкологии и туризма", link: "https://vk.com/sno_ggit", id:"210445864"},
  {img: MBF.src, name: "Медико-биологический?", link: "https://vk.com/sno_mbf", id:"210679147"},
  {img: RGPH.src, name: "?Романо-германской филологии", link: "https://vk.com/science_rgph_vsu", id:"222558254"},
  {img: Phil.src, name: "Филологический?", link: "https://vk.com/sno_phil_vsu", id:"219746857"},
  {img: Pharm.src, name: "Фармацевтический?", link: "https://vk.com/sno_farm", id:"223707650"},
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

const getStaticProps = async (ctx) => {
  // const token = "vk1.a.ZTEBIolr38IunV67QLVa8gWBjrnkXxwP_t2BYv3fgM67Xr1OXHZkUjDppmv1noGNCtUGa3J8sXJktJUYUV45teLatBUQHmdAP84ZTfI5Sy5epz3wcJBkHPm4hyskwMhXjMTdqE2NeIhfM-UbyjwgHWT_UCDi7vaOq4bnoyTRNooqdqFzE-eG4hsu0SfwVL7Ghy-Bo-dVYPZWX9gib3uzEA"
  // const ids = faculties.reduce((s,e)=>s+e.id+",", "").slice(0, -1)
  // const res = await fetch(`https://api.vk.com/method/groups.getById?fields=cover&access_token=${token}&v=5.199&group_ids=${ids}`).then(r=>r.json())
  // const groups = res?.response?.groups||[]
  //
  // const gdata = {}
  // groups.forEach((gr,i)=>{
  //   gdata[gr.id] = {
  //     photo: gr.photo_200||gr.photo_100,
  //     name: gr.name,
  //     cover: gr.cover?.enabled?gr.cover.images[gr.cover.images.length-1].url:false
  //   }
  // })

  const gdata = {
    "16158946": {
      "photo": "https://sun130-1.userapi.com/s/v1/ig2/0oAuoYcF4YaEb6qvxpl3juzncsvgOwlsgjn816oGUF7lhbIT9WhXTVy76pVgRRGVqtKGopRsWZtcK0jrc1W8YKAM.jpg?size=200x200&quality=95&crop=327,1000,206,206&ava=1",
      "name": "Студенческое научное общество юрфака ВГУ",
      "cover": "https://sun9-77.userapi.com/impf/lcCLTNpnnz875pJrsC_HSiw1oDTp5h-nzfufkg/JrnMhFWQ1Qo.jpg?size=1818x606&quality=95&crop=0,0,1196,398&sign=800993935e3aa69e4556716b089e0a99&c_uniq_tag=vubRUIMywKgjcMEg9Kz51qVXj98eJ463Mk5bh5xdsek&type=cover_group"
    },
    "183751330": {
      "photo": "https://sun130-2.userapi.com/s/v1/ig2/LtfSbsqakbSPf0VJ3mvQt7lGvqH-UB8HbEU4eAOTRBiwS9SYmtYHcV4R50K457F5-NWLyLW6ffPkaT3oB67klVbx.jpg?size=200x200&quality=95&crop=115,98,1110,1110&ava=1",
      "name": "СНО ФМО ВГУ l Евразийский клуб",
      "cover": "https://sun9-35.userapi.com/impf/XTpWJquuBrigku7RILPMJTBN0C3I2uvJlonTKA/awfI5iBoMFQ.jpg?size=1920x768&quality=95&crop=39,15,1841,735&sign=1ed50a0aead4aa183fd2cd4956b9661d&c_uniq_tag=Nfi-b8nQ2k45LAsja2K_dUeHU3gJZPbstDbphlfd2Ag&type=cover_group"
    },
    "209474091": {
      "photo": "https://sun130-2.userapi.com/s/v1/ig2/7fGrRu9V2ung7Iq6UOUbfWTInhnXdWyl_y0qKPt1T9UJAknl1b8elZ-cQGP6CIQ55jmXvPabM-5ndZnpIEGF92xd.jpg?size=200x200&quality=95&crop=0,0,500,500&ava=1",
      "name": "СНО ХИМФАК ВГУ",
      "cover": "https://sun9-37.userapi.com/impf/nSrwPvM3e2jWN3XwVSQG1moTp2vxCfYJ5AoEcQ/rhA-xXCV9Ro.jpg?size=1818x606&quality=95&crop=0,0,1590,530&sign=bdc2ff2fb395d75466b01a7b1e310947&c_uniq_tag=iNEmUQJmvOj2DX6Rs1AjGor4ZLXBiSiG3memMuHImR0&type=cover_group"
    },
    "209709246": {
      "photo": "https://sun130-2.userapi.com/s/v1/ig2/WIgM2ATYBfN2yr5lc2H8CmahKtv45AImn8LLZMNje0E8Cb-MEcdqq07Eho6TllcEEtBIAN3-QppilK5FSL2xsiaf.jpg?size=200x200&quality=95&crop=104,115,864,864&ava=1",
      "name": "Студенческое научное объединение геолфака ВГУ",
      "cover": "https://sun9-78.userapi.com/impf/_WTzwMSIp6VQuMlhzs2Dk-Gm1_ShpGYbBhmZ2g/1aKQNzRPIgU.jpg?size=1920x768&quality=95&crop=0,0,1600,639&sign=7b5c77e38eb8dbf9e37b36e6fa882b96&c_uniq_tag=JBXEXj51Wv2Wg_j1-qHWSvuO08s7338DCwLEdpw89Lk&type=cover_group"
    },
    "209834276": {
      "photo": "https://sun130-1.userapi.com/s/v1/ig2/x75U0D1KgFFgsaiYY4-2POynQkUdPbFzFO1m0w5MQrHqttIeka8GdiqerbTCewiGIyfZT64yzus81G9dByc7GRzl.jpg?size=200x200&quality=95&crop=30,0,540,540&ava=1",
      "name": "СНО математического факультета ВГУ",
      "cover": false
    },
    "210445864": {
      "photo": "https://sun130-1.userapi.com/s/v1/ig2/opbLpmPzrEnmdpGCoSz4kX01bTCVIp2OtwgMDNgwyr1HutSwsMLdq-glQGhA20Z_79I1t1nZJwzDez_N-t7eO_vU.jpg?size=200x200&quality=95&crop=0,0,1080,1080&ava=1",
      "name": "СНО ГГиТ ВГУ",
      "cover": "https://sun9-73.userapi.com/impf/rs3ALG7MlccDKM-9hjWraQnJq2dkDvnOBKRXxQ/F1G3r3k5kO4.jpg?size=1920x768&quality=95&crop=88,0,1769,706&sign=a01804adb5e469959a04562732616b87&c_uniq_tag=idRebTEjRK03UNkycOCh8QBmtbOv1n-3NnszgHxn2tM&type=cover_group"
    },
    "210459813": {
      "photo": "https://sun130-2.userapi.com/s/v1/ig2/lX1c61u43PYYjBbnK35q3RiD0AmyCx2rhIcwbGNOlF6OiyZOmzmcQr1RMXcwOpANB8nwcxCBm5R0FXmAONkjy8tH.jpg?size=200x200&quality=95&crop=82,73,585,585&ava=1",
      "name": "СНО ФизФак ВГУ",
      "cover": false
    },
    "210543832": {
      "photo": "https://sun130-1.userapi.com/s/v1/ig2/M6D3qwDWVbW80_Wr9pPcmHtulFELAF3gijLLVZtCbf2GWITyvJRP7jRs7uWFRcTuk1ESvnkKrUz9bVrzFHUxfY-C.jpg?size=200x200&quality=95&crop=198,198,1596,1596&ava=1",
      "name": "Студенческое научное объединение ФКН",
      "cover": "https://sun9-33.userapi.com/impf/feKUrfwYbCUWDmEpUvu2Bgx01piXdq9JWiB_Zw/nKg-ouB_fOM.jpg?size=1818x606&quality=95&crop=0,0,1590,530&sign=c82873afbe8d9ab6b3273509d6d563d8&c_uniq_tag=rFa848wa_cggUmA76qCPRixe1xhA5oVTDF0OT_fGzEQ&type=cover_group"
    },
    "210569662": {
      "photo": "https://sun130-1.userapi.com/s/v1/ig2/PIwnuBnbgaYIveRn9c2pk4FRdCuplQzDRiMuMt3YMzgI0ylTSszCsF25vX6e7vI8ac2pSZf7JVGH060KaluiUS5q.jpg?size=200x200&quality=95&crop=100,100,800,800&ava=1",
      "name": "СНО исторического факультета | ВГУ",
      "cover": "https://sun9-79.userapi.com/_788cQTmqO2K8-bsRTNEhZH8zl_RHIzwf6VfLA/jluLGx7J5YA.jpg"
    },
    "210663214": {
      "photo": "https://sun130-2.userapi.com/s/v1/ig2/Isbbuu1INVKsLbOs5-2Q8lK6dApMIkGm3N7M3sPiLGnXVz3BZy7Dxv4tbiJUO5-Sd9BpjyIgZbjIoYPZoZnbJ-YX.jpg?size=200x200&quality=95&crop=0,0,2560,2560&ava=1",
      "name": "СНО ПММ",
      "cover": "https://sun9-54.userapi.com/keNIouaXsYkWEUDxsUnhlgdLButyRjFbIMsnTw/QQvZLWdcaco.jpg"
    },
    "210679147": {
      "photo": "https://sun130-2.userapi.com/s/v1/ig2/nqWBeqmfbVA-gaMOzBMihUdv3pKaufqAx6agSuqasvZtNJBJEv2DAwrNbQLv5NZS__i8ivUVcGzk8v-7W-uYCMh3.jpg?size=200x200&quality=95&crop=116,152,720,720&ava=1",
      "name": "СНО МБФ ВГУ",
      "cover": "https://sun9-57.userapi.com/impf/k4JDPA_CfvNoGvycn7-DSE3cJ9WyjpQCC3QiOg/C4e2eOR0UBs.jpg?size=1920x768&quality=95&crop=0,0,1920,767&sign=f9f85e1936a73fba4720f37ec54d8bfe&c_uniq_tag=0dg8L3BgPkBGKzvuaA5IvLvQmJr5Tng4vQLPlF8fToo&type=cover_group"
    },
    "210972608": {
      "photo": "https://sun130-1.userapi.com/s/v1/ig2/vw8M_G2-E9RlFXXa9rBWIaE7VufhHAcmxOTZcik-8lb0btZBJ9VcEd6M0yWi9H6IJRtOxy34a_aIYT6pRzS1vly6.jpg?size=200x200&quality=95&crop=90,41,1417,1417&ava=1",
      "name": "СНО ЖУРФАК ВГУ",
      "cover": "https://sun9-58.userapi.com/impf/8rPpd4lWncjLlpUiQUaa4CW50006fbkvJxADCw/GtJ2xGStPow.jpg?size=1818x606&quality=95&crop=14,0,1560,520&sign=ef838021a3af19a0329f29f42ff045ab&c_uniq_tag=XmS5_Pw2Ly24uQtE_ccIoHOOt4VbfROKvZAUCU50bzE&type=cover_group"
    },
    "211471229": {
      "photo": "https://sun130-2.userapi.com/s/v1/ig2/hNjHGi5SVuQc3JL5d2ydQPnMhWq-WPYdDEydatnfQGw1W8JqdS9qXG51CkODiFyg8UAYGUOQlKyipCMI-TIinPhH.jpg?size=200x200&quality=95&crop=50,49,400,400&ava=1",
      "name": "СНО Факультета Философии и Психологии ВГУ",
      "cover": "https://sun9-54.userapi.com/impf/qi6MpAep7NoidfehJzAqUij7ztgLfeamii0f5A/UjWqsfIDoVs.jpg?size=1818x606&quality=95&crop=0,200,1920,640&sign=fe674165f1b21cbaa3c2aa06ffc930c2&c_uniq_tag=M776yhke5eak6vxCXGNLvTx11XW-WFxnqT0LWNofSnM&type=cover_group"
    },
    "219746857": {
      "photo": "https://sun130-1.userapi.com/s/v1/ig2/0h3duxQcjarPhjxuCQ-Ozh0xS5Iu1G9hqGYofkqSMf6Y4f5Pf6UF4icyKRoJIncO5BvqkNvRvsvl4_FwM4X9QXC3.jpg?size=200x200&quality=95&crop=40,36,2492,2492&ava=1",
      "name": "СНО филологического факультета ВГУ",
      "cover": "https://sun9-20.userapi.com/impf/UXcDjVlRp323p_hzGqOStu6IBvcC6NPSIuJ3OA/_C8ECJCzC2U.jpg?size=1920x768&quality=95&crop=0,0,2087,834&sign=7d19e896631206493197cbfcedf3557e&c_uniq_tag=mD75Wk_BKBVbKezhu0_uKLmXbEi_fDccRtL8n_Adv2U&type=cover_group"
    },
    "222558254": {
      "photo": "https://sun130-2.userapi.com/s/v1/ig2/ka9HNE6BaaeXjBKZKto0chTj2-lUCXPIquBhGRwrx_D21uG2ejUxYD9KhD4btLph6YgCOEtsrWs9xPXCmNaZ92-o.jpg?size=200x200&quality=95&crop=0,0,2048,2048&ava=1",
      "name": "СНО • «СОЮЗ» • РГФ",
      "cover": "https://sun9-41.userapi.com/impf/UongJsiI0K2uLr7p4EAJsMjRWRXUuLaw0ZwLow/xv2NnzUkF6s.jpg?size=1920x768&quality=95&crop=0,0,1919,766&sign=8d03e945a0c33720a5c8f89f308e93a3&c_uniq_tag=9fKgH0YgQaHkCIBa89OmWvxoSSBhL9PGD6My_obWXSA&type=cover_group"
    },
    "222719412": {
      "photo": "https://sun130-2.userapi.com/s/v1/ig2/mr6vdE2aeSW4Qe_HjSBaxRVa2m-JXGkrTDby7hT749PgXKtJayre5Y1r_8ZIfpDoBZr31ay3dAjIAXjQH2zCWTwF.jpg?size=200x200&quality=95&crop=0,4,1276,1276&ava=1",
      "name": "СНО ЭКОНОМИКА ВГУ",
      "cover": "https://sun9-36.userapi.com/impf/zGtbq2HEP1QnG2QNRonJuIX6Hxz1A1_Brp8v6A/wB0LhupJP5Y.jpg?size=1920x768&quality=95&crop=0,5,2340,934&sign=fa7f3d99cd08376fdc2a8d098a2e7cd2&c_uniq_tag=O8CIzlI7I1GPp9ibY9NINJBsGhbQuH8DU81J7kPIWB8&type=cover_group"
    },
    "223707650": {
      "photo": "https://sun130-1.userapi.com/s/v1/ig2/EeuNEW2aQ4jLii8RUrXI8U6mMAx_xhXcm5uP-bZOq5VKGjaktieVYmEcbnWp3N_R1vVzDoyQRNB-elCcvPBZJaco.jpg?size=200x200&quality=95&crop=5,0,2158,2158&ava=1",
      "name": "СНО ФАРМФАК ВГУ",
      "cover": false
    },
  }
  return {
    props: {
      vk: gdata
    },
    revalidate: 3600
  }
}

const IndexPage = (props) => {
  const sts = (typeof window !== 'undefined'?window.innerWidth:200) / 200


  return <>
    <NavBar/>

    <div className="h-screen flex flex-col">
      <div className="flex items-center justify-center flex-col flex-1 gap-4">
        <img src={Logo.src} className="h-40"/>
        <p className="text-blue-vsu text-2xl font-bold max-w-3xl text-center">Добро пожаловать в Студенческое Научное Объединение
          ВГУ!</p>
        <p className="text-blue-vsu text-md lg:text-xl max-w-3xl text-center">Здесь не только наука, но и возможность развивать
          soft skills в команде. Прокачайте навыки в продвижении, переговорах, публичных выступлениях и управлении
          проектами. Присоединяйтесь к нам и станьте частью увлекательного научного путешествия!</p>
      </div>
      <div className="py-4">
        <p className="text-3xl font-bold text-blue-vsu text-center mb-6">Наши СНО</p>
        <Slider arrows={false} accessibility={false} dots={false} infinite slidesToShow={sts} slidesToScroll={1} autoplay speed={5000}
                autoplaySpeed={0} cssEase="linear">
          {faculties.map((fac, i) => {
            return <Link key={i} href={fac.link} className="flex flex-col justify-center items-center gap-4 px-8">
              <img src={fac.img} className="h-12 lg:h-20 grayscale hover:grayscale-0 transition-all duration-500"
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
            <Button type="primary"
                    className="w-fit gap-2 flex items-center absolute bottom-1 right-1 drop-shadow-md z-10">
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 items-center">
          {orgs.map((o, i) => {
            return <div className="flex flex-col items-center" key={i}>
              <img src={o.ava} className="rounded-full w-20 lg:w-24"/>
              <p className="text-blue-vsu text-lg text-nowrap">{o.name}</p>
              <span>{o.position}</span>
            </div>
          })}
        </div>
      </div>
    </div>

    <p className="text-3xl font-bold text-blue-vsu text-center mb-6 mt-16" id="snos">Подробнее о наших СНО</p>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
      {faculties.map((fac,i)=>{
        const cover = props.vk[fac.id]?.cover||Cover.src
        return <div key={i} className="rounded-xl flex flex-col bg-slate-100 p-4 gap-4 drop-shadow-lg">
          <img src={cover} className="h-40 object-cover rounded-lg"/>
          <div className="flex items-center gap-4">
            <img src={props.vk[fac.id]?.photo || fac.img} className="h-16 rounded-full"/>
            <p className="text-lg font-bold text-blue-vsu">{props.vk[fac.id]?.name}</p>
          </div>
          <p className="text-blue-vsu">{fac.name.replace("?", " Факультет ")}</p>
          <div className="flex justify-end">
            <Link href={fac.link} legacyBehavior>
              <Button type="primary" className="gap-2 flex items-center drop-shadow-md">
                <FontAwesomeIcon icon={faVk}/> ВКонтакте
              </Button>
            </Link>
          </div>
        </div>
      })}
    </div>
  </>
}

export default IndexPage
export {getStaticProps}