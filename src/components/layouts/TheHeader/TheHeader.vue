<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
            default: "No title specified",
            validator (value) {
                if (typeof value === "string") {
                    return true
                }

                return false
            }
        }
    }
}
</script>

<style scoped>
    header {
      width: 100%;
      height: 5rem;
      background-color: #932828;
      font-style: italic;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    header h1 {
      color: #d1afaf; 
      margin: 0 80px 0;
    }
</style>