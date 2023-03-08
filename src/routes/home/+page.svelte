<script>
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

<div class="container p-2 overflow-hidden bg-white h-screen">
  <Banner />

  <TabGroup justify="justify-around">
    <Tab bind:group={tabSet} name="tab1" value={0}>鸡场实况</Tab>
    <Tab bind:group={tabSet} name="tab2" value={1}>产品介绍</Tab>
  </TabGroup>
  <!-- <div class="">
    <div
      class="card card-hover p-1 h-40 w-80"
      style="background-image: url('https://192.168.1.22:2015/m1.png')"
    />
  </div> -->
  <div class="flex justify-center p-2">
    <!-- <Avatar src='https://192.168.1.22:2015/m1.png' width='w-80'  rounded='rounded-xl' border="border-4 border-surface-300-600-token hover:!border-primary-500" cursor="cursor-pointer" /> -->
    {#if tabSet == 1}
      <div class="flex justify-center bg-white p-1">
        <Card src="/m3.png" />
      </div>
    {:else}
      <!-- svelte-ignore a11y-media-has-caption -->
      <video class="h-60 w-80" controls>
        <source src="/bee.mp4" type="video/mp4" />
      </video>
    {/if}
  </div>
</div>

<!-- <div class="">
  <Video />
</div> -->

<!-- <div class="">
  <Product />
</div> -->
