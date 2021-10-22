<template>
  <Common class="read">
    <PageHeader :page-info="getPageInfo" />
    <div class="container">
      <el-row :gutter="10">
        <el-col :span="6" v-for="book in bookList" :key="book.key">
          <el-card shadow="hover">
            <el-image
              style="width: 100px; height: 100px"
              :src="book.cover"
              :preview-src-list="[book.cover]"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </Common>
</template>

<script>
import Common from "@theme/components/Common";
import PageHeader from "@theme/components/PageHeader";


export default {
  name: "Read",
  components: { Common, PageHeader },

  data() {
    const pageSize = 24;
    return {
      currentDate: new Date(),
      sPosts: null,
      current: 1,
      pageSize: 10,
      bookList: [],
      dataSource: null
    };
  },
  computed: {
    getPageInfo() {
      let info =
        this.$themeConfig.pages && this.$themeConfig.pages.reading
          ? this.$themeConfig.pages.reading
          : {};
      return info;
    }
  },
  created() {
    this.bookList = this.initBookList()
  },
  watch: {
    posts(nv) {
      this.sPosts = nv;
      this.current = 1;
      this.onChangePagination(this.current);
    }
  },
  methods: {
    initBookList() {
      const categories = this.$page.frontmatter.categories;
      let bookList = [];
      for (let i in categories) {
        let item = categories[i];
        let categoryName = item.category;
        let books = item.books;
        for (let j in books) {
          let book = books[j]
          book.category = categoryName
          bookList.push(book)
        }
      }
      console.log(bookList)
      return bookList
      // this.dataSource = [...this.books].splice(0, this.pageSize)
    },

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

<style src="@theme/styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>
@require "../styles/mixins.styl"
.container
  padding 10px 0 50px
  width 80%
  max-width 90%
  margin 0 auto
 .el-col {
    border-radius: 4px;
    padding: 10px;
  }
.box-card{
  width: 325px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

</style>