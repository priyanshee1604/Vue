const app = Vue.createApp({
    data(){
        return{
            title: "The great Book",
            author: "Priyanshee Sisodiya",
            age: "21"
        }
    },
    // update properties in components using methods property
    // any funciton or methods that we want to run for this component 
    // place here
    // to call the method, like we have access to diff data 
    // property we also have access to diff methods
    methods: {
        changeTitle(title){
            console.log('you clicked me');
            // this.title = "New Title."
            // this references the component itself
            // vue prxies all of these properties onto the
            // component instance
            this.title = title;
        }
    }
});

app.mount('#app');