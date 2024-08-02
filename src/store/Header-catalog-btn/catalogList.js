const defaultState = {
  catalogList: [
    {
      id: 1,
      img: require("../../components/Header/images/nav-images/main-menu/catalog-list/Iphone15.webp"),
      name: "Телефоны и гаджеты",
      lists:   
      [
        {
          id: 1,
          name: "Смартфоны",
          img: require("../Header-catalog-btn/images/Category-list/Iphone.webp"),
          menu: ["Apple","Samsung","Xiaomi","TECNO","Infinix","Honor", "POCO","Realeme","Все смартфоны"]
        }
      ]
    },
    {
      id: 2,
      img: require("../../components/Header/images/nav-images/main-menu/catalog-list/notebook.png"),
      name: "Компьютерная техника",
      lists:   
      [
        {
          id: 1,
          name: "Смартфоны",
          img: require("../Header-catalog-btn/images/Category-list/Iphone.webp"),
          menu: ["Apple","Samsung","Xiaomi","TECNO","Infinix","Honor", "POCO","Realme","Все смартфоны"]
        },
      ]
    },
    {
      id: 3,
      img: require("../../components/Header/images/nav-images/main-menu/catalog-list/printer.webp"),
      name: "Офисная техника и сети",
    },
    {
      id: 4,
      img: require("../../components/Header/images/nav-images/main-menu/catalog-list/tv.webp"),
      name: "Телевизоры и аксессуары",
    },
    {
      id: 5,
      img: require("../../components/Header/images/nav-images/main-menu/catalog-list/audio-equipment.jpg"),
      name: "Аудиотехника",
    },
    {
      id: 6,
      img: require("../../components/Header/images/nav-images/main-menu/catalog-list/ps-5.jpg"),
      name: "Игровые приставки и видеоигры",
    },
    {
      id: 7,
      img: require("../../components/Header/images/nav-images/main-menu/catalog-list/conditioner.webp"),
      name: "Климатическая техника",
    },
    {
      id: 8,
      img: require("../../components/Header/images/nav-images/main-menu/catalog-list/washing-machine.webp"),
      name: "Бытовая техника",
    },
    {
      id: 9,
      img: require("../../components/Header/images/nav-images/main-menu/catalog-list/hair-dryer.webp"),
      name: "Красота, здоровье",
    },
    {
      id: 10,
      img: require("../../components/Header/images/nav-images/main-menu/catalog-list/book.webp"),
      name: "Книги и канцтовары",
    },
    {
      id: 11,
      img: require("../../components/Header/images/nav-images/main-menu/catalog-list/merch.webp"),
      name: "Мерч «Это 05»",
    },
    {
      id: 12,
      img: require("../../components/Header/images/nav-images/main-menu/catalog-list/scooter.jpg"),
      name: "Развлечение и хобби",
    },
    {
      id: 13,
      img: require("../../components/Header/images/nav-images/main-menu/catalog-list/armchair.webp"),
      name: "Дом, мебель, ремонт",
    },
    {
      id: 14,
      img: require("../../components/Header/images/nav-images/main-menu/catalog-list/DVR.webp"),
      name: "Автомобильная техника",
    },
    {
      id: 15,
      img: require("../../components/Header/images/nav-images/main-menu/catalog-list/discounted.webp"),
      name: "Уценённые товары",
    },
  ],
};

export const reducerCatalogList = (state = defaultState, action) => {
  switch (action.type) {
    case "CATALOG":
      return { ...state, catalogList: [state.catalogList] };
    default:
      return state;
  }
};
