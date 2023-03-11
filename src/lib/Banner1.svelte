<script>
  export let imageUrl = '/banner-盐焗鸡1170X750.png'


  function handleClick() {
    // 处理点击事件
  }
</script>

<div class="banner" style="background-image: url('{imageUrl}')">
  <div class="banner-content">
    <!-- <h1>{title}</h1> -->
    <!-- <p>{text}</p> -->
    <!-- <a href={buttonLink}>{buttonText}</a> -->
  </div>
</div>

<style>
  .banner {
    height: 300px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .banner-content {
    text-align: center;
    color: white;
  }





  @media screen and (max-width: 767px) {
    .banner {
      height: 200px;
    }


  }
</style>
