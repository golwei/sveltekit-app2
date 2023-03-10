<script>
  //   export let src = ''
  let banimgs = ['banner-盐焗鸡1170X750.png', 'banner-鸡蛋1170X750.png']
  let imgs = [
    '产品-1（绿壳乌鸡蛋）1020X650.png',
    '产品-2（盐焗鸡五件套）1020X650.png',
    '产品-3（盐焗零食3件套）1020X650.png',
    '产品-4（盐焗零食4件套）1020X650.png',
  ]
</script>

<div class="flex flex-col">
  {#each imgs as i}
    <!-- Card 组件 -->
    <div class="card">
      <div class="card-image">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src="/{i}" alt="Image" />
      </div>
      <div class="card-content">
        <h2>{i.split("（")[0]}</h2>
        <p>关于{i.split("（")[0]}的产品描述111</p>
      </div>
    </div>
  {/each}
</div>

<!-- banner-盐焗鸡1170X750.png
banner-鸡蛋1170X750.png
bee.mp4
favicon.png
m1.png
m3.png
产品-1（绿壳乌鸡蛋）1020X650.png
产品-2（盐焗鸡五件套）1020X650.png
产品-3（盐焗零食3件套）1020X650.png
产品-4（盐焗零食4件套）1020X650.png -->
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
