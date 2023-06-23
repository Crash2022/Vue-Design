<template>
<!--    <input :value="modelValue"-->
<!--           @input="updateInput"-->
<!--    />-->
    <div class="form_input"
         :style="{width}"
    >
        <input class="input_text"
               :type="type"
               :id="name"
               :name="name"
               :placeholder="placeholder"
               :error="error"
               :value="value"
               @input="updateValue"
        >
        <label :for="name" class="input_label">{{label}}</label>
    </div>
</template>

<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    value: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        required: false
    },
    // name для form
    name: {
        type: String,
        required: true
    },
    // label для надписи над инпутом
    label: {
        type: String,
        default: ''
    },
    error: {
        type: Array,
        required: false
    },
    width: {
        type: String,
        default: '300px'
    },
})

const emit = defineEmits(['update:value'])

const updateValue = (e) => {
    emit('update:value', e.target.value)
}

// export default {
//     name: 'custom-input',
//     props: {
//         modelValue: [String, Number]
//     },
//     methods: {
//         updateInput(event) {
//             this.$emit('update:modelValue', event.target.value);
//         }
//     }
// }
</script>

<style lang="scss" scoped>
.form {
    &_input {
        margin-bottom: 30px;
        position: relative;
    }
    &_error {
        background: var(--danger);
        margin-top: 4px;
        border-radius: 7px;
        font-size: 13px;
        color: #fff;
        padding: 5px;
    }
}
.input {
    &_text {
        position: relative;
        width: 100%;
        z-index: 1;
        border: 1px solid var(--primary);
        padding: 0 10px;
        height: 40px;
        border-radius: 7px;
        font-size: 15px;

        &:focus-visible {
            border: 2px solid var(--primary);
            outline: none;
        }

        &:focus {
            & + .input_label {
                z-index: 1;
                opacity: 1;
                top: -20px;
            }
        }
        &:not(:placeholder-shown) {
            & + .input_label {
                z-index: 1;
                opacity: 1;
                top: -20px;
            }
        }
    }
    &_label {
        font-weight: bold;
        display: block;
        position: absolute;
        top: 20px;
        opacity: 0;
        z-index: -1;
        transition: 0.3s;
        font-size: 13px;
        color: var(--primary);
    }
}

.v_enter_active,
.v_leave_active {
    transition: opacity 0.5s ease;
}

.v_enter_from,
.v_leave_to {
    opacity: 0;
}

/*input {*/
/*    padding: 14px;*/
/*    font-size: 16px;*/
/*    border: 2px solid cornflowerblue;*/
/*    border-radius: 5px;*/
/*}*/

/*input:focus-visible {*/
/*    border: 2px solid darkorange;*/
/*    outline: none;*/
/*}*/
</style>