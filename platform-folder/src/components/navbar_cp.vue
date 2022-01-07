<template>
    <nav class="navbar">
        <div class="menu-wrapper">
            <div class="header container header-redesign">
                <div class="row align-items-md-center align-header-row">
                    <div class="header-mobile-menu col-3">
                        <button class="navbar-toggler" type="button" aria-controls="sg-navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="hamburger-icon-redesign material-icons">menu</span>
                            <router-link to="/shop" class="hamburger-menu">Shop</router-link>
                        </button>
                    </div>
                    <div class="header-brand col-6 col-lg-auto">
                        <router-link to="/">
                            <img class="navbar-logo" src="../assets/logo_nav.jpg" alt="">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <router-view/>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
    *, :after, :before {
        box-sizing: border-box;
    }

    body {
    margin: 0;
    font-family: Open Sans,sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.2;
    color: #000;
    text-align: left;
    background-color: #f2f4f7;
    }

    article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
        display: block;
    }

    div {
        display: block;
    }

    img, svg {
    vertical-align: middle;
    }

    img {
        border-style: none;
    }

    button, select {
    text-transform: none;
    }

    button, input {
        overflow: visible;
    }

    @media (min-width: 1024px){
        .header {
            padding: 15px 24px;
        }
    }

    @media (min-width: 768px){
        .header {
            padding: 8px 12px;
        }
        .header {
            position: relative;
            box-shadow: 0 2px 2px rgb(0 0 0 / 15%);
            padding: 8px;
        }
    }

    @media (min-width: 1024px){
        .container {
            max-width: 1279px;
        }
    }

    @media (min-width: 768px){
        .container {
            max-width: 1023px;
        }
    }

    @media (min-width: 576px){
        .container {
            max-width: 767px;
        }
    }

    .container {
        width: 100%;
        padding-right: 12px;
        padding-left: 12px;
        margin-right: auto;
        margin-left: auto;
    }

    .header.header-redesign .align-header-row {
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }

    @media (min-width: 768px){
        .align-items-md-center {
            -ms-flex-align: center!important;
            align-items: center!important;
        }
    }

    .row {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -12px;
        margin-left: -12px;
    }

    @media (min-width: 1024px){
        .header.header-redesign .align-header-row .header-mobile-menu {
            padding-left: 8px;
        }
    }

    .header-mobile-menu {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }

    .navbar-toggler:not(:disabled):not(.disabled) {
        cursor: pointer;
    }

    .navbar-toggler {
        padding: 0;
        font-size: 1.25rem;
        line-height: 1;
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: 0;
    }

    .header.header-redesign .align-header-row .header-mobile-menu {
        -ms-flex: 0 0 0px;
        flex: 0 0 0;
        padding-right: 0;
        width: 38px;
    }

    @media (min-width: 1024px){
        .main-header-container.sticky-header-redesign .hamburger-icon-redesign {
            margin-bottom: -10px;
        }
    }

    .main-header-container.sticky-header-redesign .hamburger-icon-redesign {
        display: inline-block;
    }

    .material-icons.account, .material-icons.hamburger-icon-redesign, .material-icons.power-up, .material-icons.trade-in {
        font-size: 29px;
        color: #000;
    }

    .material-icons.account, .material-icons.hamburger-icon-redesign, .material-icons.power-up, .material-icons.trade-in {
        font-size: 29px;
        color: #000;
    }

    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-smoothing: antialiased;
    }

    .hamburger-menu {
        font-size: .75rem;
        font-weight: 600;
        color: #000;
        letter-spacing: -.04rem;
        text-decoration: none;
    }

    @media (min-width: 1024px){
        .header-brand {
            text-align: left;
        }
    }

    .header-brand {
    text-align: center;
}

    @media (min-width: 1024px){
        .col-lg-auto {
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: auto;
            max-width: 100%;
        }
    }

    .col-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    @media (min-width: 768px){
        .header-brand .nav-logo {
            height: auto;
        }
    }

    .header-brand .nav-logo {
        height: 1.625rem;
    }

    @media (min-width: 1024px){
        .header-brand img {
            width: 80px;
        }
    }
</style>