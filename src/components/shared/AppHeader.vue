<template>
  <header>
    <div class="headerElements">
      <div class="mobileNavigation">
        <transition name="fade">
          <div
            class="pageBlur"
            v-if="mobileNavIsOpened"
            @click="toggleCheck()"
          ></div>
        </transition>
        <nav>
          <div id="menuToggle">
            <input
              type="checkbox"
              v-model="mobileNavIsOpened"
              @click="toggleCheck()"
            />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <li>
                <router-link to="/home" @click.native="toggleCheck()"
                  ><p>Home</p></router-link
                >
              </li>
              <li>
                <router-link to="/huurprijzen" @click.native="toggleCheck()"
                  ><p>Huurprijzen</p></router-link
                >
              </li>
              <ul class="dropdown">
                <li>
                  <router-link
                    to="/huurprijzen/dakdragers"
                    @click.native="toggleCheck()"
                    ><p>Dakdragers</p></router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/huurprijzen/dakkoffers"
                    @click.native="toggleCheck()"
                    ><p>Dakkoffers</p></router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/huurprijzen/fietsendragers"
                    @click.native="toggleCheck()"
                    ><p>Fietsendragers</p></router-link
                  >
                </li>
              </ul>
              <li>
                <router-link to="/reserveren" @click.native="toggleCheck()"
                  ><p>Reserveren</p></router-link
                >
              </li>
              <li>
                <router-link to="/contact" @click.native="toggleCheck()"
                  ><p>Contact</p></router-link
                >
              </li>
            </ul>
          </div>
        </nav>
        <div class="branding">
          <img
            src="@/assets/images/overig/koenigsegg.jpg"
            alt="Koenigsegg"
            v-on:click="navigate"
          />
        </div>
      </div>
      <div class="desktopNavigation">
        <div class="branding" v-on:click="navigate">
          <h1>Dakdragerverhuur.nl</h1>
        </div>
        <nav>
          <router-link to="/home"><p>Home</p></router-link>
          <div
            class="dropdown"
            @mouseenter="toggleHover"
            @mouseleave="toggleHover"
            @click="toggleHover"
          >
            <router-link to="/huurprijzen" class="drop"
              ><p class="drop">Huurprijzen <i class="arrow down"></i></p
            ></router-link>
            <div class="dropdown-content" v-if="dropdownIsOpened">
              <router-link to="/huurprijzen/dakdragers"
                ><p>Dakdragers</p></router-link
              >
              <router-link to="/huurprijzen/dakkoffers"
                ><p>Dakkoffers</p>
              </router-link>
              <router-link to="/huurprijzen/fietsendragers"
                ><p>Fietsendragers</p></router-link
              >
            </div>
          </div>
          <router-link to="/reserveren"><p>Reserveren</p></router-link>
          <router-link to="/contact"><p>Contact</p></router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import router from "../../router";

