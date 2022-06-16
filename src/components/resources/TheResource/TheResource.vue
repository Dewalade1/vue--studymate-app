<template>
    <base-card>
        <nav class="nav nav-pills nav-justify">
            <a 
                class="nav-link"
                :class="storedResourceActive" 
                href="#"
                @click="changeTab('stored-resources')"
            >
                Stored Resources
            </a>
            <a 
                class="nav-link" 
                :class="addResourceActive"
                href="#"
                @click="changeTab('add-resource')"
            >
                Add Resource
            </a>
        </nav>
    </base-card>
    <keep-alive>
        <component :is="currentTab">
            <add-resource></add-resource>
            <stored-resources :resources="storedResources"></stored-resources>
        </component>
    </keep-alive>
</template>

<script>
    import AddResource from '../AddResource/AddResource.vue';
    import StoredResources from '../StoredResources/StoredResources.vue';

    export default {
        components: { AddResource, StoredResources },
        data() {
            return {
                currentTab: 'stored-resources',
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
        provide() {
            return {
                resources: this.storedResources
            }
        },
        methods: {
            changeTab(tab) {
                this.currentTab = tab;
            }
        },
        computed: {
            addResourceActive () {
                return this.currentTab === "add-resource" ? "active" : ""
            },
            storedResourceActive () {
                return this.currentTab === "stored-resources" ? "active" : ""
            }
        }
    }
</script>

<style scoped>
    .nav-link {
        color: #932828;
    }

    .nav-link.active {
        background-color: #932828cd;
    }
</style>