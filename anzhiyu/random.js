var posts=["2024/05/09/Ajax/","2024/05/09/Html/","2024/05/09/CSS/","2024/05/09/JavaScript/","2024/05/09/Linux笔记/","2024/05/09/MySQL基础篇/","2024/05/09/Mybatis-Plus笔记/","2024/05/09/SQLserver基础篇/","2024/05/09/SpringBoot/","2024/05/06/SSM/","2024/05/06/SpringSecurity/","2024/05/09/TypeScript/","2024/05/09/Vue2-Vue3/","2024/05/09/redis基础篇/","2024/05/06/redis应用篇/","2024/05/09/webpack/","2024/05/02/归去来兮辞/","2024/05/09/docker笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };