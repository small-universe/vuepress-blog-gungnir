(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{733:function(t,s,a){"use strict";a.r(s);var e=a(137),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、centos7-安装-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、centos7-安装-docker"}},[t._v("#")]),t._v(" 一、Centos7 安装 Docker")]),t._v(" "),a("p",[t._v("官网安装教程："),a("a",{attrs:{href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.docker.com/engine/install/centos/")])]),t._v(" "),a("h3",{attrs:{id:"_01-需要的安装包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-需要的安装包"}},[t._v("#")]),t._v(" 01 | 需要的安装包")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y yum-utils\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("如果一直找不到镜像，请更换yum源，详细内容请参考：https://blog.csdn.net/wangshuai6707/article/details/104609213/")])]),t._v(" "),a("h3",{attrs:{id:"_02-设置镜像的仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_02-设置镜像的仓库"}},[t._v("#")]),t._v(" 02 | 设置镜像的仓库")]),t._v(" "),a("p",[t._v("换成国内的阿里云镜像，速度很快！")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum-config-manager "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n   --add-repo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n   http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])])]),a("h3",{attrs:{id:"_03-安装docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_03-安装docker"}},[t._v("#")]),t._v(" 03 | 安装Docker")]),t._v(" "),a("p",[t._v("社区版 "),a("code",[t._v("docker-ce")]),t._v(" ("),a("strong",[t._v("官方推荐")]),t._v(")")]),t._v(" "),a("p",[t._v("企业版 "),a("code",[t._v("docker-ee")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" docker-ce docker-ce-cli containerd.io\n\n")])])]),a("h3",{attrs:{id:"_04-启动docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_04-启动docker"}},[t._v("#")]),t._v(" 04 | 启动Docker")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动docker")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" docker start\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 停止docker")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" docker stop\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启docker")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" docker restart\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("设置Docker开机自启动："),a("code",[t._v("systemctl enable docker")]),t._v("，避免将Linux系统重启后总是需要手动去启动Docker")])]),t._v(" "),a("h2",{attrs:{id:"二、安装-gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、安装-gitlab"}},[t._v("#")]),t._v(" 二、安装 Gitlab")]),t._v(" "),a("h3",{attrs:{id:"_01-搜索镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-搜索镜像"}},[t._v("#")]),t._v(" 01| 搜索镜像")]),t._v(" "),a("p",[t._v("可以使用"),a("code",[t._v("docker search")]),t._v("搜索命令查看：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@DevStudio ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$docker")]),t._v(" search gitlab\nNAME                                         DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED\ngitlab/gitlab-ce                             GitLab Community Edition docker image based …   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3457")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nsameersbn/gitlab                             Dockerfile to build a GitLab image "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the D…   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1180")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ngitlab/gitlab-runner                         GitLab CI Multi Runner used to fetch and run…   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("749")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ngitlab/gitlab-ee                             GitLab Enterprise Edition docker image based…   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("286")]),t._v("                  \ntwang2218/gitlab-ce-zh                       汉化的 GitLab 社区版 Docker Image                     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("251")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\njangrewe/gitlab-ci-android                   GitLab CI image "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" building Android apps       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nedbizarro/gitlab-ci-pipeline-php             Docker images "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" build and "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" PHP applica…   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("38")]),t._v("                   \nulm0/gitlab                                  GitLab Docker image "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ARM                     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),t._v("                   \ngitlab/gitlab-runner-helper                                                                  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("35")]),t._v("                   \nklud/gitlab-runner                           GitLab Runner "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ARM devices                   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v("                   \ncenturylink/gitlab                           This image uses the image from sameersbn / g…   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nciricihq/gitlab-sonar-scanner                Gitlab Docker container to run sonar-scanner…   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ngitlab/gitlab-ce-qa                          GitLab QA has a "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" suite that allows end-t…   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("                    \ntimoschwarzer/gitlab-monitor                 A browser-based monitor dashboard "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" GitLab…   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nsgillespie/gitlab-runner                     A Dockerized GitLab Runner that automaticall…   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nsamcontesse/gitlab-merge-request-resource    A concourse resource to check "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" new merge …   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nmastertinner/gitlab-merge-request-resource   A concourse resource to check "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" new merge …   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nboldcommerce/gitlab-merge-request-resource   Reverted build of Swisscom's resource "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("until")]),t._v(" …   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nstanfordlegion/gitlab-ci                     An image "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Gitlab CI.                         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nlorands/gitlab-merge-request-resource        This is a fork of swisscom/gitlab-merge-requ…   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nadamkl/gitlab-merge-request-resource         Customized with support "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" gitlab "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" on di…   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nedtan1/gitlab-merge-request-resource         GitLab Merge Request resource "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ConcourseCI   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ngitlab/gitlab-ee-qa                          GitLab QA has a "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" suite that allows end-t…   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("                    \nmvisonneau/gitlab-ci-pipelines-exporter      Prometheus / OpenMetrics exporter "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" GitLab…   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"_02-拉取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_02-拉取镜像"}},[t._v("#")]),t._v(" 02 | 拉取镜像")]),t._v(" "),a("p",[a("code",[t._v("gitlab-ce")]),t._v("为稳定版本，后面不填写版本则默认pull最新latest版本")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ docker pull gitlab/gitlab-ce\n")])])]),a("h3",{attrs:{id:"_03-运行容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_03-运行容器"}},[t._v("#")]),t._v(" 03 | 运行容器")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ docker run -d  -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(":443 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(":80 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("222")]),t._v(":22 --name gitlab --restart always -v /home/gitlab/config:/etc/gitlab -v /home/gitlab/logs:/var/log/gitlab -v /home/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -d：后台运行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -p：将容器内部端口向外映射")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --name：命名容器名称")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -v：将容器内数据文件夹或者日志、配置等文件夹挂载到宿主机指定目录")]),t._v("\n")])])]),a("h3",{attrs:{id:"_04-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_04-配置"}},[t._v("#")]),t._v(" 04 | 配置")]),t._v(" "),a("p",[t._v("在Gitlab上创建项目的时候，生成项目的URL访问地址是按容器的"),a("code",[t._v("hostname")]),t._v("来生成的，也就是容器的id。作为Gitlab服务器，我们需要一个固定的URL访问地址，于是需要配置"),a("code",[t._v("gitlab.rb")]),t._v("（宿主机路径："),a("code",[t._v("/home/gitlab/config/gitlab.rb")]),t._v("）")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gitlab.rb文件内容默认全是注释")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /home/gitlab/config/gitlab.rb\n")])])]),a("p",[t._v("配置内容：")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置http协议所使用的访问地址,不加端口号默认为80")]),t._v("\nexternal_url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://172.22.27.163'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置ssh协议所使用的访问地址和端口")]),t._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gitlab_ssh_host'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'172.22.27.163'")]),t._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gitlab_shell_ssh_port'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("222")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此端口是run时22端口映射的222端口")]),t._v("\n")])])]),a("p",[t._v("配置好后需要重启一下容器：")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启gitlab容器")]),t._v("\n$ docker restart gitlab\n")])])]),a("p",[t._v("此时项目的仓库地址就变了。如果ssh端口地址不是默认的22，就会加上ssh:// 协议头。 打开浏览器输入ip地址(如果端口号不是80，则打开为：ip:端口号)")]),t._v(" "),a("p",[t._v("登录管理员账户"),a("code",[t._v("root")]),t._v("，初始密码放在了一个临时文件中"),a("code",[t._v("/etc/gitlab/initial_root_password")]),t._v("，这个文件将在首次执行reconfigure后24小时自动删除")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@DevStudio ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it gitlab "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进去容器内部")]),t._v("\nroot@e8d76c250652:/"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vi /etc/gitlab/initial_root_password")]),t._v("\n\n")])])]),a("p",[a("img",{attrs:{src:"https://gitee.com/small-universe/file-bed/raw/master/tools/Gitlab/2021-11-16-21:11:44-image-20211116211013722.png",alt:"image-20211116211013722"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);