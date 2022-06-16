<template>
    <the-header title="StudyMate"></the-header>
    <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
    import TheHeader from './components/layouts/TheHeader/TheHeader.vue';
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
        components: { StoredResources, TheHeader }
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