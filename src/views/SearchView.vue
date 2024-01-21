<script setup>
    import CategorySelect from '../components/CategorySelect.vue';
</script>

<template>
    <div class="container">
        <button
            type="button"
            class="browse-button"
        >
            Browse all
        </button>

        <div class="spacer"></div>

 <div class="grid-container">            
            <CategorySelect category="Podcasts" image="https://picsum.photos/id/40/300/300"/>
            <CategorySelect category="Audiobooks" image="https://picsum.photos/id/45/300/300"/>
            <CategorySelect category="Made For You" image="https://picsum.photos/id/76/300/300"/>
            <CategorySelect category="New Release" image="https://picsum.photos/id/56/300/300"/>
            <CategorySelect category="New Release" image="https://picsum.photos/id/25/300/300"/>
            <CategorySelect category="Podcasts" image="https://picsum.photos/id/103/300/300"/>
            <CategorySelect category="Audiobooks" image="https://picsum.photos/id/244/300/300"/>
            <CategorySelect category="Made For You" image="https://picsum.photos/id/202/300/300"/>
            <CategorySelect category="New Release" image="https://picsum.photos/id/101/300/300"/>
            <CategorySelect category="New Release" image="https://picsum.photos/id/120/300/300"/>
            <CategorySelect category="Podcasts" image="https://picsum.photos/id/40/300/300"/>
            <CategorySelect category="Audiobooks" image="https://picsum.photos/id/45/300/300"/>
            <CategorySelect category="Made For You" image="https://picsum.photos/id/76/300/300"/>
            <CategorySelect category="New Release" image="https://picsum.photos/id/56/300/300"/>
            <CategorySelect category="New Release" image="https://picsum.photos/id/25/300/300"/>
            <CategorySelect category="Podcasts" image="https://picsum.photos/id/103/300/300"/>
            <CategorySelect category="Audiobooks" image="https://picsum.photos/id/244/300/300"/>
            <CategorySelect category="Made For You" image="https://picsum.photos/id/202/300/300"/>
            <CategorySelect category="New Release" image="https://picsum.photos/id/101/300/300"/>
            <CategorySelect category="New Release" image="https://picsum.photos/id/120/300/300"/>
            <CategorySelect category="Podcasts" image="https://picsum.photos/id/40/300/300"/>
            <CategorySelect category="Audiobooks" image="https://picsum.photos/id/45/300/300"/>
            <CategorySelect category="Made For You" image="https://picsum.photos/id/76/300/300"/>
            <CategorySelect category="New Release" image="https://picsum.photos/id/56/300/300"/>
            <CategorySelect category="New Release" image="https://picsum.photos/id/25/300/300"/>
            <CategorySelect category="Podcasts" image="https://picsum.photos/id/103/300/300"/>
            <CategorySelect category="Audiobooks" image="https://picsum.photos/id/244/300/300"/>
            <CategorySelect category="Made For You" image="https://picsum.photos/id/202/300/300"/>
            <CategorySelect category="New Release" image="https://picsum.photos/id/101/300/300"/>
            <CategorySelect category="New Release" image="https://picsum.photos/id/120/300/300"/>
            <CategorySelect category="Podcasts" image="https://picsum.photos/id/40/300/300"/>
            <CategorySelect category="Audiobooks" image="https://picsum.photos/id/45/300/300"/>
            <CategorySelect category="Made For You" image="https://picsum.photos/id/76/300/300"/>
            <CategorySelect category="New Release" image="https://picsum.photos/id/56/300/300"/>
            <CategorySelect category="New Release" image="https://picsum.photos/id/25/300/300"/>
            <CategorySelect category="Podcasts" image="https://picsum.photos/id/103/300/300"/>
            <CategorySelect category="Audiobooks" image="https://picsum.photos/id/244/300/300"/>
            <CategorySelect category="Made For You" image="https://picsum.photos/id/202/300/300"/>
            <CategorySelect category="New Release" image="https://picsum.photos/id/101/300/300"/>
            <CategorySelect category="New Release" image="https://picsum.photos/id/120/300/300"/>
        </div>
    </div>
</template>

<style >

  .container {
    padding: 2rem;
    margin-top: 70px;
    margin-bottom: 100px;
    display: block;
}
  

  .browse-button {
    color: white;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    transition: underline 0.2s ease-in-out;
  }

  .browse-button:hover {
    text-decoration: underline;
  }


  .spacer {
    padding: 1.5rem 0;
  }


   .grid-container {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 75fr));
    gap: 1.5rem;
  }

  @media (min-width: 540px) {
    .grid-container {
      grid-template-columns: repeat(2, minmax(0, 1fr)); 
  }
  }
  @media (min-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (min-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(4, minmax(0, 1fr)); 
    }
  }

  @media (min-width: 1280px) {
    .grid-container {
      grid-template-columns: repeat(5, minmax(0, 1fr)); 
    }
  }
  
</style>
