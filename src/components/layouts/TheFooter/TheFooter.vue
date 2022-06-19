<template>
    <footer class="py-4 col-12 position-absolute text-center bottom-0">
            &copy; {{ currentYear }} Dewa Ade-Onojobi
    </footer>
</template>

<script>
export default {
    data () {
        return {
            currentYear: new Date().getFullYear()
        }
    }
}
</script>

<style scoped>
    footer {
        color: #932828; 
        font-weight: bold;
    }
</style>