<template>
  <div class="boby">
    <div class="site-topbar">
      <div class="st-content">
        <div class="left">Welcome to our online store!</div>
        <div class="right">
          <div class="topbar-btn">
            <a href>English (USD)</a>
            <span> 丨 </span>
            <a href> login </a>
            <span>or</span>
            <a href> Register </a>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="main-header">
      <div class="row">
        <div class="col-lg-3 col-sm-4 col-md-3 col-xs-7 col-ts-12 header-element">
          <div class="logo">
            <a href="index.html">
              <img src="../assets/images/logo.png" alt="img" />
            </a>
          </div>
        </div>
        <div class="col-lg-7 col-sm-8 col-md-6 col-xs-5 col-ts-12">
          <div class="block-search-block">
            <form class="form-search form-search-width-category">
              <div class="form-content">
                <div class="category">
                  <select
                    title="cate"
                    data-placeholder="All Categories"
                    class="chosen-select"
                    tabindex="-1"
                    style="display: none;"
                  >
                    <option value="United States">Accessories</option>
                    <option value="United Kingdom">Chairs</option>
                    <option value="Afghanistan">Tables</option>
                    <option value="Aland Islands">Sofas</option>
                    <option value="Albania">New Arrivals</option>
                    <option value="Algeria">Storage</option>
                  </select>
                  <div
                    class="chosen-container chosen-container-single chosen-container-single-nosearch"
                    style="width: 154px;"
                    title="cate"
                  >
                    <a class="chosen-single" tabindex="-1">
                      <span>Accessories</span>
                      <div>
                        <b></b>
                      </div>
                    </a>
                    <div class="chosen-drop">
                      <div class="chosen-search">
                        <input type="text" autocomplete="off" readonly tabindex="1" />
                      </div>
                      <ul class="chosen-results"></ul>
                    </div>
                  </div>
                </div>
                <div class="inner">
                  <input type="text" class="input" name="s" value placeholder="Search here" />
                </div>
                <button class="btn-search" type="submit">
                  <span class="icon-search"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-2 col-sm-12 col-md-3 col-xs-12 col-ts-12">
          <div class="header-control">
            <div class="block-minicart vereesa-mini-cart block-header vereesa-dropdown">
              <a href="javascript:void(0);" class="shopcart-icon" data-vereesa="vereesa-dropdown">
                Cart
                <span class="count">0</span>
              </a>
              <div class="no-product vereesa-submenu">
                <p class="text">
                  You have
                  <span>0 item(s)</span>
                  in your bag
                </p>
              </div>
            </div>
            <div class="block-account block-header vereesa-dropdown">
              <a href="javascript:void(0);" data-vereesa="vereesa-dropdown">
                <i class="fa fa-user-o" aria-hidden="true"></i>
              </a>
              <div class="header-account vereesa-submenu">
                <div class="header-user-form-tabs">
                  <ul class="tab-link">
                    <li class="active">
                      <a data-toggle="tab" aria-expanded="true" href="#header-tab-login">Login</a>
                    </li>
                    <li>
                      <a data-toggle="tab" aria-expanded="true" href="#header-tab-rigister">Register</a>
                    </li>
                  </ul>
                  <div class="tab-container">
                    <div id="header-tab-login" class="tab-panel active">
                      <form method="post" class="login form-login">
                        <p class="form-row form-row-wide">
                          <input type="email" placeholder="Email" class="input-text" />
                        </p>
                        <p class="form-row form-row-wide">
                          <input type="password" class="input-text" placeholder="Password" />
                        </p>
                        <p class="form-row">
                          <label class="form-checkbox">
                            <input type="checkbox" class="input-checkbox" />
                            <span>Remember me</span>
                          </label>
                          <input type="submit" class="button" value="Login" />
                        </p>
                        <p class="lost_password">
                          <a href="#">Lost your password?</a>
                        </p>
                      </form>
                    </div>
                    <div id="header-tab-rigister" class="tab-panel">
                      <form method="post" class="register form-register">
                        <p class="form-row form-row-wide">
                          <input type="email" placeholder="Email" class="input-text" />
                        </p>
                        <p class="form-row form-row-wide">
                          <input type="password" class="input-text" placeholder="Password" />
                        </p>
                        <p class="form-row">
                          <input type="submit" class="button" value="Register" />
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a class="menu-bar mobile-navigation menu-toggle" href="#">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
.main-header{
  width: 1170px;
  height: 153px;
  padding: 50px 0;
  margin:auto;
}
.row{
  float: left;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

.site-topbar {
  height: 48px;
  background-color: #85b839;
}

.st-content {
  width: 1226px;
  margin: 0 auto;
  position: relative;
}

.st-content ul li {
  float: left;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  color: #ffffff;
}

.st-content li a {
  color: #ffffff;
}

.st-content li span {
  margin: 0 5px;
}

.st-content .right {
  position: absolute;
  right: 0;
  top: 0;
}

.st-content .right a,
.topbar-btn {
  color: #ffffff;
  font-size: 14px;
}

.topbar-btn {
  float: left;
  height: 48px;
  line-height: 48px;
}

.topbar-cart {
  background-color: #ffffff;
  padding: 0 10px;
  margin-left: 10px;
  position: relative;
}

.left {
  text-align: center;
  color: #ffffff;
  line-height: 48px;
  height: 48px;
  width: 400px;
}
</style>