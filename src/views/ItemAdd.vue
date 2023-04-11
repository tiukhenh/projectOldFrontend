<template>
    <div><a href="" @click="backHome"><i class="fas fa-angle-double-left text-violet mx-4 ml-2"></i></a></div>
    <div class="border border-violet rounded col-9 mx-auto">
        <h4>Thêm liên hệ liên hệ</h4>
        <ItemForm 
            :item="{}"
            @submit:item="addItem"
        />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import ItemForm from '@/components/ItemForm.vue'
import ItemService from '@/services/item.service'

export default {
    components: {
        ItemForm
    },
    data() {
        return {
            item: '',
            message: ''
        }
    },
    methods: {
        async addItem(data) {
            try {
                await ItemService.create(data)
                this.message = 'Liên hệ được thêm thành công'
                this.$router.push({name: "home"});
            } catch(error) {
                console.log(error)
            }
        },
        backHome(){
            this.$router.push({name: "home"});
        },
    },
    created() {
        this.message = ''
    }
}
</script>

