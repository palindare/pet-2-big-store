import Slider from "./Section-slider/Slider";
import AuthInfo from "./Section-auth-info/AuthInfo";
import Category from "./Section-category/Category";
import SlideCategory from "./Section-slide-category/SlideCategory";
import Conditioner from "./Section_conditioner/Conditioner";

function Section() {
  return (
    <>
      <Slider/>
      <AuthInfo/>
      <Category/>
      <SlideCategory/>
      <Conditioner/>
    </>
  );
}

export default Section;
