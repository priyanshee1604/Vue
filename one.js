const app = Vue.createApp({
    template: '<h2> I am the template.</h2>'
});
//root component - component that will be controlling the app
// section of the webpage
//inside root we can setup any data or functions to react to events
//componet template that we specify indside the root component
//template that will be rendered inside teh app element.

// it gets messy to create templet their thus we create template
// inside html

// mount method telss the app at what point or
// where in the dom to moun this application,
// app.mount(Selector);

app.mount('#app'); //mount on the element with the id of app
// the vue app control anything inside that div
// i.e. any kind of dynamic data that we want to output inside
// this app element or any events that occue inside it, all of
// that will now vbe controlled by our vue app.

