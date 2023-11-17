<template>
  <div class="app-container home">
    <div>
      <el-table :data="tableData" stripe style="width: 100%" border v-loading="loading" ref="multipleTableRef"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" />
        <el-table-column label="序号" width="60" type="index" align="center" />
        <el-table-column prop="studentName" label="姓名" align="center" />
        <el-table-column prop="collegeName" label="学院" align="center" />
        <el-table-column prop="grade" label="年级" align="center" />
        <el-table-column prop="className" label="班级" align="center" />
        <el-table-column label="审核状态" align="center">
          <template #default="scope">
            <div v-if="scope.row.checked === 1">
              <el-tag size="large">已审核</el-tag>
            </div>
            <div v-else>
              <el-tag type="danger" size="large">待审核</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <el-button v-if="scope.row.isConfirm === 1" type="primary">修改</el-button>
            <el-button v-else type="primary" @click="jumpToDetail(scope.row)">审核</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="flex justify-end p-5">
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" v-model:page-sizes="pageSizes"
          background layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="queryAuditList"
          @current-change="queryAuditList" />
      </div>
    </div>
  </div>
</template>

<script setup name="Index">

// 分页数据
const currentPage = ref(1);
const pageSize = ref(10);
const pageSizes = reactive([10, 20, 30, 50]);

const loading = ref(false);
const total = ref(0);
const tableData = reactive([]);
</script>

<style scoped lang="scss">
.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
}
</style>

