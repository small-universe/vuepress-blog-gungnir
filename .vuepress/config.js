const path = require("path");

module.exports = {
  
  title: "PhoenixBlog",
  description: "A blog powered by VuePress, themed by Gungnir.",
  head: [
    ["link", { rel: "icon", href: "/img/favicon.png" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  theme: "gungnir",
  themeConfig: {
    repo: "small-universe/vuepress-blog-gungnir",
    docsDir: ".",
    docsBranch: "master",
    editLinks: true,
    lastUpdated: true,
    hitokoto: {
      api: "https://v1.hitokoto.cn/?c=c&c=d&c=h&c=i&c=j&c=k"
    },
    search: true,  // 可选：是否启用搜索，默认：true
    searchMaxSuggestions: 10,  // 可选：搜索的最大结果数，默认：10
    searchPlaceholder: "search ...",  // 可选：搜索栏占位文本，默认："$ grep ..."
    searchIcon: "ri-search-2-line", // 可选：搜索图标
    
    codeTheme: "gungnir-dark",
    rss: {
      site_url: "http://phoenix.dreamagain.top",
      copyright: "nanci 2021-present",
      count: 20
    },
    comment: {
      owner: "small-universe",
      repo: "gungnir-comments",
      clientId: process.env.COMMENT_CLIENT_ID,
      clientSecret: process.env.COMMENT_CLIENT_SECRET
    },
    analytics: {
      // ga: "", //谷歌统计
      ba: "04a475117fc68857f05c7f6d0e994ec2" // 百度统计
    },
    
    katex: true, // 数学公式渲染

    //Markdown 增强样式
    mdPlus: {
      all: true // 全部启用
    },
    readingTime: {
      excludes: ["/about", "/tags/.*", "/links"]
    },
    nav: [
      {
        text: "首页",
        link: "/",
        icon: "fa-fort-awesome"
      },
      
      {
        text: "标签",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: "书屋",
        link: "/read/",
        icon: "ri-book-2-fill"
      },
      {
        text: "链接",
        link: "/links/",
        icon: "fa-satellite-dish"
      }
    ],
    // 作者信息
    personalInfo: {
      name: "nanci",
      avatar: "/img/avatar.jpg",
      description: "",
      sns: {
        github: "small-universe",
        zhihu: "",
        email: "18846770224@163.com"
      }
    },
    homeHeaderImages: {
      // 如果不配置 homeHeaderImages.local 项，则主题会在首页上显示通过 Unsplash API 随机拉取的一张壁纸，

      // 可选：自定义 Unsplash 接口
      api: "https://source.unsplash.com/1600x900/?wallpaper"

      // 可选：首页本地封面图路径和蒙版
      // local: [
      //   {
      //     path: "/img/home-bg/1.jpg",
      //     mask: "rgba(40, 57, 101, .4)"
      //   },
      // ]
    },
    pages: {
      // 标签页配置
      tags: {
        // 可选：标签页标题
        title: " ",

        // 可选：标签页副标题
        subtitle: "",

        // 可选：链接页封面图路径和蒙版
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      // 链接页配置
      links: {
        title: " ",
        // 可选：链接页副标题
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        // 可选：链接页封面图路径和蒙版
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      },
      reading: {
        title:"",
        subtitle:"读万卷书 行万里路 ~",
        bgImage: {
          path: "/img/pages/read.svg",
          // mask: "rgba(211, 136, 37, .5)"
        }
      }
    },
    // 页脚自定义   支持 HTML 格式
    footer: `
      &copy; <a href="https://github.com/small-universe" target="_blank">nanci</a> 2021-present
      <br>
      Powered by <a href="https://vuepress.vuejs.org" target="_blank"><b>VuePress 1.x</b></a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank"><b>Gungnir</b></a>
    `
  },
  markdown: {
    // lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5"]
  },
  /**
   * 使用插件
   */
   plugins: [
    [
      'vuepress-plugin-chart'
    ]
  ],
  
};
