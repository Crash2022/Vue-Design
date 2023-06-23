<template>
    <div class="inputs_page">
        <div class="heading_2 page_header">Inputs Page</div>
        <form>
            <custom-input :name="'name'"
                          :label="'Имя'"
                          :placeholder="'Имя'"
                          :value="fieldName"
                          v-model:value="fieldName"
            />
        </form>
    </div>
</template>

<script setup>
import CustomInput from '@/shared/ui/CustomUI/CustomInput.vue'
import {ref} from 'vue'

const fieldName = ref('')

</script>

<style lang="scss" scoped>
.inputs_page {
    //> div {
    //    display: flex;
    //    align-items: flex-end;
    //    gap: 10px;
    //    margin-bottom: 10px;
    //}

    .page_header {
        margin-bottom: 40px;
    }

    form {

    }
}
</style>