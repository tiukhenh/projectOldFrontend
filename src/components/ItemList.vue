<script>
export default {
    props: {
        items: {type: Array, default: []},
        activeIndex: {type: Number, default: -1},
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    }
};
</script>

<template>

    <table class="table mt-2">
        <thead class="backgound-violet text-white">
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Tên</th>
            <th scope="col">Loại</th>
            <th scope="col">Màu sắc</th>
            <th scope="col">Giá</th>
            <th scope="col">Tình trạng</th>
            </tr>
        </thead>

        <tbody
            v-for="(item, index) in items"
            :key="item._id"
            :class="{active: index === activeIndex }"
            @click="updateActiveIndex(index)"
        >
            <tr>
            <th scope="row">{{  item._id }}</th>
            <td>{{  item.ten }}</td>
            <td>{{  item.loai }}</td>
            <td>{{  item.mauSac }}</td>
            <td>{{  item.gia }}</td>
            <td>{{  item.tinhTrang }}</td>
            </tr>
        </tbody>
    </table>
</template>