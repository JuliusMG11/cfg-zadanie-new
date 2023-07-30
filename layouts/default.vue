<template>
    <div class="page relative">
         <div class="bg-image fixed">
            <img src="@/assets/img/background.jpg" alt="">
        </div>
        <PartialsHeader />
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.page {
    width: 100%;
    position: relative;
    min-height: 100vh;
    height: 100%;
}


.bg-image {
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(6,0,68,1) 0%, rgba(6,0,68,0.3169467616148022) 100%); 
  }
}

</style>
