<template>
  <div class="movie-search">
    <div class="status">
      Search Page.
    </div>
    <div class="message_1">
      Search for a movie on the page.
    </div>
    <div class="message_2">
      검색 페이지에서 영화검색을 해주세요.
    </div>
  </div>
</template>


<style lang="scss" scoped>
.movie-search {
  line-height: 1.2;
  text-align: center;
  font-family: "Oswald", sans-serif;
  padding: 80px 20px;
  .status {
    font-size: 110px;
    color: $primary;
    margin-bottom: 30px;
  }
  .message_1 {
    font-size: 30px;
    color: $gray-300;
  }
  .message_2 {
    font-size: 20px;
    color: $gray-500;
  }
}

</style>