<template>
    <base-card>
        <form>
            <div class="form-floating mb-3">
                <input 
                    type="text" 
                    class="form-control" 
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
                    id="description" 
                    name="description" 
                    placeholder="Describe your learning resource" 
                />
                <label for="description">Description</label>
            </div>

            <div>
                <base-button mode="btn-dark" type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<style scoped>
    .form-floating {
        font-size: 16px;
    }

    .form-control:focus,
    .form-control:hover {
        border: 2px solid #d1afaf;
    }
</style>
