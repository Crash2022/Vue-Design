<template>
    <div v-for="option in options" :key="option.id">
        <custom-checkbox :id="option.id"
                         :value="option.value"
                         :label="option.name"
                         :name="name"
        />
    </div>
</template>

<script setup>
import CustomCheckbox from "@/shared/ui/CustomUI/CustomCheckbox.vue"

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true,
        validator: (value) => {
            const hasIdKey = value.every(options => Object.keys(options).includes('id'))
            const hasNameKey = value.every(options => Object.keys(options).includes('name'))
            return hasIdKey && hasNameKey
        }
    }
})
</script>

<style lang="scss" scoped>

</style>