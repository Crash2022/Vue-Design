<template>
    <div class="navbar_wrapper">
        <nav class="navbar_links">
            <CustomButton @click="$router.push('/')"
                          :label="'Главная'"
                          :color="'warning'"
                          :outlined="true"
            />
<!--            <div class="movies_button">-->
<!--                <custom-button @click="$router.push('/')">Главная</custom-button>-->
<!--            </div>-->
<!--            <div>-->
<!--                <router-link to="/about">Обо мне</router-link>-->
<!--            </div>-->
        </nav>
    </div>
</template>

<script setup>
import CustomButton from '@/shared/ui/CustomUI/CustomButton.vue'

// экспорт без setup
// export default {
//     name: 'navbar-layout',
//     components: {
//         CustomButton
//     }
// }
</script>

<style lang="scss" scoped>
.navbar_wrapper {
    //position: relative;
    display: flex;
    align-items: center;
    height: var(--navbar-height);
    background-color: var(--primary);
    box-shadow: 1px 1px 5px black;
    padding: 0 20px;

    .main_link {
        &:hover {
            cursor: pointer;
            color: white;
        }
    }
    .navbar_links {
        width: 100%;
        display: flex;
        align-items: center;
        //justify-content: space-between;
        justify-content: center;
        gap: 20px;

        .movies_button {
            button {
                background-color: aliceblue;
                color: black;

                &:hover {
                    background-color: var(--button-hover-secondary);
                    color: white;
                }
            }
        }
    }
}
</style>