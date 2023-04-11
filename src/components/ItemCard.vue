<script>
export default {
    props: {
        item: {type: Object, required: true},
    },
};
</script>
<template>
    <div>
        <div class="p-1">
            <strong>Tên:</strong>
            {{ item.ten }}
        </div>
        <div class="p-1">
            <strong>Loại:</strong>
            {{ item.loai }}
        </div>
        <div class="p-1">
            <strong>Màu:</strong>
            {{ item.mauSac }}
        </div>
        <div class="p-1">
            <strong>Giá:</strong>
            {{ item.gia }}
        </div>
        <div class="p-1">
            <strong>Tình trạng:&nbsp;</strong>
            <i v-if="item.tinhTrang" class="fas fa-check" ></i>
            <i v-else class="fas fa-times"></i>
        </div>
    </div>
</template>