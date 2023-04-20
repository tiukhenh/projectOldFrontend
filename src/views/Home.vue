<template>
    <!-- <div class="mt-3">
      <router-link v-if="!$store.state.username" to="/login">Login</router-link>
      <a href="" v-if="$store.state.username" @click="logout">Logout</a>
    </div> -->
    <div class="row  d-flex justify-content-center">
        <div class="col-md-10">
            <InputSearch v-model="searchText" />
        </div> 
    </div>
    <div class="mt-2 row d-flex justify-content-around">
        <div class="col-2 backgound-violet rounded">
            <div class="card " >
                <ul class="list-group list-group-flush justify-content-center m-2">
                    <li class="list-group-item"><a href="" class="text-center text-violet">Nhân viên </a></li>
                    <li class="list-group-item"><a href="" class="text-center text-violet">Sản phẩm </a></li>
                    <li class="list-group-item"><a href="./bill" class="text-center text-violet">Đơn hàng </a></li>
                    <li class="list-group-item"><a href="" class="text-center text-violet">Doanh thu </a></li>
                </ul>
            </div>
        </div>
        <div class="col-9">
            <div class="mr-auto text-violet "><h4><i class="far fa-chart-bar"></i> Hoạt động hôm nay:</h4></div>
            <div class="row">     
                <div class=" card backgound-violet col-3 ml-2">
                    <div class="card-body">
                        <h6 class="text-white"><i class="fas fa-shopping-cart text-white"></i> Số đơn hàng: 0</h6> 
                    </div>
                </div>
                <div class=" card backgound-violet col-3 ml-2">
                    <div class="card-body">
                        <h6 class="text-white"><i class="fas fa-redo text-white"></i> Khách trả hàng: 0</h6> 
                    </div>
                </div>
            </div>
            <div>
                <button class="btn btn-sm btn-violet mt-2" @click="goToAddItem">
                    <i class="fas fa-plus"></i> Thêm mới sản phẩm
                </button>
            </div>
            <div class="row">
                <div class="col-7">
                    <ItemList 
                    v-if="filteredItemsCount > 0" 
                    :items="filteredItems" 
                    v-model:activeIndex="activeIndex" 
                    />
                    <p v-else>Không có liên hệ nào.</p>   
                </div>
                <div class="col-5">
                    <div v-if="activeItem">
                    <h4 class="text-violet">
                        Chi tiết Sản phẩm
                    </h4>
                    <ItemCard :item="activeItem" />
                    <router-link 
                        :to="{
                        name: 'item.edit',
                        params: { id: activeItem._id},
                        }">
                        <span class="mt-2 text-violet">
                            Chỉnh sửa sản phẩm
                            <i class="fas fa-edit "></i>
                        </span>
                    </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import InputSearch from "@/components/InputSearch.vue";
import ItemList from "@/components/ItemList.vue";
import ItemCard from "@/components/ItemCard.vue";
import ItemService from "@/services/item.service";

export default {
    components: {
        InputSearch,
        ItemList,
        ItemCard,
    },
    data() {
        return{
            items: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        //Chuyển đổi các đối tượng thành chuỗi để tiện tìm kiếm
        itemStrings() {
            return this.items.map((item) => {
                const {ten, loai, mauSac, gia, tinhTrang } = item;
                return [ten, loai, mauSac, gia, tinhTrang].join("");
            });
        },
        //Trả về các Item có chứa thông tin cần tìm
        filteredItems() {
            if (!this.searchText) return this.items;
            return this.items.filter((_item, index) => 
                this.itemStrings[index].includes(this.searchText)
            );
        },
        activeItem() {
            if (this.activeIndex <0) return null;
            return this.filteredItems[this.activeIndex];
        },
        filteredItemsCount() {
            return this.filteredItems.length;
        },
    },
    methods: {
        async retrieveItems() {
            try {
                this.items = await ItemService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveItems();
            this.activeIndex =-1;
        },
        goToAddItem() {
            this.$router.push({name: "item.add"});
        },
        goToBill(){
            this.$router.push({name: "bill"})
        }
        // logout(){
        //     this.$store.commit('logout')
        // }
    },
    mounted() {
        this.refreshList();
        // this.$store.commit('initializeStore')
    },
};
</script>
