<template>
    <li>
        <base-card>
            <header>
                <h3>{{ resource.title }}</h3>
                <base-button @click="deleteResource(resource.id)" mode="btn-danger">
                    Delete
                </base-button>
            </header>
            <p>{{ resource.description }}</p>
            <nav>
                <a target="_blank" :href="resource.link">View Resource -></a>
            </nav>
        </base-card>
    </li>
</template>

<script>
export default {
    inject: ["deleteResource"],
    props: {
        resource: {
            type: Object,
            required: true,
            default() {
                return {
                    title: "",
                    description: "",
                    link: "",
                    id: ""
                }
            },
            validator (value) {
                if (typeof value === "object") {
                    return true
                }

                return false
            }
        },
    }
}
</script>

<style scoped>
    li {
      margin: 20px auto;
      max-width: 40rem;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      font-size: 1.25rem;
      margin: 0.5rem 0;
      color: #932828;
    }

    p {
      margin: 0.5rem 0;
    }

    a {
      text-decoration: none;
      color: #ce5c00;
      cursor: pointer;
    }

    a:hover,
    a:active {
      color: #c89300;
      cursor: pointer;
    }
</style>