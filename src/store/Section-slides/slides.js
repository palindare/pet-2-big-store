const defaultState = {
  slides: [
    {
      id: 1,
      slider: require("./images/slider-1.webp"),
    },
    {
      id: 2,
      slider: require("./images/slider-2.webp"),
    },
    {
      id: 3,
      slider: require("./images/slider-3.webp"),
    },
    {
      id: 4,
      slider: require("./images/slider-4.webp"),
    },
    {
      id: 5,
      slider: require("./images/slider-5.webp"),
    },
    {
      id: 6,
      slider: require("./images/slider-6.webp"),
    },
    {
      id: 7,
      slider: require("./images/slider-7.webp"),
    },
    {
      id: 8,
      slider: require("./images/slider-8.webp"),
    },
    {
      id: 9,
      slider: require("./images/slider-9.webp"),
    },
    {
      id: 10,
      slider: require("./images/slider-10.webp"),
    },
  ],
  slideCategory: [
    {
      id: 1,
      newProduct: true,
      name: "iPhone 15",
      slider: require("./images/slide-Category/slider-1.jpg"),
    },
    {
      id: 2,
      newProduct: false,
      name: "Акции",
      slider: require("./images/slide-Category/slider-2.jpg"),
    },
    {
      id: 3,
      newProduct: false,
      name: "Расрочка",
      slider: require("./images/slide-Category/slider-3.jpg"),
    },
    {
      id: 4,
      newProduct: false,
      name: "iPhone 14",
      slider: require("./images/slide-Category/slider-4.jpg"),
    },
    {
      id: 5,
      newProduct: false,
      name: "Кнопочные",
      slider: require("./images/slide-Category/slider-5.jpg"),
    },
    {
      id: 6,
      newProduct: false,
      name: "Wi-Fi роутеры",
      slider: require("./images/slide-Category/slider-6.jpg"),
    },
    {
      id: 7,
      newProduct: false,
      name: "Смарт-часы",
      slider: require("./images/slide-Category/slider-7.jpg"),
    },
    {
      id: 8,
      newProduct: false,
      name: "Для кухни",
      slider: require("./images/slide-Category/slider-8.jpg"),
    },
    {
      id: 9,
      newProduct: false,
      name: "Для дома",
      slider: require("./images/slide-Category/slider-9.jpg"),
    },
    {
      id: 10,
      newProduct: false,
      name: "Для детей",
      slider: require("./images/slide-Category/slider-10.jpg"),
    },
    {
      id: 11,
      newProduct: false,
      name: "Планшеты",
      slider: require("./images/slide-Category/slider-11.jpg"),
    },
    {
      id: 12,
      newProduct: false,
      name: "Кресла",
      slider: require("./images/slide-Category/slider-12.jpg"),
    },
  ],
  slideConditioners: [
    {
      id: 1,
      name: "Кондиционер Aeronik ASI-09HS5/ASO-09HS5",
      img: require("./images/slide-Conditioners/Aeronik.webp"),
      price: "32 500",
      bonus: 390,
      span: false,
    },
    {
      id: 2,
      name: "Кондиционер CHERBROOKE CSA-12HRN1/COX-12HN1",
      img: require("./images/slide-Conditioners/Cherbrooke.webp"),
      price: "35 600",
      bonus: 427,
      span: false,
    },
    {
      id: 3,
      name: "Кондиционер Ballu Edge BSO-12HN8_22Y",
      img: require("./images/slide-Conditioners/Ballu.webp"),
      price: "36 950",
      bonus: false,
      span: false,
    },
    {
      id: 4,
      name: "Кондиционер Green GRI/GRO-12 HH2",
      img: require("./images/slide-Conditioners/Green.webp"),
      price: "42 000",
      bonus: 504,
      span: true,
    },
    {
      id: 5,
      name: "Кондиционер Aeronik ASI ASO-12HS5",
      img: require("./images/slide-Conditioners/Aeronik-asi.webp"),
      price: "41 900",
      bonus: 502,
      span: true,
    },
    {
      id: 6,
      name: "Кондиционер Green GRI/GRO-07 HH2",
      img: require("./images/slide-Conditioners/Green-gri.webp"),
      price: "29 500",
      bonus: 354,
      span: false,
    },
    {
      id: 7,
      name: "Кондиционер Gree GWH24AADXE-K3NNA2A",
      img: require("./images/slide-Conditioners/Gree.webp"),
      price: "74 950",
      bonus: 899,
      span: false,
    },
    {
      id: 8,
      name: "Кондиционер CHERBROOKE CSA-18HRN1/COX-18HN1",
      img: require("./images/slide-Conditioners/Cherbrooke-csa .webp"),
      price: "60 200",
      bonus: 722,
      span: false,
    },
    {
      id: 9,
      name: "Кондиционер Denko KR-09",
      img: require("./images/slide-Conditioners/Denko.webp"),
      price: "17 900",
      bonus: 214,
      span: false,
    },
  ],
};

export const reducerSlides = (state = defaultState, action) => {
  switch (action.type) {
    case "SLIDES":
      return { ...state, slides: [state.slides] };
    default:
      return state;
  }
};
