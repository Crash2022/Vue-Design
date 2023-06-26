<template>
    <div class="table_column">
        <span v-if="columnTitle" class="table_column__title">
            {{columnTitle}}:
        </span>
        <slot v-if="!isImage"></slot>
        <img v-else class="table_column_image"
             :src="imageSrc" alt="table-image"
        >
    </div>
</template>

<script setup>
const props = defineProps({
    isImage: {
        type: Boolean,
        required: false
    },
    imageSrc: {
        type: String,
        required: false
    },
    columnTitle: {
        type: String,
        required: false
    }
})
</script>

<style lang="scss" scoped>
.table_column {
    padding: 15px 0;
    position: relative;

    &_image {
        max-width: 100%;

        @media screen and (max-width: 767px) {
            max-width: 200px;
        }
    }
    &__title {
        margin-right: 5px;
        display: none;

        @media screen and (max-width: 767px) {
            display: inline-block;
            font-weight: bold;
        }
    }
}
</style>