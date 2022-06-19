<template>
    <button :type="type" :id="id" class="btn btn-sm" :class="mode">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: false,
            default: "",
            validator (value) {
                typeof value == "string" ? true : false;
            }
        },
        mode: {
            type: String,
            default: "btn-danger",
            validator (value) {
                typeof value == "string" ? true : false;
            }
        },
        id: {
            type: String,
            default: "",
            validator (value) {
                typeof value == "string" ? true : false;
            }
        }
    }
}
</script>

<style scoped>
    .purple {
      padding: 0.75rem 1.5rem;
      font-family: inherit;
      background-color: #3a0061;
      border: 1px solid #3a0061;
      color: white;
      cursor: pointer;
    }

    .purple:hover,
    .purple:active {
      background-color: #270041;
      border-color: #270041;
    }

    .flat {
      background-color: transparent;
      color: #3a0061;
      border: none;
    }

    .flat:hover,
    .flat:active {
      background-color: #edd2ff;
    }
</style>