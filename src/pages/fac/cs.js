import Cover from "@/assets/cover.jpg"
import NavBar from "@/components/NavBar";

const IndexPage = (props) => {
  return <>
    <img src={Cover.src}/>
    <NavBar/>
    <div className="flex items-center justify-between p-16">
      <div className="flex-col flex">
        <span className="text-6xl font-bold">Мы прекрасны 👍</span>
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
    <div className="h-96"></div>
    <div className="h-96"></div>
    <div className="h-96"></div>
    <div className="h-96"></div>
    <div className="h-96"></div>
    <div className="h-96"></div>
    <div className="h-96"></div>
    <div className="h-96"></div>
    <div className="h-96"></div>
    <div className="h-96"></div>
    <div className="h-96"></div>
    <div className="h-96"></div>
    <div className="h-96"></div>
    <div className="h-96"></div>
    <div className="h-96"></div>
  </>
}

export default IndexPage