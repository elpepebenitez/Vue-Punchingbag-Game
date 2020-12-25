new Vue({
    el: '#vue-app',
    data: {
        health: 100,
        ended: false,
    },
    methods: {
        /*addToA: function(){
            console.log('I ran');
            return this.age + this.a;
        },*/
        punch: function(){
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function(){
            this.health = 100;
            this.ended = false;
        }
    },
    computed: {

    },
});