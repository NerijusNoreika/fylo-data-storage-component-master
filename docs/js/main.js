

new Vue({
    el: '#app',
    data: {
        min: 0,
        max: 1000,
        used: 815,
    },
    methods: {

    },
    computed: {
        filledSpace() {
            return this.used * 100 / this.max;
        },
        remainingSpace() {
            return this.max - this.used;
        }
    }
})