<template>
    <div class="hp-main">
        <div class="main-advertising-container">
            <div class="main-advertising-row">
                <div class="main-advertising-col">
                    <div class="main-advertising-asset">
                        <div class="main-advertising-container">
                            <div class="main-advertising">
                                <div class="main-advertising-container">
                                    <div class="main-advertising-card">
                                        <div class="main-advertising-image">
                                            <div>
                                                <picture>
                                                    <img src="https://media.gamestop.com/i/gamestop/RainbowSixExtraction_POWrapper_Desktop_2x.webp" alt="" width="1324px" height="108px">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-advertising-container">
            <div class="main-advertising-row">
                <div class="main-advertising-col">
                    <div class="main-advertising-asset">
                        <div class="main-advertising-container">
                            <div class="d-flex justify-content-between">
                                <div class="main-advertising-container d-flex justify-content-between">
                                    <div class="main-advertising-card">
                                        <div class="main-advertising-image">
                                            <div>
                                                <picture>
                                                    <img src="https://media.gamestop.com/i/gamestop/Homepage_Pokemon_Legends_Arceus_596x400_2Up_Feature_D.webp" alt="" width="632" height="408px">
                                                </picture>
                                            </div>
                                        </div>
                                        <p class="main-advertising-card-title">Pokémon Legends Arceus</p>
                                        <p class="main-advertising-card-subtitle">Sign in and obtain pre-order now</p>
                                    </div>
                                    <div class="main-advertising-card">
                                        <div class="main-advertising-image">
                                            <div>
                                                <picture>
                                                    <img src="https://media.gamestop.com/i/gamestop/Homepage_RainbowSixExtraction_596x400_2Up_Feature_D.webp" alt="" width="632px" height="408px">
                                                </picture>
                                            </div>
                                        </div>
                                        <p class="main-advertising-card-title">Rainbow Six Collection</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-advertising-container">
            <div class="main-advertising-row">
                <div class="main-advertising-col">
                    <div class="main-advertising-asset">
                        <div class="main-advertising-container">
                            <div class="main-adversiting">
                                <div class="main-advertising-container">
                                    <div >
                                        <div class="product-content-info">
                                            <h2 style="max-width: 100%;text-align: center;">Top Sellers</h2>
                                        </div>
                                        <div class="carousel-sample-products slick-slider" style="visibility: visible">
                                            <div class="slick-list .justify-content-between .d-flex">
                                                <div class="slick-track .justify-content-between .d-flex" style="opacity: 1; width: 1230px; transform: translate3d(-205px, 0px, 0px);">
                                                    <div class="main-advertising-card slick-slider slick-active" style="width: 181px; margin: 0 12px;">
                                                        <div class="carousel-images d-flex">
                                                             <carousel :items-to-show="1.5">
                                                                <slide v-for="image in images" :key="image">
                                                                    <img :src="require(`../assets/${image}.jpg`)" alt="" width="108px" height="108px" />
                                                                </slide>

                                                                <template #addons>
                                                                    <navigation />
                                                                    <pagination />
                                                                </template>
                                                            </carousel> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import {Slide, Navigation, Pagination, Carousel} from 'vue3-carousel';
export default {
    components:{
        Slide,
        Navigation,
        Pagination,
        Carousel
    },

    setup(){
        const images = ["ci01", "ci02", "ci03", "ci04", "ci05", "ci06"];

        return{
            images
        }
    }
}
</script>

<style>
    .d-flex {
        display: flex;
    }

    .justify-content-between {
        justify-content: space-between;
    }

    .hp-main{
        background-color: white;
        overflow: hidden;
    }

    .main-advertising-container{
        max-width: unset;
        width: 100%;
        padding-right: 12px;
        padding-left: 12px;
        margin-right: auto;
        margin-left: auto;
    }

    .main-advertising-row{
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -12px;
        margin-left: -12px
    }

    .main-advertising-col{
        flex: 0 0 100%;
        max-width: 100%;
        padding: 0;
        cursor: pointer;
    }

    .main-advertising{
        background-color: #FAE132;
        position: relative;
        padding-bottom: 0!important;
        margin-bottom: 15px;
        padding: 0 0 1rem;
        margin-top: 16px;
        margin-right: auto;
        margin-left: auto;
    }

    .main-advertising-card-title{
        line-height: 20px;
        font-size: 1rem;
        font-weight: 600;
        margin: 8px 0 0;
    }

    .main-advertising-card-subtitle{
        cursor: pointer;
        line-height: 20px;
        font-size: .875rem;
        font-weight: 400;
        margin: 12px 0 0;
    }

    .slick-slider {
        position: relative;
        box-sizing: border-box;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        user-select: none;
        touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;
    }

    .slick-list{
        position: relative;
        overflow: hidden;
        margin: 0;
        padding: 0;
        transform: translateZ(0);
    }

    .slick-track {
        position: relative;
        left: 0;
        top: 0;
        padding-bottom: 0;
        display: flex;
        -ms-flex-direction: row;
        flex-direction: row;
    }

    .carousel__slide img {
        height: 108px;
        width: 108px;
    }
</style>