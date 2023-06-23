<template>
    <div class="button_wrapper">
        <button :disabled="disabled"
                :class="['custom_btn', `custom_btn_${color}`,
                        {'custom_btn_rounded': rounded},
                        {'custom_btn_outlined': outlined},
                        {'custom_btn_icon': icon}]"
        >
            <span v-if="icon">
                <font-awesome-icon :icon="`fa-regular fa-${icon}`"/>
            </span>
            <span v-else>{{label}}</span>
<!--            <slot v-else></slot>-->
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        default: 'Button'
    },
    color: {
        type: String,
        default: 'primary'
    },
    disabled: {
        type: Boolean,
        required: false
    },
    outlined: {
        type: Boolean,
        required: false
    },
    rounded: {
        type: Boolean,
        required: false
    },
    icon: {
        type: String,
        required: false
    },
})
</script>

<style lang="scss" scoped>
.button_wrapper {
    // стандартная кнопка
    .custom_btn {
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

        // цветовые стили
        &_primary {
            background-color: var(--primary);
            border: 1px solid var(--primary);

            &:hover {
                background-color: var(--primary-hover);
            }
        }
        &_secondary {
            background-color: var(--secondary);
            border: 1px solid var(--secondary);

            &:hover {
                background-color: var(--secondary-hover);
            }
        }
        &_success {
            background-color: var(--success);
            border: 1px solid var(--success);

            &:hover {
                background-color: var(--success-hover);
            }
        }
        &_info {
            background-color: var(--info);
            border: 1px solid var(--info);

            &:hover {
                background-color: var(--info-hover);
            }
        }
        &_warning {
            background-color: var(--warning);
            border: 1px solid var(--warning);

            &:hover {
                background-color: var(--warning-hover);
            }
        }
        &_danger {
            background-color: var(--danger);
            border: 1px solid var(--danger);

            &:hover {
                background-color: var(--danger-hover);
            }
        }

        // отключенная кнопка
        &:disabled {
            opacity: 0.6;
            cursor: default;
        }
        // прозрачная кнопка
        &_outlined {
            background-color: transparent;
            color: #000;

            &:hover {
                color: #fff;
            }
        }
        // закругленная кнопка
        &_rounded {
            border-radius: 15px;
        }
        // кнопка-иконка
        &_icon {
            padding: 0;
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
}
</style>