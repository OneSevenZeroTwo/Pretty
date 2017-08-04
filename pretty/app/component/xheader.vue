<template>
    <header class="warpper">
        <form action="post" id="js_form clearfix">
            <a href="#" class="home_btn"></a>
            <input type="text" placeholder="套装" class="js_input" @focus="showSea" @input="showtsea" v-model="text" />
            <span class="close" v-show="!isshowtsea" @click="hidetsea" v-focus="">&times;</span>
            <a :href="h1" :class="{tsou:isshowtsea,sou:!isshowtsea}" v-show="isshowsearch" @click="act">{{title}}</a>
            <a href="javascript:;" class="js_right" v-show="!isshowsearch"></a>
        </form>
    </header>
</template>
<script>
export default {
    data() {
        return {
            text: '',
            title: '',
            h1: 'javascript:;'
        }
    },
    computed: {
        isshowtsea() {
            return this.$store.state.isshowtsea
        },
        isshowsearch() {
            return this.$store.state.isshowsearch
        }
    },
    methods: {
        showSea() {
            this.$store.state.isshowsearch = true;
            this.title = '取消';
        },
        showtsea() {
            if (this.text.length > 0) {
                this.$store.state.isshowtsea = false;
                this.title = '搜索';
                this.seekmsg()
            } else {
                this.$store.state.isshowtsea = true;
                this.title = '取消';

            }
        },
        hidetsea() {
            this.text = '';
            this.$store.state.isshowtsea = true;
        },
        act() {
            if (this.title == '取消') {
                this.$store.state.isshowsearch = false;
            } else if (this.title == '搜索') {
                this.h1 = '#/index/filist/pseek/pop/1/' + this.text;
                this.getfilist('pop')
            }
        },
        seekmsg() {
            this.$ajax.get(this.$store.state.baseUrl + 'goodlist.json').then((data) => {
                var all = data.data.RECORDS
                var arr = []
                console.log(this.text)
                for (var i = 0; i < all.length; i++) {
                    if (all[i].title.includes(this.text)) {
                        // console.log(all[i])
                        arr.push(all[i])
                    }
                }
                if (arr.length <= 10) {
                    this.$store.state.searchlist = data.data.list;
                    // console.log(this.$store.state.searchlist)
                } else {
                    this.$store.state.searchlist = arr.slice(0, 10);
                }
            }).catch((err) => {

            });
        },
        getfilist(sort) {
            this.$store.state.list = [];
            var title;
            this.$ajax.get(this.$store.state.baseUrl + 'goodlist.json').then((data) => {
                var all = data.data.RECORDS
                var arr = []
                for (var i = 0; i < all.length; i++) {
                    if (all[i].sort == this.$route.params.sort) {
                        arr.push(all[i])
                    }
                }
                this.$store.state.list = this.$store.state.list.concat(arr.slice(0,10));
            }).catch((err) => {

            });
        }
    },
    directives: {
        focus: {
            bind(el, binding) {
                el.onclick = function() {
                    document.querySelector('.js_input').focus();
                };
                if (binding.value == '搜索') {

                }
            }
        }
    }

}
</script>
<style scoped>
.warpper {
    width: 100%;
    height: 39px;
    background-color: #fff;
    position: relative;
    font-size: 12px;
    z-index: 100;
}

#js_form {
    position: relative;
}

.home_btn {
    float: left;
    width: 25px;
    height: 39px;
    margin: 0 5px;
    background: url('../img/logo.png') no-repeat center;
    background-size: contain;
    text-align: center;
    color: #666;
}

.js_input {
    float: left;
    font-size: 10px;
    color: #333;
    border: none;
    padding: 5px 10px 5px 20px;
    width: 75%;
    height: 90%;
    border-radius: 5px;
    margin-bottom: 0.16rem;
    margin-top: 8px;
    margin-left: 8px;
    background: #f4f4f4 url('../img/jing.png') no-repeat 0.2rem center;
    background-size: auto .8rem;
    -webkit-appearance: none;
    outline: none;
}

.js_right {
    width: 32px;
    height: 28px;
    float: right;
    margin-top: 6px;
    margin-right: 0.3%;
    line-height: 28px;
    text-align: center;
    background: url('../img/right.png') no-repeat center center;
    background-size: 15px 12px;
}

.close {
    position: absolute;
    right: 16%;
    top: 50%;
    line-height: 16px;
    font-size: 16px;
    margin-top: -8px;
    font-weight: 600;
    color: blue;
}

.sou {
    position: absolute;
    right: 2%;
    top: 50%;
    margin-top: -8px;
    color: #f36;
}

.tsou {
    position: absolute;
    right: 2%;
    top: 50%;
    margin-top: -8px;
    color: #666;
}
</style>