<template>
    <section class="address-box" data-zip="" data-phone="" data-isselected="true" data-isdefault="true" data-addressid="508153431">
        <b></b>
        <p class="name">收件人：2313123<i>18811111111</i></p>
        <p class="address">广州市广东省天河区11111</p>
        <b></b>
        <span class="arrow"></span>
    </section>
</template>

<script>
</script>

<style scoped>
.address-box {
    position: relative;
    padding: 0;
    margin-top: 9px;
    background-color: #fff;
    color: #333;
}

.address-box b {
    display: block;
    padding-top: 3px;
    background: url(http://s17.mogucdn.com/new1/v1/bmisc/493ac91e1bc3dfa8745e34e7b959295a/183443709419.png) -.4rem 0 repeat-x;
}

.address-box .name {
    font-size: 15px;
}

.address-box .address,
.address-box .name {
    padding-left: 8%;
    padding-top: 15px;
}

.address-box .name i {
    margin-left: 8%;
}

.address-box .address {
    background: url(http://s16.mogucdn.com/new1/v1/bmisc/83bd5e329f79263cb20efba2e8b72c30/183544204190.png) 10px 3.5px no-repeat;
    background-size: 4%;
    font-size: 13px;
    color: #666;
    padding-bottom: 14px;
    line-height: 1.2;
    padding-right: 10.66%;
}

.address-box b {
    display: block;
    padding-top: 3px;
    background: url(http://s17.mogucdn.com/new1/v1/bmisc/493ac91e1bc3dfa8745e34e7b959295a/183443709419.png) -20px 0 repeat-x;
}

.arrow {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 2.66%;
    top: 50%;
    margin-top: -7.5px;
    background: url(http://s16.mogucdn.com/new1/v1/bmisc/83bd5e329f79263cb20efba2e8b72c30/183544204190.png) 0 -160px no-repeat;
    background-size: 100%;
}
</style>
