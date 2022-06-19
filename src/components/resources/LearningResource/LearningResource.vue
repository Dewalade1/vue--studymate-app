<template>
    <li>
        <div>
            <header>
                <h3>{{ resource.title }}</h3>
                <button>Delete</button>
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
            default: {
                title: "",
                description: "",
                link: ""
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