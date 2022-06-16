<template>
    <li>
        <div>
            <header>
                <h3>{{ resource.title }}</h3>
                <button class="btn btn-sm btn-danger">Delete</button>
            </header>
        </div>
        <p>{{ resource.description }}</p>
        <nav>
            <a :href="link">{{ resource.link }}</a>
        </nav>
    </li>
</template>

<script>
export default {
    props: {
        resource: {
            type: Object,
            required: true,
            default() {
                return {
                    title: "",
                    description: "",
                    link: ""
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