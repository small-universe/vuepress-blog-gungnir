<template>
  <Common class="read">
    <PageHeader :page-info="getPageInfo" />
    <div class="container">
      <el-row :gutter="10">
        <el-col :span="6" v-for="book in bookList" :key="book.key">
          <el-card shadow="hover">
            <el-row :gutter="2">
              <el-col :span="10">
                <el-image
                  style="width: 110px; height: 126px"
                  :src="book.cover"
                  :preview-src-list="[book.cover]"
                >
                </el-image>
              </el-col>
              <el-col :span="14">
                <h3>{{ book.title }}</h3>
                <span>作者:{{ book.author }}</span>
              </el-col>
            </el-row>
  
            <el-divider />
            <el-row :gutter="1">
              <el-col :span="8">
                <el-button type="primary" plain icon="el-icon-reading">PDF</el-button>
              </el-col>
              <el-col :span="8">
                <el-button type="success" plain icon="el-icon-share">链接</el-button>
              </el-col>
              <el-col :span="8">
                <el-button type="primary" plain icon="el-icon-magic-stick">笔记</el-button>
              </el-col>
            </el-row>
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
    return {
      bookList: [],
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
      return bookList
    },
  },
};
</script>
<style scoped>
.container{
  padding: 10px 0 50px;
  width: 80%;
  max-width: 90%;
  margin: 0 auto;
}
  
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
<style src="@theme/styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>
@require "../styles/mixins.styl"

</style>