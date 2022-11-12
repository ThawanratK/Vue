const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Boots',
            description: 'รองเท้าบูทส์',
            image: './assets/images/socks_green.jpg',
            onSale: false,
            inStock: true,
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue',  image: './assets/images/socks_blue.jpg' }
            ]

        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        removeFromCart(){
            if(this.cart != 0){
               this.cart -= 1 
            }
        },
        changeImage(currentImage){
            this.image = currentImage
        }
    },
})