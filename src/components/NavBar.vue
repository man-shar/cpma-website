<template>
  <div id="navbar" class="mont">
    <div class="list-centered">
      <ul class="navbar-list">
        <li v-for="item in navItems" :key="item.text">
          <a>
            {{item.text}}
          </a>
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
            text: 'General Information',
            route: 'general'
          },
          {
            text: 'Infrastructure',
            route: 'infrastructure'
          },
          {
            text: 'Academics',
            route: 'academics'
          },
          {
            text: 'Activities',
            route: 'activities'
          },
          {
            text: 'Contact Us',
            route: 'contact-us'
          },
          {
            text: 'Ambition',
            route: 'ambition'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  #navbar {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-weight: 700;
    width: 100%;
    top: 0px;
    font-size: 0.9em;
    border-bottom: 1px solid #e3e3e3;
  }

  .list-centered {
    text-align: center;
  }

  .navbar-list {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      height: 85px;
      margin-bottom: 0;
      padding: 1em 1.25em;
      position: relative;
      z-index: 3;

      a {
        position: relative;
        color: $text;
        line-height: 85px;
        text-decoration: none;
        white-space: nowrap;
        bottom: 10px;
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