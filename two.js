const app = Vue.createApp({
    data(){
        //properties inside this function are 
        // accessible from our template 
        return {
            // can use any data type inside here.
            //but cannot use those varibles outside 
            // the scope of the app.

            //if access an element that do not exist
            // then donot render/display anything.
            title: 'Some great People'
        }
    }
});

app.mount('#app');