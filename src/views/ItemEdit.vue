<template>
    <div v-if="item">
        <div><a href="" @click="backHome"><i class="fas fa-angle-double-left text-violet mx-4 ml-2 "></i></a></div>
        <div class="border border-violet rounded col-9 mx-auto">
            <h4>Chỉnh sửa sản phẩm</h4>
            <ItemForm
                :item="item"
                @submit:item="updateItem"
                @delete:item="deleteItem"
            />
            <p>{{ message }}</p>
        </div>
    </div>
</template>
<script>
import ItemForm from "@/components/ItemForm.vue";
import ItemService from "@/services/item.service";

export default {
    components: {
        ItemForm,
    },
    props: {
        id: { type: String, required:true},
    },
    data() {
        return {
            item: null,
            message: "",
        };
    },
    methods: {
        async getItem(id) {
            try {
                this.item =await ItemService.get(id);
            }catch (error) {
                console.log(error);
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$router.path.split("/").slice(1)
                    },
                    query: this.$router.query,
                    hash: this.$router.hash,
                });
            }
        },
        async updateItem(data) {
            try {
                await ItemService.update(this.item._id, data);
                this.message = "Liên hệ được cập nhật thành công.";
                this.$router.push({name: "home"});
            }catch(error) {
                console.log(error);
            }
        },
        async deleteItem() {
            if (confirm("Bạn muốn xóa liên hệ này?")) {
                try {
                    await ItemService.delete(this.item._id);
                    this.$router.push({name: "home"});
                }catch(error) {
                    console.log(error);
                }
            }
        },
        backHome(){
            this.$router.push({name: "home"});
        },
    },
    created() {
        this.getItem(this.id);
        this.message="";
    },
};
</script>