import React from "react";
const PRODUCTS = [
  {
    id: "p1",
    name: "Пепероні",
    price: 12,
    description: "Гостра салямі, сир моцарела, фірмовий томатний соус",
  },
  {
    id: "p2",
    name: "Чотири сири",
    price: 14,
    description: "Дорблю, витриманий пармезан, моцарела, чедер",
  },
  {
    id: "p3",
    name: "Маргарита",
    price: 10,
    description: "Соковиті томати, свіжий базилік, оливкова олія extra virgin",
  },
  {
    id: "p4",
    name: "Барбекю",
    price: 15,
    description: "Копчене курча, бекон, червона цибуля, солодкий соус BBQ",
  },
  {
    id: "p5",
    name: "Кола 0.5л",
    price: 3,
    description: "Освіжаючий газований напій у склі",
  },
  {
    id: "p6",
    name: "Морс журавлина",
    price: 4,
    description: "Домашній морс із натуральних лісових ягід",
  },
];

const MenuList = () => {
  return <section className="px-6 py-8">
    <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-2xl font-black text-stone-900">Меню</h2>
        <span className="text-sm font-medium text-stone-500">Всього {PRODUCTS.length} товарів</span>
    </div>
  </section>;
};

export default MenuList;
