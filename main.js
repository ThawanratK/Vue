const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            brand: 'Vue Mastery',
            product: 'Socks',
            description: 'รองเท้าบูทส์',
           // image: './assets/images/socks_green.jpg',
            onSale: true,
           // inStock: true,
            selectedVariant: 0,
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue',  image: './assets/images/socks_blue.jpg', quantity: 0 }
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
        },
        updateVariant(index){
            this.selectedVariant = index
        }
    },
    computed:{
        title(){
            if(this.onSale){
                return this.brand+ ' '+ this.product+' is on SALE!!'
            }else{
                return this.brand+ ' '+ this.product
            }
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        }
    }
})