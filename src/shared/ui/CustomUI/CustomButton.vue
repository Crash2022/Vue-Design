<template>
    <div class="button_wrapper">
        <button :disabled="disabled"
                :class="['custom_btn', `custom_btn_${color}`,
                        {'custom_btn_rounded': rounded}]"
        >
            <slot></slot>
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    color: {
        type: String,
        default: 'primary'
    },
    disabled: {
        type: Boolean,
        required: false
    },
    rounded: {
        type: Boolean,
        required: false
    },
})
</script>

<style lang="scss" scoped>
.button_wrapper {
    // стандартная кнопка
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

        // отключенная кнопка
        &:disabled {
            opacity: 0.6;
            cursor: default;
        }
        // закругленная кнопка
        &_rounded {
            border-radius: 15px;
        }

        // цветовые стили
        &_secondary {
            background-color: var(--secondary);

            &:hover {
                background-color: var(--secondary-hover);
            }
        }
        &_success {
            background-color: var(--success);

            &:hover {
                background-color: var(--success-hover);
            }
        }
        &_info {
            background-color: var(--info);

            &:hover {
                background-color: var(--info-hover);
            }
        }
        &_warning {
            background-color: var(--warning);

            &:hover {
                background-color: var(--warning-hover);
            }
        }
        &_danger {
            background-color: var(--danger);

            &:hover {
                background-color: var(--danger-hover);
            }
        }
    }
}
</style>