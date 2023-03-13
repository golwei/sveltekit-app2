<script>
  import AppBar from '$lib/Bar.svelte'
  import { AppShell } from '@skeletonlabs/skeleton'
  import { TabGroup, Tab } from '@skeletonlabs/skeleton'
  import Card from '$lib/Card.svelte'
  import Video from '$lib/Video.svelte'
  import Product from '$lib/Product.svelte'
  import Banner from '$lib/Banner1.svelte'
  // tables 数据
  let tabSet = 0
  let products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of product 1',
      price: 19.99,
      image: 'https://example.com/product-1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of product 2',
      price: 29.99,
      image: 'https://example.com/product-2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of product 3',
      price: 39.99,
      image: 'https://example.com/product-3.jpg',
    },
  ]
</script>

<AppBar />
<div class="container p-2 overflow-hidden bg-white h-full">
  <Banner />

  <TabGroup justify="justify-around">
    <Tab bind:group={tabSet} name="tab1" value={0}>鸡场实况</Tab>
    <Tab bind:group={tabSet} name="tab2" value={1}>产品介绍</Tab>
  </TabGroup>
  <!-- <div class="">
    <div
      class="card card-hover p-1 h-40 w-80"
      style="background-image: url('https://198.52.117.216:5173/m1.png')"
    />
  </div> -->
  <div class="flex justify-center p-2">
    <!-- <Avatar src='https://198.52.117.216:5173/m1.png' width='w-80'  rounded='rounded-xl' border="border-4 border-surface-300-600-token hover:!border-primary-500" cursor="cursor-pointer" /> -->
    {#if tabSet == 1}
      <div class="flex justify-center bg-white p-1">
        <Card />
      </div>
    {:else}
      <div class="">
        <div class="">农场1</div>
        <div class="">
          <!-- svelte-ignore a11y-media-has-caption -->
          <video class="h-60 w-80" controls>
            <source src="/bee.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    {/if}
  </div>
</div>

<!-- <div class="">
  <Video />
</div> -->

<!-- <div class="">
  <Product />
</div> -->
<!-- 
banner-盐焗鸡1170X750.png
banner-鸡蛋1170X750.png
bee.mp4
favicon.png
m1.png
m3.png
产品-1（绿壳乌鸡蛋）1020X650.png
产品-2（盐焗鸡五件套）1020X650.png
产品-3（盐焗零食3件套）1020X650.png
产品-4（盐焗零食4件套）1020X650.png 
-->
