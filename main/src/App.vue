<template>
  <div id="main-app">
    <a-layout class="main-app-wrap">
      <a-layout-sider v-model:collapsed="collapsed" collapsible class="slider">
        <!-- <div class="logo" /> -->
        <a-menu
          mode="inline"
          theme="dark"
          v-model:selectedKeys="selectedKeys"
          v-model:openKeys="openKeys"
          @select="handleSelect"
        >
          <template v-for="(item, index) in menuList" :key="item.path">
            <a-sub-menu
              v-if="item.children && item.children.length > 0"
              :key="item.path"
            >
              <template #title>
                <span>{{ item.title }}</span>
              </template>
              <a-menu-item
                v-for="childRoute in item.children"
                :key="childRoute.path"
                :to="childRoute.path"
              >
                {{ childRoute.title }}
              </a-menu-item>
            </a-sub-menu>
            <template v-else
              ><a-menu-item :key="item.path" :to="item.path">
                <span>{{ item.title }}</span>
              </a-menu-item>
            </template>
          </template>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header
          style="background: #fff; padding: 0 16px; margin-bottom: 16px"
        >
          标题
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <div
            :style="{
              padding: '24px',
              background: '#fff',
              height: 'calc(100% - 16px)',
            }"
          >
            <router-view />
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const menuList = ref<any>([
  {
    key: "1",
    title: "首页",
    path: "/home",
  },
  {
    key: "2",
    title: "登录页",
    path: "/login",
  },
  {
    key: "3",
    title: "子应用",
    path: "/basic/home",
  },
  {
    key: "4",
    title: "子应用-其它",
    path: "/basic/other",
  },
]);

const selectedKeys = ref<string[]>([route.path]);
const openKeys = ref<string[]>([]);
const collapsed = ref<boolean>(false);

const handleSelect = (val) => {
  router.push(selectedKeys.value[0]);
};

watch(
  () => route,
  () => {
    selectedKeys.value = [route.path];
  },
  { deep: true }
);
</script>
<style scoped lang="less">
#main-app {
  width: 100%;
  height: 100vh;
  .main-app-wrap {
    height: 100%;
  }
}
</style>
