app.component('product-display', {
    props: {
        premium: {
          type: Boolean,
          required: true
        }
    },
    template: 
    /*html*/ 
    `<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <!-- image goes here -->
            <img :class="{ 'out-of-stock-img': !inStock }" v-bind:src="image">
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
            <p v-if="onSale">On Sale!!</p>
            <p>Shipping: {{ shipping }}</p>
            <div v-for="(v,index) in variants" :key="v.id" 
              @mouseover="updateVariant(index)" 
              class="color-circle" 
              :style="{ backgroundColor: v.color }">
            </div>

            <button class="button" @click="addToCart" 
              :class="{ disabledButton: !inStock }" 
              :disabled="!inStock" >
              Add to Cart</button>
            <button class="button" @click="removeFromCart">Remove from Cart</button>
          </div>
        </div>
    </div>`
    ,
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
        },
        shipping() {
            if (this.premium) {
              return 'Free'
            }else{
                return 2.99
            }
        }
    }

})