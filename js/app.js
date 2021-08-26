console.log("Vue OK", Vue)

vue.config.devtools = true

const app = new Vue({
    el: "#app",
    data: {
        contacts,
    }
})