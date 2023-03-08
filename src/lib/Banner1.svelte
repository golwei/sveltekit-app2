<script>
  export let imageUrl = '/m3.png'
  export let title = '一个非常高级的标题'
  export let text = '和一段文字'
  export let buttonLink = ''
  export let buttonText = '点我'

  function handleClick() {
    // 处理点击事件
  }
</script>

<div class="banner" style="background-image: url('{imageUrl}')">
  <div class="banner-content">
    <h1>{title}</h1>
    <p>{text}</p>
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

  h1 {
    font-size: 48px;
    margin: 0;
  }

  p {
    font-size: 24px;
    margin: 20px 0;
  }

  a {
    display: inline-block;
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
  }

  @media screen and (max-width: 767px) {
    .banner {
      height: 200px;
    }

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 16px;
      margin: 10px 0;
    }

    a {
      padding: 8px 16px;
    }
  }
</style>