export default {
  name: "AppHeader",
  data() {
    return {
      mobileNavIsOpened: false,
      dropdownIsOpened: false,
    };
  },
  methods: {
    navigate: function() {
      router.push("home").catch(() => {});
    },
    toggleCheck() {
      this.mobileNavIsOpened = !this.mobileNavIsOpened;
    },
    toggleHover() {
      console.log("test");
      this.dropdownIsOpened = !this.dropdownIsOpened;
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

header {
  width: 100vw;
  height: 60px;
  box-shadow: 0px 0px 10px 0px;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.headerElements {
  width: 100%;
  height: 100%;

  .desktopNavigation {
    height: 100%;
    width: 100%;
    max-width: 1080px;
    position: relative;
    display: inline-flex;

    .branding {
      text-align: left;
      width: 25%;
      margin: auto 0;
      margin-left: 10px;

      h1 {
        cursor: pointer;
        width: 100%;
        font-size: 1em;
        text-transform: uppercase;
      }
    }

    nav {
      margin: auto 0;
      width: 50%;
      display: inline-flex;

      p {
        position: relative;
        margin: 0 auto;
        display: inline-block;
        padding: 0 10px;
        font-weight: bold;
      }

      a {
        width: 25%;
        height: 100%;
        justify-content: space-between;
        text-decoration: none;
        color: black;
        position: relative;
      }

      .dropdown-content {
        display: block;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;

        a {
          float: none;
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          text-align: left;

          p {
            font-weight: normal;
          }
        }
      }

      p:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 1.5px;
        left: 50%;
        position: absolute;
        background: black;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }
    }

    p:hover:after,
    .router-link-active p:after,
    .router-link-exact-active p:after {
      width: 100%;
      left: 0;
    }

    .dropdown {
      .drop {
        p:hover:after {
          pointer-events: none !important;
        }
      }
    }
  }

  .mobileNavigation {
    display: none;
  }
}

@media only screen and (max-width: 975px) {
  header {
    .headerElements {
      .desktopNavigation {
        .branding {
          width: 20%;
          h1 {
            font-size: 0.8em;
          }
        }
        nav {
          width: 60%;
        }
      }
    }
  }
}

@media only screen and (max-width: 850px) {
  header {
    .headerElements {
      .desktopNavigation {
        .branding {
          width: 15%;
          h1 {
            font-size: 0.7em;
          }
        }
        nav {
          width: 70%;
        }
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  header {
    .headerElements {
      .mobileNavigation {
        display: block;

        .pageBlur {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.8);
          z-index: 1;
        }

        #menuToggle {
          display: block;
          position: absolute;
          left: 20px;
          top: 20px;
          z-index: 2;

          -webkit-user-select: none;
          user-select: none;
        }

        #menuToggle a {
          text-decoration: none;
          color: black;

          transition: color 0.3s ease;
        }

        #menuToggle input {
          display: block;
          width: 40px;
          height: 32px;
          position: absolute;
          top: -7px;
          left: -5px;

          cursor: pointer;

          opacity: 0; /* hide this */
          z-index: 2; /* and place it over the hamburger */

          -webkit-touch-callout: none;
        }

        /*
 * Just a quick hamburger
 */
        #menuToggle span {
          display: block;
          width: 33px;
          height: 4px;
          margin-bottom: 5px;
          position: relative;

          background: black;
          border-radius: 3px;

          z-index: 1;

          transform-origin: 4px 0px;

          transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
            background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
        }

        #menuToggle span:first-child {
          transform-origin: 0% 0%;
        }

        #menuToggle span:nth-last-child(2) {
          transform-origin: 0% 100%;
        }

        /*
 * Transform all the slices of hamburger
 * into a crossmark.
 */
        #menuToggle input:checked ~ span {
          opacity: 1;
          transform: rotate(45deg) translate(-2px, -1px);
          background: black;
        }

        /*
 * But let's hide the middle one.
 */
        #menuToggle input:checked ~ span:nth-last-child(3) {
          opacity: 0;
          transform: rotate(0deg) scale(0.2, 0.2);
        }

        /*
 * Ohyeah and the last one should go the other direction
 */
        #menuToggle input:checked ~ span:nth-last-child(2) {
          transform: rotate(-45deg) translate(0, -1px);
        }

        /*
 * Make this absolute positioned
 * at the top left of the screen
 */
        #menu {
          position: absolute;
          width: 300px;
          height: calc(100vh + 80px);
          left: 50%;
          margin: -100px 0 0px -50px;
          padding: 50px;
          padding-top: 75px;

          background: white;
          list-style-type: none;
          -webkit-font-smoothing: antialiased;
          /* to stop flickering of text in safari */

          transform-origin: 0% 0%;
          transform: translate(-100%, 0);

          transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
        }

        #menu li {
          text-align: center;
          padding: 10px 0;
          font-size: 22px;

          p {
            color: black;
            text-decoration: none;
            font-weight: bold;
            margin: 0;

            display: inline-block;
            padding: 5px 20px;
            position: relative;
          }

          p:after {
            background: none repeat scroll 0 0 transparent;
            bottom: 0;
            content: "";
            display: block;
            height: 2px;
            left: 50%;
            position: absolute;
            background: black;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
          }

          .router-link-active p:after,
          .router-link-exact-active p:after {
            width: 100%;
            left: 0;
          }
        }

        .dropdown {
          list-style-type: none;
          padding: 0;
          li {
            padding: 5px 0 !important;
            p {
              font-weight: normal !important;
              font-size: 20px;
            }
          }
        }

        /*
 * And let's slide it in from the left
 */
        #menuToggle input:checked ~ ul {
          transform: none;
        }
      }

      .branding {
        display: flex;
        height: 60px;
        justify-content: center;
        align-items: center;
        img {
          width: 120px;
          cursor: pointer;
        }
      }

      .desktopNavigation {
        display: none;
      }
    }
  }
}

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin: 0 0 2px 0;
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
