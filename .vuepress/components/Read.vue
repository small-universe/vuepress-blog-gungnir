<template>
  <Common class="read">
    <PageHeader :page-info="getPageInfo" />
    <v-container>
      <v-row class="fill-height" align="center" justify="center">
        <v-icon large color="green darken-2">mdi-domain</v-icon>
        <template v-for="(item, i) in bookList">
          <v-col :key="i" cols="12" md="4">
            <v-hover value=true>
              <v-card class="mx-auto" max-width="450">
                <v-img :src="item.cover" aspect-ratio="1.7" position="top center" />
                <v-card-title>
                  <div class="text-h4 mb-2">{{ item.title }}</div>
                </v-card-title>
                <v-divider class="mt-6 mx-4"></v-divider>

                <v-card-text>
                  <v-chip class="mr-2" close-icon="mdi-delete" color="blue" link outlined>
                    <v-icon name="ri-book-2-fill" />PDF
                  </v-chip>
                  <v-chip class="mr-2" color="success" outlined @click="link()">
                    <v-icon name="ri-book-2-fill" />链接
                  </v-chip>
                  <v-chip class="mr-3" color="green" outlined>
                    <v-icon name="ri-book-2-fill" />读书笔记
                  </v-chip>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
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

<style lang="stylus" scoped>
@require "../styles/mixins.styl"
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
<style src="@theme/styles/theme.styl" lang="stylus"></style>