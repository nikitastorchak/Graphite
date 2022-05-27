export interface navItemsType {
  name: string;
  location: string;
  text: string;
}

export const navItems: navItemsType[] = [
  {
    name: "home",
    location: "",
    text: "Главная",
  },
  {
    name: "find",
    location: "catalog",
    text: "Каталог",
  },
  {
    name: "cart",
    location: "cart",
    text: "Корзина",
  },
  {
    name: "like",
    location: "favorite",
    text: "Избранное",
  },
  {
    name: "user",
    location: "profile",
    text: "Мой Graphite",
  },
];
