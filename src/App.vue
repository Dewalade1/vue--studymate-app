<template>
    <the-header title="StudyMate"></the-header>
    <the-resource></the-resource>
    <the-footer></the-footer>
</template>

<script>
    import TheFooter from './components/layouts/TheFooter/TheFooter.vue';
    import TheHeader from './components/layouts/TheHeader/TheHeader.vue';
    import TheResource from './components/resources/TheResource/TheResource.vue';

    export default {
        components: { TheHeader, TheResource, TheFooter }
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