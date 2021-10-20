<template>
<div>
  <v-btn
  elevation="2"
  loading
></v-btn>
  {{books}}
</div>
  <!-- <a-row :gutter="[30, 30]">
    <template v-if="dataSource.length > 0">
      
      <a-col
        v-for="book in dataSource"
        :key="book.key"
        :xs="{ span: 24 }"
        :sm="{ span: 12 }"
        :md="{ span: 12 }"
        :lg="{ span: 8 }"
        :xl="{ span: 6 }"
        :xxl="{ span: 6 }"
      >
        <router-link :to="book.path">
          <a-card class="yur-card" :bordered="false" size="small">
            <div
              slot="cover"
              class="background-image"
              :style="{
                height: '140px',
                backgroundImage: `url(${book.banner})`
              }"
            />
            <a-card-meta :title="book.title" />
          </a-card>
        </router-link>
      </a-col>
      <a-col class="yur-pagination" :span="24">
        <pagination
          :current="current"
          :page-size="pageSize"
          :total="sPosts.length"
          @change="onChangePagination"
        />
      </a-col>
    </template>
    <template v-else>
      <a-empty />
    </template>
  </a-row> -->
</template>

<script>
import Common from "@theme/components/Common.vue";
import Pagination from "./Pagination";


export default {
  name: "Read",
  components: { Pagination, Common },
  
  data() {
    const pageSize = 24;
    return {
      sPosts: null,
      current: 1,
      pageSize: 10,
      books: null,
      dataSource:null
    };
  },
  created(){
    this.books = this.$page.frontmatter.books
    this.sPosts = this.books
    this. dataSource=[...this.books].splice(0, this.pageSize)
  },
  watch: {
    posts(nv) {
      this.sPosts = nv;
      this.current = 1;
      this.onChangePagination(this.current);
    }
  },
  methods: {
    onChangePagination(page) {
      this.current = page;
      this.dataSource = this.splitPosts();
    },
    splitPosts() {
      let posts = [...this.sPosts];
      if (posts.length > (this.current - 1) * this.pageSize) {
        posts = posts.splice((this.current - 1) * this.pageSize, this.pageSize);
      }
      return posts;
    }
  }
};
</script>
