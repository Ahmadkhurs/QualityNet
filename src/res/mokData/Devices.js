
const { default: Images } = require("../../assest/images/Images")

const ProdoctsData = {
    Smartphones: [
        {
            name: "Iphone 14 Promax",
            price: 5550,
            image: Images.Iphone14Promax()
        },
        {
            name: "Iphone 14 Pro",
            price: 4800,
            image: Images.Iphone14Pro()
        },
        {
            name: "Iphone 14 Plus",
            price: 3800,
            image: Images.Iphone14Plus()
        },
        {
            name: "Iphone 14",
            price: 3200,
            image: Images.Iphone14()
        },
        {
            name: "Iphone 13 Promax",
            price: 500,
            image: Images.Iphone13Promax()
        },
        {
            name: "Iphone 13 Pro",
            price: 400,
            image: Images.Iphone13Pro()
        },
        {
            name: "Iphone 13",
            price: 300,
            image: Images.Iphone13()
        },
        {
            name: "Iphone 13 Mini",
            price: 200,
            image: Images.Iphone13Mini()
        },
    ],
    Ipads: [
        {
            name: "Larg Pizza",
            price: 65,
            // image: Images.pepperoni()
        },
        {
            name: "Personal Pizza",
            price: 15,
            // image: Images.vegetables()
        },
        {
            name: "tareq Pizza",
            price: 115,
            // image: Images.pineApple()
        },
    ],
    Cumpoters: [
        {
            name: "Cheese burger",
            price: 120,
            // image: Images.cheeseburger()
        },
        {
            name: "Double burger",
            price: 130,
            // image: Images.doubleburger()
        },
        {
            name: "Fish burger",
            price: 115,
            // image: Images.fishburger()
        },
        {
            name: "Chicken burger",
            price: 120,
            // image: Images.chickenburger()
        },
    ],
    Watches: [
        {
            name: "Apple Watch series 8",
            price: 25,
        },
    ],


}

export default ProdoctsData