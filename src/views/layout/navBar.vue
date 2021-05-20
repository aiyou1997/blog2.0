<template>
  <el-menu
    :default-active="$router.options.history.location"
    mode="horizontal"
    @select="handleSelect"
    :router="true"
  >
    <el-menu-item
      v-for="(item, index) in navList"
      :key="index"
      :disabled="item.disabled"
      :index="item.route"
    >
      {{ item.text }}
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          name: 'homepage',
          text: '首页',
          route: '/',
          disabled: false,
        },
        {
          name: 'article',
          text: '文章',
          route: '/article',
          disabled: false,
        },
        {
          name: 'forum',
          text: '论坛',
          route: '/forum',
          disabled: true,
        },
        {
          name: 'connect',
          text: '联系',
          route: '/connect',
          disabled: true,
        },
      ],
    };
  },
  methods: {
    handleSelect() {},
  },
};
</script>

<style></style>
