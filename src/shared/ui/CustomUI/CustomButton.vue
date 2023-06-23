<template>
    <div class="button_wrapper">
        <button :class="['custom_btn', {custom_btn_secondary: secondary}]">
            <slot></slot>
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    secondary: {
        type: Boolean,
        default: false,
        required: false
    }
})

// export default {
//     name: 'custom-button'
// };
</script>

<style lang="scss" scoped>
.button_wrapper {
    .custom_btn {
        background-color: var(--primary);
        color: white;
        padding: 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        height: 40px;
        //min-width: 100px;
        //width: 100%;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background-color: var(--primary-hover);
        }
    }
    .custom_btn_secondary {
        background-color: var(--secondary);

        &:hover {
            background-color: var(--secondary-hover);
        }
    }
}
</style>