<template>
    <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
    import StoredResources from './components/resources/StoredResources/StoredResources.vue'

    export default {
        data() {
            return {
                storedResources: [
                    {
                        id: "official-guide",
                        title: "Official Guide",
                        description: "The official Vue.js learning guide",
                        link: "https://veujs.org"
                    },
                    {
                        id: "google",
                        title: "Google",
                        description: "Search engine for finding more learning resources on the web",
                        link: "https://google.org"
                    }
                ]
            }
        },
        components: { StoredResources }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>