import React from "react"
// import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import TopCate from "../components/top/TopCate"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Discount from "../components/discount/Discount"
import Shop from "../components/shops/Shop"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/wrapper/Wrapper"
import background from "./background.svg"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '50vh',
          position: 'relative'
        }}
      >
        <div
          className="inline-flex flex-col space-y-7 items-center justify-end"
          style={{ width: '807px', height: '176px' }}
        >
          <p className="text-8xl font-medium text-white" style={{ width: '441px' }}>
            PetLand
          </p>
          <p className="text-2xl font-light text-justify text-white">
            Diễn đàn trao đổi, mua bán vật phẩm và dịch vụ cho thú cưng
          </p>
        </div>
        <div
          className="inline-flex flex-col space-y-0.5 items-end justify-end w-96 h-96 pb-7 absolute"
          style={{ right: "20px", bottom: "20px" }}
        >
          <p className="text-7xl font-black text-white">CHIA SẺ</p>
          <p className="text-7xl font-black text-white">UY TÍN</p>
          <p className="text-7xl font-black text-white">AN TOÀN</p>
        </div>
      </div>




      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <Wrapper />
    </>
  )
}

export default Pages
