<script>
export default {
    props: {
        bills: {type: Array, default: []},
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
            <th scope="col">Ngày mượn</th>
            <th scope="col">Mã HD</th>
            <th scope="col">Tên KH</th>
            <th scope="col">Tình trạng</th>
            </tr>
        </thead>

        <tbody
            v-for="(bill, index) in bills"
            :key="bill._id"
            :class="{active: index === activeIndex }"
            @click="updateActiveIndex(index)"
        >
            <tr>
            <td>{{  bill.ngayMuon }}</td>
            <td>{{  bill._id }}</td>
            <td>{{  bill.nameCustomer }}</td>
            <td>{{  bill.tinhTrang }}</td>
            </tr>
        </tbody>
    </table>
</template>