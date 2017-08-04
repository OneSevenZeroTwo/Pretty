<template>
    <div class="top" v-gotop="" v-show="isshowtop">
    </div>
</template>
<script>
export default {
    data() {
        return {
            isshowtop: false
        }
    },
    methods:{
        showtop() {
            window.addEventListener('scroll', () => {
            	
                if (window.scrollY >=1000) {
                    this.isshowtop = true;
                } else {
                    this.isshowtop = false;
                }
            })
        }
    },
    directives: {
        gotop: {
            bind(el, binding) {

                el.onclick = function() {
                    var timer = setInterval(function() {
                        document.body.scrollTop = document.body.scrollTop - 40;
                        if (document.body.scrollTop == 0) {
                            clearInterval(timer)
                        }
                    }, 1)
                }
            }
        }
    },
    mounted(){
    	this.showtop()
    }
}
</script>
<style scoped>
.top {
    width: 43px;
    height: 43px;
    background: url('../img/top.png');
    position: fixed;
    bottom: 70px;
    right: 10px;
}
</style>