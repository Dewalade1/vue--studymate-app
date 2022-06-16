<template>:
    <button :type="type" class="btn btn--sm" :class="mode">
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
                if (typeof value == "string") return true;
                return false;
            }
        },
        mode: {
            type: String,
            default: "btn-danger",
            validator (value) {
                if (typeof value == "string") return true;
                return false;
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