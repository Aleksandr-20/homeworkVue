"use strict";

let infoGoods = Vue.createApp({
    data(){
        return {
            goods: [
                {
                   title: "Пианино",
                   price: 3000,
                   count: 0
                },
                {
                   title: "Гитара",
                   price: 1200,
                   count: 40
                },
                {
                   title: "Барабаны",
                   price: 2700,
                   count: 12
                },
                {
                   title: "Флейта",
                   price: 900,
                   count: 50
                },
                {
                   title: "Арфа",
                   price: 3400,
                   count: 5
                }
             ]
            //  sortedByAttr: [
            //     {id: 1, name: "Названию"},
            //     {id: 2, name: "Стоимости"},
            //     {id: 3, name: "Количеству на складе"}
            // ],
            // userChoice: {
            //     attributes: [3]
            // }
        }
    },
    // computed: {
    //     sortDefault(){
    //         return this.goods.sort((b1, b2) => b1.count - b2.count);
    //     }
    // },
    methods: {
        sortedByTitle(){
            return this.goods.sort((b1, b2) => b1.title.localeCompare(b2.title));
        },
        sortedByPrice(){
            return this.goods.sort((b1, b2) => b1.price - b2.price);
        },
        sortedByCount(){
            return this.goods.sort((b1, b2) => b1.count - b2.count);
        }
    }
});

infoGoods.mount("#goods");