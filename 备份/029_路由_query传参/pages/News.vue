<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- 对象中的path属性的参数没有传递过去？？？ -->
        <!-- <RouterLink :to="{ path: '/news/detail?a=123&b=哈哈&c=嘿嘿'}">{{ news.title }}</RouterLink> -->
        <!-- 第一种写法 -->
        <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title }}</RouterLink> -->
        <RouterLink 
          :to="{ 
            // path: '/news/detail',
            name: 'xiang',
            query: {
              id: news.id,
              title: news.title,
              content: news.content
            }
          }"
        >
          {{ news.title }}
        </RouterLink>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <router-view></router-view>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  defineOptions({
    name: 'NewsA'
  })
  import { reactive } from 'vue'
  const newsList = reactive([
    { id: '001', title: '新闻001', content: '新闻001的内容' },
    { id: '002', title: '新闻002', content: '新闻002的内容' },
    { id: '003', title: '新闻003', content: '新闻003的内容' },
    { id: '004', title: '新闻004', content: '新闻004的内容' }
  ])
</script>
  
  <style scoped>
  /* 新闻 */
  .news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  .news ul {
    margin-top: 30px;
    /* list-style: none; */
    padding-left: 10px;
  }
  .news li::marker {
    color: #64967E;
  }
  .news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
  }
  .news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
  }
  </style>