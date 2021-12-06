"use strict";

// метод создаст экземпляр вью и его же вернет
// внутри объекта опред. св-ва за кот. должна следить Vue

let infoCats = Vue.createApp({
    data(){
        return {
            attrname: "src",
            cats: [
                {
                    name: "Люся",
                    age: "1 год",
                    color: "трехцветная",
                    img: "https://picsum.photos/id/219/1000/1000"
                },
                {
                    name: "Макс",
                    age: 4,
                    color: "серый",
                    img: "https://picsum.photos/id/1074/1000/1000"
                },
                {
                    name: "Василий",
                    age: 1,
                    color: "трехцветный",
                    img: "https://picsum.photos/id/593/1000/1000"
                }
            ]
        }
    }
});

infoCats.mount("#info-cats");