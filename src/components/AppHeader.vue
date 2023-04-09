<template>
    <nav class="navbar navbar-expand backgound-violet pl-4">
        <a href="/" class="navbar-brand text-white">Ứng dụng quản lý cửa hàng cho thuê trang phục</a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{name:'home'}" class="nav-link text-white">
                    Trang chủ
                    <i class="fas fa-home"></i>
                </router-link>
            </li>
        </div>
        <!-- <div class="mr-auto navbar-nav pl-4">
            <li class="nav-item">
                <router-link :to="{name:'item'}" class="nav-link text-white">
                    Sản phẩm
                    <i class="fas fa-home"></i>
                </router-link>
            </li>
        </div> -->
        <div class="ml-auto navbar-nav pr-4">
            <li class="nav-item">
                <a href="" class="text-white"> Đăng nhập <i class="fas fa-user text-white"></i></a>
            </li>
        </div>
    </nav>
</template>