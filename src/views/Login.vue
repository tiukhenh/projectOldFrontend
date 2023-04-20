<template>
    <form @submit.prevent="Submit" method="post">
        <div class="border border-violet rounded col-6 m-auto m-4 justify-content-center p-4">
            <div class="form-group justify-content-around">
                <label for="" class="col-4">Tên đăng nhập</label>
                <input class="col-8" type="text" v-model="form.username" placeholder="Tên đăng nhập" required />
            </div>
            <div class="form-group justify-content-around">
                <label for="" class="col-4">Mật khẩu</label>
                <input class="col-8" type="password" v-model="form.password" placeholder="Mật khẩu" required/>
            </div>
            <button type="submit" class="btn btn-outline-violet backgound-violet text-white btn-block">Đăng nhập</button>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            Submit(event){
                this.$store.dispatch('login', this.form.username)
            }
        }
    }
</script>

<style>
</style>