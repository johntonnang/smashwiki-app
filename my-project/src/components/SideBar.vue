<script>
  import { ref } from 'vue'
  export default {
    data() {
      return {
        expanded: ref(localStorage.getItem('expanded') === 'true')
      }
    },
    methods: {
      toggleMenu() {
        this.expanded = !this.expanded
        localStorage.setItem('expanded', this.expanded)
      }
    }
  }
</script>

<template>
  <aside :class="`${expanded && 'expanded'}`">
    <div class="logo">
      <img src="../assets/logo.svg" alt="smash-logo" />
    </div>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="toggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link class="button" to="/search/Anonymous">
        <span class="material-icons">search</span>
        <span class="text">Search</span>
      </router-link>
      <router-link class="button" to="/random">
        <span class="material-icons">casino</span>
        <span class="text">Random</span>
      </router-link>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
  aside {
    display: flex;
    flex-direction: column;
    background-color: var(--dark);
    color: var(--light);
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;
    transition: 0.2s ease-out;

    .logo {
      margin-bottom: 1rem;

      img {
        width: 2rem;
      }
    }

    .menu-toggle-wrap {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 1rem;
      position: relative;
      top: 0;
      transition: 0.2s ease-out;

      .menu-toggle {
        transition: 0.2s ease-out;

        .material-icons {
          font-size: 2rem;
          color: var(--light);
          transition: 0.2s ease-out;
        }

        &:hover {
          .material-icons {
            color: var(--primary);
            transform: translateX(0.2rem);
          }
        }
      }
    }

    h3,
    .button .text {
      opacity: 0;
      transition: 0.3s ease-out;
    }

    h3 {
      color: var(--grey);
      font-size: 1rem;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }

    .menu {
      margin: 0 -1rem;

      .button {
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0.5rem 1rem;
        transition: 0.2s ease-out;

        .material-icons {
          font-size: 2rem;
          color: var(--light);
          transition: 0.2s ease-out;
        }

        .text {
          color: var(--light);
          transition: 0.2s ease-out;
        }

        &:hover,
        &.router-link-exact-active {
          background-color: var(--dark-alt);

          .material-icons,
          .text {
            color: var(--primary);
          }
        }

        &.router-link-exact-active {
          border-right: 5px solid var(--primary);
        }
      }
    }

    &.expanded {
      width: var(--sidebar-width);

      .menu-toggle-wrap {
        top: -3rem;

        .menu-toggle {
          transform: rotate(-180deg);
        }
      }

      h3,
      .button .text {
        opacity: 1;
      }

      .button {
        .material-icons {
          margin-right: 1rem;
        }
      }
    }

    @media (max-width: 768px) {
      position: fixed;
      z-index: 100;
    }
  }
</style>
