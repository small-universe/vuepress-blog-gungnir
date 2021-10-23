<template>
  <div class="priview-pdf-img">
	<!--  自己设置图片路径-->
    <img src="@/assets/pdfInit.png" @click="dialogPriviewPdf = true" alt="" />
    <el-dialog title="预览" :visible.sync="dialogPriviewPdf"  top="5vh" append-to-body>
      <pdf :src="pdfSrc" ref="pdf"></pdf>
    </el-dialog>
  </div>
</template>
<script>
import pdf from 'vue-pdf'
import CMapReaderFactory from 'vue-pdf/src/CMapReaderFactory.js'
export default {
  name: 'priview-pdf',
  components: {
    pdf
  },
  props: {
    // 外部传递pdfUrl 即可
    pdfUrl: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      dialogPriviewPdf: false
    }
  },
  computed: {
    pdfSrc () {
      return pdf.createLoadingTask({ url: this.pdfUrl, CMapReaderFactory })
    }
  }
}
</script>
<style lang="less" scoped>
.priview-pdf-img {
  img {
    width: 100px;
    height: 100px;
  }
}
  & /deep/ .el-dialog {
    width: 80%;
    overflow-y: auto;
  }
</style>
