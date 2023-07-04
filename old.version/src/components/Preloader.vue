<template>
    <div class="lds-dual-ring" v-if="preloader"></div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Preloader",
        computed: {
            ...mapGetters([
                'getPreloader'
            ]),
            preloader() {
                return this.getPreloader
            }
        },
    }
</script>

<style scoped>
    .lds-dual-ring {
        display: inline-block;
        width: 80px;
        height: 80px;
        /*position: fixed;*/
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -40px;
        margin-left: -40px;
    }
    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid var(--color-orange);
        border-color: var(--color-orange) transparent var(--color-orange) transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>