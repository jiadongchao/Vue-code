<template>
    <div>
        <a v-link="{path:'/foo'}">To Foo</a>
        <br />
        <a v-link="{path:'/bar'}">TO Bar</a>
        <router-view></router-view>


        <nav class="bar bar-tab">
            <a class="tab-item active" v-link="{path:'/home'}">
                <span class="icon icon-home"></span>
                <span class="tab-label">首页</span>
            </a>
            <a class="tab-item" v-link="{path:'/search'}">
                <span class="icon icon-search"></span>
                <span class="tab-label">发现</span>
            </a>
            <a class="tab-item" v-link="{path:'/message'}">
                <span class="icon icon-message"></span>
                <span class="tab-label">消息</span>
            </a>
            <a class="tab-item" v-link="{path:'/me'}">
                <span class="icon icon-me"></span>
                <span class="tab-label">个人中心</span>
            </a>
        </nav>
    </div>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style>

</style>
