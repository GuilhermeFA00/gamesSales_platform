<template>
    <header class="header-container bg-light w-100 border-bottom-light">
        <nav class="navbar container-full d-flex align-items-center mx-auto">
            <span class="navbar-logo d-flex align-items-center mr-auto">
                <i class="fas fa-bars menu-icon"></i>
            </span>
            <router-link class="navbar-logo d-flex align-items-center mr-auto" to="/">
                <img class="nav_logo" src="../assets/logo_nav.jpg" alt="">
            </router-link>
            <!--<div class="search-wrapper d-flex mr-auto">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="Search games,consoles and more...">
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>-->
            <ul class="navbar-nav d-flex mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/contacts"><i class="fas fa-mobile-alt"></i></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/login"><i class="fas fa-user"></i></router-link>
                </li>
            </ul>
            <div class="navbar-logo d-flex align-items-center mr-auto">
                <h1>FA Enterprises</h1>
            </div>
        </nav>
        <router-view/>
    </header>
</template>

<script>
export default {

}
</script>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

    :root {
        --main-color: #ffc240;
        --main-color-hover: #fead34;
        --main-color-rgba: rgba(255, 194, 64, 0.3);
        --dark-gray: #323332;
        --medium-gray: #ababaa;
        --light-gray: #f1f1f1;
        --white: #fff;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: "Roboto", sans-serif;
    }

    h1 {
        font-size: 2.25rem;
    }

    h5 {
        color: var(--medium-gray);
        text-transform: uppercase;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
        background: none;
        border: none;
        font-size: 0.75rem;
    }

    svg {
    display: block;
    }

    /* ---=== UTILITIES ===--- */

    .bg-light,
    .bg-light a {
        background: var(--white);
        color: var(--dark-gray);
    }

    .bg-dark,
    .bg-dark a {
        background: var(--dark-gray);
        color: var(--white);
    }

    .mx-auto {
        margin: auto;
    }

    .mr-auto {
        margin-right: auto;
    }

    .ml-auto {
        margin-left: auto;
    }

    .w-100 {
        width: 100%;
    }

    .h-100 {
        height: 100%;
    }

    .container-full {
        max-width: 1200px;
    }

    .position-relative {
        position: relative;
    }

    .position-absolute {
        position: absolute;
    }

    .d-flex {
        display: flex;
    }

    .row {
        flex-direction: row;
    }

    .column {
        flex-direction: column;
    }

    .align-items-center {
        align-items: center;
    }

    .justify-content-center {
        justify-content: center;
    }

    .justify-content-between {
        justify-content: space-between;
    }

    .justify-content-around {
        justify-content: space-around;
    }

    .justify-content-evenly {
        justify-content: space-evenly;
    }

    .border-white {
        border: 2px solid var(--white);
    }

    .border-light {
        border: 1px solid var(--light-gray);
    }

    .border-bottom-light {
        border-bottom: 1px solid var(--light-gray);
    }

    .border-top-light {
        border-top: 1px solid var(--light-gray);
    }

    .border-right-light {
        border-right: 1px solid var(--light-gray);
    }

    .border-left-light {
        border-left: 1px solid var(--light-gray);
    }

    .border-medium {
        border: 2px solid var(--medium-gray);
    }

    .border-dark {
        border: 2px solid var(--dark-gray);
    }

    .rounded-circle {
        border-radius: 50%;
    }

    .rounded-pill {
        border-radius: 3rem;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        opacity: 1;
    }
    .header-container {
        position: sticky;
        top: 0;
        z-index: 1010;
        max-height: 4.75rem;
    }

    .header-container .active {
        box-shadow: inset 0 -0.5rem 0 var(--main-color-rgba);
    }

    .navbar {
        padding: 0.75rem 0;
        font-size: 1rem;
        font-weight: 700;
    }

    .navbar-logo {
        padding: 0 0;
    }

    .navbar-nav{
        margin-left: 60px;
    }

    .nav-link {
        margin-right: 3.5rem;
    }

    .nav-link:hover {
        animation: hoverEffect 300ms ease-in-out;
        animation-fill-mode: forwards;
    }

    @keyframes hoverEffect {
        0% {
            box-shadow: inset 0 0 0 var(--main-color-rgba);
        }
        100% {
            box-shadow: inset 0 -0.5rem 0 var(--main-color-rgba);
        }
    }

    .nav-icon {
        padding: 0.5rem 1rem;
        padding-right: 0;
    }

    .menu-icon{
        color: #000000;
        cursor: pointer;
    }

    .nav_logo{
        width: 50px;
        height: 50px;
    }

    .search-wrapper{
        width: 30%;
    }

    .search {
        width: 100%;
        position: relative;
        display: flex;
    }

    .searchTerm {
        width: 100%;
        border: 3px solid #00B4CC;
        border-right: none;
        padding: 5px;
        height: 36px;
        border-radius: 5px 0 0 5px;
        outline: none;
        color: #9DBFAF;
    }

    .searchTerm:focus{
        color: #00B4CC;
    }

    .searchButton {
        width: 40px;
        height: 36px;
        border: 1px solid #00B4CC;
        background: #00B4CC;
        text-align: center;
        color: #fff;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        font-size: 20px;
    }

    .subtotal-price {
        color: var(--dark-gray);
    }

    .badge {
        width: 1rem;
        height: 1rem;
        background: var(--main-color);
        color: var(--dark-gray);
        font-size: 0.65rem;
        bottom: 5px;
        right: -5px;
    }   
    /*
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

    .container {
        width: 100%;
        position: relative;
        padding-right: 12px;
        padding-left: 12px;
        margin-right: auto;
        margin-left: auto;
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

    .header-search {
        -ms-flex-order: 0;
        order: 0;
        -ms-flex: 1 0 0px;
        flex: 1 0 0;
        margin-top: 0;
        padding: 0 24px;
    }

    .header-search {
        position: relative;
    }

    .col-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }

    @media (min-width: 768px){
        .d-md-block {
            display: block!important;
        }
    }

    .site-search {
        position: relative;
    }

    .header.header-redesign .searchRedesignTemplate .input-group {
        height: 40px;
        background: #f0f0f0 0 0 no-repeat padding-box;
    }

    .input-group {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-align: stretch;
        align-items: stretch;
        width: 100%;
    }

    .site-search .input-group-append {
        display: -ms-flexbox;
        display: flex;
    }

    .border-0 {
        border: 0!important;
    }

    .input-group-append {
        margin-left: -1px;
    }

    .input-group-append, .input-group-prepend {
        display: -ms-flexbox;
        display: flex;
    }

    .header.header-redesign .searchRedesignTemplate button.btn.btn-link {
        width: 40px;
        padding: 0;
        box-shadow: none;
    }

    .header #searchRedesignTemplate .search-field {
        color: #333!important;
        background-image: none;
        box-shadow: none;
        background-color: transparent!important;
        height: 40px!important;
        padding: 0;
        width: calc(100% - 75px);
        display: block;
        -ms-flex: none;
        flex: none;
    }
    
    .site-search input {
        padding: .675rem 2rem .675rem 3rem;
        font-size: .8125rem;
    }

    .border-0 {
        border: 0!important;
    }

    .form-control {
        display: block;
        width: 100%;
        height: 50px;
        padding: 1rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.2;
        color: #000;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #d9d9d9;
        border-radius: 0;
        box-shadow: none;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }

    [type=search] {
        outline-offset: -2px;
        -webkit-appearance: none;
    }
    */
</style>