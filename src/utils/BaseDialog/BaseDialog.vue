<template>
    <teleport to="body">
        <div id="toast-bg" :class="toastBgCls" @click="$emit('handle-close')"></div>
        <div class="position-fixed top-0 end-0 p-3 toast-wrapper">
            <div :id="id" class="toast" :class="mainCls" :role="role" aria-live="assertive" aria-atomic="true">
                <header class="toast-header" :class="headerCls">
                    <slot name="header">
                        <!-- <img src="..." class="rounded me-2" alt="..." /> -->
                        <strong class="me-auto">{{ title }}</strong>
                    </slot>
                    <small>{{ timeSinceIssue }} minute ago</small>
                    <button 
                        type="button" 
                        class="btn-close" 
                        aria-label="Close"
                        @click="$emit('handle-close')"
                    ></button>
                </header>
                <section class="toast-body">
                    <slot></slot>
                </section>
                <slot name="actions"></slot>
            </div>
        </div>
    </teleport>
</template>

<script>
    export default {
        data () {
            return {
                issueTime: new Date().getTime(),
            }
        },
        props: {
            title: {
                type: String,
                required: false,
            },
            id: {
                type: String,
                required: true,
                default: "liveToast",
                validator (value) {
                    typeof value === "string" ? true : false;
                }
            },
            role: {
                type: String,
                required: false,
                default: "alert",
                validator (value) {
                    typeof value === "string" ? true : false;
                }
            },
            type: {
                type: String,
                required: false,
                default: "error",
                validator (value) {
                    typeof value === "string" ? true : false;
                }
            },
            show: {
                type: Boolean,
                required: true,
                default: false,
                validator (value) {
                    typeof value === "boolean" ? true : false;
                }
            }
        },
        computed: {
            timeSinceIssue () {
                return new Date().getTime() - this.issueTime;
            },
            mainCls () {
                return { 
                    hide: !this.show, 
                    show: this.show,
                }
            },
            headerCls () {
                return { "bg-danger": this.type === "error" }
            },
            toastBgCls () {
                return { 
                    'd-none': !this.show, 
                    'd-block': this.show,
                }
            },
        },
    }
</script>

<style scoped>
    .toast-wrapper {
        z-index: 11;
    }

    .bg-danger {
        color: white;
    }

    #toast-bg {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.70);
        z-index: 8;
    }
</style>