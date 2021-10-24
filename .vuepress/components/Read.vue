<template>
  <Common class="read">
    <PageHeader :page-info="getPageInfo" />
    <div class="container">
      <el-row :gutter="10">
        <el-col class="book-card" v-for="book in bookList" :key="book.key">
          <el-card shadow="hover">
            <el-row :gutter="2">
              <el-col :span="12">
                <el-image
                  style="width: 100px; height: 126px"
                  :src="book.cover"
                  :preview-src-list="[book.cover]"
                ></el-image>
              </el-col>
              <el-col :span="12">
                <h3>{{ book.title }}</h3>
                <span>作者:{{ book.author }}</span>
              </el-col>
            </el-row>

            <el-divider class="divider"/>
            <div class="card-foot">
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-button type="primary" plain icon="el-icon-reading" size="small">PDF</el-button>
                </el-col>
                <el-col :span="8">
                  <el-button type="success" plain icon="el-icon-share" size="small">笔记</el-button>
                </el-col>
                <el-col :span="8">
                  <el-button type="primary" plain icon="el-icon-magic-stick" size="small">链接</el-button>
                </el-col>
              </el-row>
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
<style lang="stylus" scoped>
@require '../styles/mixins.styl';
@require '../styles/mode.styl';
.read{
  background: url(/img/pages/read.svg) no-repeat;
}
.container {
  padding: 10px 0 50px;
  width: 80%;
  max-width: 90%;
  margin: 0 auto;
}
.divider{
  height: 1.5px; 
  margin: 0px 0px 10px 0px;
}

.el-col {
  border-radius: 4px;
  padding: 10px;
}

.box-card {
  width: 325px;
}

@media (min-width: $MQMobile) {
  .book-card {
    width: 100%;
  }

  .card-foot {
    background-color: #edf5f6;
  }
}

@media (min-width: $MQIpad) {
  .book-card {
    width: 20%;
  }
}

@media (min-width: $MQLarge) {
  .book-card {
    width: 25%;
  }
}
</style>
<style src="@theme/styles/theme.styl" lang="stylus"></style>