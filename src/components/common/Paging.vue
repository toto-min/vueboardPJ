<template>
  <div class="paging">

      <div class="paging-box">
          <button class="prev">PREV</button>
          <p class="pageInt" v-for="i in list" :key="i" @click="sendPage(i)" :class="{active: i === currentPage}">
              {{i}}
          </p>
          <button class="next">NEXT</button>
      </div>

  </div>
</template>

<script>
export default {
    props:{
        total: Number,
        limit: Number,
        block: Number,
        page: Number,
    },
    data() {
        return {
            start: 0,
            end: 0,
            list: 0,
            currentPage: 0,
        }
    },

    watch:{
        total(){
            this.pageDataSetting();
        }
    },
    methods: {
        sendPage(page){
            this.$emit('paging', page)
        },
        pageDataSetting(total, limit, block, curpage){
            total = this.total;
            limit = this.limit;
            block = this.block;
            curpage = this.page;


            // 전체 페이지 값 구하기
            const totalPage = Math.ceil(total / limit);

            // 현재 페이지
            let currentPage = curpage;

            // 이전, 다음 버튼 클릭시 1씩 커지거나 작아지도록

            const first = currentPage > 1 ? parseInt(currentPage, 10) - parseInt(1,10) : null
            const  end = totalPage !== currentPage ? parseInt(currentPage, 10) + parseInt(1, 10) : null

            // 페이지당 게시물 보여주기

            let startIndex = (Math.ceil(currentPage / block) - 1) * block + 1
            let endIndex = startIndex + block > totalPage ? totalPage : startIndex + block + 1
            let list = []

            for (let i = startIndex; i <= endIndex; i++) {
                list.push(i);
                
            }


            this.start = first;
            this.end = end;
            this.list = list;
            this.currentPage = currentPage;
        }
    },
}
</script>

<style>

</style>