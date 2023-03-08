<script>
 export let src = ''
</script>

<!-- Card 组件 -->
<div class="card">
  <div class="card-image">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img {src} alt="Image" />
  </div>
  <div class="card-content">
    <h2>商品1</h2>
    <p>金枪乱舞</p>
  </div>
</div>

<style>
  /* Card 样式 */
  .card {
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    margin: 10px;
    max-width: 300px;
  }

  /* 图片样式 */
  .card-image {
    position: relative;
    padding: 0;
  }

  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Card 内容样式 */
  .card-content {
    padding: 20px;
  }

  .card-content h2 {
    margin: 0;
  }
</style>
