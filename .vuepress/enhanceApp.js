import OhVueIcon from "oh-vue-icons";

import {
  FaFortAwesome,
  FaPaw,
  FaTag,
  FaSatelliteDish,
  RiLinkM,
  RiSearch2Line,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiZhihuLine,
  RiWeiboFill,
  HiMail,
  AiCv,
  RiSpaceShipFill,
  AiObpSquare,
  RiBook2Fill
} from "oh-vue-icons/icons";

OhVueIcon.add(
  FaFortAwesome,
  FaPaw,
  FaTag,
  FaSatelliteDish,
  RiLinkM,
  RiSearch2Line,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiZhihuLine,
  RiWeiboFill,
  HiMail,
  AiCv,
  RiSpaceShipFill,
  AiObpSquare,
  RiBook2Fill 
);

import 'vuetify/dist/vuetify.min.css'

import Vue from 'vue'
import vuetify from './plugins/vuetify' // path to vuetify export
export default ({
  Vue,      // VuePress 应用正在使用的Vue版本
  options,  // 根Vue实例的选项
  router,   // 应用的路由实例
  siteData,  // 站点元数据
}) => {
  Vue.use(vuetify)
}