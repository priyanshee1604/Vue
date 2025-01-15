// using the directive called v-if
const app = Vue.createApp({
    data(){
        return{
            title: "The great Book",
            author: "Priyanshee Sisodiya",
            age: "21"
        }
    },
    methods: {
        changeTitle(title){
            console.log('you clicked me');
            this.title = title;
        }
    }
});

app.mount('#app');