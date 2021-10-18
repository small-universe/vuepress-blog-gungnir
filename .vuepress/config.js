const path = require("path");

module.exports = {
  title: "PhoenixBlog",
  description: "A blog powered by VuePress, themed by Gungnir.",
  head: [
    ["link", { rel: "icon", href: "/img/logo.svg" }],
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
    searchPlaceholder: "搜索...",  // 可选：搜索栏占位文本，默认："$ grep ..."
    searchIcon: "ri-search-2-line", // 可选：搜索图标
    
    codeTheme: "gungnir-dark",
    rss: {
      site_url: "http://phoenix.dreamagain.top",
      copyright: "nanci 2021-present",
      count: 20
    },
    comment: {
      // owner: "This-is-an-Apple",
      // repo: "gitalk-comments",
      // clientId: "d6247712dc288a5a60ca",
      // clientSecret: "ed1ec72417828343c79ed910a1b77d140fa715a7"
    },
    analytics: {
      // ga: "UA-146858305-1",
      // ba: "75381d210789d3eaf855fa16246860cc"
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
        text: "关于",
        link: "/about/",
        icon: "fa-paw"
      },
      {
        text: "标签",
        link: "/tags/",
        icon: "fa-tag"
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
      // 可选：首页本地封面图路径和蒙版
      local: [
        {
          path: "/img/home-bg/1.jpg",
          mask: "rgba(40, 57, 101, .4)"
        },
        {
          path: "/img/home-bg/2.jpg",
          mask: "rgba(196, 176, 131, .1)"
        },
        {
          path: "/img/home-bg/3.jpg",
          mask: "rgba(68, 74, 83, .1)"
        },
        {
          path: "/img/home-bg/4.jpg",
          mask: "rgba(19, 75, 50, .2)"
        },
        {
          path: "/img/home-bg/5.jpg"
        }
      ]
    },
    pages: {
      // 标签页配置
      tags: {
        // 可选：标签页标题
        title: "",

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
        title: "",
        // 可选：链接页副标题
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        // 可选：链接页封面图路径和蒙版
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },
    // 页脚自定义   支持 HTML 格式
    footer: `
      &copy; <a href="https://github.com/small-universe" target="_blank">nanci</a> 2018-2021
      <br>
      Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress 1.x</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  },
  markdown: {
    // lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5"]
  },
  configureWebpack: () => {
    return {
      resolve: {
        alias: {
          public: path.resolve(__dirname, "./public")
        }
      }
    };
    
  }
};
