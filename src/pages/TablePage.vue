<template>
    <div class="heading_2">Table Page</div>
    <div>
        <TableBasic :header="tableHeaders"
                    :column-templates="tableSizeColumns"
        >
            <TableRow :column-templates="tableSizeColumns"
                      v-for="book in books" :key="book.id"
            >
                <TableColumn>
                    {{book.id}}
                </TableColumn>
                <TableColumn>
                    {{book.author}}
                </TableColumn>
                <TableColumn>
                    {{book.title}}
                </TableColumn>
                <TableColumn :isImage="true" :imageSrc="book.image">
<!--                    <img :src="book.image" alt="book-image">-->
                </TableColumn>
                <TableColumn>
                    <CustomButton :label="'Читать'"/>
                </TableColumn>
            </TableRow>
        </TableBasic>
    </div>
</template>

<script setup>
import TableBasic from '@/shared/ui/CustomUI/CustomTable/TableBasic.vue'
import TableRow from '@/shared/ui/CustomUI/CustomTable/TableRow.vue'
import TableColumn from '@/shared/ui/CustomUI/CustomTable/TableColumn.vue'
import CustomButton from '@/shared/ui/CustomUI/CustomButton.vue'
import {ref} from 'vue'

const tableHeaders = ['ID', 'Автор', 'Название', 'Обложка']
const tableSizeColumns = '50px 1fr 2fr 150px 140px'

const books = ref([
    {
        id: 1,
        author: 'Dmitry Glukhovsky',
        title: 'Metro 2033',
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81pNKLAG-cL._AC_UY436_FMwebp_QL65_.jpg',
        bg: '#FFA26B'
    },
    {
        id: 12,
        author: 'James Clear',
        title: 'Atomic Habits: An Easy',
        image: 'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',
        bg: '#00C48C'
    },
    {
        id: 2,
        author: 'J. K. Rowling',
        title: 'Harry Potter and the Order of the Phoenix',
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51bZujlJxlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        bg: '#00C48C'
    }
])
</script>

<style lang="scss" scoped>

</style>