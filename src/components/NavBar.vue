<template>
  <div id="navbar" class="mont">
    <div class="list-centered">
      <ul class="navbar-list flex flex-centered flex-wrap">
        <li v-for="item in navItems" :key="item.text" class="flex flex-centered">
          <router-link :to="item.route">{{item.text}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    data: function () {
      return {
        navItems: [{
            text: 'Home',
            route: '/'
          },
          {
            text: 'Academics',
            route: '/academics'
          },
          {
            text: 'Activities',
            route: '/activities'
          },
          {
            text: 'Campus',
            route: '/campus'
          },
          {
            text: 'Faculty',
            route: '/faculty'
          },
          {
            text: 'Admissions',
            route: '/admissions'
          },
          {
            text: 'About',
            route: '/about'
          },
          {
            text: 'Contact',
            route: '/contact'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  #navbar {
    background-color: $background;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-weight: 700;
    width: 100%;
    top: 0px;
    font-size: 0.9em;
    border-bottom: 1px solid #e3e3e3;
    position: absolute;
    z-index: 2;
  }

  .list-centered {
    text-align: center;
  }

  .navbar-list {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      height: $nav-height;
      margin-bottom: 0;
      padding: 1em 1.25em;
      position: relative;
      z-index: 3;

      a {
        position: relative;
        color: $text;
        text-decoration: none;
        white-space: nowrap;
        cursor: pointer;

        &:after {
          position: absolute;
          right: 0;
          left: 0;
          bottom: -3px;
          content: "";
          display: none;
          height: 2px;
          background: $root;
        }

        &:hover:after {
          display: block;
        }
      }
    }
  }
</style>