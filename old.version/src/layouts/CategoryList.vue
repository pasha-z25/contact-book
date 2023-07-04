<template>
    <div class="category-wrapper">
        <router-link to="/category" class="link"><span class="link-text">Edit</span></router-link>
        <p class="title">Categories</p>
        <div v-if="(curentUrl === '/home')">
          <ul class="list">
            <li class="list_item">All contacts</li>
            <li v-for="category in categories" :key="category._id" class="list_item">{{ category.name }}</li>
          </ul>
        </div>
        <div v-else>
          <h3>нет категорий</h3>
        </div>

        <h3>{{ curentUrl }}</h3>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import {router} from "@/routes";

    export default {
        name: "CategoryList",
        computed: {
            ...mapGetters([
                'getCategories',
            ]),
            categories() {
                return this.getCategories
            },
            curentUrl() {
                const resolved = router.resolve(location);
                return resolved.href;
            }
        },
    }
</script>

<style scoped>
    .category-wrapper {
        padding: var(--indent-default) 0;
        border-top: thin solid var(--color-lighgtext);
    }
    .title {
        color: var(--color-lighgtext);
        font-size: 16px;
        line-height: 16px;
        text-transform: uppercase;
        margin-bottom: var(--indent-default);
        padding: 0 var(--indent-default);
    }
    .list {
        list-style: none;
    }
    .list_item {
        padding: calc(var(--indent-default) / 2) var(--indent-default);
        position: relative;
        transition: all linear .2s;
    }
    .list_item::before {
        content: '';
        display: block;
        width: 2px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .list_item:hover {
        background: linear-gradient(90deg, var(--color-dark) 0, var(--color-gray) 100%);
    }
    .list_item:hover::before {
        background-color: var(--color-orange);
    }
    .link {
        color: var(--color-orange);
        float: right;
        padding-right: var(--indent-default);
    }
</style>