<template>
  <div class="board">
      <p>
          board
      </p>
      <table>
          <thead>
              <tr>
                  <th>
                      번호
                  </th>
                  <th class="title">
                      제목
                  </th>
                  <th>
                      글쓴이
                  </th>
                  <th>
                      날짜
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(board, i) in pageArray" :key="i">
                  <td>
                      {{i + 1}}
                  </td>
                  <td class="title">
                      {{board.title}}
                  </td>
                  <td>
                      {{board.user}}
                  </td>
                  <td>
                      {{board.date}}
                  </td>
              </tr>
          </tbody>
      </table>

      <Page
        :total="totalPage"
        :limit="limitPage"
        :block="pagingSize"
        :page="curpage"
        @paging="paging"
      ></Page>
  </div>
</template>

<script>

import Page from '@/components/common/Paging.vue'
export default {
    components:{
        Page
    },
    data() {
        return {
            boardData:[
                {
                    title: 'title1',
                    user: 'user1',
                    date: '2022-03-01'
                },
                {
                    title: 'title2',
                    user: 'user1',
                    date: '2022-03-01'
                },
                {
                    title: 'title3',
                    user: 'user1',
                    date: '2022-03-01'
                },
                {
                    title: 'title4',
                    user: 'user2',
                    date: '2022-03-01'
                },
                {
                    title: 'title5',
                    user: 'user2',
                    date: '2022-03-04'
                },
                {
                    title: 'title6',
                    user: 'user2',
                    date: '2022-03-04'
                },
                {
                    title: 'title7',
                    user: 'user2',
                    date: '2022-03-04'
                },
                {
                    title: 'title8',
                    user: 'user2',
                    date: '2022-03-04'
                },
                {   
                    title: 'title9',
                    user: 'user2',
                    date: '2022-03-04'
                },
                {
                    title: 'title10',
                    user: 'user2',
                    date: '2022-03-04'
                },
                {
                    title: 'title11',
                    user: 'user2',
                    date: '2022-03-04'
                },
                {
                    title: 'title12',
                    user: 'user2',
                    date: '2022-03-04'
                },
                {
                    title: 'title13',
                    user: 'user2',
                    date: '2022-03-04'
                },
                {
                    title: 'title14',
                    user: 'user2',
                    date: '2022-03-04'
                },

            ],


            // 페이징 컴포넌트로 전달 될 데이터
            pageArray: [],

            // 전체 페이지 갯수
            totalPage: 0,

            // 보여줄 게시글 수
            limitPage: 10,

            // 페이지 버튼 수

            pagingSize: 10,

            // 현재 패이지

            curpage: 1,

        }
    },

    mounted() {
        this.totalPage = this.boardData.length;
        this.paging(this.curpage)
    },

    methods: {
        

        // 페이지 함수에 입력받은 i값 전달
        paging(page){

            // 전달 될 페이지 데이터를 limit 값 만큼 담기
            this.pageArray = this.boardData.slice(

                // 배열을 자를 시작점
                (page - 1) * this.limitPage,

                // 몇개까지 자를 것인지
                page * this.limitPage
            )

            // 현재 페이지 값을 클릭한 페이지 값으로 저장
            this.curpage = page
        }
    },

}
</script>

<style scoped lang="scss">
@import '@/assets/css/components/board.scss';

</style>