import { useSelector } from "react-redux";
import SectionBasketEmpty from "./SectionBasket-empty/SectionBasketEmpty";
import SectionBasketGoods from "./SectionBasket-goods/SectionBasketGoods";


function SectionBasket() {
    const state = useSelector(state => state.menuBasket.menuBasket)
    return (
    <>
    {state.length ? <SectionBasketGoods/> : <SectionBasketEmpty/>}
    </>
    )
}

export default SectionBasket;
