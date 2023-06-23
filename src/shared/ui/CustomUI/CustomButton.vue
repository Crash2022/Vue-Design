<template>
    <button class="custom_btn">
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps({

})

// export default {
//     name: 'custom-button'
// };
</script>

<style lang="scss" scoped>
.custom_btn {
    background-color: var(--primary);
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    height: 38px;
    min-width: 100px;
    width: 100%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: var(--primary-hover);
    }
}
</style>