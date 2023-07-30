<script setup lang="ts">
  const isScrolled = ref(false);
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
  };
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
</script>

<template>
  <div :class="{ 'scrolled': isScrolled }" class="navigation fixed">
    <div class="container mx-auto">
        <div class="navigation-section flex  justify-between">
             <div class="logo">
                <img src="@/assets/img/logo.png" alt="">
            </div>
            <nav>
                <ul class="pl-0 flex gap-8 items-center">
                    <li>
                        <NuxtLink to="/">
                            Formulář
                        </NuxtLink>    
                    </li>
                    <li>
                        <NuxtLink to="/dashboard">
                            Dashboard
                        </NuxtLink> 
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.navigation {
    width: 100%;
    padding: 16px;
    z-index: 10;
    transition: all ease .3s;

    a {
        font-size: 22px;
        color: $color-white;
        font-weight: 700;

        &:hover {
            color: $color-primary;
        }
    }

    ul {
        justify-content: flex-end;
    }
    @media (max-width: 560px) {
        padding-left: 0px;
        padding-right: 0px;

        .navigation-section {
            flex-direction: column;
        }

        ul {
            justify-content: flex-start;
        }

        nav {
            padding-top: 16px;
        }
    }
}

.logo {
    width: 200px;
    height: auto;
    bottom: 16px;
    left: 16px;
    z-index: 2;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media (max-width: 560px) {
        width: 120px;
    }
}

.scrolled {
  background-color: rgba(6, 0, 68, 0.83);;
  transition: all ease .3s;
}

</style>