<template>
    <header class="bar bar-nav">
        <h1 class='title'>下拉刷新</h1>
    </header>
    <!-- content应该拥有"pull-to-refresh-content"类,表示启用下拉刷新 -->
    <div class="content pull-to-refresh-content" data-ptr-distance="55">
        <!-- 默认的下拉刷新层 -->
        <div class="pull-to-refresh-layer">
            <div class="preloader"></div>
            <div class="pull-to-refresh-arrow"></div>
        </div>
        <!-- 下面是正文 -->
        <div class="card-container">
            <div class="card">
                <div class="card-header">card</div>
                <div class="card-content">
                    <div class="card-content-inner">
                        这里是第1个card，下拉刷新会出现第2个card。
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // 添加'refresh'监听器
    $(document).on('refresh', '.pull-to-refresh-content',function(e) {
        // 模拟2s的加载过程
        setTimeout(function() {
            var cardNumber = $(e.target).find('.card').length + 1;
            var cardHTML = '<div class="card">' +
                '<div class="card-header">card'+cardNumber+'</div>' +
                '<div class="card-content">' +
                '<div class="card-content-inner">' +
                '这里是第' + cardNumber + '个card，下拉刷新会出现第' + (cardNumber + 1) + '个card。' +
                '</div>' +
                '</div>' +
                '</div>';



            $(this.$e).find('.card-container').prepend(cardHTML);
            console.log(cardHTML);
            // 加载完毕需要重置
            $.pullToRefreshDone('.pull-to-refresh-content');
        }, 2000);
    });

</script>

<style>

</style>
