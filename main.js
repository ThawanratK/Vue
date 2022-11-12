const app = Vue.createApp({
    data() {
        return {
            product: 'Boots',
            description: 'รองเท้าบูทส์',
            image: './assets/images/socks_green.jpg',
            OnSale: false,
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ]

        }
    }
})