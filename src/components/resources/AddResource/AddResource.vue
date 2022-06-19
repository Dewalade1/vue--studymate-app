<template>
    <base-dialog id="formErrorDialog" :show="inputInvalid" title="Invalid Input" @handle-close="handleClose">
        <template #default>
            <p>An input is invalid</p>
            <p>Please make sure all inputs are filled</p>
        </template>
        <!-- <template #actions> -->
            <!-- <menu class="mt-0 pt-2 border-top ps-2"> -->
                <!-- <base-button @click="handleClose">Close</base-button> -->
            <!-- </menu> -->
        <!-- </template> -->
    </base-dialog>
    <base-card>
        <form @submit.prevent="handleSubmit">
            <div class="form-floating mb-3">
                <input 
                    type="text" 
                    class="form-control" 
                    ref="titleInput"
                    id="title" 
                    name="title" 
                    placeholder="Enter the name of your resource" 
                />
                <label for="title">Title</label>
            </div>

            <div class="form-floating mb-3">
                <input 
                    type="url" 
                    class="form-control" 
                    ref="linkInput"
                    id="link" 
                    name="link" 
                    placeholder="Enter the URL to the resource you want to save" 
                />
                <label for="link">Link</label>
            </div>

            <div class="form-floating mb-3">
                <textarea 
                    type="text" 
                    rows="15"
                    class="form-control" 
                    ref="descInput"
                    id="description" 
                    name="description" 
                    placeholder="Describe your learning resource" 
                />
                <label for="description">Description</label>
            </div>

            <base-button id="formErrorDialogBtn" mode="btn-dark" type="submit">
                Add Resource
            </base-button>
        </form>
    </base-card>
</template>

<script>
export default {
    inject: [ 'addResource' ],
    data(){
        return {
            inputInvalid: false
        }
    },
    methods: {
        handleSubmit () {
            const newResource = {
                title: this.$refs.titleInput.value,
                link: this.$refs.linkInput.value,
                description: this.$refs.descInput.value,
                id: new Date().toISOString()
            }

            Object.keys(newResource).map(key => {
                if (newResource[key].trim() === "") {
                    this.inputInvalid = true;
                    return;
                }
            })

            if (this.inputInvalid) return;

            this.addResource(newResource)

            this.$refs.titleInput.value = "";
            this.$refs.linkInput.value = "";
            this.$refs.descInput.value = "";
        },
        handleClose () {
            this.inputInvalid = false;
        }
    }
}
</script>

<style scoped>
    .form-floating {
        font-size: 16px;
    }

    .form-control:focus,
    .form-control:hover {
        border: 2px solid #d1afaf;
    }
</style>
