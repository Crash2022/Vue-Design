<template>
    <h1>h1 default</h1>
    <h2 class="heading_1">Heading 1</h2>
    <h2 class="heading_2">Heading 2</h2>
    <h2 class="heading_3">Heading 3</h2>
</template>

<script setup>

</script>

<style lang="scss">
.heading {
    &_1 {
        font-size: 34px;
        margin: 20px 0;
        font-weight: 300;
    }
    &_2 {
        font-size: 22px;
        margin: 20px 0;
        font-weight: 300;
    }
    &_3 {
        font-size: 17px;
        margin: 20px 0;
        font-weight: 300;
    }
}
</style>