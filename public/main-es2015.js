(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n\r\n        <!-- Begin page -->\r\n        <div id=\"wrapper\">\r\n\r\n            <!-- Topbar Start -->\r\n            <div class=\"navbar-custom\">\r\n                <ul class=\"list-unstyled topnav-menu float-right mb-0\">\r\n\r\n                    <li class=\"d-none d-sm-block\">\r\n                        <form class=\"app-search\">\r\n                            <div class=\"app-search-box\">\r\n                                <div class=\"input-group\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"btn\" type=\"submit\">\r\n                                            <i class=\"fe-search\"></i>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </li>\r\n        \r\n                    <li class=\"dropdown notification-list\">\r\n                        <a class=\"nav-link dropdown-toggle  waves-effect\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"false\" aria-expanded=\"false\">\r\n                            <i class=\"fe-bell noti-icon\"></i>\r\n                            <span class=\"badge badge-danger rounded-circle noti-icon-badge\">5</span>\r\n                        </a>\r\n                        <div class=\"dropdown-menu dropdown-menu-right dropdown-lg\">\r\n\r\n                            <!-- item-->\r\n                            <div class=\"dropdown-item noti-title\">\r\n                                <h5 class=\"m-0 text-white\">\r\n                                    <span class=\"float-right\">\r\n                                        <a href=\"\" class=\"text-light\">\r\n                                            <small>Clear All</small>\r\n                                        </a>\r\n                                    </span>Notification\r\n                                </h5>\r\n                            </div>\r\n\r\n                            <div class=\"slimscroll noti-scroll\">\r\n\r\n                                <!-- item-->\r\n                                <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item active\">\r\n                                    <div class=\"notify-icon\">\r\n                                        <img src=\"assets/images/users/user-1.jpg\" class=\"img-fluid rounded-circle\" alt=\"\" /> </div>\r\n                                    <p class=\"notify-details\">Cristina Pride</p>\r\n                                    <p class=\"text-muted mb-0 user-msg\">\r\n                                        <small>Hi, How are you? What about our next meeting</small>\r\n                                    </p>\r\n                                </a>\r\n\r\n                                <!-- item-->\r\n                                <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                                    <div class=\"notify-icon bg-primary\">\r\n                                        <i class=\"mdi mdi-comment-account-outline\"></i>\r\n                                    </div>\r\n                                    <p class=\"notify-details\">Caleb Flakelar commented on Admin\r\n                                        <small class=\"text-muted\">1 min ago</small>\r\n                                    </p>\r\n                                </a>\r\n\r\n                                <!-- item-->\r\n                                <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                                    <div class=\"notify-icon\">\r\n                                        <img src=\"assets/images/users/user-4.jpg\" class=\"img-fluid rounded-circle\" alt=\"\" /> </div>\r\n                                    <p class=\"notify-details\">Karen Robinson</p>\r\n                                    <p class=\"text-muted mb-0 user-msg\">\r\n                                        <small>Wow ! this admin looks good and awesome design</small>\r\n                                    </p>\r\n                                </a>\r\n\r\n                                <!-- item-->\r\n                                <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                                    <div class=\"notify-icon bg-warning\">\r\n                                        <i class=\"mdi mdi-account-plus\"></i>\r\n                                    </div>\r\n                                    <p class=\"notify-details\">New user registered.\r\n                                        <small class=\"text-muted\">5 hours ago</small>\r\n                                    </p>\r\n                                </a>\r\n\r\n                                <!-- item-->\r\n                                <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                                    <div class=\"notify-icon bg-info\">\r\n                                        <i class=\"mdi mdi-comment-account-outline\"></i>\r\n                                    </div>\r\n                                    <p class=\"notify-details\">Caleb Flakelar commented on Admin\r\n                                        <small class=\"text-muted\">4 days ago</small>\r\n                                    </p>\r\n                                </a>\r\n\r\n                                <!-- item-->\r\n                                <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                                    <div class=\"notify-icon bg-secondary\">\r\n                                        <i class=\"mdi mdi-heart\"></i>\r\n                                    </div>\r\n                                    <p class=\"notify-details\">Carlos Crouch liked\r\n                                        <b>Admin</b>\r\n                                        <small class=\"text-muted\">13 days ago</small>\r\n                                    </p>\r\n                                </a>\r\n                            </div>\r\n\r\n                            <!-- All-->\r\n                            <a href=\"javascript:void(0);\" class=\"dropdown-item text-center text-primary notify-item notify-all\">\r\n                                View all\r\n                                <i class=\"fi-arrow-right\"></i>\r\n                            </a>\r\n\r\n                        </div>\r\n                    </li>\r\n\r\n                    <li class=\"dropdown notification-list\">\r\n                        <a class=\"nav-link dropdown-toggle nav-user mr-0 waves-effect\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"false\" aria-expanded=\"false\">\r\n                            <img src=\"assets/images/users/user-1.jpg\" alt=\"user-image\" class=\"rounded-circle\">\r\n                            <span class=\"pro-user-name ml-1\">\r\n                                Marcia J. <i class=\"mdi mdi-chevron-down\"></i> \r\n                            </span>\r\n                        </a>\r\n                        <div class=\"dropdown-menu dropdown-menu-right profile-dropdown \">\r\n                            <!-- item-->\r\n                            <div class=\"dropdown-item noti-title\">\r\n                                <h5 class=\"m-0 text-white\">\r\n                                    Welcome !\r\n                                </h5>\r\n                            </div>\r\n\r\n                            <!-- item-->\r\n                            <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                                <i class=\"fe-user\"></i>\r\n                                <span>My Account</span>\r\n                            </a>\r\n\r\n                            <!-- item-->\r\n                            <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                                <i class=\"fe-settings\"></i>\r\n                                <span>Settings</span>\r\n                            </a>\r\n\r\n                            <!-- item-->\r\n                            <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                                <i class=\"fe-lock\"></i>\r\n                                <span>Lock Screen</span>\r\n                            </a>\r\n\r\n                            <div class=\"dropdown-divider\"></div>\r\n\r\n                            <!-- item-->\r\n                            <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                                <i class=\"fe-log-out\"></i>\r\n                                <span>Logout</span>\r\n                            </a>\r\n\r\n                        </div>\r\n                    </li>\r\n\r\n                    <li class=\"dropdown notification-list\">\r\n                        <a href=\"javascript:void(0);\" class=\"nav-link right-bar-toggle waves-effect\">\r\n                            <i class=\"fe-settings noti-icon\"></i>\r\n                        </a>\r\n                    </li>\r\n\r\n\r\n                </ul>\r\n\r\n                <!-- LOGO -->\r\n                <div class=\"logo-box\">\r\n                    <a href=\"index.html\" class=\"logo text-center\">\r\n                        <span class=\"logo-lg\">\r\n                            <img src=\"assets/images/logo-light.png\" alt=\"\" height=\"24\">\r\n                            <!-- <span class=\"logo-lg-text-light\">Upvex</span> -->\r\n                        </span>\r\n                        <span class=\"logo-sm\">\r\n                            <!-- <span class=\"logo-sm-text-dark\">X</span> -->\r\n                            <img src=\"assets/images/logo-sm.png\" alt=\"\" height=\"28\">\r\n                        </span>\r\n                    </a>\r\n                </div>\r\n\r\n                <ul class=\"list-unstyled topnav-menu topnav-menu-left m-0\">\r\n                    <li>\r\n                        <button class=\"button-menu-mobile waves-effect\">\r\n                            <span></span>\r\n                            <span></span>\r\n                            <span></span>\r\n                        </button>\r\n                    </li>\r\n        \r\n                    <li class=\"dropdown d-none d-lg-block\">\r\n                        <a class=\"nav-link dropdown-toggle waves-effect\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"false\" aria-expanded=\"false\">\r\n                            Reports\r\n                            <i class=\"mdi mdi-chevron-down\"></i> \r\n                        </a>\r\n                        <div class=\"dropdown-menu\">\r\n                            <!-- item-->\r\n                            <a href=\"javascript:void(0);\" class=\"dropdown-item\">\r\n                                Finance Report\r\n                            </a>\r\n\r\n                            <!-- item-->\r\n                            <a href=\"javascript:void(0);\" class=\"dropdown-item\">\r\n                                Monthly Report\r\n                            </a>\r\n\r\n                            <!-- item-->\r\n                            <a href=\"javascript:void(0);\" class=\"dropdown-item\">\r\n                                Revenue Report\r\n                            </a>\r\n\r\n                            <!-- item-->\r\n                            <a href=\"javascript:void(0);\" class=\"dropdown-item\">\r\n                                Settings\r\n                            </a>\r\n\r\n                            <!-- item-->\r\n                            <a href=\"javascript:void(0);\" class=\"dropdown-item\">\r\n                                Help & Support\r\n                            </a>\r\n\r\n                        </div>\r\n                    </li>\r\n\r\n                    <li class=\"dropdown dropdown-mega d-none d-lg-block\">\r\n                        <a class=\"nav-link dropdown-toggle waves-effect\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"false\" aria-expanded=\"false\">\r\n                            Mega Menu\r\n                            <i class=\"mdi mdi-chevron-down\"></i> \r\n                        </a>\r\n                        <div class=\"dropdown-menu dropdown-megamenu\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-8\">\r\n                        \r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <h5 class=\"text-dark mt-0\">UI Components</h5>\r\n                                            <ul class=\"list-unstyled megamenu-list mt-2\">\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\">Widgets</a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\">Nestable List</a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\">Range Sliders</a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\">Masonry Items</a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\">Sweet Alerts</a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\">Treeview Page</a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\">Tour Page</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-4\">\r\n                                            <h5 class=\"text-dark mt-0\">Applications</h5>\r\n                                            <ul class=\"list-unstyled megamenu-list mt-2\">\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\">Email Pages</a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\">Profile</a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\">Calendar</a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\">Team Contacts</a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\">Maintenance</a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\">Coming Soon Page</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-4\">\r\n                                            <h5 class=\"text-dark mt-0\">Layouts</h5>\r\n                                            <ul class=\"list-unstyled megamenu-list mt-2\">\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\">Small Sidebar</a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\">Light Sidebar</a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\">Dark Topbar</a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\">Preloader</a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\">Sidebar Collapsed</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"text-center mt-3\">\r\n                                        <h3 class=\"text-dark\">Launching Discount Sale!</h3>\r\n                                        <p class=\"font-16\">Save up to 55% off.</p>\r\n                                        <button class=\"btn btn-primary mt-1\">Download Now <i class=\"mdi mdi-arrow-right-bold-outline ml-1\"></i></button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- end Topbar -->\r\n\r\n            <!-- ========== Left Sidebar Start ========== -->\r\n            \r\n\r\n                        <app-sidenev></app-sidenev>\r\n\r\n                 \r\n\r\n            <!-- ============================================================== -->\r\n            <!-- Start Page Content here -->\r\n            <!-- ============================================================== -->\r\n\r\n            <div class=\"content-page\">\r\n                <div class=\"content\">\r\n\r\n                    <!-- Start Content-->\r\n                    <div class=\"container-fluid\">\r\n                        \r\n                        <router-outlet></router-outlet>\r\n                        \r\n                    </div> <!-- container -->\r\n\r\n                </div> <!-- content -->\r\n\r\n                <!-- Footer Start -->\r\n                <footer class=\"footer\">\r\n                    <div class=\"container-fluid\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                2019 &copy; PMS by <a href=\"\">Innostes Solutions</a> \r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"text-md-right footer-links d-none d-sm-block\">\r\n                                    <a href=\"javascript:void(0);\">About Us</a>\r\n                                    <a href=\"javascript:void(0);\">Help</a>\r\n                                    <a href=\"javascript:void(0);\">Contact Us</a>\r\n                                </div>\r\n                            </div> \r\n                        </div>\r\n                    </div>\r\n                </footer>\r\n                <!-- end Footer -->\r\n\r\n            </div>\r\n\r\n            <!-- ============================================================== -->\r\n            <!-- End Page content -->\r\n            <!-- ============================================================== -->\r\n\r\n\r\n        </div>\r\n        <!-- END wrapper -->\r\nx");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>footer works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidenev/sidenev.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidenev/sidenev.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- ========== Left Sidebar Start ========== -->\r\n <!-- <div class=\"left side-menu\">\r\n    <button type=\"button\" class=\"button-menu-mobile button-menu-mobile-topbar open-left waves-effect\">\r\n        <i class=\"ion-close\"></i>\r\n    </button>\r\n\r\n    <div class=\"left-side-logo d-block d-lg-none\">\r\n        <div class=\"text-center\">\r\n            \r\n            <a href=\"index.html\" class=\"logo\"><img src=\"assets/images/logo.png\" height=\"20\" alt=\"logo\"></a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto; height: 567px;\"><div class=\"sidebar-inner slimscrollleft\" style=\"overflow: hidden; width: auto; height: 567px;\">\r\n        \r\n        <div id=\"sidebar-menu\">\r\n            <ul>\r\n                <li class=\"menu-title\">Main</li>\r\n\r\n                <li>\r\n                    <a routerLink=\"/\" class=\"waves-effect\">\r\n                        <i class=\"dripicons-meter\"></i>\r\n                        <span> Home</span>\r\n                    </a>\r\n                </li>\r\n\r\n                <li class=\"has_sub nav-active\" [class]=\"!router.closed?'has_sub nav-active':has_sub\" (click)=\"toggleMenu(router)\" *ngFor=\"let router of routes\">\r\n                    <a class=\"waves-effect\"><i class=\"dripicons-briefcase\"></i> <span> {{router.name}} </span> <span class=\"menu-arrow float-right\"><i class=\"mdi mdi-chevron-right\"></i></span></a>\r\n                    <ul class=\"list-unstyled\" >\r\n                        <li><a [routerLink]=\"child.path\" *ngFor=\"let child of router.children\">{{child.name}}</a></li>\r\n                    </ul>\r\n                </li>\r\n                \r\n\r\n\r\n            </ul>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div><div class=\"slimScrollBar\" style=\"background: rgb(158, 165, 171); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 356.418px;\"></div><div class=\"slimScrollRail\" style=\"width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;\"></div></div> \r\n</div> -->\r\n<div class=\"left-side-menu\">\r\n\r\n    <div class=\"slimscroll-menu\">\r\n\r\n        <!--- Sidemenu -->\r\n        <div id=\"sidebar-menu\">\r\n<ul class=\"metismenu\" id=\"side-menu\">\r\n\r\n    <li class=\"menu-title\">Navigation</li>\r\n\r\n    <li (click)=\"toggleMenu(router)\" *ngFor=\"let router of routes\">\r\n        <a [class]=\"!router.closed?'active':''\">\r\n            <i class=\"la la-dashboard\"></i>\r\n            <!-- <span class=\"badge badge-info badge-pill float-right\">2</span> -->\r\n            <span> {{router.name}} </span>\r\n        </a>\r\n        <ul class=\"nav-second-level\" aria-expanded=\"false\" *ngIf=\"!router.closed\">\r\n            <li>\r\n               <a [routerLink]=\"child.path\" *ngFor=\"let child of router.children\">{{child.name}}</a>\r\n            </li>\r\n        </ul>\r\n    </li>\r\n\r\n    \r\n</ul>\r\n\r\n</div>\r\n<!-- End Sidebar -->\r\n\r\n<div class=\"clearfix\"></div>\r\n\r\n</div>\r\n<!-- Sidebar -left -->\r\n\r\n</div>\r\n<!-- Left Sidebar End -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/top-profile/top-profile.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/top-profile/top-profile.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>top-profile works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agreements/agreements-add/agreements-add.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agreements/agreements-add/agreements-add.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n   <h3>Agreement</h3>\r\n   <div class=\"col-12\">\r\n      <div class=\"card m-b-30\">\r\n         <div class=\"card-body\">\r\n            <div class=\"row\">\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>City </label>\r\n\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['city']\" placeholder=\"Enter City\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Date </label>\r\n\r\n                  <input type=\"date\" class=\"form-control\" [(ngModel)]=\"agreementArray['date']\" placeholder=\"Enter Date\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Month And Year </label>\r\n                  <input type=\"date\" class=\"form-control\" [(ngModel)]=\"agreementArray['monthYear']\"\r\n                     placeholder=\"Enter Month And year\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Name 1</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['name1']\" placeholder=\"Select Name1\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Address 1</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['address1']\" placeholder=\"Select Address 1\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Son of 1</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['sonOf1']\" placeholder=\"Select Son of1\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>leasor Age 1</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['leasorAge1']\"\r\n                     placeholder=\"Select leasor Age1\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Name 2</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['name2']\" placeholder=\"Select Name2\">\r\n               </div>\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Address 2</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['address2']\" placeholder=\"Select Address2\">\r\n               </div>\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Son of 2</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['sonOf2']\" placeholder=\"Select Son of2\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>leasor Age 2</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['leasorAge2']\"\r\n                     placeholder=\"Select leasor Age2\">\r\n               </div>\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Name 3</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['name3']\" placeholder=\"Select Name3\">\r\n               </div>\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Address 3</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['address3']\" placeholder=\"Select Address 3\">\r\n               </div>\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Son of 3</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['sonOf3']\" placeholder=\"Select Son of3\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>leasor Age 3</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['leasorAge3']\"\r\n                     placeholder=\"Select leasor Age3\">\r\n               </div>\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Lessor Email Address</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['lessorEmailAddress']\"\r\n                     placeholder=\"Select Lessor Email Address\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Lessee Email Address</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['lesseeEmailAddress']\"\r\n                     placeholder=\"Select Lessee Email Address\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Term Years</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['termYears']\" placeholder=\"Select Term Years\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Lessee Term</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['lesseeTerm']\"\r\n                     placeholder=\"Select Lessee Term\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Lessor Term</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['lessorTerm']\"\r\n                     placeholder=\"Select Lessor Term\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Lessor Lock in Period Months</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['lessorLockinPeriodMonths']\"\r\n                     placeholder=\"Select Lessor Lock in Period Months\">\r\n               </div>\r\n\r\n               <!-- <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n    <label>Lessor Lock in Period Months</label>\r\n    <input  class=\"form-control\" [(ngModel)]=\"agreementArray['lessorLockinPeriodMonths']\" placeholder=\"Select Lessor Lock in Period Months\">\r\n </div> -->\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Fixed Rend Amount</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['fixedRendAmount']\"\r\n                     placeholder=\"Select Fixed Rend Amount\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Fixed Rent Start Date</label>\r\n                  <input type=\"date\" class=\"form-control\" [(ngModel)]=\"agreementArray['fixedRentStartDate']\"\r\n                     placeholder=\"Select Fixed Rent Start Date\">\r\n               </div>\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Completion Year</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['completionYear']\"\r\n                     placeholder=\"Select Completion Year\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Increment Percentage</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['incrementPercentage']\"\r\n                     placeholder=\"Select Increment Percentage\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Grace Start Date</label>\r\n                  <input type=\"date\" class=\"form-control\" [(ngModel)]=\"agreementArray['graceStartDate']\"\r\n                     placeholder=\"Select Grace Start Date\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Grace End Date</label>\r\n                  <input type=\"date\" class=\"form-control\" [(ngModel)]=\"agreementArray['graceEndDate']\"\r\n                     placeholder=\"Select Grace End Date\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Security Deposit</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['securityDeposit']\"\r\n                     placeholder=\"Select Security Deposit\">\r\n               </div>\r\n\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Termination Months</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['terminationMonths']\"\r\n                     placeholder=\"Select Termination Months\">\r\n               </div>\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Governing City</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['governingCity']\"\r\n                     placeholder=\"Governing City\">\r\n               </div>\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Property Address and Description</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['PropertyAddressandDescription']\"\r\n                     placeholder=\"Property Address and Description\">\r\n               </div>\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Number of Units</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['noOfUnits']\" placeholder=\"Number of Units\">\r\n               </div>\r\n               <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                  <label>Amenites Provided by Lessor</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"agreementArray['amenitiesByLessor']\"\r\n                     placeholder=\"Amenites Provided by Lessor\">\r\n               </div>\r\n\r\n\r\n\r\n               <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                  <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\"\r\n                     (click)=\"submit()\">Submit</button>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agreements/agreements-details/agreements-details.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agreements/agreements-details/agreements-details.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row breadcrum\">\r\n    <div class=\"col-sm-12\">\r\n        \r\n        <div class=\"row pull-right\">\r\n\r\n        \r\n        <button (click)=\"toggleStatus(agreement.id,0)\" *ngIf=\"agreement['isAvailable']==1\" class=\"btn btn-info\"><i class=\"fa fa-eye\"></i>Make InActive</button>\r\n        <button (click)=\"toggleStatus(agreement.id,1)\" *ngIf=\"agreement['isAvailable']==0\" class=\"btn btn-info\"><i class=\"fa fa-eye-slash\"></i>Make Active</button>\r\n        <button  (click)=\"edit(agreement)\" class=\"btn btn-info\"><i class=\"fa fa-edit\"></i>Edit</button>\r\n        <button  (click)=\"delete(agreement)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i>Delete</button>\r\n    </div>\r\n    <h5 class=\"page-title\">agreement List</h5>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n          \r\n              \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>User Id</label>\r\n          <span>{{agreement['userId']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Property Id</label>\r\n          <span>{{agreement['propertyId']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>User Type</label>\r\n          <span>{{agreement['userType']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Photo</label>\r\n          <span>{{agreement['photo']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>From Date</label>\r\n          <span>{{agreement['fromDate']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>To Date</label>\r\n          <span>{{agreement['toDate']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <span>{{agreement['isAvailable']}}</span>\r\n        </div>\r\n\r\n          \r\n          </div>\r\n  \r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n  \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agreements/agreements-edit/agreements-edit.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agreements/agreements-edit/agreements-edit.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">agreement</a></li>\r\n                <li class=\"breadcrumb-item \">Update</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">agreement Update</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-12\" [formGroup]=\"agreementForm\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n            \r\n<!-- <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>User Id</label>\r\n<input class=\"form-control\" formControlName=\"userId\" placeholder=\"Enter User Id\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"agreementForm.controls['userId'].invalid && (agreementForm.controls['userId'].dirty || agreementForm.controls['userId'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter user id          </small>\r\n</div> -->\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Property Id</label>\r\n<input class=\"form-control\" formControlName=\"propertyId\" placeholder=\"Enter Property Id\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"agreementForm.controls['propertyId'].invalid && (agreementForm.controls['propertyId'].dirty || agreementForm.controls['propertyId'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter property id          </small>\r\n</div>\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>User Type</label>\r\n<input class=\"form-control\" formControlName=\"userType\" placeholder=\"Enter User Type\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"agreementForm.controls['userType'].invalid && (agreementForm.controls['userType'].dirty || agreementForm.controls['userType'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter user type          </small>\r\n</div>\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Photo</label>\r\n<input class=\"form-control\" formControlName=\"photo\" placeholder=\"Enter Photo\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"agreementForm.controls['photo'].invalid && (agreementForm.controls['photo'].dirty || agreementForm.controls['photo'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter photo          </small>\r\n</div>\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>From Date</label>\r\n<input class=\"form-control\" formControlName=\"fromDate\" placeholder=\"Enter From Date\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"agreementForm.controls['fromDate'].invalid && (agreementForm.controls['fromDate'].dirty || agreementForm.controls['fromDate'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter from date          </small>\r\n</div>\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>To Date</label>\r\n<input class=\"form-control\" formControlName=\"toDate\" placeholder=\"Enter To Date\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"agreementForm.controls['toDate'].invalid && (agreementForm.controls['toDate'].dirty || agreementForm.controls['toDate'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter to date          </small>\r\n</div>\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Is Available</label>\r\n<input class=\"form-control\" formControlName=\"isAvailable\" placeholder=\"Enter Is Available\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"agreementForm.controls['isAvailable'].invalid && (agreementForm.controls['isAvailable'].dirty || agreementForm.controls['isAvailable'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter is available          </small>\r\n</div>\r\n\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!agreementForm.valid\"  (click)=\"submit(agreementForm.value)\">Submit</button>\r\n        </div>\r\n    </div>\r\n </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agreements/agreements-list/agreements-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agreements/agreements-list/agreements-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">agreement</a></li>\r\n                <li class=\"breadcrumb-item \">List</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">agreement List</h4>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n<div class=\"col-lg-12\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n\r\n    <h4 class=\"mt-0 header-title\">List of agreement</h4>\r\n   <p>&nbsp;</p>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-striped mb-0\">\r\n            <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th>Id</th>\r\n                    <th>Actions</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let items of json;let i=index\">\r\n                    <th scope=\"row\">#{{i+1}}</th>\r\n                    <td>{{items.id}}</td>\r\n                    <td><i class=\"fa fa-eye\" (click)=\"details(items)\"></i> view</td>\r\n                </tr>\r\n                <tr *ngIf=\"!json.length\">\r\n                    <td colspan=\"4\" style=\"text-align: center;\">No Items found to display</td>\r\n                </tr>\r\n            \r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n</div>\r\n</div> <!-- end col -->\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/amenities/amenities-add/amenities-add.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/amenities/amenities-add/amenities-add.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"col-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"page-title-right\">\r\n                        <ol class=\"breadcrumb m-0\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">amenities</a></li>\r\n                            <li class=\"breadcrumb-item \">Add</li>\r\n                        </ol>\r\n                    </div>\r\n                    <h4 class=\"page-title\">amenities Add</h4>\r\n                </div>\r\n            </div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-12\" [formGroup]=\"amenitiesForm\">\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                        \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Name</label>\r\n          <input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"amenitiesForm.controls['name'].invalid && (amenitiesForm.controls['name'].dirty || amenitiesForm.controls['name'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter name          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Icon</label>\r\n        <!--  <input class=\"form-control\" formControlName=\"icon\" placeholder=\"Enter Icon\">-->\r\n          <select class='form-control' formControlName=\"icon\" placeholder=\"Enter Icon\">\r\n            <option value=\"\">Select Icon</option>\r\n            <option *ngFor=\"let items of icons\" [value]=\"items['icon']\">{{items['icon']}}</option></select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"amenitiesForm.controls['icon'].invalid && (amenitiesForm.controls['icon'].dirty || amenitiesForm.controls['icon'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter icon          </small>\r\n        </div>\r\n\r\n                <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          \r\n          <select class=\"form-control\" formControlName=\"isAvailable\">\r\n            <option value=\"\">Select Is Available</option>\r\n            <option value=\"1\">Yes</option>\r\n            <option value=\"0\">No</option>\r\n          </select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"amenitiesForm.controls['isAvailable'].invalid && (amenitiesForm.controls['isAvailable'].dirty || amenitiesForm.controls['isAvailable'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please select is available          </small>\r\n        </div>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                        <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!amenitiesForm.valid\"  (click)=\"submit(amenitiesForm.value)\">Submit</button>\r\n                    </div>\r\n                </div>\r\n             </div>\r\n        </div>\r\n     </div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/amenities/amenities-details/amenities-details.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/amenities/amenities-details/amenities-details.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row breadcrum\">\r\n    <div class=\"col-sm-12\">\r\n        \r\n        <div class=\"row pull-right\">\r\n\r\n        \r\n        <button (click)=\"toggleStatus(amenities.id,0)\" *ngIf=\"amenities['isAvailable']==1\" class=\"btn btn-info\"><i class=\"fa fa-eye\"></i>Make InActive</button>\r\n        <button (click)=\"toggleStatus(amenities.id,1)\" *ngIf=\"amenities['isAvailable']==0\" class=\"btn btn-info\"><i class=\"fa fa-eye-slash\"></i>Make Active</button>\r\n        <button  (click)=\"edit(amenities)\" class=\"btn btn-info\"><i class=\"fa fa-edit\"></i>Edit</button>\r\n        <button  (click)=\"delete(amenities)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i>Delete</button>\r\n    </div>\r\n    <h5 class=\"page-title\">amenities List</h5>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n          \r\n              \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Name</label>\r\n          <span>{{amenities['name']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Icon</label>\r\n          <span>{{amenities['icon']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <span>{{amenities['isAvailable']}}</span>\r\n        </div>\r\n\r\n          \r\n          </div>\r\n  \r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n  \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/amenities/amenities-edit/amenities-edit.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/amenities/amenities-edit/amenities-edit.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"col-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"page-title-right\">\r\n                        <ol class=\"breadcrumb m-0\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">amenities</a></li>\r\n                            <li class=\"breadcrumb-item \">Update</li>\r\n                        </ol>\r\n                    </div>\r\n                    <h4 class=\"page-title\">amenities Update</h4>\r\n                </div>\r\n            </div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-12\" [formGroup]=\"amenitiesForm\">\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                        \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Name</label>\r\n          <input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"amenitiesForm.controls['name'].invalid && (amenitiesForm.controls['name'].dirty || amenitiesForm.controls['name'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter name          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Icon</label>\r\n          <select class='form-control' formControlName=\"icon\" placeholder=\"Enter Icon\">\r\n            <option value=\"\">Select Icon</option>\r\n            <option *ngFor=\"let items of icons\" [value]=\"items['icon']\">{{items['icon']}}</option></select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"amenitiesForm.controls['icon'].invalid && (amenitiesForm.controls['icon'].dirty || amenitiesForm.controls['icon'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter icon          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <input class=\"form-control\" formControlName=\"isAvailable\" placeholder=\"Enter Is Available\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"amenitiesForm.controls['isAvailable'].invalid && (amenitiesForm.controls['isAvailable'].dirty || amenitiesForm.controls['isAvailable'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter is available          </small>\r\n        </div>\r\n\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                        <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!amenitiesForm.valid\"  (click)=\"submit(amenitiesForm.value)\">Submit</button>\r\n                    </div>\r\n                </div>\r\n             </div>\r\n        </div>\r\n     </div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/amenities/amenities-list/amenities-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/amenities/amenities-list/amenities-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div class=\"col-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"page-title-right\">\r\n                        <ol class=\"breadcrumb m-0\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">amenities</a></li>\r\n                            <li class=\"breadcrumb-item \">List</li>\r\n                        </ol>\r\n                    </div>\r\n                    <h4 class=\"page-title\">amenities List</h4>\r\n                </div>\r\n            </div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n\r\n                <h4 class=\"mt-0 header-title\">List of amenities</h4>\r\n               <p>&nbsp;</p>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-striped mb-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>name</th>\r\n                                <th>icon</th>\r\n                                <th>Actions</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let items of json;let i=index\">\r\n                                <th scope=\"row\">#{{i+1}}</th>\r\n                                <td>{{items.name}}</td>\r\n                                <td>{{items.icon}}</td>\r\n                                <td><i class=\"fa fa-eye\" (click)=\"details(items)\"></i> view</td>\r\n                            </tr>\r\n                            <tr *ngIf=\"!json.length\">\r\n                                <td colspan=\"4\" style=\"text-align: center;\">No Items found to display</td>\r\n                            </tr>\r\n                        \r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> <!-- end col -->\r\n\r\n\r\n</div>\r\n\r\n\r\n \r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToOwner/assign-property-to-owner-add/assign-property-to-owner-add.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToOwner/assign-property-to-owner-add/assign-property-to-owner-add.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">assignPropertyToOwner</a></li>\r\n                <li class=\"breadcrumb-item \">Add</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">assignPropertyToOwner Add</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngFor=\"let items of assignPropertyToOwner; let in = index;\">\r\n    <!-- assign propery to owner -->\r\n    <div class=\"col-12\">\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                        <label>Owner ID</label>\r\n\r\n                        <select class=\"form-control\" [(ngModel)]=\"assignPropertyToOwner[in]['ownerId']\"\r\n                            placeholder=\"Select Owner\">\r\n                            <option value=\"\">Select Owner</option>\r\n                            <option value=\"newOwner\">Create Owner</option>\r\n                            <option *ngFor=\"let item of owners\" [value]=\"item['_id']\">{{item['name']}}</option>\r\n                        </select>\r\n\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                        <label>Property ID</label>\r\n                        <input class=\"form-control\" [(ngModel)]=\"assignPropertyToOwner[in]['propertyId']\" placeholder=\"Enter Property Id\">\r\n                        <!-- <select class=\"form-control\" [(ngModel)]=\"assignPropertyToOwner[in]['propertyId']\">\r\n                            <option [value]=\"\">Select Property</option>\r\n                            <option *ngFor=\"let items of unitsArray\" [value]=\"items['propertyId']\">{{items['propertyId']}}</option>\r\n                        </select> -->\r\n\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                        <label>Unit ID</label>\r\n\r\n                        <select class=\"form-control\" [(ngModel)]=\"assignPropertyToOwner[in]['unitId']\">\r\n                            <option [value]=\"\">Select Unit</option>\r\n                            <option *ngFor=\"let items of unitsArray\" [value]=\"items['_id']\">{{items['unitDetails']}}</option>\r\n                        </select>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- create owner -->        \r\n        <div class=\"col-12\" *ngIf=\"items['ownerId']=='newOwner'\">\r\n            <h3>Create Owner</h3>\r\n            <div class=\"card m-b-30\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row\">\r\n        \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Name</label>\r\n                    <input class=\"form-control\" [(ngModel)]=\"ownerArray[in]['name']\" placeholder=\"Enter Name\">\r\n                  </div>\r\n        \r\n        \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Email</label>\r\n                    <input class=\"form-control\" [(ngModel)]=\"ownerArray[in]['email']\" placeholder=\"Enter Email\">\r\n                  </div>\r\n        \r\n        \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Mobile Number</label>\r\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"ownerArray[in]['mobileNumber']\" placeholder=\"Enter Mobile Number\">\r\n                  </div>\r\n        \r\n        \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Current Address</label>\r\n                    <input class=\"form-control\" [(ngModel)]=\"ownerArray[in]['currentAddress']\" placeholder=\"Enter Current Address\">\r\n                  </div>\r\n        \r\n        \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Documents Upload</label>\r\n                    <input class=\"form-control\" [(ngModel)]=\"ownerArray[in]['documentsUpload']\" type=\"file\"\r\n                      placeholder=\"Enter Documents Upload\" (change)=\"changeListenerDocument($event)\">\r\n                    <img [src]=\"document\" *ngIf=\"document\" style=\"width: 150px;margin: 10px;\">\r\n                  </div>\r\n        \r\n        \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Owner Photo</label>\r\n                    <input class=\"form-control\" [(ngModel)]=\"ownerArray[in]['ownerPhoto']\" type=\"file\" placeholder=\"Enter Owner Photo\"\r\n                      (change)=\"changeListenerPhoto($event)\">\r\n                    <img [src]=\"image\" *ngIf=\"image\" style=\"width: 150px;margin: 10px;\">\r\n                  </div>\r\n        \r\n        \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Background Verification Status</label>\r\n                    <!-- <input class=\"form-control\" formControlName=\"backgroundVerificationStatus\" placeholder=\"Enter Background Verification Status\"> -->\r\n                    <select class=\"form-control\" [(ngModel)]=\"ownerArray[in]['backgroundVerificationStatus']\">\r\n                      <option value=\"\">Select Status</option>\r\n                      <option value=\"done\">Done</option>\r\n                      <option value=\"pending\">Pending</option>\r\n                      <option value=\"rejected\">Rejected</option>\r\n                    </select>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n        \r\n            </div>\r\n        </div>\r\n\r\n        <!-- create bank account -->        \r\n        <div class=\"col-12\" *ngIf=\"items['ownerId']=='newOwner'\">\r\n            <h3>Bank Account</h3>\r\n            <div class=\"card m-b-30\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Bank Name</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"bankAccountArray[in]['bankName']\" placeholder=\"Enter Bank Name\">\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Bank Address</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"bankAccountArray[in]['bankAddress']\" placeholder=\"Enter Bank Address\">\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Account Number</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"bankAccountArray[in]['accountNumber']\" type=\"number\"\r\n                                placeholder=\"Enter Account Number\">\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Ifsc Code</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"bankAccountArray[in]['ifscCode']\" placeholder=\"Enter Ifsc Code\">\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>MMID</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"bankAccountArray[in]['mmid']\" type=\"number\" placeholder=\"Enter MMID\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n<div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n    <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" (click)=\"submitFinal()\">get final data</button>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToOwner/assign-property-to-owner-details/assign-property-to-owner-details.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToOwner/assign-property-to-owner-details/assign-property-to-owner-details.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row breadcrum\">\r\n    <div class=\"col-sm-12\">\r\n        \r\n        <div class=\"row pull-right\">\r\n\r\n        \r\n        <button (click)=\"toggleStatus(assignPropertyToOwner.id,0)\" *ngIf=\"assignPropertyToOwner['isAvailable']==1\" class=\"btn btn-info\"><i class=\"fa fa-eye\"></i>Make InActive</button>\r\n        <button (click)=\"toggleStatus(assignPropertyToOwner.id,1)\" *ngIf=\"assignPropertyToOwner['isAvailable']==0\" class=\"btn btn-info\"><i class=\"fa fa-eye-slash\"></i>Make Active</button>\r\n        <button  (click)=\"edit(assignPropertyToOwner)\" class=\"btn btn-info\"><i class=\"fa fa-edit\"></i>Edit</button>\r\n        <button  (click)=\"delete(assignPropertyToOwner)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i>Delete</button>\r\n    </div>\r\n    <h5 class=\"page-title\">assignPropertyToOwner List</h5>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n          \r\n              \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Owner ID</label>\r\n          <span>{{assignPropertyToOwner['ownerId']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Property ID</label>\r\n          <span>{{assignPropertyToOwner['propertyId']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Unit ID</label>\r\n          <span>{{assignPropertyToOwner['unitId']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <span>{{assignPropertyToOwner['isAvailable']}}</span>\r\n        </div>\r\n\r\n          \r\n          </div>\r\n  \r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n  \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToOwner/assign-property-to-owner-edit/assign-property-to-owner-edit.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToOwner/assign-property-to-owner-edit/assign-property-to-owner-edit.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">assignPropertyToOwner</a></li>\r\n                <li class=\"breadcrumb-item \">Update</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">assignPropertyToOwner Update</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-12\" [formGroup]=\"assignPropertyToOwnerForm\">\r\n    <div class=\"card m-b-30\">\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n                \r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n    <label>Owner ID</label>\r\n    \r\n    <select class=\"form-control\" formControlName=\"ownerId\">\r\n        <option [value]=\"\">Select Owner</option>\r\n        <option *ngFor=\"let items of owners\" [value]=\"items['_id']\">{{items['name']}}</option>   \r\n        </select>\r\n    <small class=\"form-text text-muted invalid-data\"\r\n    *ngIf=\"assignPropertyToOwnerForm.controls['ownerId'].invalid && (assignPropertyToOwnerForm.controls['ownerId'].dirty || assignPropertyToOwnerForm.controls['ownerId'].touched)\"\r\n    class=\"invalid-data\">\r\n    Please enter owner id          </small>\r\n    </div>\r\n    \r\n        \r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n    <label>Property ID</label>\r\n    \r\n    <select class=\"form-control\" formControlName=\"propertyId\">\r\n        <option [value]=\"\">Select Property</option>\r\n        <option *ngFor=\"let items of properties\" [value]=\"items['_id']\">{{items['name']}}</option>   \r\n        </select>\r\n    <small class=\"form-text text-muted invalid-data\"\r\n    *ngIf=\"assignPropertyToOwnerForm.controls['propertyId'].invalid && (assignPropertyToOwnerForm.controls['propertyId'].dirty || assignPropertyToOwnerForm.controls['propertyId'].touched)\"\r\n    class=\"invalid-data\">\r\n    Please enter property id          </small>\r\n    </div>\r\n    \r\n        \r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n    <label>Unit ID</label>\r\n    \r\n    <select class=\"form-control\" formControlName=\"unitId\">\r\n        <option [value]=\"\">Select Unit</option>\r\n        <option *ngFor=\"let items of units\" [value]=\"items['_id']\">{{items['unitDetails']}}</option>   \r\n        </select>\r\n    <small class=\"form-text text-muted invalid-data\"\r\n    *ngIf=\"assignPropertyToOwnerForm.controls['unitId'].invalid && (assignPropertyToOwnerForm.controls['unitId'].dirty || assignPropertyToOwnerForm.controls['unitId'].touched)\"\r\n    class=\"invalid-data\">\r\n    Please enter unit id          </small>\r\n    </div>\r\n    \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n    <label>Is Available</label>\r\n    \r\n    <select class=\"form-control\" formControlName=\"isAvailable\">\r\n    <option [value]=\"\">Select Is Available</option>\r\n    <option [value]=\"1\">Yes</option>\r\n    <option [value]=\"0\">No</option>\r\n    </select>\r\n    <small class=\"form-text text-muted invalid-data\"\r\n    *ngIf=\"assignPropertyToOwnerForm.controls['isAvailable'].invalid && (assignPropertyToOwnerForm.controls['isAvailable'].dirty || assignPropertyToOwnerForm.controls['isAvailable'].touched)\"\r\n    class=\"invalid-data\">\r\n    Please select is available          </small>\r\n    </div>\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!assignPropertyToOwnerForm.valid\"  (click)=\"submit(assignPropertyToOwnerForm.value)\">Submit</button>\r\n            </div>\r\n        </div>\r\n     </div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToOwner/assign-property-to-owner-list/assign-property-to-owner-list.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToOwner/assign-property-to-owner-list/assign-property-to-owner-list.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">assignPropertyToOwner</a></li>\r\n                <li class=\"breadcrumb-item \">List</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">assignPropertyToOwner List</h4>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n<div class=\"col-lg-12\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n\r\n    <h4 class=\"mt-0 header-title\">List of assignPropertyToOwner</h4>\r\n   <p>&nbsp;</p>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-striped mb-0\">\r\n            <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th>Owner ID</th>\r\n                    <th>Property ID</th>\r\n                    <th>Actions</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let items of json;let i=index\">\r\n                    <th scope=\"row\">#{{i+1}}</th>\r\n                    <td>{{items.ownerId}}</td>\r\n                    <td>{{items.propertyId}}</td>\r\n                    <td><i class=\"fa fa-eye\" (click)=\"details(items)\"></i> view</td>\r\n                </tr>\r\n                <tr *ngIf=\"!json.length\">\r\n                    <td colspan=\"4\" style=\"text-align: center;\">No Items found to display</td>\r\n                </tr>\r\n            \r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n</div>\r\n</div> <!-- end col -->\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-add/assign-property-to-tenant-add.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-add/assign-property-to-tenant-add.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Tenant add -->\r\n<div>\r\n    <div class=\"col-12\">\r\n        <div class=\"page-title-box\">\r\n            <div class=\"page-title-right\">\r\n                <ol class=\"breadcrumb m-0\">\r\n                    <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">tenant</a></li>\r\n                    <li class=\"breadcrumb-item active\">Add</li>\r\n                </ol>\r\n            </div>\r\n            <h4 class=\"page-title\">tenant Add</h4>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n            <label>Property</label>\r\n            <select class='form-control' [(ngModel)]=\"property\" placeholder=\"Enter Property\"\r\n                (change)=\"changeProperty()\">\r\n                <option value=\" \">Select Property</option>\r\n                <option *ngFor=\"let items of properties\" [value]=\"items['_id']\">{{items['name']}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n            <label>Units</label>\r\n            <select class='form-control' [(ngModel)]=\"unit\" placeholder=\"Enter Unit\">\r\n                <option value=\" \">Select Unit</option>\r\n                <option *ngFor=\"let items of units\" [value]=\"items['_id']\">{{items['unitDetails']}}</option>\r\n            </select>\r\n        </div>\r\n        <!-- tenant create form starts here -->\r\n        <div class=\"col-12\" *ngIf=\" property && unit\">\r\n            <div class=\"card m-b-30\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Name</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"tenantArray['name']\" placeholder=\"Enter Name\">\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Email</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"tenantArray['email']\" placeholder=\"Enter Email\">\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Mobile Number</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"tenantArray['mobileNumber']\" type=\"number\"\r\n                                placeholder=\"Enter Mobile Number\">\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Current Address</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"tenantArray['currentAddress']\"\r\n                                placeholder=\"Enter Current Address\">\r\n        \r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Documents Upload</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"tenantArray['documentsUpload']\" type=\"file\"\r\n                                placeholder=\"Enter Documents Upload\" (change)=\"changeListenerDocument($event)\">\r\n                            <img [src]=\"document\" *ngIf=\"document\" style=\"width: 150px;margin: 10px;\">\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Tenant Photo</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"tenantArray['tenantPhoto']\" type=\"file\"\r\n                                placeholder=\"Enter Tenant Photo\" (change)=\"changeListenerPhoto($event)\">\r\n                            <img [src]=\"image\" *ngIf=\"image\" style=\"width: 150px;margin: 10px;\">\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Agreement Type</label>\r\n                            <!-- <input class=\"form-control\" formControlName=\"agreementType\" placeholder=\"Enter Agreement Type\"> -->\r\n                            <select class=\"form-control\" [(ngModel)]=\"tenantArray['agreementType']\">\r\n                                <option value=\"\">Select Agreement Type</option>\r\n                                <option value=\"fixed\">Fixed</option>\r\n                                <option value=\"monthly\">Monthly</option>\r\n                            </select>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Background Verification Status</label>\r\n                            <!-- <input class=\"form-control\" formControlName=\"backgroundVerificationStatus\" placeholder=\"Enter Background Verification Status\"> -->\r\n                            <select class=\"form-control\" [(ngModel)]=\"tenantArray['backgroundVerificationStatus']\">\r\n                                <option value=\"\">Select Status</option>\r\n                                <option value=\"done\">Done</option>\r\n                                <option value=\"pending\">Pending</option>\r\n                                <option value=\"rejected\">Rejected</option>\r\n                            </select>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- bank account form starts here -->\r\n        <div class=\"col-12\" *ngIf=\" property && unit\">\r\n            <h3>Bank Account</h3>\r\n            <div class=\"card m-b-30\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Bank Name</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"bankAccountArray['bankName']\" placeholder=\"Enter Bank Name\">\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Bank Address</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"bankAccountArray['bankAddress']\" placeholder=\"Enter Bank Address\">\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Account Number</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"bankAccountArray['accountNumber']\" type=\"number\"\r\n                                placeholder=\"Enter Account Number\">\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Ifsc Code</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"bankAccountArray['ifscCode']\" placeholder=\"Enter Ifsc Code\">\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>MMID</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"bankAccountArray['mmid']\" type=\"number\" placeholder=\"Enter MMID\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\"\r\n        (click)=\"submitFinal()\">Next</button>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-details/assign-property-to-tenant-details.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-details/assign-property-to-tenant-details.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row breadcrum\">\r\n    <div class=\"col-sm-12\">\r\n        \r\n        <div class=\"row pull-right\">\r\n\r\n        \r\n        <button (click)=\"toggleStatus(assignPropertyToTenant.id,0)\" *ngIf=\"assignPropertyToTenant['isAvailable']==1\" class=\"btn btn-info\"><i class=\"fa fa-eye\"></i>Make InActive</button>\r\n        <button (click)=\"toggleStatus(assignPropertyToTenant.id,1)\" *ngIf=\"assignPropertyToTenant['isAvailable']==0\" class=\"btn btn-info\"><i class=\"fa fa-eye-slash\"></i>Make Active</button>\r\n        <button  (click)=\"edit(assignPropertyToTenant)\" class=\"btn btn-info\"><i class=\"fa fa-edit\"></i>Edit</button>\r\n        <button  (click)=\"delete(assignPropertyToTenant)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i>Delete</button>\r\n    </div>\r\n    <h5 class=\"page-title\">assignPropertyToTenant List</h5>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n          \r\n              \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Tenant ID</label>\r\n          <span>{{assignPropertyToTenant['tenantId']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Property ID</label>\r\n          <span>{{assignPropertyToTenant['propertyId']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Unit ID</label>\r\n          <span>{{assignPropertyToTenant['unitId']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <span>{{assignPropertyToTenant['isAvailable']}}</span>\r\n        </div>\r\n\r\n          \r\n          </div>\r\n  \r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n  \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-edit/assign-property-to-tenant-edit.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-edit/assign-property-to-tenant-edit.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">assignPropertyToTenant</a></li>\r\n                <li class=\"breadcrumb-item \">Update</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">assignPropertyToTenant Update</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-12\" [formGroup]=\"assignPropertyToTenantForm\">\r\n    <div class=\"card m-b-30\">\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n                \r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n    <label>Tenant ID</label>\r\n    <!--<input class=\"form-control\" formControlName=\"tenantId\" placeholder=\"Enter Tenant ID\">-->\r\n    <select class=\"form-control\" formControlName=\"tenantId\">\r\n        <option [value]=\"\">Select Tenant</option>\r\n        <option *ngFor=\"let items of tenants\" [value]=\"items['_id']\">{{items['name']}}</option>   \r\n        </select>\r\n    <small class=\"form-text text-muted invalid-data\"\r\n    *ngIf=\"assignPropertyToTenantForm.controls['tenantId'].invalid && (assignPropertyToTenantForm.controls['tenantId'].dirty || assignPropertyToTenantForm.controls['tenantId'].touched)\"\r\n    class=\"invalid-data\">\r\n    Please enter tenant id          </small>\r\n    </div>\r\n    \r\n        \r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n    <label>Property ID</label>\r\n    \r\n    <select class=\"form-control\" formControlName=\"propertyId\">\r\n        <option [value]=\"\">Select Property</option>\r\n        <option *ngFor=\"let items of properties\" [value]=\"items['_id']\">{{items['name']}}</option>   \r\n        </select>\r\n    <small class=\"form-text text-muted invalid-data\"\r\n    *ngIf=\"assignPropertyToTenantForm.controls['propertyId'].invalid && (assignPropertyToTenantForm.controls['propertyId'].dirty || assignPropertyToTenantForm.controls['propertyId'].touched)\"\r\n    class=\"invalid-data\">\r\n    Please enter property id          </small>\r\n    </div>\r\n    \r\n        \r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n    <label>Unit ID</label>\r\n    \r\n    <select class=\"form-control\" formControlName=\"unitId\">\r\n        <option [value]=\"\">Select Unit</option>\r\n        <option *ngFor=\"let items of units\" [value]=\"items['_id']\">{{items['unitDetails']}}</option>   \r\n        </select>\r\n    <small class=\"form-text text-muted invalid-data\"\r\n    *ngIf=\"assignPropertyToTenantForm.controls['unitId'].invalid && (assignPropertyToTenantForm.controls['unitId'].dirty || assignPropertyToTenantForm.controls['unitId'].touched)\"\r\n    class=\"invalid-data\">\r\n    Please enter unit id          </small>\r\n    </div>\r\n    \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n    <label>Is Available</label>\r\n    \r\n    <select class=\"form-control\" formControlName=\"isAvailable\">\r\n    <option [value]=\"\">Select Is Available</option>\r\n    <option [value]=\"1\">Yes</option>\r\n    <option [value]=\"0\">No</option> \r\n    </select>\r\n    <small class=\"form-text text-muted invalid-data\"\r\n    *ngIf=\"assignPropertyToTenantForm.controls['isAvailable'].invalid && (assignPropertyToTenantForm.controls['isAvailable'].dirty || assignPropertyToTenantForm.controls['isAvailable'].touched)\"\r\n    class=\"invalid-data\">\r\n    Please select is available          </small>\r\n    </div>\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!assignPropertyToTenantForm.valid\"  (click)=\"submit(assignPropertyToTenantForm.value)\">Submit</button>\r\n            </div>\r\n        </div>\r\n     </div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-list/assign-property-to-tenant-list.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-list/assign-property-to-tenant-list.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">assignPropertyToTenant</a></li>\r\n                <li class=\"breadcrumb-item \">List</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">assignPropertyToTenant List</h4>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n<div class=\"col-lg-12\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n\r\n    <h4 class=\"mt-0 header-title\">List of assignPropertyToTenant</h4>\r\n   <p>&nbsp;</p>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-striped mb-0\">\r\n            <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th>Tenant ID</th>\r\n                    <th>Unit ID</th>\r\n                    <th>Actions</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let items of json;let i=index\">\r\n                    <th scope=\"row\">#{{i+1}}</th>\r\n                    <td>{{items.tenantId}}</td>\r\n                    <td>{{items.unitId}}</td>\r\n                    <td><i class=\"fa fa-eye\" (click)=\"details(items)\"></i> view</td>\r\n                </tr>\r\n                <tr *ngIf=\"!json.length\">\r\n                    <td colspan=\"4\" style=\"text-align: center;\">No Items found to display</td>\r\n                </tr>\r\n            \r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n</div>\r\n</div> <!-- end col -->\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backgroundVerificationStatus/background-verification-status-add/background-verification-status-add.component.html":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backgroundVerificationStatus/background-verification-status-add/background-verification-status-add.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"page-wrapper-img\">\r\n    <div class=\"page-wrapper-img-inner\">\r\n        <app-top-profile></app-top-profile>\r\n        <!-- Page-Title -->\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"float-right align-item-center mt-2\">\r\n                        <button class=\"btn btn-info px-4 align-self-center report-btn\" [disabled]=\"!backgroundVerificationStatusForm.valid\"  (click)=\"submit(backgroundVerificationStatusForm.value)\">Add</button>\r\n                    </div>\r\n                    <h4 class=\"page-title mb-2\"><i class=\"mdi mdi-format-list-bulleted mr-2\"></i>Add BackgroundVerificationStatus</h4>  \r\n                    <div class=\"\">\r\n                        <ol class=\"breadcrumb\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">BackgroundVerificationStatus</a></li>\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">Add</a></li>\r\n                        </ol>\r\n                    </div>                                      \r\n                </div><!--end page title box-->\r\n            </div><!--end col-->\r\n        </div><!--end row-->\r\n        <!-- end page title end breadcrumb -->\r\n    </div><!--end page-wrapper-img-inner-->\r\n</div>\r\n\r\n\r\n<div class=\"page-wrapper\">\r\n    <div class=\"page-wrapper-inner\">\r\n\r\n        <!-- Left Sid enav -->\r\n        \r\n        <!-- end left-sidenav-->\r\n\r\n        <!-- Page Content-->\r\n        <div class=\"page-content\">\r\n            <div class=\"container-fluid\"> \r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-body\">        \r\n                                <!-- <h4 class=\"mt-0 header-title\">Textual inputs</h4>\r\n                                <p class=\"text-muted mb-4\">Here are examples of <code class=\"highlighter-rouge\">.form-control</code> applied to each\r\n                                    textual HTML5 <code class=\"highlighter-rouge\">&lt;input&gt;</code> <code class=\"highlighter-rouge\">type</code>.\r\n                                </p> -->\r\n                                \r\n                               \r\n<div class=\"row\">\r\n    <div class=\"col-12\" [formGroup]=\"backgroundVerificationStatusForm\">\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                        \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Status</label>\r\n          <input class=\"form-control\" formControlName=\"status\" placeholder=\"Enter Status\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"backgroundVerificationStatusForm.controls['status'].invalid && (backgroundVerificationStatusForm.controls['status'].dirty || backgroundVerificationStatusForm.controls['status'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter status          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Name</label>\r\n          <input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"backgroundVerificationStatusForm.controls['name'].invalid && (backgroundVerificationStatusForm.controls['name'].dirty || backgroundVerificationStatusForm.controls['name'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter name          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <select class=\"form-control\" formControlName=\"isAvailable\">\r\n            <option value=\"\">Select Is Available</option>\r\n            <option value=\"1\">Yes</option>\r\n            <option value=\"0\">No</option>\r\n          </select>\r\n         \r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"backgroundVerificationStatusForm.controls['isAvailable'].invalid && (backgroundVerificationStatusForm.controls['isAvailable'].dirty || backgroundVerificationStatusForm.controls['isAvailable'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter is available          </small>\r\n        </div>\r\n\r\n        \r\n                </div>\r\n             </div>\r\n        </div>\r\n     </div>\r\n</div>\r\n                                                                     \r\n                            </div><!--end card-body-->\r\n                        </div><!--end card-->\r\n                    </div><!--end col-->\r\n                </div>\r\n                \r\n            </div><!-- container -->\r\n\r\n            <app-footer></app-footer>\r\n        </div>\r\n        <!-- end page content -->\r\n    </div>\r\n    <!--end page-wrapper-inner -->\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backgroundVerificationStatus/background-verification-status-details/background-verification-status-details.component.html":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backgroundVerificationStatus/background-verification-status-details/background-verification-status-details.component.html ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row breadcrum\">\r\n    <div class=\"col-sm-12\">\r\n        \r\n        <div class=\"row pull-right\">\r\n\r\n        \r\n        <button (click)=\"toggleStatus(backgroundVerificationStatus.id,0)\" *ngIf=\"backgroundVerificationStatus['isAvailable']==1\" class=\"btn btn-warning\"><i class=\"fa fa-eye\"></i>Make InActive</button>\r\n        <button (click)=\"toggleStatus(backgroundVerificationStatus.id,1)\" *ngIf=\"backgroundVerificationStatus['isAvailable']==0\" class=\"btn btn-warning\"><i class=\"fa fa-eye-slash\"></i>Make Active</button>\r\n        <button  (click)=\"edit(backgroundVerificationStatus)\" class=\"btn btn-info\"><i class=\"fa fa-edit\"></i>Edit</button>\r\n        <button  (click)=\"delete(backgroundVerificationStatus)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i>Delete</button>\r\n    </div>\r\n    <h5 class=\"page-title\">backgroundVerificationStatus List</h5>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n          \r\n              \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Status</label>\r\n          <span>{{backgroundVerificationStatus['status']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Name</label>\r\n          <span>{{backgroundVerificationStatus['name']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <span>{{backgroundVerificationStatus['isAvailable']}}</span>\r\n        </div>\r\n\r\n          \r\n          </div>\r\n  \r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n  \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backgroundVerificationStatus/background-verification-status-edit/background-verification-status-edit.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backgroundVerificationStatus/background-verification-status-edit/background-verification-status-edit.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"page-wrapper-img\">\r\n    <div class=\"page-wrapper-img-inner\">\r\n        <app-top-profile></app-top-profile>\r\n        <!-- Page-Title -->\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"float-right align-item-center mt-2\">\r\n                        <button class=\"btn btn-info px-4 align-self-center report-btn\" [disabled]=\"!backgroundVerificationStatusForm.valid\"  (click)=\"submit(backgroundVerificationStatusForm.value)\">Update</button>\r\n                    </div>\r\n                    <h4 class=\"page-title mb-2\"><i class=\"mdi mdi-format-list-bulleted mr-2\"></i>Add BackgroundVerificationStatus</h4>  \r\n                    <div class=\"\">\r\n                        <ol class=\"breadcrumb\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">BackgroundVerificationStatus</a></li>\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">Update</a></li>\r\n                        </ol>\r\n                    </div>                                      \r\n                </div><!--end page title box-->\r\n            </div><!--end col-->\r\n        </div><!--end row-->\r\n        <!-- end page title end breadcrumb -->\r\n    </div><!--end page-wrapper-img-inner-->\r\n</div>\r\n\r\n\r\n<div class=\"page-wrapper\">\r\n    <div class=\"page-wrapper-inner\">\r\n\r\n        <!-- Left Sid enav -->\r\n        \r\n        <!-- end left-sidenav-->\r\n\r\n        <!-- Page Content-->\r\n        <div class=\"page-content\">\r\n            <div class=\"container-fluid\"> \r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-body\">        \r\n                                <!-- <h4 class=\"mt-0 header-title\">Textual inputs</h4>\r\n                                <p class=\"text-muted mb-4\">Here are examples of <code class=\"highlighter-rouge\">.form-control</code> applied to each\r\n                                    textual HTML5 <code class=\"highlighter-rouge\">&lt;input&gt;</code> <code class=\"highlighter-rouge\">type</code>.\r\n                                </p> -->\r\n                                \r\n                               \r\n<div class=\"row\">\r\n    <div class=\"col-12\" [formGroup]=\"backgroundVerificationStatusForm\">\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                        \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Status</label>\r\n          <input class=\"form-control\" formControlName=\"status\" placeholder=\"Enter Status\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"backgroundVerificationStatusForm.controls['status'].invalid && (backgroundVerificationStatusForm.controls['status'].dirty || backgroundVerificationStatusForm.controls['status'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter status          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Name</label>\r\n          <input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"backgroundVerificationStatusForm.controls['name'].invalid && (backgroundVerificationStatusForm.controls['name'].dirty || backgroundVerificationStatusForm.controls['name'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter name          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <select class=\"form-control\" formControlName=\"isAvailable\">\r\n            <option value=\"\">Select Is Available</option>\r\n            <option value=\"1\">Yes</option>\r\n            <option value=\"0\">No</option>\r\n          </select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"backgroundVerificationStatusForm.controls['isAvailable'].invalid && (backgroundVerificationStatusForm.controls['isAvailable'].dirty || backgroundVerificationStatusForm.controls['isAvailable'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter is available          </small>\r\n        </div>\r\n\r\n        \r\n                </div>\r\n             </div>\r\n        </div>\r\n     </div>\r\n</div>\r\n                                                                     \r\n                            </div><!--end card-body-->\r\n                        </div><!--end card-->\r\n                    </div><!--end col-->\r\n                </div>\r\n                \r\n            </div><!-- container -->\r\n\r\n            <app-footer></app-footer>\r\n        </div>\r\n        <!-- end page content -->\r\n    </div>\r\n    <!--end page-wrapper-inner -->\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backgroundVerificationStatus/background-verification-status-list/background-verification-status-list.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backgroundVerificationStatus/background-verification-status-list/background-verification-status-list.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"page-wrapper-img\">\r\n    <div class=\"page-wrapper-img-inner\">\r\n        <app-top-profile></app-top-profile>\r\n        <!-- Page-Title -->\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"float-right align-item-center mt-2\">\r\n                        <button class=\"btn btn-info px-4 align-self-center report-btn\" (click)=\"add()\">Add</button>\r\n                    </div>\r\n                    <h4 class=\"page-title mb-2\"><i class=\"mdi mdi-format-list-bulleted mr-2\"></i>BackgroundVerificationStatus List</h4>  \r\n                    <div class=\"\">\r\n                        <ol class=\"breadcrumb\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">BackgroundVerificationStatus</a></li>\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">List</a></li>\r\n                        </ol>\r\n                    </div>                                      \r\n                </div><!--end page title box-->\r\n            </div><!--end col-->\r\n        </div><!--end row-->\r\n        <!-- end page title end breadcrumb -->\r\n    </div><!--end page-wrapper-img-inner-->\r\n</div>\r\n\r\n\r\n<div class=\"page-wrapper\">\r\n    <div class=\"page-wrapper-inner\">\r\n\r\n        <!-- Left Sid enav -->\r\n        \r\n        <!-- end left-sidenav-->\r\n\r\n        <!-- Page Content-->\r\n        <div class=\"page-content\">\r\n            <div class=\"container-fluid\"> \r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-body\">        \r\n                                <!-- <h4 class=\"mt-0 header-title\">Textual inputs</h4>\r\n                                <p class=\"text-muted mb-4\">Here are examples of <code class=\"highlighter-rouge\">.form-control</code> applied to each\r\n                                    textual HTML5 <code class=\"highlighter-rouge\">&lt;input&gt;</code> <code class=\"highlighter-rouge\">type</code>.\r\n                                </p> -->\r\n                                <div class=\"table-responsive\">\r\n                                    <table class=\"table mb-0\">\r\n                                        <thead class=\"thead-light\">\r\n                                            <tr>\r\n                                                <th>#</th>\r\n                                                <th>Id</th>\r\n                                                <th>Name</th>\r\n                                                <th>Status</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let items of json;let i=index\">\r\n                                                <th scope=\"row\">#{{i+1}}</th>\r\n                                                <td>{{items.name}}</td>\r\n                                                <td>{{items.status}}</td>\r\n                                                <td><i class=\"fa fa-eye\" (click)=\"details(items)\"></i> view</td>\r\n                                            </tr>\r\n                                            <tr *ngIf=\"!json.length\">\r\n                                                <td colspan=\"4\" style=\"text-align: center;\">No Items found to display</td>\r\n                                            </tr>\r\n                                        \r\n                                        </tbody>\r\n                                    </table><!--end /table-->\r\n                                </div>                                                                  \r\n                            </div><!--end card-body-->\r\n                        </div><!--end card-->\r\n                    </div><!--end col-->\r\n                </div>\r\n                \r\n            </div><!-- container -->\r\n\r\n           <app-footer></app-footer>\r\n        </div>\r\n        <!-- end page content -->\r\n    </div>\r\n    <!--end page-wrapper-inner -->\r\n</div>\r\n\r\n\r\n \r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bankAccount/bank-account-add/bank-account-add.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bankAccount/bank-account-add/bank-account-add.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">bankAccount</a></li>\r\n                <li class=\"breadcrumb-item \">Add</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">bankAccount Add</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-12\" [formGroup]=\"bankAccountForm\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n            \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Bank Name</label>\r\n<input class=\"form-control\" formControlName=\"bankName\" placeholder=\"Enter Bank Name\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"bankAccountForm.controls['bankName'].invalid && (bankAccountForm.controls['bankName'].dirty || bankAccountForm.controls['bankName'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter bank name          </small>\r\n</div>\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Bank Address</label>\r\n<input class=\"form-control\" formControlName=\"bankAddress\" placeholder=\"Enter Bank Address\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"bankAccountForm.controls['bankAddress'].invalid && (bankAccountForm.controls['bankAddress'].dirty || bankAccountForm.controls['bankAddress'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter bank address          </small>\r\n</div>\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Account Number</label>\r\n<input class=\"form-control\" formControlName=\"accountNumber\" placeholder=\"Enter Account Number\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"bankAccountForm.controls['accountNumber'].invalid && (bankAccountForm.controls['accountNumber'].dirty || bankAccountForm.controls['accountNumber'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter account number          </small>\r\n</div>\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Ifsc Code</label>\r\n<input class=\"form-control\" formControlName=\"ifscCode\" placeholder=\"Enter Ifsc Code\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"bankAccountForm.controls['ifscCode'].invalid && (bankAccountForm.controls['ifscCode'].dirty || bankAccountForm.controls['ifscCode'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter ifsc code          </small>\r\n</div>\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>MMID</label>\r\n<input class=\"form-control\" formControlName=\"mmid\" placeholder=\"Enter MMID\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"bankAccountForm.controls['mmid'].invalid && (bankAccountForm.controls['mmid'].dirty || bankAccountForm.controls['mmid'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter mmid          </small>\r\n</div>\r\n\r\n    \r\n<!-- <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>User ID</label>\r\n<input class=\"form-control\" formControlName=\"userId\" placeholder=\"Enter User ID\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"bankAccountForm.controls['userId'].invalid && (bankAccountForm.controls['userId'].dirty || bankAccountForm.controls['userId'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter user id          </small>\r\n</div> -->\r\n\r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Is Available</label>\r\n\r\n<select class=\"form-control\" formControlName=\"isAvailable\">\r\n<option [value]=\"\">Select Is Available</option>\r\n<option [value]=\"1\">Yes</option>\r\n<option [value]=\"0\">No</option>\r\n</select>\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"bankAccountForm.controls['isAvailable'].invalid && (bankAccountForm.controls['isAvailable'].dirty || bankAccountForm.controls['isAvailable'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease select is available          </small>\r\n</div>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!bankAccountForm.valid\"  (click)=\"submit(bankAccountForm.value)\">Submit</button>\r\n        </div>\r\n    </div>\r\n </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bankAccount/bank-account-details/bank-account-details.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bankAccount/bank-account-details/bank-account-details.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row breadcrum\">\r\n    <div class=\"col-sm-12\">\r\n        \r\n        <div class=\"row pull-right\">\r\n\r\n        \r\n        <button (click)=\"toggleStatus(bankAccount.id,0)\" *ngIf=\"bankAccount['isAvailable']==1\" class=\"btn btn-info\"><i class=\"fa fa-eye\"></i>Make InActive</button>\r\n        <button (click)=\"toggleStatus(bankAccount.id,1)\" *ngIf=\"bankAccount['isAvailable']==0\" class=\"btn btn-info\"><i class=\"fa fa-eye-slash\"></i>Make Active</button>\r\n        <button  (click)=\"edit(bankAccount)\" class=\"btn btn-info\"><i class=\"fa fa-edit\"></i>Edit</button>\r\n        <button  (click)=\"delete(bankAccount)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i>Delete</button>\r\n    </div>\r\n    <h5 class=\"page-title\">bankAccount List</h5>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n          \r\n              \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Bank Name</label>\r\n          <span>{{bankAccount['bankName']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Bank Address</label>\r\n          <span>{{bankAccount['bankAddress']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Account Number</label>\r\n          <span>{{bankAccount['accountNumber']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Ifsc Code</label>\r\n          <span>{{bankAccount['ifscCode']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>MMID</label>\r\n          <span>{{bankAccount['mmid']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>User ID</label>\r\n          <span>{{bankAccount['userId']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <span>{{bankAccount['isAvailable']}}</span>\r\n        </div>\r\n\r\n          \r\n          </div>\r\n  \r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n  \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bankAccount/bank-account-edit/bank-account-edit.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bankAccount/bank-account-edit/bank-account-edit.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">bankAccount</a></li>\r\n                <li class=\"breadcrumb-item \">Update</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">bankAccount Update</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-12\" [formGroup]=\"bankAccountForm\">\r\n    <div class=\"card m-b-30\">\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n                \r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n    <label>Bank Name</label>\r\n    <input class=\"form-control\" formControlName=\"bankName\" placeholder=\"Enter Bank Name\">\r\n    <small class=\"form-text text-muted invalid-data\"\r\n    *ngIf=\"bankAccountForm.controls['bankName'].invalid && (bankAccountForm.controls['bankName'].dirty || bankAccountForm.controls['bankName'].touched)\"\r\n    class=\"invalid-data\">\r\n    Please enter bank name          </small>\r\n    </div>\r\n    \r\n        \r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n    <label>Bank Address</label>\r\n    <input class=\"form-control\" formControlName=\"bankAddress\" placeholder=\"Enter Bank Address\">\r\n    <small class=\"form-text text-muted invalid-data\"\r\n    *ngIf=\"bankAccountForm.controls['bankAddress'].invalid && (bankAccountForm.controls['bankAddress'].dirty || bankAccountForm.controls['bankAddress'].touched)\"\r\n    class=\"invalid-data\">\r\n    Please enter bank address          </small>\r\n    </div>\r\n    \r\n        \r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n    <label>Account Number</label>\r\n    <input class=\"form-control\" formControlName=\"accountNumber\" placeholder=\"Enter Account Number\">\r\n    <small class=\"form-text text-muted invalid-data\"\r\n    *ngIf=\"bankAccountForm.controls['accountNumber'].invalid && (bankAccountForm.controls['accountNumber'].dirty || bankAccountForm.controls['accountNumber'].touched)\"\r\n    class=\"invalid-data\">\r\n    Please enter account number          </small>\r\n    </div>\r\n    \r\n        \r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n    <label>Ifsc Code</label>\r\n    <input class=\"form-control\" formControlName=\"ifscCode\" placeholder=\"Enter Ifsc Code\">\r\n    <small class=\"form-text text-muted invalid-data\"\r\n    *ngIf=\"bankAccountForm.controls['ifscCode'].invalid && (bankAccountForm.controls['ifscCode'].dirty || bankAccountForm.controls['ifscCode'].touched)\"\r\n    class=\"invalid-data\">\r\n    Please enter ifsc code          </small>\r\n    </div>\r\n    \r\n        \r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n    <label>MMID</label>\r\n    <input class=\"form-control\" formControlName=\"mmid\" placeholder=\"Enter MMID\">\r\n    <small class=\"form-text text-muted invalid-data\"\r\n    *ngIf=\"bankAccountForm.controls['mmid'].invalid && (bankAccountForm.controls['mmid'].dirty || bankAccountForm.controls['mmid'].touched)\"\r\n    class=\"invalid-data\">\r\n    Please enter mmid          </small>\r\n    </div>\r\n    \r\n        \r\n    <!-- <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n    <label>User ID</label>\r\n    <input class=\"form-control\" formControlName=\"userId\" placeholder=\"Enter User ID\">\r\n    <small class=\"form-text text-muted invalid-data\"\r\n    *ngIf=\"bankAccountForm.controls['userId'].invalid && (bankAccountForm.controls['userId'].dirty || bankAccountForm.controls['userId'].touched)\"\r\n    class=\"invalid-data\">\r\n    Please enter user id          </small>\r\n    </div> -->\r\n    \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n    <label>Is Available</label>\r\n    \r\n    <select class=\"form-control\" formControlName=\"isAvailable\">\r\n    <option [value]=\"\">Select Is Available</option>\r\n    <option [value]=\"1\">Yes</option>\r\n    <option [value]=\"0\">No</option>\r\n    </select>\r\n    <small class=\"form-text text-muted invalid-data\"\r\n    *ngIf=\"bankAccountForm.controls['isAvailable'].invalid && (bankAccountForm.controls['isAvailable'].dirty || bankAccountForm.controls['isAvailable'].touched)\"\r\n    class=\"invalid-data\">\r\n    Please select is available          </small>\r\n    </div>\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!bankAccountForm.valid\"  (click)=\"submit(bankAccountForm.value)\">Submit</button>\r\n            </div>\r\n        </div>\r\n     </div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bankAccount/bank-account-list/bank-account-list.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bankAccount/bank-account-list/bank-account-list.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">bankAccount</a></li>\r\n                <li class=\"breadcrumb-item \">List</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">bankAccount List</h4>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n<div class=\"col-lg-12\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n\r\n    <h4 class=\"mt-0 header-title\">List of bankAccount</h4>\r\n   <p>&nbsp;</p>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-striped mb-0\">\r\n            <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th>Account Number</th>\r\n                    <th>IFSC Code</th>\r\n                    <th>Bank Name</th>\r\n                    <th>Bank Address</th>\r\n                    <th>Actions</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let items of json;let i=index\">\r\n                    <th scope=\"row\">#{{i+1}}</th>\r\n                    <td>{{items.accountNumber}}</td>\r\n                    <td>{{items.ifscCode}}</td>\r\n                    <td>{{items.bankName}}</td>\r\n                    <td>{{items.bankAddress}}</td>\r\n                    <td><i class=\"fa fa-eye\" (click)=\"details(items)\"></i> view</td>\r\n                </tr>\r\n                <tr *ngIf=\"!json.length\">\r\n                    <td colspan=\"4\" style=\"text-align: center;\">No Items found to display</td>\r\n                </tr>\r\n            \r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n</div>\r\n</div> <!-- end col -->\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createProperty/create-property-add/create-property-add.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createProperty/create-property-add/create-property-add.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>create-property-add works!</p> -->\r\n\r\n\r\n<div class=\"row\" *ngIf=\"stage1=='true'\">\r\n  <h3>Add Property</h3>\r\n  <div class=\"col-12\" >\r\n    <div class=\"card m-b-30\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n            <label>Name of the Property </label>\r\n            <input class=\"form-control\" [(ngModel)]=\"propertyArray['name']\" placeholder=\"Enter Name of the Property\">\r\n          </div>\r\n          \r\n\r\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n            <label>Address</label>\r\n            <input class=\"form-control\" [(ngModel)]=\"propertyArray['address']\" placeholder=\"Enter Address\">\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n            <label>Property Type</label>\r\n            <!-- <input class=\"form-control\" formControlName=\"propertyType\" placeholder=\"Enter Property Type\">-->\r\n            <select class='form-control' [(ngModel)]=\"propertyArray['propertyType']\" placeholder=\"Enter Property Type\" (change)=\"onchange(propertyArray['propertyType'])\">\r\n              <option value=\"\">Select Property Type</option>\r\n              <option *ngFor=\"let items of propertTypes\" [value]=\"items['_id']\">{{items['name']}}</option>\r\n            </select>\r\n          </div>\r\n\r\n         \r\n <div class=\"col-xs-12 col-sm-6 col-md-6\" *ngIf=\"open=='true'\">\r\n         <label>Gender</label>\r\n         <select class=\"form-control\" [(ngModel)]=\"propertyArray['gender']\">\r\n           <option value=\"\">Select Gender</option>\r\n           <option value=\"Male\">Male</option>\r\n           <option value=\"Female\">Female</option>\r\n           <option value=\"Other\">Co-Living</option>\r\n         </select>\r\n\r\n       </div> \r\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n            <label>Mode of Business</label>\r\n            <!-- <input class=\"form-control\" formControlName=\"leaseType\" placeholder=\"Enter Lease Type\">-->\r\n            <select class='form-control' [(ngModel)]=\"propertyArray['leaseType']\" placeholder=\"Enter Mode of Business\">\r\n              <option value=\"\">Select Lease Type</option>\r\n              <option *ngFor=\"let items of leaseTypes\" [value]=\"items['_id']\">{{items['name']}}</option>\r\n            </select>\r\n\r\n          </div>\r\n          <div class=\"col-xs-12 col-sm-6 col-md-6\" *ngIf=\"opens=='true'\">\r\n            <label>Number of Floors</label>\r\n            <!-- <input class=\"form-control\" formControlName=\"leaseType\" placeholder=\"Enter Lease Type\">-->\r\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"propertyArray['noOfFloors']\" placeholder=\"Enter Number of Floors\">\r\n\r\n          </div>\r\n          <div class=\"col-xs-12 col-sm-6 col-md-6\" *ngIf=\"opens=='true'\">\r\n            <label>Number of Flats</label>\r\n            <!-- <input class=\"form-control\" formControlName=\"leaseType\" placeholder=\"Enter Lease Type\">-->\r\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"propertyArray['noOfFlats']\" placeholder=\"Enter Number of Flats\">\r\n\r\n          </div>\r\n\r\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n            <label>Description</label>\r\n            <input class=\"form-control\" [(ngModel)]=\"propertyArray['description']\" placeholder=\"Enter Description\">\r\n\r\n          </div>\r\n\r\n\r\n          <!-- <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n         <label>Rental Type ID</label>\r\n         <select class='form-control' formControlName=\"rentalTypeId\" placeholder=\"Enter Rental Type ID\">\r\n           <option value=\"\">Select Rental Type</option>\r\n           <option *ngFor=\"let items of rentalTypes\" [value]=\"items['name']\">{{items['name']}}</option></select>\r\n         <small class=\"form-text text-muted invalid-data\"\r\n           *ngIf=\"propertyForm.controls['rentalTypeId'].invalid && (propertyForm.controls['rentalTypeId'].dirty || propertyForm.controls['rentalTypeId'].touched)\"\r\n           class=\"invalid-data\">\r\n           Please enter rental type id          </small>\r\n       </div> -->\r\n\r\n\r\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n            <label>Security Deposit</label>\r\n            <input class=\"form-control\" [(ngModel)]=\"propertyArray['securityDeposit']\" type=\"number\"\r\n              placeholder=\"Enter Security Deposit\">\r\n\r\n          </div>\r\n\r\n          <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n           \r\n            <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\"\r\n               (click)=\"propertyAddsubmit()\">Next</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--units creation-->\r\n<div *ngIf=\"stage2=='true'\">\r\n  <div class=\"col-12\" >\r\n    <div class=\"page-title-box\">\r\n      <div class=\"page-title-right\">\r\n        <ol class=\"breadcrumb m-0\">\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">units</a></li>\r\n          <li class=\"breadcrumb-item active\">Add</li>\r\n        </ol>\r\n      </div>\r\n      <h4 class=\"page-title\">units Add</h4>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" >\r\n\r\n    <button (click)=\"addUnits()\">Add Unit</button>\r\n    <div class=\"col-12\" *ngFor=\"let unit of units;let unitIndex = index;\">\r\n      <button (click)=\"deleteUnit(unitIndex)\">Remove</button>\r\n      <div class=\"card m-b-30\">\r\n        <div class=\"card-body\">\r\n\r\n          <div class=\"row\">\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n              <label>Unit Details</label>\r\n              <input class=\"form-control\" [(ngModel)]=\"unit.unitDetails\" placeholder=\"Enter Unit Details\">\r\n\r\n            </div>\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n              <label>Rent for flat</label>\r\n              <input class=\"form-control\" type=\"number\" [(ngModel)]=\"unit.rent\" placeholder=\"Enter Rent\">\r\n            </div>\r\n\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\" *ngIf=\"opens=='true'\">\r\n              <label>Area(in Sq.Ft.)</label>\r\n              <input class=\"form-control\" type=\"number\" [(ngModel)]=\"unit.area\" placeholder=\"Enter Area\">\r\n            </div>\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\" *ngIf=\"opens=='true'\">\r\n              <label>Unit Type</label>\r\n              <!-- <input class=\"form-control\" formControlName=\"facing\" placeholder=\"Enter Facing\">-->\r\n              <select class='form-control' [(ngModel)]=\"unit.type\" placeholder=\"Select Unit Type\">\r\n                <option value=\"\">Select type</option>\r\n                <option *ngFor=\"let items of types\" [value]=\"items\">{{items}}</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\" *ngIf=\"open=='true'\">\r\n              <label>Sharing Type</label>\r\n              <!-- <input class=\"form-control\" formControlName=\"facing\" placeholder=\"Enter Facing\">-->\r\n              <select class='form-control' [(ngModel)]=\"unit.sharingType\" placeholder=\"Select Sharing Type\">\r\n                <option value=\"\">Select type</option>\r\n                <option *ngFor=\"let items of sharingTypes\" [value]=\"items['_id']\">{{items['name']}}</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n              <label>Aditional Rooms</label>\r\n              <button (click)=\"addRoom(unitIndex)\">+</button>\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\" *ngFor=\"let items of unit.additionalRooms, let roomIndex = index;\">\r\n                <div>\r\n                  <label>Room Name</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"unit.additionalRooms[roomIndex].name\" placeholder=\"Enter Room Name\">\r\n                  <button *ngIf=\"unit.additionalRooms[roomIndex]\" (click)=\"deleteUnitRoom(unitIndex,roomIndex)\">deleteRoom</button>\r\n                </div>                \r\n                <div>\r\n                  <label>Room Items</label>\r\n                  <button (click)=\"addUnitItem(unit,roomIndex)\">Add Item</button>\r\n                  <input *ngFor=\"let item of items.quantity; let itemIndex = index;\" [(ngModel)]=\"unit.additionalRooms[roomIndex].quantity[itemIndex].item \">\r\n                  <button *ngIf=\"unit.additionalRooms[roomIndex].quantity[itemIndex]\" (click)=\"deleteUnitItem(unitIndex,roomIndex,itemIndex)\">deleteItem</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\" *ngIf=\"opens=='true'\">\r\n              <label>Facing</label>\r\n              <!-- <input class=\"form-control\" formControlName=\"facing\" placeholder=\"Enter Facing\">-->\r\n              <select class='form-control' [(ngModel)]=\"unit.facing\" placeholder=\"Select Facing\">\r\n                <option value=\"\">Select Facing</option>\r\n                <option *ngFor=\"let items of facing\" [value]=\"items\">{{items}}</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\" *ngIf=\"opens=='true'\">\r\n              <label>Furnishing</label>\r\n                <select class='form-control' [(ngModel)]=\"unit.furnishing\" placeholder=\"Select Furnishing Status\">\r\n                <!-- <option value=\"\">Select Furnishing Status</option> -->\r\n                <option *ngFor=\"let items of furnitures\" [value]=\"items\">{{items}}</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\" *ngIf=\"opens=='true'\">\r\n              <label>Tenancy Type</label>\r\n              <!-- <input class=\"form-control\" formControlName=\"facing\" placeholder=\"Enter Facing\">-->\r\n              <select class='form-control' [(ngModel)]=\"unit.tenancyType\" placeholder=\"Select Tenancy Type\">\r\n               \r\n                <option *ngFor=\"let items of tenancyTypes\" [value]=\"items\">{{items}}</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\" *ngIf=\"opens=='true'\">\r\n              <label>Furniture Borne By</label>\r\n              <!-- <input class=\"form-control\" formControlName=\"facing\" placeholder=\"Enter Facing\">-->\r\n              <select class='form-control' [(ngModel)]=\"unit.furnitureBorneBy\" placeholder=\"Select Furniture Borne By\">\r\n               \r\n                <option *ngFor=\"let items of furnitureBorne\" [value]=\"items\">{{items}}</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\" *ngIf=\"opens=='true'\">\r\n              <label>Power Bill No.</label>\r\n              <input class=\"form-control\"  [(ngModel)]=\"unit.powerBill\" placeholder=\"Enter Power Bill No.\">\r\n            </div>\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\" >\r\n              <label>Latitude</label>\r\n              <input class=\"form-control\"  [(ngModel)]=\"unit.latitude\" placeholder=\"Enter Latitude\">\r\n            </div> \r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\" >\r\n              <label>Longitude</label>\r\n              <input class=\"form-control\"  [(ngModel)]=\"unit.longitude\" placeholder=\"Enter Longitude\">\r\n            </div>\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n              <label>Amenities</label>\r\n              <!--  <input class=\"form-control\" formControlName=\"amenities\" placeholder=\"Enter Amenities\">-->\r\n              <ng-multiselect-dropdown *ngIf=\"dropdownList.length\" [placeholder]=\"'Select Amenities'\"\r\n                [data]=\"dropdownList\" [(ngModel)]=\"unit.amenities\" [settings]=\"dropdownSettings\">\r\n              </ng-multiselect-dropdown>\r\n              \r\n            </div>\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\" *ngIf=\"opens=='true'\" >\r\n              <label>Sale Deed</label>\r\n              <input type=\"file\" class=\"form-control\"  [(ngModel)]=\"unit.saleDeed\" placeholder=\"Enter Sale Deed\">\r\n            </div>\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\" *ngIf=\"opens=='true'\">\r\n              <label>Registration Agreement</label>\r\n              <input type=\"file\" class=\"form-control\"  [(ngModel)]=\"unit.registrationAgreement\" placeholder=\"Enter Registration Agreement\">\r\n            </div>\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\" *ngIf=\"opens=='true'\">\r\n              <label>Lease Agreement</label>\r\n              <input type=\"file\" class=\"form-control\"  [(ngModel)]=\"unit.leaseAgreement\" placeholder=\"Enter Lease Agreement\">\r\n            </div>\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\" >\r\n              <label>Property Manager</label>\r\n              <input class=\"form-control\"  [(ngModel)]=\"unit.propertyManager\" placeholder=\"Enter Property manager\">\r\n            </div>\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n              <label>Inspection</label>\r\n              <!-- <input class=\"form-control\" formControlName=\"inspection\" placeholder=\"Enter Inspection\"> -->\r\n              <select class=\"form-control\" [(ngModel)]=\"unit.inspection\" (click)=\"inspectionChange()\">\r\n                <!-- <option value=\"\">Select Category</option> -->\r\n                <option value=\"whileCreatingProperty\">While Listing the Property</option>\r\n                <!-- <option value=\"whilePropertyAgreement\">While property agreement</option>\r\n                <option value=\"whileHandingOverToTenant\">While handing over to tenant</option>\r\n                <option value=\"afterTenantLeave\">After tenant leave</option>\r\n                <option value=\"afterRenovation\">after renovation</option> -->\r\n              </select>\r\n              <div *ngIf=\"inspection==true\">\r\n                <input class=\"form-control\" type=\"file\" placeholder=\"Enter Inspection\">\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n              <label>propertyAvailableFrom</label>\r\n              <input class=\"form-control\" [(ngModel)]=\"unit.propertyavailablefrom\" type=\"date\"\r\n                placeholder=\"Enter propertyAvailableFrom\">\r\n            </div>\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n              <label>Is Available</label>\r\n\r\n              <select class=\"form-control\" [(ngModel)]=\"unit.isAvailable\">\r\n                <!-- <option value=\"\">Select Is Available</option> -->\r\n                <option value=\"1\">Yes</option>\r\n                <option value=\"0\">No</option>\r\n              </select>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n      <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\"\r\n      (click)=\"unitsPrevioussubmit()\">Previous</button>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n      \r\n      <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" *ngIf=\"unitsAdded\"\r\n        (click)=\"unitsSubmit()\">Next</button>\r\n    </div>\r\n\r\n    \r\n  </div>\r\n</div>\r\n\r\n<!--create wizard-->\r\n<div class=\"col-12\" *ngIf=\"stage3=='true'\">\r\n  <div class=\"page-title-box\">\r\n      <div class=\"page-title-right\">\r\n          <ol class=\"breadcrumb m-0\">\r\n              <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">assignPropertyToOwner</a></li>\r\n              <li class=\"breadcrumb-item \">Add</li>\r\n          </ol>\r\n      </div>\r\n      <h4 class=\"page-title\">assignPropertyToOwner Add</h4>\r\n  </div>\r\n</div>\r\n\r\n<!-- assign propery to ownerstage4 -->\r\n<div *ngIf=\"stage3=='true'\"> \r\n\r\n  <div class=\"row\"  *ngFor=\"let items of assignPropertyToOwner; let in = index;\">\r\n    \r\n    <div class=\"col-12\" >\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n  \r\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                        <label>Owner ID</label>\r\n  \r\n                        <select class=\"form-control\" [(ngModel)]=\"assignPropertyToOwner[in]['ownerId']\"\r\n                            placeholder=\"Select Owner\">\r\n                            <option value=\"\">Select Owner</option>\r\n                            <option value=\"newOwner\">Create Owner</option>\r\n                            <option *ngFor=\"let item of owners\" [value]=\"item['_id']\">{{item['name']}}</option>\r\n                        </select>\r\n  \r\n                    </div>\r\n  \r\n  \r\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                        <label>Property ID</label>\r\n                        <input class=\"form-control\" [(ngModel)]=\"assignPropertyToOwner[in]['propertyId']\" placeholder=\"Enter Property Id\">\r\n                        <!-- <select class=\"form-control\" [(ngModel)]=\"assignPropertyToOwner[in]['propertyId']\">\r\n                            <option [value]=\"\">Select Property</option>\r\n                            <option *ngFor=\"let items of unitsArray\" [value]=\"items['propertyId']\">{{items['propertyId']}}</option>\r\n                        </select> -->\r\n  \r\n                    </div>\r\n  \r\n  \r\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                        <label>Unit ID</label>\r\n  \r\n                        <select class=\"form-control\" [(ngModel)]=\"assignPropertyToOwner[in]['unitId']\">\r\n                            <option [value]=\"\">Select Unit</option>\r\n                            <option *ngFor=\"let items of units\" [value]=\"items['_id']\">{{items['unitDetails']}}</option>\r\n                        </select>\r\n  \r\n                    </div>\r\n  \r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- create owner -->        \r\n        <div class=\"col-12\" *ngIf=\"items['ownerId']=='newOwner'\">\r\n            <h3>Create Owner</h3>\r\n            <div class=\"card m-b-30\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row\">\r\n        \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Name</label>\r\n                    <input class=\"form-control\" [(ngModel)]=\"ownerArray[in]['name']\" placeholder=\"Enter Name\">\r\n                  </div>\r\n        \r\n        \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Email</label>\r\n                    <input class=\"form-control\" [(ngModel)]=\"ownerArray[in]['email']\" placeholder=\"Enter Email\">\r\n                  </div>\r\n        \r\n        \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Mobile Number</label>\r\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"ownerArray[in]['mobileNumber']\" placeholder=\"Enter Mobile Number\">\r\n                  </div>\r\n        \r\n        \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Current Address</label>\r\n                    <input class=\"form-control\" [(ngModel)]=\"ownerArray[in]['currentAddress']\" placeholder=\"Enter Current Address\">\r\n                  </div>\r\n        \r\n        \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Documents Upload</label>\r\n                    <input class=\"form-control\" [(ngModel)]=\"ownerArray[in]['documentsUpload']\" type=\"file\"\r\n                      placeholder=\"Enter Documents Upload\" (change)=\"changeListenerDocument($event)\">\r\n                    <img [src]=\"document\" *ngIf=\"document\" style=\"width: 150px;margin: 10px;\">\r\n                  </div>\r\n        \r\n        \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Owner Photo</label>\r\n                    <input class=\"form-control\" [(ngModel)]=\"ownerArray[in]['ownerPhoto']\" type=\"file\" placeholder=\"Enter Owner Photo\"\r\n                      (change)=\"changeListenerPhoto($event)\">\r\n                    <img [src]=\"image\" *ngIf=\"image\" style=\"width: 150px;margin: 10px;\">\r\n                  </div>\r\n        \r\n        \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Background Verification Status</label>\r\n                    <!-- <input class=\"form-control\" formControlName=\"backgroundVerificationStatus\" placeholder=\"Enter Background Verification Status\"> -->\r\n                    <select class=\"form-control\" [(ngModel)]=\"ownerArray[in]['backgroundVerificationStatus']\">\r\n                      <option value=\"\">Select Status</option>\r\n                      <option value=\"done\">Done</option>\r\n                      <option value=\"pending\">Pending</option>\r\n                      <option value=\"rejected\">Rejected</option>\r\n                    </select>\r\n                  </div>\r\n  \r\n                </div>\r\n              </div>\r\n        \r\n            </div>\r\n        </div>\r\n  \r\n        <!-- create bank account -->        \r\n        <div class=\"col-12\" *ngIf=\"items['ownerId']=='newOwner'\">\r\n            <h3>Bank Account</h3>\r\n            <div class=\"card m-b-30\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                        <label>Account Holder Name</label>\r\n                        <input class=\"form-control\" [(ngModel)]=\"bankAccountArray[in]['accountHolderName']\" placeholder=\"Enter Account Holder Name\">\r\n                    </div>\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Bank Name</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"bankAccountArray[in]['bankName']\" placeholder=\"Enter Bank Name\">\r\n                        </div>\r\n  \r\n  \r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Bank Address</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"bankAccountArray[in]['bankAddress']\" placeholder=\"Enter Bank Address\">\r\n                        </div>\r\n  \r\n  \r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Account Number</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"bankAccountArray[in]['accountNumber']\" type=\"number\"\r\n                                placeholder=\"Enter Account Number\">\r\n                        </div>\r\n  \r\n  \r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Ifsc Code</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"bankAccountArray[in]['ifscCode']\" placeholder=\"Enter Ifsc Code\">\r\n                        </div>\r\n  \r\n  \r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>MMID</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"bankAccountArray[in]['mmid']\" type=\"number\" placeholder=\"Enter MMID\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n  \r\n  </div>\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n    <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" (click)=\"assignPropertyNext()\">Next</button>\r\n  </div>\r\n</div> \r\n\r\n\r\n<!-- Agreement starts here stage4 -->\r\n<div class=\"row\" *ngIf=\"stage4=='true'\">\r\n  <h3>Agreement</h3>\r\n  <div class=\"col-12\">\r\n     <div class=\"card m-b-30\">\r\n        <div class=\"card-body\">\r\n           <div class=\"row\">\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>City </label>\r\n\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['city']\" placeholder=\"Enter City\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Date </label>\r\n\r\n                 <input type=\"date\" class=\"form-control\" [(ngModel)]=\"agreementArray['date']\" placeholder=\"Enter Date\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Month And Year </label>\r\n                 <input type=\"date\" class=\"form-control\" [(ngModel)]=\"agreementArray['monthYear']\"\r\n                    placeholder=\"Enter Month And year\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Name 1</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['name1']\" placeholder=\"Select Name1\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Address 1</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['address1']\" placeholder=\"Select Address 1\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Son of 1</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['sonOf1']\" placeholder=\"Select Son of1\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>leasor Age 1</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['leasorAge1']\"\r\n                    placeholder=\"Select leasor Age1\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Name 2</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['name2']\" placeholder=\"Select Name2\">\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Address 2</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['address2']\" placeholder=\"Select Address2\">\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Son of 2</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['sonOf2']\" placeholder=\"Select Son of2\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>leasor Age 2</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['leasorAge2']\"\r\n                    placeholder=\"Select leasor Age2\">\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Name 3</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['name3']\" placeholder=\"Select Name3\">\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Address 3</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['address3']\" placeholder=\"Select Address 3\">\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Son of 3</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['sonOf3']\" placeholder=\"Select Son of3\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>leasor Age 3</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['leasorAge3']\"\r\n                    placeholder=\"Select leasor Age3\">\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Lessor Email Address</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['lessorEmailAddress']\"\r\n                    placeholder=\"Select Lessor Email Address\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Lessee Email Address</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['lesseeEmailAddress']\"\r\n                    placeholder=\"Select Lessee Email Address\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Term Years</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['termYears']\" placeholder=\"Select Term Years\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Lessee Term</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['lesseeTerm']\"\r\n                    placeholder=\"Select Lessee Term\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Lessor Term</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['lessorTerm']\"\r\n                    placeholder=\"Select Lessor Term\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Lessor Lock in Period Months</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['lessorLockinPeriodMonths']\"\r\n                    placeholder=\"Select Lessor Lock in Period Months\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Fixed Rend Amount</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['fixedRendAmount']\"\r\n                    placeholder=\"Select Fixed Rend Amount\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Fixed Rent Start Date</label>\r\n                 <input type=\"date\" class=\"form-control\" [(ngModel)]=\"agreementArray['fixedRentStartDate']\"\r\n                    placeholder=\"Select Fixed Rent Start Date\">\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Completion Year</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['completionYear']\"\r\n                    placeholder=\"Select Completion Year\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Increment Percentage</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['incrementPercentage']\"\r\n                    placeholder=\"Select Increment Percentage\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Grace Start Date</label>\r\n                 <input type=\"date\" class=\"form-control\" [(ngModel)]=\"agreementArray['graceStartDate']\"\r\n                    placeholder=\"Select Grace Start Date\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Grace End Date</label>\r\n                 <input type=\"date\" class=\"form-control\" [(ngModel)]=\"agreementArray['graceEndDate']\"\r\n                    placeholder=\"Select Grace End Date\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Security Deposit</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['securityDeposit']\"\r\n                    placeholder=\"Select Security Deposit\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Termination Months</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['terminationMonths']\"\r\n                    placeholder=\"Select Termination Months\">\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Governing City</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['governingCity']\"\r\n                    placeholder=\"Governing City\">\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Property Address and Description</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['PropertyAddressandDescription']\"\r\n                    placeholder=\"Property Address and Description\">\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Number of Units</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['noOfUnits']\" placeholder=\"Number of Units\">\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                 <label>Amenites Provided by Lessor</label>\r\n                 <input class=\"form-control\" [(ngModel)]=\"agreementArray['amenitiesByLessor']\"\r\n                    placeholder=\"Amenites Provided by Lessor\">\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                 <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\"\r\n                    (click)=\"submitFinal()\">Submit</button>\r\n              </div>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createTenant/create-tenant-add/create-tenant-add.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createTenant/create-tenant-add/create-tenant-add.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Tenant add -->\r\n<div>\r\n    <div class=\"col-12\">\r\n        <div class=\"page-title-box\">\r\n            <div class=\"page-title-right\">\r\n                <ol class=\"breadcrumb m-0\">\r\n                    <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">tenant</a></li>\r\n                    <li class=\"breadcrumb-item active\">Add</li>\r\n                </ol>\r\n            </div>\r\n            <h4 class=\"page-title\">tenant Add</h4>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n            <label>Property</label>\r\n            <select class='form-control' [(ngModel)]=\"property\" placeholder=\"Enter Property\"\r\n                (change)=\"changeProperty()\">\r\n                <option value=\" \">Select Property</option>\r\n                <option *ngFor=\"let items of properties\" [value]=\"items['_id']\">{{items['name']}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n            <label>Units</label>\r\n            <select class='form-control' [(ngModel)]=\"unit\" placeholder=\"Enter Unit\">\r\n                <option value=\" \">Select Unit</option>\r\n                <option *ngFor=\"let items of units\" [value]=\"items['_id']\">{{items['unitDetails']}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-12\" [formGroup]=\"tenantForm\" *ngIf=\" property && unit\">\r\n            <div class=\"card m-b-30\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Name</label>\r\n                            <input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\r\n                            <small class=\"form-text text-muted invalid-data\"\r\n                                *ngIf=\"tenantForm.controls['name'].invalid && (tenantForm.controls['name'].dirty || tenantForm.controls['name'].touched)\"\r\n                                class=\"invalid-data\">\r\n                                Please enter name </small>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Email</label>\r\n                            <input class=\"form-control\" formControlName=\"email\" placeholder=\"Enter Email\">\r\n                            <small class=\"form-text text-muted invalid-data\"\r\n                                *ngIf=\"tenantForm.controls['email'].invalid && (tenantForm.controls['email'].dirty || tenantForm.controls['email'].touched)\"\r\n                                class=\"invalid-data\">\r\n                                Please enter email </small>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Mobile Number</label>\r\n                            <input class=\"form-control\" formControlName=\"mobileNumber\" type=\"number\"\r\n                                placeholder=\"Enter Mobile Number\">\r\n                            <small class=\"form-text text-muted invalid-data\"\r\n                                *ngIf=\"tenantForm.controls['mobileNumber'].invalid && (tenantForm.controls['mobileNumber'].dirty || tenantForm.controls['mobileNumber'].touched)\"\r\n                                class=\"invalid-data\">\r\n                                Please enter mobile number </small>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Current Address</label>\r\n                            <input class=\"form-control\" formControlName=\"currentAddress\"\r\n                                placeholder=\"Enter Current Address\">\r\n                            <small class=\"form-text text-muted invalid-data\"\r\n                                *ngIf=\"tenantForm.controls['currentAddress'].invalid && (tenantForm.controls['currentAddress'].dirty || tenantForm.controls['currentAddress'].touched)\"\r\n                                class=\"invalid-data\">\r\n                                Please enter current address </small>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Documents Upload</label>\r\n                            <input class=\"form-control\" formControlName=\"documentsUpload\" type=\"file\"\r\n                                placeholder=\"Enter Documents Upload\" (change)=\"changeListenerDocument($event)\">\r\n                            <img [src]=\"document\" *ngIf=\"document\" style=\"width: 150px;margin: 10px;\">\r\n                            <small class=\"form-text text-muted invalid-data\"\r\n                                *ngIf=\"tenantForm.controls['documentsUpload'].invalid && (tenantForm.controls['documentsUpload'].dirty || tenantForm.controls['documentsUpload'].touched)\"\r\n                                class=\"invalid-data\">\r\n                                Please enter documents upload </small>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Tenant Photo</label>\r\n                            <input class=\"form-control\" formControlName=\"tenantPhoto\" type=\"file\"\r\n                                placeholder=\"Enter Tenant Photo\" (change)=\"changeListenerPhoto($event)\">\r\n                            <img [src]=\"image\" *ngIf=\"image\" style=\"width: 150px;margin: 10px;\">\r\n                            <small class=\"form-text text-muted invalid-data\"\r\n                                *ngIf=\"tenantForm.controls['tenantPhoto'].invalid && (tenantForm.controls['tenantPhoto'].dirty || tenantForm.controls['tenantPhoto'].touched)\"\r\n                                class=\"invalid-data\">\r\n                                Please enter tenant photo </small>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Agreement Type</label>\r\n                            <!-- <input class=\"form-control\" formControlName=\"agreementType\" placeholder=\"Enter Agreement Type\"> -->\r\n                            <select class=\"form-control\" formControlName=\"agreementType\">\r\n                                <option value=\"\">Select Agreement Type</option>\r\n                                <option value=\"fixed\">Fixed</option>\r\n                                <option value=\"monthly\">Monthly</option>\r\n                            </select>\r\n                            <small class=\"form-text text-muted invalid-data\"\r\n                                *ngIf=\"tenantForm.controls['agreementType'].invalid && (tenantForm.controls['agreementType'].dirty || tenantForm.controls['agreementType'].touched)\"\r\n                                class=\"invalid-data\">\r\n                                Please enter agreement type </small>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                            <label>Background Verification Status</label>\r\n                            <!-- <input class=\"form-control\" formControlName=\"backgroundVerificationStatus\" placeholder=\"Enter Background Verification Status\"> -->\r\n                            <select class=\"form-control\" formControlName=\"backgroundVerificationStatus\">\r\n                                <option value=\"\">Select Status</option>\r\n                                <option value=\"done\">Done</option>\r\n                                <option value=\"pending\">Pending</option>\r\n                                <option value=\"rejected\">Rejected</option>\r\n                            </select>\r\n\r\n                            <small class=\"form-text text-muted invalid-data\"\r\n                                *ngIf=\"tenantForm.controls['backgroundVerificationStatus'].invalid && (tenantForm.controls['backgroundVerificationStatus'].dirty || tenantForm.controls['backgroundVerificationStatus'].touched)\"\r\n                                class=\"invalid-data\">\r\n                                Please enter background verification status </small>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\"\r\n        (click)=\"submit(tenantForm.value)\">Next</button>\r\n</div>\r\n\r\n<!-- aggrement starts here -->\r\n<div  *ngIf=\"stage\">\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">agreement</a></li>\r\n                <li class=\"breadcrumb-item \">Add</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">agreement Add</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-12\" [formGroup]=\"agreementForm\" >\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n\r\n                    <!-- <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                        <label>Property Id</label>\r\n                        <input class=\"form-control\" formControlName=\"propertyId\" placeholder=\"Enter Property Id\">\r\n                        <small class=\"form-text text-muted invalid-data\"\r\n                            *ngIf=\"agreementForm.controls['propertyId'].invalid && (agreementForm.controls['propertyId'].dirty || agreementForm.controls['propertyId'].touched)\"\r\n                            class=\"invalid-data\">\r\n                            Please enter property id </small>\r\n                    </div> -->\r\n\r\n\r\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                        <label>User Type</label>\r\n                        <input class=\"form-control\" formControlName=\"userType\" placeholder=\"Enter User Type\">\r\n                        <small class=\"form-text text-muted invalid-data\"\r\n                            *ngIf=\"agreementForm.controls['userType'].invalid && (agreementForm.controls['userType'].dirty || agreementForm.controls['userType'].touched)\"\r\n                            class=\"invalid-data\">\r\n                            Please enter user type </small>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                        <label>Photo</label>\r\n                        <input class=\"form-control\" formControlName=\"photo\" type=\"file\" placeholder=\"Enter Photo\">\r\n                        <small class=\"form-text text-muted invalid-data\"\r\n                            *ngIf=\"agreementForm.controls['photo'].invalid && (agreementForm.controls['photo'].dirty || agreementForm.controls['photo'].touched)\"\r\n                            class=\"invalid-data\">\r\n                            Please enter photo </small>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                        <label>From Date</label>\r\n                        <input class=\"form-control\" formControlName=\"fromDate\" type=\"date\" placeholder=\"Enter From Date\">\r\n                        <small class=\"form-text text-muted invalid-data\"\r\n                            *ngIf=\"agreementForm.controls['fromDate'].invalid && (agreementForm.controls['fromDate'].dirty || agreementForm.controls['fromDate'].touched)\"\r\n                            class=\"invalid-data\">\r\n                            Please enter from date </small>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                        <label>To Date</label>\r\n                        <input class=\"form-control\" formControlName=\"toDate\" type=\"date\" placeholder=\"Enter To Date\">\r\n                        <small class=\"form-text text-muted invalid-data\"\r\n                            *ngIf=\"agreementForm.controls['toDate'].invalid && (agreementForm.controls['toDate'].dirty || agreementForm.controls['toDate'].touched)\"\r\n                            class=\"invalid-data\">\r\n                            Please enter to date </small>\r\n                    </div>\r\n\r\n                    <!-- <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                        <label>Is Available</label>\r\n\r\n                        <select class=\"form-control\" formControlName=\"isAvailable\">\r\n                            <option value=\"\">Select Is Available</option>\r\n                            <option value=\"1\">Yes</option>\r\n                            <option value=\"0\">No</option>\r\n                        </select>\r\n                        <small class=\"form-text text-muted invalid-data\"\r\n                            *ngIf=\"agreementForm.controls['isAvailable'].invalid && (agreementForm.controls['isAvailable'].dirty || agreementForm.controls['isAvailable'].touched)\"\r\n                            class=\"invalid-data\">\r\n                            Please select is available </small>\r\n                    </div> -->\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                        <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\"\r\n                            [disabled]=\"!agreementForm.valid\" (click)=\"agreementSubmit(agreementForm.value)\">Submit</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n<!-- aggrement ends here -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>dashboard works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leaseType/lease-type-add/lease-type-add.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leaseType/lease-type-add/lease-type-add.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">leaseType</a></li>\r\n                <li class=\"breadcrumb-item \">Add</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">leaseType Add</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-12\" [formGroup]=\"leaseTypeForm\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n            \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Name</label>\r\n<input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"leaseTypeForm.controls['name'].invalid && (leaseTypeForm.controls['name'].dirty || leaseTypeForm.controls['name'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter name          </small>\r\n</div>\r\n\r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Is Available</label>\r\n\r\n<select class=\"form-control\" formControlName=\"isAvailable\">\r\n<option value=\"\">Select Is Available</option>\r\n<option value=\"1\">Yes</option>\r\n<option value=\"0\">No</option>\r\n</select>\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"leaseTypeForm.controls['isAvailable'].invalid && (leaseTypeForm.controls['isAvailable'].dirty || leaseTypeForm.controls['isAvailable'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease select is available          </small>\r\n</div>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!leaseTypeForm.valid\"  (click)=\"submit(leaseTypeForm.value)\">Submit</button>\r\n        </div>\r\n    </div>\r\n </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leaseType/lease-type-details/lease-type-details.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leaseType/lease-type-details/lease-type-details.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row breadcrum\">\r\n    <div class=\"col-sm-12\">\r\n        \r\n        <div class=\"row pull-right\">\r\n\r\n        \r\n        <button (click)=\"toggleStatus(leaseType.id,0)\" *ngIf=\"leaseType['isAvailable']==1\" class=\"btn btn-info\"><i class=\"fa fa-eye\"></i>Make InActive</button>\r\n        <button (click)=\"toggleStatus(leaseType.id,1)\" *ngIf=\"leaseType['isAvailable']==0\" class=\"btn btn-info\"><i class=\"fa fa-eye-slash\"></i>Make Active</button>\r\n        <button  (click)=\"edit(leaseType)\" class=\"btn btn-info\"><i class=\"fa fa-edit\"></i>Edit</button>\r\n        <button  (click)=\"delete(leaseType)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i>Delete</button>\r\n    </div>\r\n    <h5 class=\"page-title\">leaseType List</h5>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n          \r\n              \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Name</label>\r\n          <span>{{leaseType['name']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <span>{{leaseType['isAvailable']}}</span>\r\n        </div>\r\n\r\n          \r\n          </div>\r\n  \r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n  \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leaseType/lease-type-edit/lease-type-edit.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leaseType/lease-type-edit/lease-type-edit.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">leaseType</a></li>\r\n                <li class=\"breadcrumb-item \">Update</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">leaseType Update</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-12\" [formGroup]=\"leaseTypeForm\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n            \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Name</label>\r\n<input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"leaseTypeForm.controls['name'].invalid && (leaseTypeForm.controls['name'].dirty || leaseTypeForm.controls['name'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter name          </small>\r\n</div>\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Is Available</label>\r\n<input class=\"form-control\" formControlName=\"isAvailable\" placeholder=\"Enter Is Available\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"leaseTypeForm.controls['isAvailable'].invalid && (leaseTypeForm.controls['isAvailable'].dirty || leaseTypeForm.controls['isAvailable'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter is available          </small>\r\n</div>\r\n\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!leaseTypeForm.valid\"  (click)=\"submit(leaseTypeForm.value)\">Submit</button>\r\n        </div>\r\n    </div>\r\n </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leaseType/lease-type-list/lease-type-list.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leaseType/lease-type-list/lease-type-list.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">leaseType</a></li>\r\n                <li class=\"breadcrumb-item \">List</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">leaseType List</h4>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n<div class=\"col-lg-12\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n\r\n    <h4 class=\"mt-0 header-title\">List of leaseType</h4>\r\n   <p>&nbsp;</p>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-striped mb-0\">\r\n            <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th>Name</th>\r\n                    <th>Actions</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let items of json;let i=index\">\r\n                    <th scope=\"row\">#{{i+1}}</th>\r\n                    <td>{{items.name}}</td>\r\n                    <td><i class=\"fa fa-eye\" (click)=\"details(items)\"></i> view</td>\r\n                </tr>\r\n                <tr *ngIf=\"!json.length\">\r\n                    <td colspan=\"4\" style=\"text-align: center;\">No Items found to display</td>\r\n                </tr>\r\n            \r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n</div>\r\n</div> <!-- end col -->\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notify/notify.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notify/notify.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>notify works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/owner-add/owner-add.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/owner-add/owner-add.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"col-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"page-title-right\">\r\n                        <ol class=\"breadcrumb m-0\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">owner</a></li>\r\n                            <li class=\"breadcrumb-item \">Add</li>\r\n                        </ol>\r\n                    </div>\r\n                    <h4 class=\"page-title\">owner Add</h4>\r\n                </div>\r\n            </div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-12\" [formGroup]=\"ownerForm\">\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                        \r\n        <!-- <div class=\"col-xs-12 col-sm-6 col-md-6\"> \r\n          <label>User Id</label>\r\n          <input class=\"form-control\" formControlName=\"userId\" placeholder=\"Enter User Id\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"ownerForm.controls['userId'].invalid && (ownerForm.controls['userId'].dirty || ownerForm.controls['userId'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter user id          </small>\r\n        </div>-->\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Name</label>\r\n          <input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"ownerForm.controls['name'].invalid && (ownerForm.controls['name'].dirty || ownerForm.controls['name'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter name          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Email</label>\r\n          <input class=\"form-control\" formControlName=\"email\" placeholder=\"Enter Email\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"ownerForm.controls['email'].invalid && (ownerForm.controls['email'].dirty || ownerForm.controls['email'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter email          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Mobile Number</label>\r\n          <input class=\"form-control\" formControlName=\"mobileNumber\" placeholder=\"Enter Mobile Number\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"ownerForm.controls['mobileNumber'].invalid && (ownerForm.controls['mobileNumber'].dirty || ownerForm.controls['mobileNumber'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter mobile number          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Current Address</label>\r\n          <input class=\"form-control\" formControlName=\"currentAddress\" placeholder=\"Enter Current Address\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"ownerForm.controls['currentAddress'].invalid && (ownerForm.controls['currentAddress'].dirty || ownerForm.controls['currentAddress'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter current address          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Documents Upload</label>\r\n          <input class=\"form-control\" formControlName=\"documentsUpload\" type=\"file\" placeholder=\"Enter Documents Upload\" (change)=\"changeListenerDocument($event)\">\r\n          <img [src]=\"document\" *ngIf=\"document\" style=\"width: 150px;margin: 10px;\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"ownerForm.controls['documentsUpload'].invalid && (ownerForm.controls['documentsUpload'].dirty || ownerForm.controls['documentsUpload'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter documents upload          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Owner Photo</label>\r\n          <input class=\"form-control\" formControlName=\"ownerPhoto\" type=\"file\" placeholder=\"Enter Owner Photo\" (change)=\"changeListenerPhoto($event)\">\r\n          <img [src]=\"image\" *ngIf=\"image\" style=\"width: 150px;margin: 10px;\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"ownerForm.controls['ownerPhoto'].invalid && (ownerForm.controls['ownerPhoto'].dirty || ownerForm.controls['ownerPhoto'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter owner photo          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Agreement Type</label>\r\n          <select class=\"form-control\" formControlName=\"agreementType\">\r\n            <option value=\"\">Select Agreement Type</option>\r\n            <option value=\"fixed\">Fixed</option>\r\n            <option value=\"monthly\">Monthly</option>\r\n          </select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"ownerForm.controls['agreementType'].invalid && (ownerForm.controls['agreementType'].dirty || ownerForm.controls['agreementType'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter agreement type          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Background Verification Status</label>\r\n          <!-- <input class=\"form-control\" formControlName=\"backgroundVerificationStatus\" placeholder=\"Enter Background Verification Status\"> -->\r\n          <select class=\"form-control\" formControlName=\"backgroundVerificationStatus\">\r\n            <option value=\"\">Select Status</option>\r\n            <option value=\"done\">Done</option>\r\n            <option value=\"pending\">Pending</option>\r\n            <option value=\"rejected\">Rejected</option>\r\n          </select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"ownerForm.controls['backgroundVerificationStatus'].invalid && (ownerForm.controls['backgroundVerificationStatus'].dirty || ownerForm.controls['backgroundVerificationStatus'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter background verification status          </small>\r\n        </div>\r\n\r\n                <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          \r\n          <select class=\"form-control\" formControlName=\"isAvailable\">\r\n            <option value=\"\">Select Is Available</option>\r\n            <option value=\"1\">Yes</option>\r\n            <option value=\"0\">No</option>\r\n          </select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"ownerForm.controls['isAvailable'].invalid && (ownerForm.controls['isAvailable'].dirty || ownerForm.controls['isAvailable'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please select is available          </small>\r\n        </div>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                        <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!ownerForm.valid\"  (click)=\"submit(ownerForm.value)\">Submit</button>\r\n                    </div>\r\n                </div>\r\n             </div>\r\n        \r\n     </div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/owner-details/owner-details.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/owner-details/owner-details.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row breadcrum\">\r\n    <div class=\"col-sm-12\">\r\n        \r\n        <div class=\"row pull-right\">\r\n\r\n        \r\n        <button (click)=\"toggleStatus(owner.id,0)\" *ngIf=\"owner['isAvailable']==1\" class=\"btn btn-info\"><i class=\"fa fa-eye\"></i>Make InActive</button>\r\n        <button (click)=\"toggleStatus(owner.id,1)\" *ngIf=\"owner['isAvailable']==0\" class=\"btn btn-info\"><i class=\"fa fa-eye-slash\"></i>Make Active</button>\r\n        <button  (click)=\"edit(owner)\" class=\"btn btn-info\"><i class=\"fa fa-edit\"></i>Edit</button>\r\n        <button  (click)=\"delete(owner)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i>Delete</button>\r\n    </div>\r\n    <h5 class=\"page-title\">owner List</h5>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n          \r\n              \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>User Id</label>\r\n          <span>{{owner['userId']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Name</label>\r\n          <span>{{owner['name']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Email</label>\r\n          <span>{{owner['email']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Mobile Number</label>\r\n          <span>{{owner['mobileNumber']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Current Address</label>\r\n          <span>{{owner['currentAddress']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Documents Upload</label>\r\n          <span>{{owner['documentsUpload']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Owner Photo</label>\r\n          <span>{{owner['ownerPhoto']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Agreement Type</label>\r\n          <span>{{owner['agreementType']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Background Verification Status</label>\r\n          <span>{{owner['backgroundVerificationStatus']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <span>{{owner['isAvailable']}}</span>\r\n        </div>\r\n\r\n          \r\n          </div>\r\n  \r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n  \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/owner-edit/owner-edit.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/owner-edit/owner-edit.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"col-12\">\r\n  <div class=\"page-title-box\">\r\n      <div class=\"page-title-right\">\r\n          <ol class=\"breadcrumb m-0\">\r\n              <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">owner</a></li>\r\n              <li class=\"breadcrumb-item \">Update</li>\r\n          </ol>\r\n      </div>\r\n      <h4 class=\"page-title\">owner Update</h4>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-12\" [formGroup]=\"ownerForm\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n  <div class=\"row\">\r\n          \r\n<!-- <div class=\"col-xs-12 col-sm-6 col-md-6\"> \r\n<label>User Id</label>\r\n<input class=\"form-control\" formControlName=\"userId\" placeholder=\"Enter User Id\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"ownerForm.controls['userId'].invalid && (ownerForm.controls['userId'].dirty || ownerForm.controls['userId'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter user id          </small>\r\n</div>-->\r\n\r\n  \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Name</label>\r\n<input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"ownerForm.controls['name'].invalid && (ownerForm.controls['name'].dirty || ownerForm.controls['name'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter name          </small>\r\n</div>\r\n\r\n  \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Email</label>\r\n<input class=\"form-control\" formControlName=\"email\" placeholder=\"Enter Email\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"ownerForm.controls['email'].invalid && (ownerForm.controls['email'].dirty || ownerForm.controls['email'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter email          </small>\r\n</div>\r\n\r\n  \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Mobile Number</label>\r\n<input class=\"form-control\" formControlName=\"mobileNumber\" placeholder=\"Enter Mobile Number\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"ownerForm.controls['mobileNumber'].invalid && (ownerForm.controls['mobileNumber'].dirty || ownerForm.controls['mobileNumber'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter mobile number          </small>\r\n</div>\r\n\r\n  \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Current Address</label>\r\n<input class=\"form-control\" formControlName=\"currentAddress\" placeholder=\"Enter Current Address\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"ownerForm.controls['currentAddress'].invalid && (ownerForm.controls['currentAddress'].dirty || ownerForm.controls['currentAddress'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter current address          </small>\r\n</div>\r\n\r\n  \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Documents Upload</label>\r\n<input class=\"form-control\" formControlName=\"documentsUpload\" type=\"file\" placeholder=\"Enter Documents Upload\" (change)=\"changeListenerDocument($event)\">\r\n<img [src]=\"document\" *ngIf=\"document\" style=\"width: 150px;margin: 10px;\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"ownerForm.controls['documentsUpload'].invalid && (ownerForm.controls['documentsUpload'].dirty || ownerForm.controls['documentsUpload'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter documents upload          </small>\r\n</div>\r\n\r\n  \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Owner Photo</label>\r\n<input class=\"form-control\" formControlName=\"ownerPhoto\" type=\"file\" placeholder=\"Enter Owner Photo\" (change)=\"changeListenerPhoto($event)\">\r\n<img [src]=\"image\" *ngIf=\"image\" style=\"width: 150px;margin: 10px;\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"ownerForm.controls['ownerPhoto'].invalid && (ownerForm.controls['ownerPhoto'].dirty || ownerForm.controls['ownerPhoto'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter owner photo          </small>\r\n</div>\r\n\r\n  \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Agreement Type</label>\r\n<select class=\"form-control\" formControlName=\"agreementType\">\r\n<option value=\"\">Select Agreement Type</option>\r\n<option value=\"fixed\">Fixed</option>\r\n<option value=\"monthly\">Monthly</option>\r\n</select>\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"ownerForm.controls['agreementType'].invalid && (ownerForm.controls['agreementType'].dirty || ownerForm.controls['agreementType'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter agreement type          </small>\r\n</div>\r\n\r\n  \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Background Verification Status</label>\r\n<!-- <input class=\"form-control\" formControlName=\"backgroundVerificationStatus\" placeholder=\"Enter Background Verification Status\"> -->\r\n<select class=\"form-control\" formControlName=\"backgroundVerificationStatus\">\r\n<option value=\"\">Select Status</option>\r\n<option value=\"done\">Done</option>\r\n<option value=\"pending\">Pending</option>\r\n<option value=\"rejected\">Rejected</option>\r\n</select>\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"ownerForm.controls['backgroundVerificationStatus'].invalid && (ownerForm.controls['backgroundVerificationStatus'].dirty || ownerForm.controls['backgroundVerificationStatus'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter background verification status          </small>\r\n</div>\r\n\r\n  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Is Available</label>\r\n\r\n<select class=\"form-control\" formControlName=\"isAvailable\">\r\n<option value=\"\">Select Is Available</option>\r\n<option value=\"1\">Yes</option>\r\n<option value=\"0\">No</option>\r\n</select>\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"ownerForm.controls['isAvailable'].invalid && (ownerForm.controls['isAvailable'].dirty || ownerForm.controls['isAvailable'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease select is available          </small>\r\n</div>\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n          <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!ownerForm.valid\"  (click)=\"submit(ownerForm.value)\">Submit</button>\r\n      </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/owner-list/owner-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/owner-list/owner-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div class=\"col-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"page-title-right\">\r\n                        <ol class=\"breadcrumb m-0\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">owner</a></li>\r\n                            <li class=\"breadcrumb-item \">List</li>\r\n                        </ol>\r\n                    </div>\r\n                    <h4 class=\"page-title\">owner List</h4>\r\n                </div>\r\n            </div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n\r\n                <h4 class=\"mt-0 header-title\">List of owner</h4>\r\n               <p>&nbsp;</p>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-striped mb-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>Name</th>\r\n                                <th>Mobile Number</th>\r\n                                <th>Email Address</th>\r\n                                <th>Actions</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let items of json;let i=index\">\r\n                                <th scope=\"row\">#{{i+1}}</th>\r\n                                <td>{{items.name}}</td>\r\n                                <td>{{items.mobileNumber}}</td>\r\n                                <td>{{items.email}}</td>\r\n                                \r\n                                <td><i class=\"fa fa-eye\" (click)=\"details(items)\"></i> view</td>\r\n                            </tr>\r\n                            <tr *ngIf=\"!json.length\">\r\n                                <td colspan=\"4\" style=\"text-align: center;\">No Items found to display</td>\r\n                            </tr>\r\n                        \r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> <!-- end col -->\r\n\r\n\r\n</div>\r\n\r\n\r\n \r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/property/property-add/property-add.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/property/property-add/property-add.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"col-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"page-title-right\">\r\n                        <ol class=\"breadcrumb m-0\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">property</a></li>\r\n                            <li class=\"breadcrumb-item \">Add</li>\r\n                        </ol>\r\n                    </div>\r\n                    <h4 class=\"page-title\">property Add</h4>\r\n                </div>\r\n            </div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-12\" [formGroup]=\"propertyForm\">\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                        \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Name</label>\r\n          <input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"propertyForm.controls['name'].invalid && (propertyForm.controls['name'].dirty || propertyForm.controls['name'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter name          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Address</label>\r\n          <input class=\"form-control\" formControlName=\"address\" placeholder=\"Enter Address\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"propertyForm.controls['address'].invalid && (propertyForm.controls['address'].dirty || propertyForm.controls['address'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter address          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Property Type</label>\r\n       <!-- <input class=\"form-control\" formControlName=\"propertyType\" placeholder=\"Enter Property Type\">-->\r\n          <select class='form-control' formControlName=\"propertyType\" placeholder=\"Enter Property Type\">\r\n            <option value=\"\">Select Property Type</option>\r\n            <option *ngFor=\"let items of propertTypes\" [value]=\"items['name']\">{{items['name']}}</option></select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"propertyForm.controls['propertyType'].invalid && (propertyForm.controls['propertyType'].dirty || propertyForm.controls['propertyType'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter property type          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Lease Type</label>\r\n         <!-- <input class=\"form-control\" formControlName=\"leaseType\" placeholder=\"Enter Lease Type\">-->\r\n          <select class='form-control' formControlName=\"leaseType\" placeholder=\"Enter Lease Type\">\r\n            <option value=\"\">Select Lease Type</option>\r\n            <option *ngFor=\"let items of leaseTypes\" [value]=\"items['name']\">{{items['name']}}</option></select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"propertyForm.controls['leaseType'].invalid && (propertyForm.controls['leaseType'].dirty || propertyForm.controls['leaseType'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter lease type          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Description</label>\r\n          <input class=\"form-control\" formControlName=\"description\" placeholder=\"Enter Description\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"propertyForm.controls['description'].invalid && (propertyForm.controls['description'].dirty || propertyForm.controls['description'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter description          </small>\r\n        </div>\r\n\r\n                \r\n        <!-- <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Rental Type ID</label>\r\n          <select class='form-control' formControlName=\"rentalTypeId\" placeholder=\"Enter Rental Type ID\">\r\n            <option value=\"\">Select Rental Type</option>\r\n            <option *ngFor=\"let items of rentalTypes\" [value]=\"items['name']\">{{items['name']}}</option></select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"propertyForm.controls['rentalTypeId'].invalid && (propertyForm.controls['rentalTypeId'].dirty || propertyForm.controls['rentalTypeId'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter rental type id          </small>\r\n        </div> -->\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Security Deposit</label>\r\n          <input class=\"form-control\" formControlName=\"securityDeposit\" placeholder=\"Enter Security Deposit\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"propertyForm.controls['securityDeposit'].invalid && (propertyForm.controls['securityDeposit'].dirty || propertyForm.controls['securityDeposit'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter security deposit          </small>\r\n        </div>\r\n\r\n                <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          \r\n          <select class=\"form-control\" formControlName=\"isAvailable\">\r\n            <option value=\"\">Select Is Available</option>\r\n            <option value=\"1\">Yes</option>\r\n            <option value=\"0\">No</option>\r\n          </select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"propertyForm.controls['isAvailable'].invalid && (propertyForm.controls['isAvailable'].dirty || propertyForm.controls['isAvailable'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please select is available          </small>\r\n        </div>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                        <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!propertyForm.valid\"  (click)=\"submit(propertyForm.value)\">Submit</button>\r\n                    </div>\r\n                </div>\r\n             </div>\r\n        </div>\r\n     </div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/property/property-details/property-details.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/property/property-details/property-details.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row breadcrum\">\r\n    <div class=\"col-sm-12\">\r\n        \r\n        <div class=\"row pull-right\">\r\n\r\n        \r\n        <button (click)=\"toggleStatus(property.id,0)\" *ngIf=\"property['isAvailable']==1\" class=\"btn btn-info\"><i class=\"fa fa-eye\"></i>Make InActive</button>\r\n        <button (click)=\"toggleStatus(property.id,1)\" *ngIf=\"property['isAvailable']==0\" class=\"btn btn-info\"><i class=\"fa fa-eye-slash\"></i>Make Active</button>\r\n        <button  (click)=\"edit(property)\" class=\"btn btn-info\"><i class=\"fa fa-edit\"></i>Edit</button>\r\n        <button  (click)=\"delete(property)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i>Delete</button>\r\n    </div>\r\n    <h5 class=\"page-title\">property List</h5>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n          \r\n              \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Name</label>\r\n          <span>{{property['name']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Address</label>\r\n          <span>{{property['address']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Property Type</label>\r\n          <span>{{property['propertyType']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Lease Type</label>\r\n          <span>{{property['leaseType']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Description</label>\r\n          <span>{{property['description']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Rental Type ID</label>\r\n          <span>{{property['rentalTypeId']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Security Deposit</label>\r\n          <span>{{property['securityDeposit']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <span>{{property['isAvailable']}}</span>\r\n        </div>\r\n\r\n          \r\n          </div>\r\n  \r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n  \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/property/property-edit/property-edit.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/property/property-edit/property-edit.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"col-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"page-title-right\">\r\n                        <ol class=\"breadcrumb m-0\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">property</a></li>\r\n                            <li class=\"breadcrumb-item \">Update</li>\r\n                        </ol>\r\n                    </div>\r\n                    <h4 class=\"page-title\">property Update</h4>\r\n                </div>\r\n            </div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-12\" [formGroup]=\"propertyForm\">\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                        \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Name</label>\r\n          <input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"propertyForm.controls['name'].invalid && (propertyForm.controls['name'].dirty || propertyForm.controls['name'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter name          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Address</label>\r\n          <input class=\"form-control\" formControlName=\"address\" placeholder=\"Enter Address\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"propertyForm.controls['address'].invalid && (propertyForm.controls['address'].dirty || propertyForm.controls['address'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter address          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Property Type</label>\r\n          <select class='form-control' formControlName=\"propertyType\" placeholder=\"Enter Property Type\">\r\n          <option value=\"\">Select Property Type</option>\r\n          <option *ngFor=\"let items of propertTypes\" [value]=\"items['name']\">{{items['name']}}</option></select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"propertyForm.controls['propertyType'].invalid && (propertyForm.controls['propertyType'].dirty || propertyForm.controls['propertyType'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter property type          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Lease Type</label>\r\n          <select class='form-control' formControlName=\"leaseType\" placeholder=\"Enter Lease Type\">\r\n            <option value=\"\">Select Lease Type</option>\r\n            <option *ngFor=\"let items of leaseTypes\" [value]=\"items['name']\">{{items['name']}}</option></select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"propertyForm.controls['leaseType'].invalid && (propertyForm.controls['leaseType'].dirty || propertyForm.controls['leaseType'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter lease type          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Description</label>\r\n          <input class=\"form-control\" formControlName=\"description\" placeholder=\"Enter Description\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"propertyForm.controls['description'].invalid && (propertyForm.controls['description'].dirty || propertyForm.controls['description'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter description          </small>\r\n        </div>\r\n\r\n                \r\n        <!-- <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Rental Type ID</label>\r\n          <select class='form-control' formControlName=\"rentalTypeId\" placeholder=\"Enter Rental Type ID\">\r\n            <option value=\"\">Select Rental Type</option>\r\n            <option *ngFor=\"let items of rentalTypes\" [value]=\"items['name']\">{{items['name']}}</option></select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"propertyForm.controls['rentalTypeId'].invalid && (propertyForm.controls['rentalTypeId'].dirty || propertyForm.controls['rentalTypeId'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter rental type id          </small>\r\n        </div> -->\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Security Deposit</label>\r\n          <input class=\"form-control\" formControlName=\"securityDeposit\" placeholder=\"Enter Security Deposit\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"propertyForm.controls['securityDeposit'].invalid && (propertyForm.controls['securityDeposit'].dirty || propertyForm.controls['securityDeposit'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter security deposit          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <select class=\"form-control\" formControlName=\"isAvailable\">\r\n            <option value=\"\">Select Is Available</option>\r\n            <option value=\"1\">Yes</option>\r\n            <option value=\"0\">No</option>\r\n          </select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"propertyForm.controls['isAvailable'].invalid && (propertyForm.controls['isAvailable'].dirty || propertyForm.controls['isAvailable'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter is available          </small>\r\n        </div>\r\n\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                        <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!propertyForm.valid\"  (click)=\"submit(propertyForm.value)\">Submit</button>\r\n                    </div>\r\n                </div>\r\n             </div>\r\n        </div>\r\n     </div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/property/property-list/property-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/property/property-list/property-list.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div class=\"col-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"page-title-right\">\r\n                        <ol class=\"breadcrumb m-0\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">property</a></li>\r\n                            <li class=\"breadcrumb-item \">List</li>\r\n                        </ol>\r\n                    </div>\r\n                    <h4 class=\"page-title\">property List</h4>\r\n                </div>\r\n            </div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n\r\n                <h4 class=\"mt-0 header-title\">List of property</h4>\r\n               <p>&nbsp;</p>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-striped mb-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>Name</th>\r\n                                <th>Address</th>\r\n                                <th>Lease Type</th>\r\n                                <th>Actions</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let items of json;let i=index\">\r\n                                <th scope=\"row\">#{{i+1}}</th>\r\n                                <td>{{items.name}}</td>\r\n                                <td>{{items.address}}</td>\r\n                                <td>{{items.leaseType}}</td>\r\n                                <td><i class=\"fa fa-eye\" (click)=\"details(items)\"></i> view</td>\r\n                            </tr>\r\n                            <tr *ngIf=\"!json.length\">\r\n                                <td colspan=\"4\" style=\"text-align: center;\">No Items found to display</td>\r\n                            </tr>\r\n                        \r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> <!-- end col -->\r\n\r\n\r\n</div>\r\n\r\n\r\n \r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propertyType/property-type-add/property-type-add.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propertyType/property-type-add/property-type-add.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">propertyType</a></li>\r\n                <li class=\"breadcrumb-item \">Add</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">propertyType Add</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-12\" [formGroup]=\"propertyTypeForm\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n            \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Name</label>\r\n<input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"propertyTypeForm.controls['name'].invalid && (propertyTypeForm.controls['name'].dirty || propertyTypeForm.controls['name'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter name          </small>\r\n</div>\r\n\r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Is Available</label>\r\n\r\n<select class=\"form-control\" formControlName=\"isAvailable\">\r\n<option value=\"\">Select Is Available</option>\r\n<option value=\"1\">Yes</option>\r\n<option value=\"0\">No</option>\r\n</select>\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"propertyTypeForm.controls['isAvailable'].invalid && (propertyTypeForm.controls['isAvailable'].dirty || propertyTypeForm.controls['isAvailable'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease select is available          </small>\r\n</div>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!propertyTypeForm.valid\"  (click)=\"submit(propertyTypeForm.value)\">Submit</button>\r\n        </div>\r\n    </div>\r\n </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propertyType/property-type-details/property-type-details.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propertyType/property-type-details/property-type-details.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row breadcrum\">\r\n    <div class=\"col-sm-12\">\r\n        \r\n        <div class=\"row pull-right\">\r\n\r\n        \r\n        <button (click)=\"toggleStatus(propertyType.id,0)\" *ngIf=\"propertyType['isAvailable']==1\" class=\"btn btn-warning\"><i class=\"fa fa-eye\"></i>Make InActive</button>\r\n        <button (click)=\"toggleStatus(propertyType.id,1)\" *ngIf=\"propertyType['isAvailable']==0\" class=\"btn btn-warning\"><i class=\"fa fa-eye-slash\"></i>Make Active</button>\r\n        <button  (click)=\"edit(propertyType)\" class=\"btn btn-info\"><i class=\"fa fa-edit\"></i>Edit</button>\r\n        <button  (click)=\"delete(propertyType)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i>Delete</button>\r\n    </div>\r\n    <h5 class=\"page-title\">propertyType List</h5>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n          \r\n              \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Name</label>\r\n          <span>{{propertyType['name']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <span>{{propertyType['isAvailable']}}</span>\r\n        </div>\r\n\r\n          \r\n          </div>\r\n  \r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n  \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propertyType/property-type-edit/property-type-edit.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propertyType/property-type-edit/property-type-edit.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">propertyType</a></li>\r\n                <li class=\"breadcrumb-item \">Add</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">propertyType Update</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-12\" [formGroup]=\"propertyTypeForm\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n            \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Name</label>\r\n<input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"propertyTypeForm.controls['name'].invalid && (propertyTypeForm.controls['name'].dirty || propertyTypeForm.controls['name'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter name          </small>\r\n</div>\r\n\r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Is Available</label>\r\n\r\n<select class=\"form-control\" formControlName=\"isAvailable\">\r\n<option value=\"\">Select Is Available</option>\r\n<option value=\"1\">Yes</option>\r\n<option value=\"0\">No</option>\r\n</select>\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"propertyTypeForm.controls['isAvailable'].invalid && (propertyTypeForm.controls['isAvailable'].dirty || propertyTypeForm.controls['isAvailable'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease select is available          </small>\r\n</div>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!propertyTypeForm.valid\"  (click)=\"submit(propertyTypeForm.value)\">Submit</button>\r\n        </div>\r\n    </div>\r\n </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propertyType/property-type-list/property-type-list.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propertyType/property-type-list/property-type-list.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"page-wrapper-img\">\r\n    <div class=\"page-wrapper-img-inner\">\r\n       <!-- <app-top-profile></app-top-profile> -->\r\n        <!-- Page-Title -->\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"float-right align-item-center mt-2\">\r\n                        <button class=\"btn btn-info px-4 align-self-center report-btn\" (click)=\"add()\">Add</button>\r\n                    </div>\r\n                    <h4 class=\"page-title mb-2\"><i class=\"mdi mdi-format-list-bulleted mr-2\"></i>PropertyType List</h4>  \r\n                    <div class=\"\">\r\n                        <ol class=\"breadcrumb\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">PropertyType</a></li>\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">List</a></li>\r\n                        </ol>\r\n                    </div>                                      \r\n                </div><!--end page title box-->\r\n            </div><!--end col-->\r\n        </div><!--end row-->\r\n        <!-- end page title end breadcrumb -->\r\n    </div><!--end page-wrapper-img-inner-->\r\n</div>\r\n\r\n\r\n<div class=\"page-wrapper\">\r\n    <div class=\"page-wrapper-inner\">\r\n\r\n        <!-- Left Sid enav -->\r\n        \r\n        <!-- end left-sidenav-->\r\n\r\n        <!-- Page Content-->\r\n        <div class=\"page-content\">\r\n            <div class=\"container-fluid\"> \r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-body\">        \r\n                                <!-- <h4 class=\"mt-0 header-title\">Textual inputs</h4>\r\n                                <p class=\"text-muted mb-4\">Here are examples of <code class=\"highlighter-rouge\">.form-control</code> applied to each\r\n                                    textual HTML5 <code class=\"highlighter-rouge\">&lt;input&gt;</code> <code class=\"highlighter-rouge\">type</code>.\r\n                                </p> -->\r\n                                <div class=\"table-responsive\">\r\n                                    <table class=\"table mb-0\">\r\n                                        <thead class=\"thead-light\">\r\n                                            <tr>\r\n                                                <th>#</th>\r\n                                                <th>Property Name</th>\r\n                                                <th>Actions</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let items of json;let i=index\">\r\n                                                <th scope=\"row\">#{{i+1}}</th>\r\n                                                <td>{{items.name}}</td>\r\n                                                <td><i class=\"fa fa-eye\" (click)=\"details(items)\"></i> view</td>\r\n                                            </tr>\r\n                                            <tr *ngIf=\"!json.length\">\r\n                                                <td colspan=\"4\" style=\"text-align: center;\">No Items found to display</td>\r\n                                            </tr>\r\n                                        \r\n                                        </tbody>\r\n                                    </table><!--end /table-->\r\n                                </div>                                                                  \r\n                            </div><!--end card-body-->\r\n                        </div><!--end card-->\r\n                    </div><!--end col-->\r\n                </div>\r\n                \r\n            </div><!-- container -->\r\n\r\n           <app-footer></app-footer>\r\n        </div>\r\n        <!-- end page content -->\r\n    </div>\r\n    <!--end page-wrapper-inner -->\r\n</div>\r\n\r\n\r\n \r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rentalType/rental-type-add/rental-type-add.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rentalType/rental-type-add/rental-type-add.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">rentalType</a></li>\r\n                <li class=\"breadcrumb-item \">Add</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">rentalType Add</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-12\" [formGroup]=\"rentalTypeForm\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n            \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Name</label>\r\n<input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"rentalTypeForm.controls['name'].invalid && (rentalTypeForm.controls['name'].dirty || rentalTypeForm.controls['name'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter name          </small>\r\n</div>\r\n\r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Is Available</label>\r\n\r\n<select class=\"form-control\" formControlName=\"isAvailable\">\r\n<option value=\"\">Select Is Available</option>\r\n<option value=\"1\">Yes</option>\r\n<option value=\"0\">No</option>\r\n</select>\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"rentalTypeForm.controls['isAvailable'].invalid && (rentalTypeForm.controls['isAvailable'].dirty || rentalTypeForm.controls['isAvailable'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease select is available          </small>\r\n</div>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!rentalTypeForm.valid\"  (click)=\"submit(rentalTypeForm.value)\">Submit</button>\r\n        </div>\r\n    </div>\r\n </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rentalType/rental-type-details/rental-type-details.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rentalType/rental-type-details/rental-type-details.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row breadcrum\">\r\n    <div class=\"col-sm-12\">\r\n        \r\n        <div class=\"row pull-right\">\r\n\r\n        \r\n        <button (click)=\"toggleStatus(rentalType.id,0)\" *ngIf=\"rentalType['isAvailable']==1\" class=\"btn btn-info\"><i class=\"fa fa-eye\"></i>Make InActive</button>\r\n        <button (click)=\"toggleStatus(rentalType.id,1)\" *ngIf=\"rentalType['isAvailable']==0\" class=\"btn btn-info\"><i class=\"fa fa-eye-slash\"></i>Make Active</button>\r\n        <button  (click)=\"edit(rentalType)\" class=\"btn btn-info\"><i class=\"fa fa-edit\"></i>Edit</button>\r\n        <button  (click)=\"delete(rentalType)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i>Delete</button>\r\n    </div>\r\n    <h5 class=\"page-title\">rentalType List</h5>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n          \r\n              \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Name</label>\r\n          <span>{{rentalType['name']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <span>{{rentalType['isAvailable']}}</span>\r\n        </div>\r\n\r\n          \r\n          </div>\r\n  \r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n  \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rentalType/rental-type-edit/rental-type-edit.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rentalType/rental-type-edit/rental-type-edit.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">rentalType</a></li>\r\n                <li class=\"breadcrumb-item \">Update</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">rentalType Update</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-12\" [formGroup]=\"rentalTypeForm\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n            \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Name</label>\r\n<input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"rentalTypeForm.controls['name'].invalid && (rentalTypeForm.controls['name'].dirty || rentalTypeForm.controls['name'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter name          </small>\r\n</div>\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Is Available</label>\r\n<input class=\"form-control\" formControlName=\"isAvailable\" placeholder=\"Enter Is Available\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"rentalTypeForm.controls['isAvailable'].invalid && (rentalTypeForm.controls['isAvailable'].dirty || rentalTypeForm.controls['isAvailable'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter is available          </small>\r\n</div>\r\n\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!rentalTypeForm.valid\"  (click)=\"submit(rentalTypeForm.value)\">Submit</button>\r\n        </div>\r\n    </div>\r\n </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rentalType/rental-type-list/rental-type-list.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rentalType/rental-type-list/rental-type-list.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">rentalType</a></li>\r\n                <li class=\"breadcrumb-item \">List</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">rentalType List</h4>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n<div class=\"col-lg-12\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n\r\n    <h4 class=\"mt-0 header-title\">List of rentalType</h4>\r\n   <p>&nbsp;</p>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-striped mb-0\">\r\n            <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th>Id</th>\r\n                    <th>Actions</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let items of json;let i=index\">\r\n                    <th scope=\"row\">#{{i+1}}</th>\r\n                    <td>{{items.id}}</td>\r\n                    <td><i class=\"fa fa-eye\" (click)=\"details(items)\"></i> view</td>\r\n                </tr>\r\n                <tr *ngIf=\"!json.length\">\r\n                    <td colspan=\"4\" style=\"text-align: center;\">No Items found to display</td>\r\n                </tr>\r\n            \r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n</div>\r\n</div> <!-- end col -->\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role/role-add/role-add.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role/role-add/role-add.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">roles</a></li>\r\n                <li class=\"breadcrumb-item \">Add</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">roles Add</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-12\" [formGroup]=\"rolesForm\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n            \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Role Name</label>\r\n<input class=\"form-control\" formControlName=\"roleName\" placeholder=\"Enter Role Name\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"rolesForm.controls['roleName'].invalid && (rolesForm.controls['roleName'].dirty || rolesForm.controls['roleName'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter role name          </small>\r\n</div>\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Access</label>\r\n<input class=\"form-control\" formControlName=\"access\" placeholder=\"Enter Access\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"rolesForm.controls['access'].invalid && (rolesForm.controls['access'].dirty || rolesForm.controls['access'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter access          </small>\r\n</div>\r\n\r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Is Available</label>\r\n\r\n<select class=\"form-control\" formControlName=\"isAvailable\">\r\n<option [value]=\"\">Select Is Available</option>\r\n<option [value]=\"1\">Yes</option>\r\n<option [value]=\"0\">No</option>\r\n</select>\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"rolesForm.controls['isAvailable'].invalid && (rolesForm.controls['isAvailable'].dirty || rolesForm.controls['isAvailable'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease select is available          </small>\r\n</div>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!rolesForm.valid\"  (click)=\"submit(rolesForm.value)\">Submit</button>\r\n        </div>\r\n    </div>\r\n </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role/role-details/role-details.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role/role-details/role-details.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row breadcrum\">\r\n  <div class=\"col-sm-12\">\r\n      \r\n      <div class=\"row pull-right\">\r\n\r\n      \r\n      <button (click)=\"toggleStatus(roles.id,0)\" *ngIf=\"roles['isAvailable']==1\" class=\"btn btn-info\"><i class=\"fa fa-eye\"></i>Make InActive</button>\r\n      <button (click)=\"toggleStatus(roles.id,1)\" *ngIf=\"roles['isAvailable']==0\" class=\"btn btn-info\"><i class=\"fa fa-eye-slash\"></i>Make Active</button>\r\n      <button  (click)=\"edit(roles)\" class=\"btn btn-info\"><i class=\"fa fa-edit\"></i>Edit</button>\r\n      <button  (click)=\"delete(roles)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i>Delete</button>\r\n  </div>\r\n  <h5 class=\"page-title\">roles List</h5>\r\n      \r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n<div class=\"card-body\">\r\n  <div class=\"row\">\r\n        \r\n            \r\n      <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n        <label>Role Name</label>\r\n        <span>{{roles['roleName']}}</span>\r\n      </div>\r\n\r\n              \r\n      <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n        <label>Access</label>\r\n        <span>{{roles['access']}}</span>\r\n      </div>\r\n\r\n              \r\n      <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n        <label>Is Available</label>\r\n        <span>{{roles['isAvailable']}}</span>\r\n      </div>\r\n\r\n        \r\n        </div>\r\n\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role/role-edit/role-edit.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role/role-edit/role-edit.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">roles</a></li>\r\n                <li class=\"breadcrumb-item \">Update</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">roles Update</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-12\" [formGroup]=\"rolesForm\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n            \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Role Name</label>\r\n<input class=\"form-control\" formControlName=\"roleName\" placeholder=\"Enter Role Name\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"rolesForm.controls['roleName'].invalid && (rolesForm.controls['roleName'].dirty || rolesForm.controls['roleName'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter role name          </small>\r\n</div>\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Access</label>\r\n<input class=\"form-control\" formControlName=\"access\" placeholder=\"Enter Access\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"rolesForm.controls['access'].invalid && (rolesForm.controls['access'].dirty || rolesForm.controls['access'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter access          </small>\r\n</div>\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Is Available</label>\r\n<!-- <input class=\"form-control\" formControlName=\"isAvailable\" placeholder=\"Enter Is Available\"> -->\r\n<select class=\"form-control\" formControlName=\"isAvailable\">\r\n    <option [value]=\"\">Select Is Available</option>\r\n    <option [value]=\"1\">Yes</option>\r\n    <option [value]=\"0\">No</option>\r\n  </select>\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"rolesForm.controls['isAvailable'].invalid && (rolesForm.controls['isAvailable'].dirty || rolesForm.controls['isAvailable'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter is available          </small>\r\n</div>\r\n\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!rolesForm.valid\"  (click)=\"submit(rolesForm.value)\">Submit</button>\r\n        </div>\r\n    </div>\r\n </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role/role-list/role-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role/role-list/role-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">roles</a></li>\r\n                <li class=\"breadcrumb-item \">List</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">roles List</h4>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n<div class=\"col-lg-12\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n\r\n    <h4 class=\"mt-0 header-title\">List of roles</h4>\r\n   <p>&nbsp;</p>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-striped mb-0\">\r\n            <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th>Role Name</th>\r\n                    <th>Actions</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let items of json;let i=index\">\r\n                    <th scope=\"row\">#{{i+1}}</th>\r\n                    <td>{{items.roleName}}</td>\r\n                    <td><i class=\"fa fa-eye\" (click)=\"details(items)\"></i> view</td>\r\n                </tr>\r\n                <tr *ngIf=\"!json.length\">\r\n                    <td colspan=\"4\" style=\"text-align: center;\">No Items found to display</td>\r\n                </tr>\r\n            \r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n</div>\r\n</div> <!-- end col -->\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/salesGroup/sales-group-add/sales-group-add.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/salesGroup/sales-group-add/sales-group-add.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">salesGroup</a></li>\r\n                <li class=\"breadcrumb-item \">Add</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">salesGroup Add</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-12\" [formGroup]=\"salesGroupForm\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n            \r\n<!-- <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>User ID</label>\r\n<input class=\"form-control\" formControlName=\"userId\" placeholder=\"Enter User ID\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"salesGroupForm.controls['userId'].invalid && (salesGroupForm.controls['userId'].dirty || salesGroupForm.controls['userId'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter user id          </small>\r\n</div> -->\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Group Name</label>\r\n<input class=\"form-control\" formControlName=\"groupName\" placeholder=\"Enter Group Name\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"salesGroupForm.controls['groupName'].invalid && (salesGroupForm.controls['groupName'].dirty || salesGroupForm.controls['groupName'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter group name          </small>\r\n</div>\r\n\r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Is Available</label>\r\n\r\n<select class=\"form-control\" formControlName=\"isAvailable\">\r\n<option value=\"\">Select Is Available</option>\r\n<option value=\"1\">Yes</option>\r\n<option value=\"0\">No</option>\r\n</select>\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"salesGroupForm.controls['isAvailable'].invalid && (salesGroupForm.controls['isAvailable'].dirty || salesGroupForm.controls['isAvailable'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease select is available          </small>\r\n</div>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!salesGroupForm.valid\"  (click)=\"submit(salesGroupForm.value)\">Submit</button>\r\n        </div>\r\n    </div>\r\n </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/salesGroup/sales-group-details/sales-group-details.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/salesGroup/sales-group-details/sales-group-details.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row breadcrum\">\n    <div class=\"col-sm-12\">\n        \n        <div class=\"row pull-right\">\n\n        \n        <button (click)=\"toggleStatus(salesGroup.id,0)\" *ngIf=\"salesGroup['isAvailable']==1\" class=\"btn btn-info\"><i class=\"fa fa-eye\"></i>Make InActive</button>\n        <button (click)=\"toggleStatus(salesGroup.id,1)\" *ngIf=\"salesGroup['isAvailable']==0\" class=\"btn btn-info\"><i class=\"fa fa-eye-slash\"></i>Make Active</button>\n        <button  (click)=\"edit(salesGroup)\" class=\"btn btn-info\"><i class=\"fa fa-edit\"></i>Edit</button>\n        <button  (click)=\"delete(salesGroup)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i>Delete</button>\n    </div>\n    <h5 class=\"page-title\">salesGroup List</h5>\n        \n    </div>\n</div>\n\n<div class=\"card\">\n<div class=\"card-body\">\n    <div class=\"row\">\n          \n              \n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\n          <label>User ID</label>\n          <span>{{salesGroup['userId']}}</span>\n        </div>\n\n                \n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\n          <label>Group Name</label>\n          <span>{{salesGroup['groupName']}}</span>\n        </div>\n\n                \n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\n          <label>Is Available</label>\n          <span>{{salesGroup['isAvailable']}}</span>\n        </div>\n\n          \n          </div>\n  \n</div>\n\n\n</div>\n\n\n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/salesGroup/sales-group-edit/sales-group-edit.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/salesGroup/sales-group-edit/sales-group-edit.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">salesGroup</a></li>\r\n                <li class=\"breadcrumb-item \">Update</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">salesGroup Update</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-12\" [formGroup]=\"salesGroupForm\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n            \r\n<!-- <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>User ID</label>\r\n<input class=\"form-control\" formControlName=\"userId\" placeholder=\"Enter User ID\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"salesGroupForm.controls['userId'].invalid && (salesGroupForm.controls['userId'].dirty || salesGroupForm.controls['userId'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter user id          </small>\r\n</div> -->\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Group Name</label>\r\n<input class=\"form-control\" formControlName=\"groupName\" placeholder=\"Enter Group Name\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"salesGroupForm.controls['groupName'].invalid && (salesGroupForm.controls['groupName'].dirty || salesGroupForm.controls['groupName'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter group name          </small>\r\n</div>\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Is Available</label>\r\n<input class=\"form-control\" formControlName=\"isAvailable\" placeholder=\"Enter Is Available\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"salesGroupForm.controls['isAvailable'].invalid && (salesGroupForm.controls['isAvailable'].dirty || salesGroupForm.controls['isAvailable'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter is available          </small>\r\n</div>\r\n\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!salesGroupForm.valid\"  (click)=\"submit(salesGroupForm.value)\">Submit</button>\r\n        </div>\r\n    </div>\r\n </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/salesGroup/sales-group-list/sales-group-list.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/salesGroup/sales-group-list/sales-group-list.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">salesGroup</a></li>\r\n                <li class=\"breadcrumb-item \">List</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">salesGroup List</h4>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n<div class=\"col-lg-12\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n\r\n    <h4 class=\"mt-0 header-title\">List of salesGroup</h4>\r\n   <p>&nbsp;</p>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-striped mb-0\">\r\n            <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th>groupName</th>\r\n                    <th>Actions</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let items of json;let i=index\">\r\n                    <th scope=\"row\">#{{i+1}}</th>\r\n                    <td>{{items.groupName}}</td>\r\n                    <td><i class=\"fa fa-eye\" (click)=\"details(items)\"></i> view</td>\r\n                </tr>\r\n                <tr *ngIf=\"!json.length\">\r\n                    <td colspan=\"4\" style=\"text-align: center;\">No Items found to display</td>\r\n                </tr>\r\n            \r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n</div>\r\n</div> <!-- end col -->\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sharingType/sharing-type-add/sharing-type-add.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sharingType/sharing-type-add/sharing-type-add.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">sharingType</a></li>\r\n                <li class=\"breadcrumb-item \">Add</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">sharingType Add</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-12\" [formGroup]=\"sharingTypeForm\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n            \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Name</label>\r\n<input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"sharingTypeForm.controls['name'].invalid && (sharingTypeForm.controls['name'].dirty || sharingTypeForm.controls['name'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter name          </small>\r\n</div>\r\n\r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Is Available</label>\r\n\r\n<select class=\"form-control\" formControlName=\"isAvailable\">\r\n<option value=\"\">Select Is Available</option>\r\n<option value=\"1\">Yes</option>\r\n<option value=\"0\">No</option>\r\n</select>\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"sharingTypeForm.controls['isAvailable'].invalid && (sharingTypeForm.controls['isAvailable'].dirty || sharingTypeForm.controls['isAvailable'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease select is available          </small>\r\n</div>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!sharingTypeForm.valid\"  (click)=\"submit(sharingTypeForm.value)\">Submit</button>\r\n        </div>\r\n    </div>\r\n </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sharingType/sharing-type-details/sharing-type-details.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sharingType/sharing-type-details/sharing-type-details.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row breadcrum\">\r\n    <div class=\"col-sm-12\">\r\n        \r\n        <div class=\"row pull-right\">\r\n\r\n        \r\n        <button (click)=\"toggleStatus(sharingType.id,0)\" *ngIf=\"sharingType['isAvailable']==1\" class=\"btn btn-info\"><i class=\"fa fa-eye\"></i>Make InActive</button>\r\n        <button (click)=\"toggleStatus(sharingType.id,1)\" *ngIf=\"sharingType['isAvailable']==0\" class=\"btn btn-info\"><i class=\"fa fa-eye-slash\"></i>Make Active</button>\r\n        <button  (click)=\"edit(sharingType)\" class=\"btn btn-info\"><i class=\"fa fa-edit\"></i>Edit</button>\r\n        <button  (click)=\"delete(sharingType)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i>Delete</button>\r\n    </div>\r\n    <h5 class=\"page-title\">sharingType List</h5>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n          \r\n              \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Name</label>\r\n          <span>{{sharingType['name']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <span>{{sharingType['isAvailable']}}</span>\r\n        </div>\r\n\r\n          \r\n          </div>\r\n  \r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n  \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sharingType/sharing-type-edit/sharing-type-edit.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sharingType/sharing-type-edit/sharing-type-edit.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">sharingType</a></li>\r\n                <li class=\"breadcrumb-item \">Update</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">sharingType Update</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-12\" [formGroup]=\"sharingTypeForm\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n            \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Name</label>\r\n<input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"sharingTypeForm.controls['name'].invalid && (sharingTypeForm.controls['name'].dirty || sharingTypeForm.controls['name'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter name          </small>\r\n</div>\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Is Available</label>\r\n\r\n<select class=\"form-control\" formControlName=\"isAvailable\">\r\n    <option value=\"\">Select Is Available</option>\r\n    <option value=\"1\">Yes</option>\r\n    <option value=\"0\">No</option>\r\n    </select>\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"sharingTypeForm.controls['isAvailable'].invalid && (sharingTypeForm.controls['isAvailable'].dirty || sharingTypeForm.controls['isAvailable'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter is available          </small>\r\n</div>\r\n\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!sharingTypeForm.valid\"  (click)=\"submit(sharingTypeForm.value)\">Submit</button>\r\n        </div>\r\n    </div>\r\n </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sharingType/sharing-type-list/sharing-type-list.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sharingType/sharing-type-list/sharing-type-list.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">sharingType</a></li>\r\n                <li class=\"breadcrumb-item \">List</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">sharingType List</h4>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n<div class=\"col-lg-12\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n\r\n    <h4 class=\"mt-0 header-title\">List of sharingType</h4>\r\n   <p>&nbsp;</p>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-striped mb-0\">\r\n            <thead>\r\n                <tr>\r\n                    <th>#</th>\r\n                    <th>Name</th>\r\n                    <th>Actions</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let items of json;let i=index\">\r\n                    <th scope=\"row\">#{{i+1}}</th>\r\n                    <td>{{items.name}}</td>\r\n                    <td><i class=\"fa fa-eye\" (click)=\"details(items)\"></i> view</td>\r\n                </tr>\r\n                <tr *ngIf=\"!json.length\">\r\n                    <td colspan=\"4\" style=\"text-align: center;\">No Items found to display</td>\r\n                </tr>\r\n            \r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n</div>\r\n</div> <!-- end col -->\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tenant/tenant-add/tenant-add.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tenant/tenant-add/tenant-add.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"col-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"page-title-right\">\r\n                        <ol class=\"breadcrumb m-0\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">tenant</a></li>\r\n                            <li class=\"breadcrumb-item \">Add</li>\r\n                        </ol>\r\n                    </div>\r\n                    <h4 class=\"page-title\">tenant Add</h4>\r\n                </div>\r\n            </div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-12\" [formGroup]=\"tenantForm\">\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                        \r\n        <!-- <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>User Id</label>\r\n          <input class=\"form-control\" formControlName=\"userId\" placeholder=\"Enter User Id\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"tenantForm.controls['userId'].invalid && (tenantForm.controls['userId'].dirty || tenantForm.controls['userId'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter user id          </small>\r\n        </div> -->\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Name</label>\r\n          <input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"tenantForm.controls['name'].invalid && (tenantForm.controls['name'].dirty || tenantForm.controls['name'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter name          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Email</label>\r\n          <input class=\"form-control\" formControlName=\"email\" placeholder=\"Enter Email\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"tenantForm.controls['email'].invalid && (tenantForm.controls['email'].dirty || tenantForm.controls['email'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter email          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Mobile Number</label>\r\n          <input class=\"form-control\" formControlName=\"mobileNumber\" placeholder=\"Enter Mobile Number\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"tenantForm.controls['mobileNumber'].invalid && (tenantForm.controls['mobileNumber'].dirty || tenantForm.controls['mobileNumber'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter mobile number          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Current Address</label>\r\n          <input class=\"form-control\" formControlName=\"currentAddress\" placeholder=\"Enter Current Address\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"tenantForm.controls['currentAddress'].invalid && (tenantForm.controls['currentAddress'].dirty || tenantForm.controls['currentAddress'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter current address          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Documents Upload</label>\r\n          <input class=\"form-control\" formControlName=\"documentsUpload\" type=\"file\" placeholder=\"Enter Documents Upload\" (change)=\"changeListenerDocument($event)\">\r\n          <img [src]=\"document\" *ngIf=\"document\" style=\"width: 150px;margin: 10px;\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"tenantForm.controls['documentsUpload'].invalid && (tenantForm.controls['documentsUpload'].dirty || tenantForm.controls['documentsUpload'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter documents upload          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Tenant Photo</label>\r\n          <input class=\"form-control\" formControlName=\"tenantPhoto\" type=\"file\" placeholder=\"Enter Tenant Photo\" (change)=\"changeListenerPhoto($event)\">\r\n          <img [src]=\"image\" *ngIf=\"image\" style=\"width: 150px;margin: 10px;\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"tenantForm.controls['tenantPhoto'].invalid && (tenantForm.controls['tenantPhoto'].dirty || tenantForm.controls['tenantPhoto'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter tenant photo          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Agreement Type</label>\r\n          <!-- <input class=\"form-control\" formControlName=\"agreementType\" placeholder=\"Enter Agreement Type\"> -->\r\n          <select class=\"form-control\" formControlName=\"agreementType\">\r\n            <option value=\"\">Select Agreement Type</option>\r\n            <option value=\"fixed\">Fixed</option>\r\n            <option value=\"monthly\">Monthly</option>\r\n          </select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"tenantForm.controls['agreementType'].invalid && (tenantForm.controls['agreementType'].dirty || tenantForm.controls['agreementType'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter agreement type          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Background Verification Status</label>\r\n          <!-- <input class=\"form-control\" formControlName=\"backgroundVerificationStatus\" placeholder=\"Enter Background Verification Status\"> -->\r\n          <select class=\"form-control\" formControlName=\"backgroundVerificationStatus\">\r\n            <option value=\"\">Select Status</option>\r\n            <option value=\"done\">Done</option>\r\n            <option value=\"pending\">Pending</option>\r\n            <option value=\"rejected\">Rejected</option>\r\n          </select>\r\n        \r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"tenantForm.controls['backgroundVerificationStatus'].invalid && (tenantForm.controls['backgroundVerificationStatus'].dirty || tenantForm.controls['backgroundVerificationStatus'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter background verification status          </small>\r\n        </div>\r\n\r\n                <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          \r\n          <select class=\"form-control\" formControlName=\"isAvailable\">\r\n            <option value=\"\">Select Is Available</option>\r\n            <option value=\"1\">Yes</option>\r\n            <option value=\"0\">No</option>\r\n          </select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"tenantForm.controls['isAvailable'].invalid && (tenantForm.controls['isAvailable'].dirty || tenantForm.controls['isAvailable'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please select is available          </small>\r\n        </div>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                        <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!tenantForm.valid\"  (click)=\"submit(tenantForm.value)\">Submit</button>\r\n                    </div>\r\n                </div>\r\n             </div>\r\n        </div>\r\n     </div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tenant/tenant-details/tenant-details.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tenant/tenant-details/tenant-details.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row breadcrum\">\r\n    <div class=\"col-sm-12\">\r\n        \r\n        <div class=\"row pull-right\">\r\n\r\n        \r\n        <button (click)=\"toggleStatus(tenant.id,0)\" *ngIf=\"tenant['isAvailable']==1\" class=\"btn btn-info\"><i class=\"fa fa-eye\"></i>Make InActive</button>\r\n        <button (click)=\"toggleStatus(tenant.id,1)\" *ngIf=\"tenant['isAvailable']==0\" class=\"btn btn-info\"><i class=\"fa fa-eye-slash\"></i>Make Active</button>\r\n        <button  (click)=\"edit(tenant)\" class=\"btn btn-info\"><i class=\"fa fa-edit\"></i>Edit</button>\r\n        <button  (click)=\"delete(tenant)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i>Delete</button>\r\n    </div>\r\n    <h5 class=\"page-title\">tenant List</h5>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n          \r\n              \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>User Id</label>\r\n          <span>{{tenant['userId']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Name</label>\r\n          <span>{{tenant['name']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Email</label>\r\n          <span>{{tenant['email']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Mobile Number</label>\r\n          <span>{{tenant['mobileNumber']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Current Address</label>\r\n          <span>{{tenant['currentAddress']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Documents Upload</label>\r\n          <span>{{tenant['documentsUpload']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Tenant Photo</label>\r\n          <span>{{tenant['tenantPhoto']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Agreement Type</label>\r\n          <span>{{tenant['agreementType']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Background Verification Status</label>\r\n          <span>{{tenant['backgroundVerificationStatus']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <span>{{tenant['isAvailable']}}</span>\r\n        </div>\r\n\r\n          \r\n          </div>\r\n  \r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n  \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tenant/tenant-edit/tenant-edit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tenant/tenant-edit/tenant-edit.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"col-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"page-title-right\">\r\n                        <ol class=\"breadcrumb m-0\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">tenant</a></li>\r\n                            <li class=\"breadcrumb-item \">Update</li>\r\n                        </ol>\r\n                    </div>\r\n                    <h4 class=\"page-title\">tenant Update</h4>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-12\" [formGroup]=\"tenantForm\">\r\n                  <div class=\"card m-b-30\">\r\n                      <div class=\"card-body\">\r\n                          <div class=\"row\">\r\n                                  \r\n                  <!-- <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>User Id</label>\r\n                    <input class=\"form-control\" formControlName=\"userId\" placeholder=\"Enter User Id\">\r\n                    <small class=\"form-text text-muted invalid-data\"\r\n                      *ngIf=\"tenantForm.controls['userId'].invalid && (tenantForm.controls['userId'].dirty || tenantForm.controls['userId'].touched)\"\r\n                      class=\"invalid-data\">\r\n                      Please enter user id          </small>\r\n                  </div> -->\r\n          \r\n                          \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Name</label>\r\n                    <input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\r\n                    <small class=\"form-text text-muted invalid-data\"\r\n                      *ngIf=\"tenantForm.controls['name'].invalid && (tenantForm.controls['name'].dirty || tenantForm.controls['name'].touched)\"\r\n                      class=\"invalid-data\">\r\n                      Please enter name          </small>\r\n                  </div>\r\n          \r\n                          \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Email</label>\r\n                    <input class=\"form-control\" formControlName=\"email\" placeholder=\"Enter Email\">\r\n                    <small class=\"form-text text-muted invalid-data\"\r\n                      *ngIf=\"tenantForm.controls['email'].invalid && (tenantForm.controls['email'].dirty || tenantForm.controls['email'].touched)\"\r\n                      class=\"invalid-data\">\r\n                      Please enter email          </small>\r\n                  </div>\r\n          \r\n                          \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Mobile Number</label>\r\n                    <input class=\"form-control\" formControlName=\"mobileNumber\" placeholder=\"Enter Mobile Number\">\r\n                    <small class=\"form-text text-muted invalid-data\"\r\n                      *ngIf=\"tenantForm.controls['mobileNumber'].invalid && (tenantForm.controls['mobileNumber'].dirty || tenantForm.controls['mobileNumber'].touched)\"\r\n                      class=\"invalid-data\">\r\n                      Please enter mobile number          </small>\r\n                  </div>\r\n          \r\n                          \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Current Address</label>\r\n                    <input class=\"form-control\" formControlName=\"currentAddress\" placeholder=\"Enter Current Address\">\r\n                    <small class=\"form-text text-muted invalid-data\"\r\n                      *ngIf=\"tenantForm.controls['currentAddress'].invalid && (tenantForm.controls['currentAddress'].dirty || tenantForm.controls['currentAddress'].touched)\"\r\n                      class=\"invalid-data\">\r\n                      Please enter current address          </small>\r\n                  </div>\r\n          \r\n                          \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Documents Upload</label>\r\n                    <input class=\"form-control\" formControlName=\"documentsUpload\" type=\"file\" placeholder=\"Enter Documents Upload\" (change)=\"changeListenerDocument($event)\">\r\n                    <img [src]=\"document\" *ngIf=\"document\" style=\"width: 150px;margin: 10px;\">\r\n                    <small class=\"form-text text-muted invalid-data\"\r\n                      *ngIf=\"tenantForm.controls['documentsUpload'].invalid && (tenantForm.controls['documentsUpload'].dirty || tenantForm.controls['documentsUpload'].touched)\"\r\n                      class=\"invalid-data\">\r\n                      Please enter documents upload          </small>\r\n                  </div>\r\n          \r\n                          \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Tenant Photo</label>\r\n                    <input class=\"form-control\" formControlName=\"tenantPhoto\" type=\"file\" placeholder=\"Enter Tenant Photo\" (change)=\"changeListenerPhoto($event)\">\r\n                    <img [src]=\"image\" *ngIf=\"image\" style=\"width: 150px;margin: 10px;\">\r\n                    <small class=\"form-text text-muted invalid-data\"\r\n                      *ngIf=\"tenantForm.controls['tenantPhoto'].invalid && (tenantForm.controls['tenantPhoto'].dirty || tenantForm.controls['tenantPhoto'].touched)\"\r\n                      class=\"invalid-data\">\r\n                      Please enter tenant photo          </small>\r\n                  </div>\r\n          \r\n                          \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Agreement Type</label>\r\n                    <!-- <input class=\"form-control\" formControlName=\"agreementType\" placeholder=\"Enter Agreement Type\"> -->\r\n                    <select class=\"form-control\" formControlName=\"agreementType\">\r\n                      <option value=\"\">Select Agreement Type</option>\r\n                      <option value=\"fixed\">Fixed</option>\r\n                      <option value=\"monthly\">Monthly</option>\r\n                    </select>\r\n                    <small class=\"form-text text-muted invalid-data\"\r\n                      *ngIf=\"tenantForm.controls['agreementType'].invalid && (tenantForm.controls['agreementType'].dirty || tenantForm.controls['agreementType'].touched)\"\r\n                      class=\"invalid-data\">\r\n                      Please enter agreement type          </small>\r\n                  </div>\r\n          \r\n                          \r\n                  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Background Verification Status</label>\r\n                    <!-- <input class=\"form-control\" formControlName=\"backgroundVerificationStatus\" placeholder=\"Enter Background Verification Status\"> -->\r\n                    <select class=\"form-control\" formControlName=\"backgroundVerificationStatus\">\r\n                      <option value=\"\">Select Status</option>\r\n                      <option value=\"done\">Done</option>\r\n                      <option value=\"pending\">Pending</option>\r\n                      <option value=\"rejected\">Rejected</option>\r\n                    </select>\r\n                  \r\n                    <small class=\"form-text text-muted invalid-data\"\r\n                      *ngIf=\"tenantForm.controls['backgroundVerificationStatus'].invalid && (tenantForm.controls['backgroundVerificationStatus'].dirty || tenantForm.controls['backgroundVerificationStatus'].touched)\"\r\n                      class=\"invalid-data\">\r\n                      Please enter background verification status          </small>\r\n                  </div>\r\n          \r\n                          <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n                    <label>Is Available</label>\r\n                    \r\n                    <select class=\"form-control\" formControlName=\"isAvailable\">\r\n                      <option value=\"\">Select Is Available</option>\r\n                      <option value=\"1\">Yes</option>\r\n                      <option value=\"0\">No</option>\r\n                    </select>\r\n                    <small class=\"form-text text-muted invalid-data\"\r\n                      *ngIf=\"tenantForm.controls['isAvailable'].invalid && (tenantForm.controls['isAvailable'].dirty || tenantForm.controls['isAvailable'].touched)\"\r\n                      class=\"invalid-data\">\r\n                      Please select is available          </small>\r\n                  </div>\r\n                          <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                                  <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!tenantForm.valid\"  (click)=\"submit(tenantForm.value)\">Submit</button>\r\n                              </div>\r\n                          </div>\r\n                       </div>\r\n                  </div>\r\n               </div>\r\n          </div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tenant/tenant-list/tenant-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tenant/tenant-list/tenant-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div class=\"col-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"page-title-right\">\r\n                        <ol class=\"breadcrumb m-0\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">tenant</a></li>\r\n                            <li class=\"breadcrumb-item \">List</li>\r\n                        </ol>\r\n                    </div>\r\n                    <h4 class=\"page-title\">tenant List</h4>\r\n                </div>\r\n            </div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n\r\n                <h4 class=\"mt-0 header-title\">List of tenant</h4>\r\n               <p>&nbsp;</p>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-striped mb-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>Name</th>\r\n                                <th>Email ID</th>\r\n                                <th>Actions</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let items of json;let i=index\">\r\n                                <th scope=\"row\">#{{i+1}}</th>\r\n                                <td>{{items.name}}</td>\r\n                                <td>{{items.email}}</td>\r\n                                <td><i class=\"fa fa-eye\" (click)=\"details(items)\"></i> view</td>\r\n                            </tr>\r\n                            <tr *ngIf=\"!json.length\">\r\n                                <td colspan=\"4\" style=\"text-align: center;\">No Items found to display</td>\r\n                            </tr>\r\n                        \r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> <!-- end col -->\r\n\r\n\r\n</div>\r\n\r\n\r\n \r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/units-add/units-add.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/units-add/units-add.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"col-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"page-title-right\">\r\n                        <ol class=\"breadcrumb m-0\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">units</a></li>\r\n                            <li class=\"breadcrumb-item \">Add</li>\r\n                        </ol>\r\n                    </div>\r\n                    <h4 class=\"page-title\">units Add</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n              <label>Property</label>\r\n                <select class='form-control' [(ngModel)]=\"property\" placeholder=\"Enter Property\" (change)=\"changeProperty()\" >\r\n                <option value=\" \">Select Property</option>\r\n                <option *ngFor=\"let items of properties\" [value]=\"items['_id']\">{{items['name']}}</option></select>\r\n            </div>\r\n<div class=\"row\" *ngIf=\"property\">\r\n\r\n  <button (click)=\"addUnits()\">Add Unit</button>\r\n    <div class=\"col-12\" *ngFor=\"let unit of units;let i = index;\">\r\n      <button (click)=\"deleteUnit(i)\">Remove</button>\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n\r\n                <div class=\"row\">\r\n                        \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Unit Details</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"unit.unitDetails\" placeholder=\"Enter Unit Details\">\r\n\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Property ID</label>\r\n         <input class=\"form-control\" [(ngModel)]=\"unit.propertyId\" placeholder=\"Enter Property ID\">\r\n          <!-- <select class='form-control' [(ngModel)]=\"unit.propertyId\" placeholder=\"Enter Property ID\" >\r\n            <option value=\"\">Select Property</option>\r\n            <option *ngFor=\"let items of properties\" [value]=\"items['name']\">{{items['name']}}</option></select> -->\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Rent</label>\r\n          <input class=\"form-control\" type=\"number\" [(ngModel)]=\"unit.rent\" placeholder=\"Enter Rent\">\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Area(in Sq.Ft.)</label>\r\n          <input class=\"form-control\"  type=\"number\" [(ngModel)]=\"unit.area\" placeholder=\"Enter Area\">\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n          <label>Aditional Rooms</label>\r\n          <button (click)=\"addRoom(unit)\">+</button>\r\n          <div class=\"col-xs-12 col-sm-6 col-md-6\" *ngFor=\"let items of unit.additionalRooms, let i = index;\">\r\n            <label>Room Details</label>\r\n            <input class=\"form-control\"  [(ngModel)]=\"unit.additionalRooms[i].name\" placeholder=\"Enter Room Name\">\r\n            <input class=\"form-control\" type=\"number\" [(ngModel)]=\"unit.additionalRooms[i].quantity\" placeholder=\"Enter Quantity\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Unit Type</label>\r\n        \r\n          <select class='form-control' [(ngModel)]=\"unit.type\" placeholder=\"Select Unit Type\">\r\n            <option value=\"\">Select type</option>\r\n            <option *ngFor=\"let items of types\" [value]=\"items\">{{items}}</option>\r\n        </select>\r\n        </div>\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Facing</label>\r\n         <!-- <input class=\"form-control\" formControlName=\"facing\" placeholder=\"Enter Facing\">-->\r\n          <select class='form-control' [(ngModel)]=\"unit.facing\" placeholder=\"Select Facing\">\r\n            <option value=\"\">Select Facing</option>\r\n            <option *ngFor=\"let items of facing\" [value]=\"items\">{{items}}</option>\r\n        </select>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Amenities</label>\r\n        <!--  <input class=\"form-control\" formControlName=\"amenities\" placeholder=\"Enter Amenities\">-->\r\n        <ng-multiselect-dropdown *ngIf=\"dropdownList.length\" [placeholder]=\"'Select Amenities'\" [data]=\"dropdownList\" [(ngModel)]=\"unit.amenities\" [settings]=\"dropdownSettings\"></ng-multiselect-dropdown> \r\n          <!-- <select class='form-control' [(ngModel)]=\"unit.amenities\" placeholder=\"Enter Amenities\" >\r\n            <option value=\"\">Select Amenity</option>\r\n            <option *ngFor=\"let items of amenities\" [value]=\"items['name']\">{{items['name']}}</option></select> -->\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Inspection</label>\r\n          <!-- <input class=\"form-control\" formControlName=\"inspection\" placeholder=\"Enter Inspection\"> -->\r\n          <select class=\"form-control\" [(ngModel)]=\"unit.inspection\" (click)=\"inspectionChange()\">\r\n            <option value=\"\">Select Category</option>\r\n            <option value=\"whileCreatingProperty\">While creating property</option>\r\n            <option value=\"whilePropertyAgreement\">While property agreement</option>\r\n            <option value=\"whileHandingOverToTenant\">While handing over to tenant</option>\r\n            <option value=\"afterTenantLeave\">After tenant leave</option>\r\n            <option value=\"afterRenovation\">after renovation</option>\r\n          </select>\r\n            <div *ngIf=\"inspection==true\">\r\n              <input class=\"form-control\" type=\"file\" placeholder=\"Enter Inspection\">\r\n            </div>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>propertyAvailableFrom</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"unit.propertyavailablefrom\"  type=\"date\" placeholder=\"Enter propertyAvailableFrom\">\r\n        </div>\r\n\r\n                <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          \r\n          <select class=\"form-control\" [(ngModel)]=\"unit.isAvailable\">\r\n            <option value=\"\">Select Is Available</option>\r\n            <option value=\"1\">Yes</option>\r\n            <option value=\"0\">No</option>\r\n          </select>\r\n          <!-- <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"unitsForm.controls['isAvailable'].invalid && (unitsForm.controls['isAvailable'].dirty || unitsForm.controls['isAvailable'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please select is available          </small> -->\r\n        </div>\r\n\r\n                </div>\r\n             </div>\r\n        </div>\r\n     </div>\r\n     <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n      <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\"  (click)=\"submit()\">Submit</button>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/units-details/units-details.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/units-details/units-details.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row breadcrum\">\r\n    <div class=\"col-sm-12\">\r\n        \r\n        <div class=\"row pull-right\">\r\n\r\n        \r\n        <button (click)=\"toggleStatus(units.id,0)\" *ngIf=\"units['isAvailable']==1\" class=\"btn btn-info\"><i class=\"fa fa-eye\"></i>Make InActive</button>\r\n        <button (click)=\"toggleStatus(units.id,1)\" *ngIf=\"units['isAvailable']==0\" class=\"btn btn-info\"><i class=\"fa fa-eye-slash\"></i>Make Active</button>\r\n        <button  (click)=\"edit(units)\" class=\"btn btn-info\"><i class=\"fa fa-edit\"></i>Edit</button>\r\n        <button  (click)=\"delete(units)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i>Delete</button>\r\n    </div>\r\n    <h5 class=\"page-title\">units List</h5>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n          \r\n              \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Unit Details</label>\r\n          <span>{{units['unitDetails']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Property ID</label>\r\n          <span>{{units['propertyId']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Rent</label>\r\n          <span>{{units['rent']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Area</label>\r\n          <span>{{units['area']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Facing</label>\r\n          <span>{{units['facing']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Amenities</label>\r\n          <span>{{units['amenities']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Inspection</label>\r\n          <span>{{units['inspection']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>propertyAvailableFrom</label>\r\n          <span>{{units['propertyavailablefrom']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <span>{{units['isAvailable']}}</span>\r\n        </div>\r\n\r\n          \r\n          </div>\r\n  \r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n  \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/units-edit/units-edit.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/units-edit/units-edit.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"col-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"page-title-right\">\r\n                        <ol class=\"breadcrumb m-0\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">units</a></li>\r\n                            <li class=\"breadcrumb-item \">Update</li>\r\n                        </ol>\r\n                    </div>\r\n                    <h4 class=\"page-title\">units Update</h4>\r\n                </div>\r\n            </div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-12\" [formGroup]=\"unitsForm\">\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                        \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Unit Details</label>\r\n          <input class=\"form-control\" formControlName=\"unitDetails\" placeholder=\"Enter Unit Details\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"unitsForm.controls['unitDetails'].invalid && (unitsForm.controls['unitDetails'].dirty || unitsForm.controls['unitDetails'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter unit details          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Property ID</label>\r\n          <select class='form-control' formControlName=\"propertyId\" placeholder=\"Enter Property ID\" >\r\n            <option value=\"\">Select Property</option>\r\n            <option *ngFor=\"let items of properties\" [value]=\"items['name']\">{{items['name']}}</option></select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"unitsForm.controls['propertyId'].invalid && (unitsForm.controls['propertyId'].dirty || unitsForm.controls['propertyId'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter property id          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Rent</label>\r\n          <input class=\"form-control\" formControlName=\"rent\" placeholder=\"Enter Rent\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"unitsForm.controls['rent'].invalid && (unitsForm.controls['rent'].dirty || unitsForm.controls['rent'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter rent          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Area</label>\r\n          <input class=\"form-control\" formControlName=\"area\" placeholder=\"Enter Area\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"unitsForm.controls['area'].invalid && (unitsForm.controls['area'].dirty || unitsForm.controls['area'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter area          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Facing</label>\r\n          <select class='form-control' formControlName=\"facing\" placeholder=\"Enter Facing\">\r\n            <option value=\"\">Select Facing</option>\r\n            <option *ngFor=\"let items of facing\" value=\"items\">{{items}}</option>\r\n        </select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"unitsForm.controls['facing'].invalid && (unitsForm.controls['facing'].dirty || unitsForm.controls['facing'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter facing          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Amenities</label>\r\n          <select class='form-control' formControlName=\"amenities\" placeholder=\"Enter Property ID\" >\r\n            <option value=\"\">Select Amenity</option>\r\n            <option *ngFor=\"let items of amenities\" [value]=\"items['name']\">{{items['name']}}</option></select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"unitsForm.controls['amenities'].invalid && (unitsForm.controls['amenities'].dirty || unitsForm.controls['amenities'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter amenities          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Inspection</label>\r\n          <input class=\"form-control\" formControlName=\"inspection\" placeholder=\"Enter Inspection\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"unitsForm.controls['inspection'].invalid && (unitsForm.controls['inspection'].dirty || unitsForm.controls['inspection'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter inspection          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>propertyAvailableFrom</label>\r\n          <input class=\"form-control\" formControlName=\"propertyavailablefrom\" placeholder=\"Enter propertyAvailableFrom\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"unitsForm.controls['propertyavailablefrom'].invalid && (unitsForm.controls['propertyavailablefrom'].dirty || unitsForm.controls['propertyavailablefrom'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter propertyavailablefrom          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <input class=\"form-control\" formControlName=\"isAvailable\" placeholder=\"Enter Is Available\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"unitsForm.controls['isAvailable'].invalid && (unitsForm.controls['isAvailable'].dirty || unitsForm.controls['isAvailable'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter is available          </small>\r\n        </div>\r\n\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                        <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!unitsForm.valid\"  (click)=\"submit(unitsForm.value)\">Submit</button>\r\n                    </div>\r\n                </div>\r\n             </div>\r\n        </div>\r\n     </div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/units-list/units-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/units-list/units-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div class=\"col-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"page-title-right\">\r\n                        <ol class=\"breadcrumb m-0\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">units</a></li>\r\n                            <li class=\"breadcrumb-item \">List</li>\r\n                        </ol>\r\n                    </div>\r\n                    <h4 class=\"page-title\">units List</h4>\r\n                </div>\r\n            </div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n\r\n                <h4 class=\"mt-0 header-title\">List of units</h4>\r\n               <p>&nbsp;</p>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-striped mb-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>Unit Details</th>\r\n                                <th>Facing</th>\r\n                                <th>Rent</th>\r\n                                <th>Actions</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let items of json;let i=index\">\r\n                                <th scope=\"row\">#{{i+1}}</th>\r\n                                <td>{{items.unitDetails}}</td>\r\n                                <td>{{items.facing}}</td>\r\n                                <td>{{items.rent}}</td>\r\n                                <td><i class=\"fa fa-eye\" (click)=\"details(items)\"></i> view</td>\r\n                            </tr>\r\n                            <tr *ngIf=\"!json.length\">\r\n                                <td colspan=\"4\" style=\"text-align: center;\">No Items found to display</td>\r\n                            </tr>\r\n                        \r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> <!-- end col -->\r\n\r\n\r\n</div>\r\n\r\n\r\n \r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-add/user-add.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-add/user-add.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"col-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"page-title-right\">\r\n                        <ol class=\"breadcrumb m-0\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">user</a></li>\r\n                            <li class=\"breadcrumb-item \">Add</li>\r\n                        </ol>\r\n                    </div>\r\n                    <h4 class=\"page-title\">user Add</h4>\r\n                </div>\r\n            </div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-12\" [formGroup]=\"userForm\">\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                        \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Username</label>\r\n          <input class=\"form-control\" formControlName=\"username\" placeholder=\"Enter Username\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"userForm.controls['username'].invalid && (userForm.controls['username'].dirty || userForm.controls['username'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter username          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Password</label>\r\n          <input class=\"form-control\" formControlName=\"password\" placeholder=\"Enter Password\">\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"userForm.controls['password'].invalid && (userForm.controls['password'].dirty || userForm.controls['password'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter password          </small>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>role</label>\r\n          <select class=\"form-control\" formControlName=\"role\">\r\n            <option value=\"\">Select Role</option>\r\n            <option *ngFor=\"let items of json\" [value]=\"items['_id']\">{{items['roleName']}}</option>\r\n          </select>\r\n          \r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"userForm.controls['role'].invalid && (userForm.controls['role'].dirty || userForm.controls['role'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please enter role          </small>\r\n        </div>\r\n\r\n                <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          \r\n          <select class=\"form-control\" formControlName=\"isAvailable\">\r\n            <option value=\"\">Select Is Available</option>\r\n            <option value=\"1\">Yes</option>\r\n            <option value=\"0\">No</option>\r\n          </select>\r\n          <small class=\"form-text text-muted invalid-data\"\r\n            *ngIf=\"userForm.controls['isAvailable'].invalid && (userForm.controls['isAvailable'].dirty || userForm.controls['isAvailable'].touched)\"\r\n            class=\"invalid-data\">\r\n            Please select is available          </small>\r\n        </div>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                        <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!userForm.valid\"  (click)=\"submit(userForm.value)\">Submit</button>\r\n                    </div>\r\n                </div>\r\n             </div>\r\n        </div>\r\n     </div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-details/user-details.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-details/user-details.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row breadcrum\">\r\n    <div class=\"col-sm-12\">\r\n        \r\n        <div class=\"row pull-right\">\r\n\r\n        \r\n        <button (click)=\"toggleStatus(user.id,0)\" *ngIf=\"user['isAvailable']==1\" class=\"btn btn-info\"><i class=\"fa fa-eye\"></i>Make InActive</button>\r\n        <button (click)=\"toggleStatus(user.id,1)\" *ngIf=\"user['isAvailable']==0\" class=\"btn btn-info\"><i class=\"fa fa-eye-slash\"></i>Make Active</button>\r\n        <button  (click)=\"edit(user)\" class=\"btn btn-info\"><i class=\"fa fa-edit\"></i>Edit</button>\r\n        <button  (click)=\"delete(user)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i>Delete</button>\r\n    </div>\r\n    <h5 class=\"page-title\">user List</h5>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n          \r\n              \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Username</label>\r\n          <span>{{user['username']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Password</label>\r\n          <span>{{user['password']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>role</label>\r\n          <span>{{user['role']}}</span>\r\n        </div>\r\n\r\n                \r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          <label>Is Available</label>\r\n          <span>{{user['isAvailable']}}</span>\r\n        </div>\r\n\r\n          \r\n          </div>\r\n  \r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n  \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-edit/user-edit.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-edit/user-edit.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"col-12\">\r\n    <div class=\"page-title-box\">\r\n        <div class=\"page-title-right\">\r\n            <ol class=\"breadcrumb m-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">user</a></li>\r\n                <li class=\"breadcrumb-item \">Add</li>\r\n            </ol>\r\n        </div>\r\n        <h4 class=\"page-title\">user Add</h4>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-12\" [formGroup]=\"userForm\">\r\n<div class=\"card m-b-30\">\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n            \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Username</label>\r\n<input class=\"form-control\" formControlName=\"username\" placeholder=\"Enter Username\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"userForm.controls['username'].invalid && (userForm.controls['username'].dirty || userForm.controls['username'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter username          </small>\r\n</div>\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Password</label>\r\n<input class=\"form-control\" formControlName=\"password\" placeholder=\"Enter Password\">\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"userForm.controls['password'].invalid && (userForm.controls['password'].dirty || userForm.controls['password'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter password          </small>\r\n</div>\r\n\r\n    \r\n<div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>role</label>\r\n<select class=\"form-control\" formControlName=\"role\">\r\n<option value=\"\">Select Role</option>\r\n<option *ngFor=\"let items of json\" [value]=\"items['_id']\">{{items['roleName']}}</option>\r\n</select>\r\n\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"userForm.controls['role'].invalid && (userForm.controls['role'].dirty || userForm.controls['role'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease enter role          </small>\r\n</div>\r\n\r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n<label>Is Available</label>\r\n\r\n<select class=\"form-control\" formControlName=\"isAvailable\">\r\n<option value=\"\">Select Is Available</option>\r\n<option value=\"1\">Yes</option>\r\n<option value=\"0\">No</option>\r\n</select>\r\n<small class=\"form-text text-muted invalid-data\"\r\n*ngIf=\"userForm.controls['isAvailable'].invalid && (userForm.controls['isAvailable'].dirty || userForm.controls['isAvailable'].touched)\"\r\nclass=\"invalid-data\">\r\nPlease select is available          </small>\r\n</div>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-info waves-effect waves-light pull-right\" [disabled]=\"!userForm.valid\"  (click)=\"submit(userForm.value)\">Submit</button>\r\n        </div>\r\n    </div>\r\n </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-list/user-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-list/user-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div class=\"col-12\">\r\n                <div class=\"page-title-box\">\r\n                    <div class=\"page-title-right\">\r\n                        <ol class=\"breadcrumb m-0\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"javascript: void(0);\">user</a></li>\r\n                            <li class=\"breadcrumb-item \">List</li>\r\n                        </ol>\r\n                    </div>\r\n                    <h4 class=\"page-title\">user List</h4>\r\n                </div>\r\n            </div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"card m-b-30\">\r\n            <div class=\"card-body\">\r\n\r\n                <h4 class=\"mt-0 header-title\">List of user</h4>\r\n               <p>&nbsp;</p>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-striped mb-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>User Name</th>\r\n                                <th>Role</th>\r\n                                <th>Actions</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let items of json;let i=index\">\r\n                                <th scope=\"row\">#{{i+1}}</th>\r\n                                <td>{{items.username}}</td>\r\n                                <td>{{findRole(items.role)}}</td>\r\n                                <td><i class=\"fa fa-eye\" (click)=\"details(items)\"></i> view</td>\r\n                            </tr>\r\n                            <tr *ngIf=\"!json.length\">\r\n                                <td colspan=\"4\" style=\"text-align: center;\">No Items found to display</td>\r\n                            </tr>\r\n                        \r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> <!-- end col -->\r\n\r\n\r\n</div>\r\n\r\n\r\n \r\n ");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/alert.service.ts":
/*!**********************************!*\
  !*** ./src/app/alert.service.ts ***!
  \**********************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AlertService = class AlertService {
    constructor() {
        this.presentAlert = (header, message, buttonText) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            alert(message);
            // const alert = await this.alertCtrl.create({
            // 	header: header,
            // 	subHeader: '',
            // 	message: message,
            // 	buttons: [ buttonText ]
            // });
            // await alert.present();
        });
        this.presentNetworkAlert = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            alert('network issue');
            // const alert = await this.alertCtrl.create({
            // 	header: 'Oops',
            // 	subHeader: '',
            // 	message: 'Something went wrong, Please check your internet',
            // 	buttons: [ {
            // 		text: 'Try Again',
            // 		role: 'cancel',
            // 		handler: data => {
            // 		  window.location.reload();
            // 		}
            // 	  }, ]
            // });
            // await alert.present();
        });
    }
};
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_amenities_amenities_add_amenities_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/amenities/amenities-add/amenities-add.component */ "./src/app/pages/amenities/amenities-add/amenities-add.component.ts");
/* harmony import */ var _pages_amenities_amenities_details_amenities_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/amenities/amenities-details/amenities-details.component */ "./src/app/pages/amenities/amenities-details/amenities-details.component.ts");
/* harmony import */ var _pages_amenities_amenities_edit_amenities_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/amenities/amenities-edit/amenities-edit.component */ "./src/app/pages/amenities/amenities-edit/amenities-edit.component.ts");
/* harmony import */ var _pages_amenities_amenities_list_amenities_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/amenities/amenities-list/amenities-list.component */ "./src/app/pages/amenities/amenities-list/amenities-list.component.ts");
/* harmony import */ var _pages_owner_owner_add_owner_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/owner/owner-add/owner-add.component */ "./src/app/pages/owner/owner-add/owner-add.component.ts");
/* harmony import */ var _pages_owner_owner_details_owner_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/owner/owner-details/owner-details.component */ "./src/app/pages/owner/owner-details/owner-details.component.ts");
/* harmony import */ var _pages_owner_owner_edit_owner_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/owner/owner-edit/owner-edit.component */ "./src/app/pages/owner/owner-edit/owner-edit.component.ts");
/* harmony import */ var _pages_owner_owner_list_owner_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/owner/owner-list/owner-list.component */ "./src/app/pages/owner/owner-list/owner-list.component.ts");
/* harmony import */ var _pages_property_property_add_property_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/property/property-add/property-add.component */ "./src/app/pages/property/property-add/property-add.component.ts");
/* harmony import */ var _pages_property_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/property/property-details/property-details.component */ "./src/app/pages/property/property-details/property-details.component.ts");
/* harmony import */ var _pages_property_property_edit_property_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/property/property-edit/property-edit.component */ "./src/app/pages/property/property-edit/property-edit.component.ts");
/* harmony import */ var _pages_property_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/property/property-list/property-list.component */ "./src/app/pages/property/property-list/property-list.component.ts");
/* harmony import */ var _pages_role_role_add_role_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/role/role-add/role-add.component */ "./src/app/pages/role/role-add/role-add.component.ts");
/* harmony import */ var _pages_role_role_details_role_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/role/role-details/role-details.component */ "./src/app/pages/role/role-details/role-details.component.ts");
/* harmony import */ var _pages_role_role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/role/role-edit/role-edit.component */ "./src/app/pages/role/role-edit/role-edit.component.ts");
/* harmony import */ var _pages_role_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/role/role-list/role-list.component */ "./src/app/pages/role/role-list/role-list.component.ts");
/* harmony import */ var _pages_tenant_tenant_add_tenant_add_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/tenant/tenant-add/tenant-add.component */ "./src/app/pages/tenant/tenant-add/tenant-add.component.ts");
/* harmony import */ var _pages_tenant_tenant_details_tenant_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/tenant/tenant-details/tenant-details.component */ "./src/app/pages/tenant/tenant-details/tenant-details.component.ts");
/* harmony import */ var _pages_tenant_tenant_edit_tenant_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/tenant/tenant-edit/tenant-edit.component */ "./src/app/pages/tenant/tenant-edit/tenant-edit.component.ts");
/* harmony import */ var _pages_tenant_tenant_list_tenant_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/tenant/tenant-list/tenant-list.component */ "./src/app/pages/tenant/tenant-list/tenant-list.component.ts");
/* harmony import */ var _pages_units_units_add_units_add_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/units/units-add/units-add.component */ "./src/app/pages/units/units-add/units-add.component.ts");
/* harmony import */ var _pages_units_units_details_units_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/units/units-details/units-details.component */ "./src/app/pages/units/units-details/units-details.component.ts");
/* harmony import */ var _pages_units_units_edit_units_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/units/units-edit/units-edit.component */ "./src/app/pages/units/units-edit/units-edit.component.ts");
/* harmony import */ var _pages_units_units_list_units_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/units/units-list/units-list.component */ "./src/app/pages/units/units-list/units-list.component.ts");
/* harmony import */ var _pages_user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/user/user-add/user-add.component */ "./src/app/pages/user/user-add/user-add.component.ts");
/* harmony import */ var _pages_user_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/user/user-details/user-details.component */ "./src/app/pages/user/user-details/user-details.component.ts");
/* harmony import */ var _pages_user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/user/user-edit/user-edit.component */ "./src/app/pages/user/user-edit/user-edit.component.ts");
/* harmony import */ var _pages_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/user/user-list/user-list.component */ "./src/app/pages/user/user-list/user-list.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_assignPropertyToOwner_assign_property_to_owner_add_assign_property_to_owner_add_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/assignPropertyToOwner/assign-property-to-owner-add/assign-property-to-owner-add.component */ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-add/assign-property-to-owner-add.component.ts");
/* harmony import */ var _pages_assignPropertyToOwner_assign_property_to_owner_details_assign_property_to_owner_details_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/assignPropertyToOwner/assign-property-to-owner-details/assign-property-to-owner-details.component */ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-details/assign-property-to-owner-details.component.ts");
/* harmony import */ var _pages_assignPropertyToOwner_assign_property_to_owner_edit_assign_property_to_owner_edit_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/assignPropertyToOwner/assign-property-to-owner-edit/assign-property-to-owner-edit.component */ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-edit/assign-property-to-owner-edit.component.ts");
/* harmony import */ var _pages_assignPropertyToOwner_assign_property_to_owner_list_assign_property_to_owner_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/assignPropertyToOwner/assign-property-to-owner-list/assign-property-to-owner-list.component */ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-list/assign-property-to-owner-list.component.ts");
/* harmony import */ var _pages_assignPropertyToTenant_assign_property_to_tenant_add_assign_property_to_tenant_add_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/assignPropertyToTenant/assign-property-to-tenant-add/assign-property-to-tenant-add.component */ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-add/assign-property-to-tenant-add.component.ts");
/* harmony import */ var _pages_assignPropertyToTenant_assign_property_to_tenant_details_assign_property_to_tenant_details_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/assignPropertyToTenant/assign-property-to-tenant-details/assign-property-to-tenant-details.component */ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-details/assign-property-to-tenant-details.component.ts");
/* harmony import */ var _pages_assignPropertyToTenant_assign_property_to_tenant_edit_assign_property_to_tenant_edit_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/assignPropertyToTenant/assign-property-to-tenant-edit/assign-property-to-tenant-edit.component */ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-edit/assign-property-to-tenant-edit.component.ts");
/* harmony import */ var _pages_assignPropertyToTenant_assign_property_to_tenant_list_assign_property_to_tenant_list_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/assignPropertyToTenant/assign-property-to-tenant-list/assign-property-to-tenant-list.component */ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-list/assign-property-to-tenant-list.component.ts");
/* harmony import */ var _pages_backgroundVerificationStatus_background_verification_status_add_background_verification_status_add_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/backgroundVerificationStatus/background-verification-status-add/background-verification-status-add.component */ "./src/app/pages/backgroundVerificationStatus/background-verification-status-add/background-verification-status-add.component.ts");
/* harmony import */ var _pages_backgroundVerificationStatus_background_verification_status_details_background_verification_status_details_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/backgroundVerificationStatus/background-verification-status-details/background-verification-status-details.component */ "./src/app/pages/backgroundVerificationStatus/background-verification-status-details/background-verification-status-details.component.ts");
/* harmony import */ var _pages_backgroundVerificationStatus_background_verification_status_edit_background_verification_status_edit_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/backgroundVerificationStatus/background-verification-status-edit/background-verification-status-edit.component */ "./src/app/pages/backgroundVerificationStatus/background-verification-status-edit/background-verification-status-edit.component.ts");
/* harmony import */ var _pages_backgroundVerificationStatus_background_verification_status_list_background_verification_status_list_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/backgroundVerificationStatus/background-verification-status-list/background-verification-status-list.component */ "./src/app/pages/backgroundVerificationStatus/background-verification-status-list/background-verification-status-list.component.ts");
/* harmony import */ var _pages_bankAccount_bank_account_add_bank_account_add_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/bankAccount/bank-account-add/bank-account-add.component */ "./src/app/pages/bankAccount/bank-account-add/bank-account-add.component.ts");
/* harmony import */ var _pages_bankAccount_bank_account_details_bank_account_details_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/bankAccount/bank-account-details/bank-account-details.component */ "./src/app/pages/bankAccount/bank-account-details/bank-account-details.component.ts");
/* harmony import */ var _pages_bankAccount_bank_account_edit_bank_account_edit_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/bankAccount/bank-account-edit/bank-account-edit.component */ "./src/app/pages/bankAccount/bank-account-edit/bank-account-edit.component.ts");
/* harmony import */ var _pages_bankAccount_bank_account_list_bank_account_list_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/bankAccount/bank-account-list/bank-account-list.component */ "./src/app/pages/bankAccount/bank-account-list/bank-account-list.component.ts");
/* harmony import */ var _pages_leaseType_lease_type_add_lease_type_add_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/leaseType/lease-type-add/lease-type-add.component */ "./src/app/pages/leaseType/lease-type-add/lease-type-add.component.ts");
/* harmony import */ var _pages_leaseType_lease_type_details_lease_type_details_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/leaseType/lease-type-details/lease-type-details.component */ "./src/app/pages/leaseType/lease-type-details/lease-type-details.component.ts");
/* harmony import */ var _pages_leaseType_lease_type_edit_lease_type_edit_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/leaseType/lease-type-edit/lease-type-edit.component */ "./src/app/pages/leaseType/lease-type-edit/lease-type-edit.component.ts");
/* harmony import */ var _pages_leaseType_lease_type_list_lease_type_list_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pages/leaseType/lease-type-list/lease-type-list.component */ "./src/app/pages/leaseType/lease-type-list/lease-type-list.component.ts");
/* harmony import */ var _pages_propertyType_property_type_add_property_type_add_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pages/propertyType/property-type-add/property-type-add.component */ "./src/app/pages/propertyType/property-type-add/property-type-add.component.ts");
/* harmony import */ var _pages_propertyType_property_type_details_property_type_details_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./pages/propertyType/property-type-details/property-type-details.component */ "./src/app/pages/propertyType/property-type-details/property-type-details.component.ts");
/* harmony import */ var _pages_propertyType_property_type_edit_property_type_edit_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./pages/propertyType/property-type-edit/property-type-edit.component */ "./src/app/pages/propertyType/property-type-edit/property-type-edit.component.ts");
/* harmony import */ var _pages_propertyType_property_type_list_property_type_list_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./pages/propertyType/property-type-list/property-type-list.component */ "./src/app/pages/propertyType/property-type-list/property-type-list.component.ts");
/* harmony import */ var _pages_rentalType_rental_type_add_rental_type_add_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./pages/rentalType/rental-type-add/rental-type-add.component */ "./src/app/pages/rentalType/rental-type-add/rental-type-add.component.ts");
/* harmony import */ var _pages_rentalType_rental_type_details_rental_type_details_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./pages/rentalType/rental-type-details/rental-type-details.component */ "./src/app/pages/rentalType/rental-type-details/rental-type-details.component.ts");
/* harmony import */ var _pages_rentalType_rental_type_edit_rental_type_edit_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./pages/rentalType/rental-type-edit/rental-type-edit.component */ "./src/app/pages/rentalType/rental-type-edit/rental-type-edit.component.ts");
/* harmony import */ var _pages_rentalType_rental_type_list_rental_type_list_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./pages/rentalType/rental-type-list/rental-type-list.component */ "./src/app/pages/rentalType/rental-type-list/rental-type-list.component.ts");
/* harmony import */ var _pages_sharingType_sharing_type_add_sharing_type_add_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./pages/sharingType/sharing-type-add/sharing-type-add.component */ "./src/app/pages/sharingType/sharing-type-add/sharing-type-add.component.ts");
/* harmony import */ var _pages_sharingType_sharing_type_details_sharing_type_details_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./pages/sharingType/sharing-type-details/sharing-type-details.component */ "./src/app/pages/sharingType/sharing-type-details/sharing-type-details.component.ts");
/* harmony import */ var _pages_sharingType_sharing_type_edit_sharing_type_edit_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./pages/sharingType/sharing-type-edit/sharing-type-edit.component */ "./src/app/pages/sharingType/sharing-type-edit/sharing-type-edit.component.ts");
/* harmony import */ var _pages_sharingType_sharing_type_list_sharing_type_list_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./pages/sharingType/sharing-type-list/sharing-type-list.component */ "./src/app/pages/sharingType/sharing-type-list/sharing-type-list.component.ts");
/* harmony import */ var _pages_createProperty_create_property_add_create_property_add_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./pages/createProperty/create-property-add/create-property-add.component */ "./src/app/pages/createProperty/create-property-add/create-property-add.component.ts");
/* harmony import */ var _pages_salesGroup_sales_group_add_sales_group_add_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./pages/salesGroup/sales-group-add/sales-group-add.component */ "./src/app/pages/salesGroup/sales-group-add/sales-group-add.component.ts");
/* harmony import */ var _pages_salesGroup_sales_group_edit_sales_group_edit_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./pages/salesGroup/sales-group-edit/sales-group-edit.component */ "./src/app/pages/salesGroup/sales-group-edit/sales-group-edit.component.ts");
/* harmony import */ var _pages_salesGroup_sales_group_list_sales_group_list_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./pages/salesGroup/sales-group-list/sales-group-list.component */ "./src/app/pages/salesGroup/sales-group-list/sales-group-list.component.ts");
/* harmony import */ var _pages_salesGroup_sales_group_details_sales_group_details_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./pages/salesGroup/sales-group-details/sales-group-details.component */ "./src/app/pages/salesGroup/sales-group-details/sales-group-details.component.ts");
/* harmony import */ var _pages_createTenant_create_tenant_add_create_tenant_add_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./pages/createTenant/create-tenant-add/create-tenant-add.component */ "./src/app/pages/createTenant/create-tenant-add/create-tenant-add.component.ts");
/* harmony import */ var _pages_agreements_agreements_add_agreements_add_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./pages/agreements/agreements-add/agreements-add.component */ "./src/app/pages/agreements/agreements-add/agreements-add.component.ts");
/* harmony import */ var _pages_agreements_agreements_edit_agreements_edit_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./pages/agreements/agreements-edit/agreements-edit.component */ "./src/app/pages/agreements/agreements-edit/agreements-edit.component.ts");
/* harmony import */ var _pages_agreements_agreements_details_agreements_details_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./pages/agreements/agreements-details/agreements-details.component */ "./src/app/pages/agreements/agreements-details/agreements-details.component.ts");
/* harmony import */ var _pages_agreements_agreements_list_agreements_list_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./pages/agreements/agreements-list/agreements-list.component */ "./src/app/pages/agreements/agreements-list/agreements-list.component.ts");










































































const routes = [
    {
        path: 'amenities-add',
        component: _pages_amenities_amenities_add_amenities_add_component__WEBPACK_IMPORTED_MODULE_3__["AmenitiesAddComponent"]
    },
    {
        path: 'amenities-details',
        component: _pages_amenities_amenities_details_amenities_details_component__WEBPACK_IMPORTED_MODULE_4__["AmenitiesDetailsComponent"]
    },
    {
        path: 'amenities-edit',
        component: _pages_amenities_amenities_edit_amenities_edit_component__WEBPACK_IMPORTED_MODULE_5__["AmenitiesEditComponent"]
    },
    {
        path: 'amenities-list',
        component: _pages_amenities_amenities_list_amenities_list_component__WEBPACK_IMPORTED_MODULE_6__["AmenitiesListComponent"]
    },
    {
        path: 'assign-property-to-owner-add',
        component: _pages_assignPropertyToOwner_assign_property_to_owner_add_assign_property_to_owner_add_component__WEBPACK_IMPORTED_MODULE_32__["AssignPropertyToOwnerAddComponent"]
    },
    {
        path: 'assign-property-to-owner-details',
        component: _pages_assignPropertyToOwner_assign_property_to_owner_details_assign_property_to_owner_details_component__WEBPACK_IMPORTED_MODULE_33__["AssignPropertyToOwnerDetailsComponent"]
    },
    {
        path: 'assign-property-to-owner-edit',
        component: _pages_assignPropertyToOwner_assign_property_to_owner_edit_assign_property_to_owner_edit_component__WEBPACK_IMPORTED_MODULE_34__["AssignPropertyToOwnerEditComponent"]
    },
    {
        path: 'assign-property-to-owner-list',
        component: _pages_assignPropertyToOwner_assign_property_to_owner_list_assign_property_to_owner_list_component__WEBPACK_IMPORTED_MODULE_35__["AssignPropertyToOwnerListComponent"]
    },
    {
        path: 'assign-property-to-tenant-add',
        component: _pages_assignPropertyToTenant_assign_property_to_tenant_add_assign_property_to_tenant_add_component__WEBPACK_IMPORTED_MODULE_36__["AssignPropertyToTenantAddComponent"]
    },
    {
        path: 'assign-property-to-tenant-details',
        component: _pages_assignPropertyToTenant_assign_property_to_tenant_details_assign_property_to_tenant_details_component__WEBPACK_IMPORTED_MODULE_37__["AssignPropertyToTenantDetailsComponent"]
    },
    {
        path: 'assign-property-to-tenant-edit',
        component: _pages_assignPropertyToTenant_assign_property_to_tenant_edit_assign_property_to_tenant_edit_component__WEBPACK_IMPORTED_MODULE_38__["AssignPropertyToTenantEditComponent"]
    },
    {
        path: 'assign-property-to-tenant-list',
        component: _pages_assignPropertyToTenant_assign_property_to_tenant_list_assign_property_to_tenant_list_component__WEBPACK_IMPORTED_MODULE_39__["AssignPropertyToTenantListComponent"]
    },
    {
        path: 'background-verification-status-add',
        component: _pages_backgroundVerificationStatus_background_verification_status_add_background_verification_status_add_component__WEBPACK_IMPORTED_MODULE_40__["BackgroundVerificationStatusAddComponent"]
    },
    {
        path: 'background-verification-status-details',
        component: _pages_backgroundVerificationStatus_background_verification_status_details_background_verification_status_details_component__WEBPACK_IMPORTED_MODULE_41__["BackgroundVerificationStatusDetailsComponent"]
    },
    {
        path: 'background-verification-status-edit',
        component: _pages_backgroundVerificationStatus_background_verification_status_edit_background_verification_status_edit_component__WEBPACK_IMPORTED_MODULE_42__["BackgroundVerificationStatusEditComponent"]
    },
    {
        path: 'background-verification-status-list',
        component: _pages_backgroundVerificationStatus_background_verification_status_list_background_verification_status_list_component__WEBPACK_IMPORTED_MODULE_43__["BackgroundVerificationStatusListComponent"]
    },
    {
        path: 'bank-account-add',
        component: _pages_bankAccount_bank_account_add_bank_account_add_component__WEBPACK_IMPORTED_MODULE_44__["BankAccountAddComponent"]
    },
    {
        path: 'bank-account-details',
        component: _pages_bankAccount_bank_account_details_bank_account_details_component__WEBPACK_IMPORTED_MODULE_45__["BankAccountDetailsComponent"]
    },
    {
        path: 'bank-account-edit',
        component: _pages_bankAccount_bank_account_edit_bank_account_edit_component__WEBPACK_IMPORTED_MODULE_46__["BankAccountEditComponent"]
    },
    {
        path: 'bank-account-list',
        component: _pages_bankAccount_bank_account_list_bank_account_list_component__WEBPACK_IMPORTED_MODULE_47__["BankAccountListComponent"]
    },
    {
        path: 'dashboard',
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_31__["DashboardComponent"]
    },
    {
        path: 'lease-type-add',
        component: _pages_leaseType_lease_type_add_lease_type_add_component__WEBPACK_IMPORTED_MODULE_48__["LeaseTypeAddComponent"]
    },
    {
        path: 'lease-type-details',
        component: _pages_leaseType_lease_type_details_lease_type_details_component__WEBPACK_IMPORTED_MODULE_49__["LeaseTypeDetailsComponent"]
    },
    {
        path: 'lease-type-edit',
        component: _pages_leaseType_lease_type_edit_lease_type_edit_component__WEBPACK_IMPORTED_MODULE_50__["LeaseTypeEditComponent"]
    },
    {
        path: 'lease-type-list',
        component: _pages_leaseType_lease_type_list_lease_type_list_component__WEBPACK_IMPORTED_MODULE_51__["LeaseTypeListComponent"]
    },
    {
        path: 'owner-add',
        component: _pages_owner_owner_add_owner_add_component__WEBPACK_IMPORTED_MODULE_7__["OwnerAddComponent"]
    },
    {
        path: 'owner-details',
        component: _pages_owner_owner_details_owner_details_component__WEBPACK_IMPORTED_MODULE_8__["OwnerDetailsComponent"]
    },
    {
        path: 'owner-edit',
        component: _pages_owner_owner_edit_owner_edit_component__WEBPACK_IMPORTED_MODULE_9__["OwnerEditComponent"]
    },
    {
        path: 'owner-list',
        component: _pages_owner_owner_list_owner_list_component__WEBPACK_IMPORTED_MODULE_10__["OwnerListComponent"]
    },
    {
        path: 'property-add',
        component: _pages_property_property_add_property_add_component__WEBPACK_IMPORTED_MODULE_11__["PropertyAddComponent"]
    },
    {
        path: 'property-details',
        component: _pages_property_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_12__["PropertyDetailsComponent"]
    },
    {
        path: 'property-edit',
        component: _pages_property_property_edit_property_edit_component__WEBPACK_IMPORTED_MODULE_13__["PropertyEditComponent"]
    },
    {
        path: 'property-list',
        component: _pages_property_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_14__["PropertyListComponent"]
    },
    {
        path: 'property-type-add',
        component: _pages_propertyType_property_type_add_property_type_add_component__WEBPACK_IMPORTED_MODULE_52__["PropertyTypeAddComponent"]
    },
    {
        path: 'property-type-details',
        component: _pages_propertyType_property_type_details_property_type_details_component__WEBPACK_IMPORTED_MODULE_53__["PropertyTypeDetailsComponent"]
    },
    {
        path: 'property-type-edit',
        component: _pages_propertyType_property_type_edit_property_type_edit_component__WEBPACK_IMPORTED_MODULE_54__["PropertyTypeEditComponent"]
    },
    {
        path: 'property-type-list',
        component: _pages_propertyType_property_type_list_property_type_list_component__WEBPACK_IMPORTED_MODULE_55__["PropertyTypeListComponent"]
    },
    {
        path: 'rental-type-add',
        component: _pages_rentalType_rental_type_add_rental_type_add_component__WEBPACK_IMPORTED_MODULE_56__["RentalTypeAddComponent"]
    },
    {
        path: 'rental-type-details',
        component: _pages_rentalType_rental_type_details_rental_type_details_component__WEBPACK_IMPORTED_MODULE_57__["RentalTypeDetailsComponent"]
    },
    {
        path: 'rental-type-edit',
        component: _pages_rentalType_rental_type_edit_rental_type_edit_component__WEBPACK_IMPORTED_MODULE_58__["RentalTypeEditComponent"]
    },
    {
        path: 'rental-type-list',
        component: _pages_rentalType_rental_type_list_rental_type_list_component__WEBPACK_IMPORTED_MODULE_59__["RentalTypeListComponent"]
    },
    {
        path: 'role-add',
        component: _pages_role_role_add_role_add_component__WEBPACK_IMPORTED_MODULE_15__["RoleAddComponent"]
    },
    {
        path: 'role-details',
        component: _pages_role_role_details_role_details_component__WEBPACK_IMPORTED_MODULE_16__["RoleDetailsComponent"]
    },
    {
        path: 'role-edit',
        component: _pages_role_role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_17__["RoleEditComponent"]
    },
    {
        path: 'role-list',
        component: _pages_role_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_18__["RoleListComponent"]
    },
    {
        path: 'sharing-type-add',
        component: _pages_sharingType_sharing_type_add_sharing_type_add_component__WEBPACK_IMPORTED_MODULE_60__["SharingTypeAddComponent"]
    },
    {
        path: 'sharing-type-details',
        component: _pages_sharingType_sharing_type_details_sharing_type_details_component__WEBPACK_IMPORTED_MODULE_61__["SharingTypeDetailsComponent"]
    },
    {
        path: 'sharing-type-edit',
        component: _pages_sharingType_sharing_type_edit_sharing_type_edit_component__WEBPACK_IMPORTED_MODULE_62__["SharingTypeEditComponent"]
    },
    {
        path: 'sharing-type-list',
        component: _pages_sharingType_sharing_type_list_sharing_type_list_component__WEBPACK_IMPORTED_MODULE_63__["SharingTypeListComponent"]
    },
    {
        path: 'tenant-add',
        component: _pages_tenant_tenant_add_tenant_add_component__WEBPACK_IMPORTED_MODULE_19__["TenantAddComponent"]
    },
    {
        path: 'tenant-details',
        component: _pages_tenant_tenant_details_tenant_details_component__WEBPACK_IMPORTED_MODULE_20__["TenantDetailsComponent"]
    },
    {
        path: 'tenant-edit',
        component: _pages_tenant_tenant_edit_tenant_edit_component__WEBPACK_IMPORTED_MODULE_21__["TenantEditComponent"]
    },
    {
        path: 'tenant-list',
        component: _pages_tenant_tenant_list_tenant_list_component__WEBPACK_IMPORTED_MODULE_22__["TenantListComponent"]
    },
    {
        path: 'units-add',
        component: _pages_units_units_add_units_add_component__WEBPACK_IMPORTED_MODULE_23__["UnitsAddComponent"]
    },
    {
        path: 'units-details',
        component: _pages_units_units_details_units_details_component__WEBPACK_IMPORTED_MODULE_24__["UnitsDetailsComponent"]
    },
    {
        path: 'units-edit',
        component: _pages_units_units_edit_units_edit_component__WEBPACK_IMPORTED_MODULE_25__["UnitsEditComponent"]
    },
    {
        path: 'units-list',
        component: _pages_units_units_list_units_list_component__WEBPACK_IMPORTED_MODULE_26__["UnitsListComponent"]
    },
    {
        path: 'user-add',
        component: _pages_user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_27__["UserAddComponent"]
    },
    {
        path: 'user-details',
        component: _pages_user_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_28__["UserDetailsComponent"]
    },
    {
        path: 'user-edit',
        component: _pages_user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_29__["UserEditComponent"]
    },
    {
        path: 'user-list',
        component: _pages_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_30__["UserListComponent"]
    },
    {
        path: 'dashboard',
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_31__["DashboardComponent"]
    },
    {
        path: 'create-property-add',
        component: _pages_createProperty_create_property_add_create_property_add_component__WEBPACK_IMPORTED_MODULE_64__["CreatePropertyAddComponent"]
    },
    {
        path: 'sales-group-add',
        component: _pages_salesGroup_sales_group_add_sales_group_add_component__WEBPACK_IMPORTED_MODULE_65__["SalesGroupAddComponent"]
    },
    {
        path: 'sales-group-edit',
        component: _pages_salesGroup_sales_group_edit_sales_group_edit_component__WEBPACK_IMPORTED_MODULE_66__["SalesGroupEditComponent"]
    },
    {
        path: 'sales-group-list',
        component: _pages_salesGroup_sales_group_list_sales_group_list_component__WEBPACK_IMPORTED_MODULE_67__["SalesGroupListComponent"]
    },
    {
        path: 'sales-group-details',
        component: _pages_salesGroup_sales_group_details_sales_group_details_component__WEBPACK_IMPORTED_MODULE_68__["SalesGroupDetailsComponent"]
    },
    {
        path: 'create-tenant-add',
        component: _pages_createTenant_create_tenant_add_create_tenant_add_component__WEBPACK_IMPORTED_MODULE_69__["CreateTenantAddComponent"]
    },
    {
        path: 'agreements-add',
        component: _pages_agreements_agreements_add_agreements_add_component__WEBPACK_IMPORTED_MODULE_70__["AgreementsAddComponent"]
    },
    {
        path: 'agreements-edit',
        component: _pages_agreements_agreements_edit_agreements_edit_component__WEBPACK_IMPORTED_MODULE_71__["AgreementsEditComponent"]
    },
    {
        path: 'agreements-details',
        component: _pages_agreements_agreements_details_agreements_details_component__WEBPACK_IMPORTED_MODULE_72__["AgreementsDetailsComponent"]
    },
    {
        path: 'agreements-list',
        component: _pages_agreements_agreements_list_agreements_list_component__WEBPACK_IMPORTED_MODULE_73__["AgreementsListComponent"]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'pms';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/user/user-add/user-add.component */ "./src/app/pages/user/user-add/user-add.component.ts");
/* harmony import */ var _pages_user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/user/user-edit/user-edit.component */ "./src/app/pages/user/user-edit/user-edit.component.ts");
/* harmony import */ var _pages_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/user/user-list/user-list.component */ "./src/app/pages/user/user-list/user-list.component.ts");
/* harmony import */ var _pages_user_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/user/user-details/user-details.component */ "./src/app/pages/user/user-details/user-details.component.ts");
/* harmony import */ var _pages_role_role_add_role_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/role/role-add/role-add.component */ "./src/app/pages/role/role-add/role-add.component.ts");
/* harmony import */ var _pages_role_role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/role/role-edit/role-edit.component */ "./src/app/pages/role/role-edit/role-edit.component.ts");
/* harmony import */ var _pages_role_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/role/role-list/role-list.component */ "./src/app/pages/role/role-list/role-list.component.ts");
/* harmony import */ var _pages_role_role_details_role_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/role/role-details/role-details.component */ "./src/app/pages/role/role-details/role-details.component.ts");
/* harmony import */ var _pages_owner_owner_add_owner_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/owner/owner-add/owner-add.component */ "./src/app/pages/owner/owner-add/owner-add.component.ts");
/* harmony import */ var _pages_owner_owner_edit_owner_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/owner/owner-edit/owner-edit.component */ "./src/app/pages/owner/owner-edit/owner-edit.component.ts");
/* harmony import */ var _pages_owner_owner_list_owner_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/owner/owner-list/owner-list.component */ "./src/app/pages/owner/owner-list/owner-list.component.ts");
/* harmony import */ var _pages_owner_owner_details_owner_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/owner/owner-details/owner-details.component */ "./src/app/pages/owner/owner-details/owner-details.component.ts");
/* harmony import */ var _pages_tenant_tenant_add_tenant_add_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/tenant/tenant-add/tenant-add.component */ "./src/app/pages/tenant/tenant-add/tenant-add.component.ts");
/* harmony import */ var _pages_tenant_tenant_edit_tenant_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/tenant/tenant-edit/tenant-edit.component */ "./src/app/pages/tenant/tenant-edit/tenant-edit.component.ts");
/* harmony import */ var _pages_tenant_tenant_list_tenant_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/tenant/tenant-list/tenant-list.component */ "./src/app/pages/tenant/tenant-list/tenant-list.component.ts");
/* harmony import */ var _pages_tenant_tenant_details_tenant_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/tenant/tenant-details/tenant-details.component */ "./src/app/pages/tenant/tenant-details/tenant-details.component.ts");
/* harmony import */ var _pages_amenities_amenities_add_amenities_add_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/amenities/amenities-add/amenities-add.component */ "./src/app/pages/amenities/amenities-add/amenities-add.component.ts");
/* harmony import */ var _pages_amenities_amenities_edit_amenities_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/amenities/amenities-edit/amenities-edit.component */ "./src/app/pages/amenities/amenities-edit/amenities-edit.component.ts");
/* harmony import */ var _pages_amenities_amenities_list_amenities_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/amenities/amenities-list/amenities-list.component */ "./src/app/pages/amenities/amenities-list/amenities-list.component.ts");
/* harmony import */ var _pages_amenities_amenities_details_amenities_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/amenities/amenities-details/amenities-details.component */ "./src/app/pages/amenities/amenities-details/amenities-details.component.ts");
/* harmony import */ var _pages_units_units_add_units_add_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/units/units-add/units-add.component */ "./src/app/pages/units/units-add/units-add.component.ts");
/* harmony import */ var _pages_units_units_edit_units_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/units/units-edit/units-edit.component */ "./src/app/pages/units/units-edit/units-edit.component.ts");
/* harmony import */ var _pages_units_units_list_units_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/units/units-list/units-list.component */ "./src/app/pages/units/units-list/units-list.component.ts");
/* harmony import */ var _pages_units_units_details_units_details_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/units/units-details/units-details.component */ "./src/app/pages/units/units-details/units-details.component.ts");
/* harmony import */ var _pages_property_property_add_property_add_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/property/property-add/property-add.component */ "./src/app/pages/property/property-add/property-add.component.ts");
/* harmony import */ var _pages_property_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/property/property-list/property-list.component */ "./src/app/pages/property/property-list/property-list.component.ts");
/* harmony import */ var _pages_property_property_edit_property_edit_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/property/property-edit/property-edit.component */ "./src/app/pages/property/property-edit/property-edit.component.ts");
/* harmony import */ var _pages_property_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/property/property-details/property-details.component */ "./src/app/pages/property/property-details/property-details.component.ts");
/* harmony import */ var _pages_assignPropertyToOwner_assign_property_to_owner_add_assign_property_to_owner_add_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/assignPropertyToOwner/assign-property-to-owner-add/assign-property-to-owner-add.component */ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-add/assign-property-to-owner-add.component.ts");
/* harmony import */ var _pages_assignPropertyToOwner_assign_property_to_owner_list_assign_property_to_owner_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/assignPropertyToOwner/assign-property-to-owner-list/assign-property-to-owner-list.component */ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-list/assign-property-to-owner-list.component.ts");
/* harmony import */ var _pages_assignPropertyToOwner_assign_property_to_owner_edit_assign_property_to_owner_edit_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/assignPropertyToOwner/assign-property-to-owner-edit/assign-property-to-owner-edit.component */ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-edit/assign-property-to-owner-edit.component.ts");
/* harmony import */ var _pages_assignPropertyToOwner_assign_property_to_owner_details_assign_property_to_owner_details_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/assignPropertyToOwner/assign-property-to-owner-details/assign-property-to-owner-details.component */ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-details/assign-property-to-owner-details.component.ts");
/* harmony import */ var _pages_assignPropertyToTenant_assign_property_to_tenant_add_assign_property_to_tenant_add_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/assignPropertyToTenant/assign-property-to-tenant-add/assign-property-to-tenant-add.component */ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-add/assign-property-to-tenant-add.component.ts");
/* harmony import */ var _pages_assignPropertyToTenant_assign_property_to_tenant_edit_assign_property_to_tenant_edit_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/assignPropertyToTenant/assign-property-to-tenant-edit/assign-property-to-tenant-edit.component */ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-edit/assign-property-to-tenant-edit.component.ts");
/* harmony import */ var _pages_assignPropertyToTenant_assign_property_to_tenant_list_assign_property_to_tenant_list_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/assignPropertyToTenant/assign-property-to-tenant-list/assign-property-to-tenant-list.component */ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-list/assign-property-to-tenant-list.component.ts");
/* harmony import */ var _pages_assignPropertyToTenant_assign_property_to_tenant_details_assign_property_to_tenant_details_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/assignPropertyToTenant/assign-property-to-tenant-details/assign-property-to-tenant-details.component */ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-details/assign-property-to-tenant-details.component.ts");
/* harmony import */ var _components_sidenev_sidenev_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/sidenev/sidenev.component */ "./src/app/components/sidenev/sidenev.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_propertyType_property_type_add_property_type_add_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/propertyType/property-type-add/property-type-add.component */ "./src/app/pages/propertyType/property-type-add/property-type-add.component.ts");
/* harmony import */ var _pages_propertyType_property_type_details_property_type_details_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/propertyType/property-type-details/property-type-details.component */ "./src/app/pages/propertyType/property-type-details/property-type-details.component.ts");
/* harmony import */ var _pages_propertyType_property_type_edit_property_type_edit_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/propertyType/property-type-edit/property-type-edit.component */ "./src/app/pages/propertyType/property-type-edit/property-type-edit.component.ts");
/* harmony import */ var _pages_leaseType_lease_type_add_lease_type_add_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/leaseType/lease-type-add/lease-type-add.component */ "./src/app/pages/leaseType/lease-type-add/lease-type-add.component.ts");
/* harmony import */ var _pages_leaseType_lease_type_details_lease_type_details_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/leaseType/lease-type-details/lease-type-details.component */ "./src/app/pages/leaseType/lease-type-details/lease-type-details.component.ts");
/* harmony import */ var _pages_leaseType_lease_type_edit_lease_type_edit_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/leaseType/lease-type-edit/lease-type-edit.component */ "./src/app/pages/leaseType/lease-type-edit/lease-type-edit.component.ts");
/* harmony import */ var _pages_bankAccount_bank_account_add_bank_account_add_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/bankAccount/bank-account-add/bank-account-add.component */ "./src/app/pages/bankAccount/bank-account-add/bank-account-add.component.ts");
/* harmony import */ var _pages_bankAccount_bank_account_details_bank_account_details_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pages/bankAccount/bank-account-details/bank-account-details.component */ "./src/app/pages/bankAccount/bank-account-details/bank-account-details.component.ts");
/* harmony import */ var _pages_bankAccount_bank_account_edit_bank_account_edit_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pages/bankAccount/bank-account-edit/bank-account-edit.component */ "./src/app/pages/bankAccount/bank-account-edit/bank-account-edit.component.ts");
/* harmony import */ var _pages_rentalType_rental_type_add_rental_type_add_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./pages/rentalType/rental-type-add/rental-type-add.component */ "./src/app/pages/rentalType/rental-type-add/rental-type-add.component.ts");
/* harmony import */ var _pages_rentalType_rental_type_details_rental_type_details_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./pages/rentalType/rental-type-details/rental-type-details.component */ "./src/app/pages/rentalType/rental-type-details/rental-type-details.component.ts");
/* harmony import */ var _pages_rentalType_rental_type_edit_rental_type_edit_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./pages/rentalType/rental-type-edit/rental-type-edit.component */ "./src/app/pages/rentalType/rental-type-edit/rental-type-edit.component.ts");
/* harmony import */ var _pages_sharingType_sharing_type_add_sharing_type_add_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./pages/sharingType/sharing-type-add/sharing-type-add.component */ "./src/app/pages/sharingType/sharing-type-add/sharing-type-add.component.ts");
/* harmony import */ var _pages_sharingType_sharing_type_details_sharing_type_details_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./pages/sharingType/sharing-type-details/sharing-type-details.component */ "./src/app/pages/sharingType/sharing-type-details/sharing-type-details.component.ts");
/* harmony import */ var _pages_sharingType_sharing_type_edit_sharing_type_edit_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./pages/sharingType/sharing-type-edit/sharing-type-edit.component */ "./src/app/pages/sharingType/sharing-type-edit/sharing-type-edit.component.ts");
/* harmony import */ var _pages_propertyType_property_type_list_property_type_list_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./pages/propertyType/property-type-list/property-type-list.component */ "./src/app/pages/propertyType/property-type-list/property-type-list.component.ts");
/* harmony import */ var _pages_leaseType_lease_type_list_lease_type_list_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./pages/leaseType/lease-type-list/lease-type-list.component */ "./src/app/pages/leaseType/lease-type-list/lease-type-list.component.ts");
/* harmony import */ var _pages_bankAccount_bank_account_list_bank_account_list_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./pages/bankAccount/bank-account-list/bank-account-list.component */ "./src/app/pages/bankAccount/bank-account-list/bank-account-list.component.ts");
/* harmony import */ var _pages_rentalType_rental_type_list_rental_type_list_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./pages/rentalType/rental-type-list/rental-type-list.component */ "./src/app/pages/rentalType/rental-type-list/rental-type-list.component.ts");
/* harmony import */ var _pages_sharingType_sharing_type_list_sharing_type_list_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./pages/sharingType/sharing-type-list/sharing-type-list.component */ "./src/app/pages/sharingType/sharing-type-list/sharing-type-list.component.ts");
/* harmony import */ var _pages_backgroundVerificationStatus_background_verification_status_add_background_verification_status_add_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./pages/backgroundVerificationStatus/background-verification-status-add/background-verification-status-add.component */ "./src/app/pages/backgroundVerificationStatus/background-verification-status-add/background-verification-status-add.component.ts");
/* harmony import */ var _pages_backgroundVerificationStatus_background_verification_status_details_background_verification_status_details_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./pages/backgroundVerificationStatus/background-verification-status-details/background-verification-status-details.component */ "./src/app/pages/backgroundVerificationStatus/background-verification-status-details/background-verification-status-details.component.ts");
/* harmony import */ var _pages_backgroundVerificationStatus_background_verification_status_edit_background_verification_status_edit_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./pages/backgroundVerificationStatus/background-verification-status-edit/background-verification-status-edit.component */ "./src/app/pages/backgroundVerificationStatus/background-verification-status-edit/background-verification-status-edit.component.ts");
/* harmony import */ var _pages_backgroundVerificationStatus_background_verification_status_list_background_verification_status_list_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./pages/backgroundVerificationStatus/background-verification-status-list/background-verification-status-list.component */ "./src/app/pages/backgroundVerificationStatus/background-verification-status-list/background-verification-status-list.component.ts");
/* harmony import */ var _pages_createProperty_create_property_add_create_property_add_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./pages/createProperty/create-property-add/create-property-add.component */ "./src/app/pages/createProperty/create-property-add/create-property-add.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_top_profile_top_profile_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./components/top-profile/top-profile.component */ "./src/app/components/top-profile/top-profile.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _pages_salesGroup_sales_group_add_sales_group_add_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./pages/salesGroup/sales-group-add/sales-group-add.component */ "./src/app/pages/salesGroup/sales-group-add/sales-group-add.component.ts");
/* harmony import */ var _pages_salesGroup_sales_group_details_sales_group_details_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./pages/salesGroup/sales-group-details/sales-group-details.component */ "./src/app/pages/salesGroup/sales-group-details/sales-group-details.component.ts");
/* harmony import */ var _pages_salesGroup_sales_group_list_sales_group_list_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./pages/salesGroup/sales-group-list/sales-group-list.component */ "./src/app/pages/salesGroup/sales-group-list/sales-group-list.component.ts");
/* harmony import */ var _pages_salesGroup_sales_group_edit_sales_group_edit_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./pages/salesGroup/sales-group-edit/sales-group-edit.component */ "./src/app/pages/salesGroup/sales-group-edit/sales-group-edit.component.ts");
/* harmony import */ var _pages_notify_notify_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./pages/notify/notify.component */ "./src/app/pages/notify/notify.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _pages_createTenant_create_tenant_add_create_tenant_add_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./pages/createTenant/create-tenant-add/create-tenant-add.component */ "./src/app/pages/createTenant/create-tenant-add/create-tenant-add.component.ts");
/* harmony import */ var _pages_agreements_agreements_add_agreements_add_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./pages/agreements/agreements-add/agreements-add.component */ "./src/app/pages/agreements/agreements-add/agreements-add.component.ts");
/* harmony import */ var _pages_agreements_agreements_edit_agreements_edit_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./pages/agreements/agreements-edit/agreements-edit.component */ "./src/app/pages/agreements/agreements-edit/agreements-edit.component.ts");
/* harmony import */ var _pages_agreements_agreements_details_agreements_details_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./pages/agreements/agreements-details/agreements-details.component */ "./src/app/pages/agreements/agreements-details/agreements-details.component.ts");
/* harmony import */ var _pages_agreements_agreements_list_agreements_list_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./pages/agreements/agreements-list/agreements-list.component */ "./src/app/pages/agreements/agreements-list/agreements-list.component.ts");




















































































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _pages_user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_6__["UserAddComponent"],
            _pages_user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"],
            _pages_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_8__["UserListComponent"],
            _pages_user_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_9__["UserDetailsComponent"],
            _pages_role_role_add_role_add_component__WEBPACK_IMPORTED_MODULE_10__["RoleAddComponent"],
            _pages_role_role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_11__["RoleEditComponent"],
            _pages_role_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_12__["RoleListComponent"],
            _pages_role_role_details_role_details_component__WEBPACK_IMPORTED_MODULE_13__["RoleDetailsComponent"],
            _pages_owner_owner_add_owner_add_component__WEBPACK_IMPORTED_MODULE_14__["OwnerAddComponent"],
            _pages_owner_owner_edit_owner_edit_component__WEBPACK_IMPORTED_MODULE_15__["OwnerEditComponent"],
            _pages_owner_owner_list_owner_list_component__WEBPACK_IMPORTED_MODULE_16__["OwnerListComponent"],
            _pages_owner_owner_details_owner_details_component__WEBPACK_IMPORTED_MODULE_17__["OwnerDetailsComponent"],
            _pages_tenant_tenant_add_tenant_add_component__WEBPACK_IMPORTED_MODULE_18__["TenantAddComponent"],
            _pages_tenant_tenant_edit_tenant_edit_component__WEBPACK_IMPORTED_MODULE_19__["TenantEditComponent"],
            _pages_tenant_tenant_list_tenant_list_component__WEBPACK_IMPORTED_MODULE_20__["TenantListComponent"],
            _pages_tenant_tenant_details_tenant_details_component__WEBPACK_IMPORTED_MODULE_21__["TenantDetailsComponent"],
            _pages_amenities_amenities_add_amenities_add_component__WEBPACK_IMPORTED_MODULE_22__["AmenitiesAddComponent"],
            _pages_amenities_amenities_edit_amenities_edit_component__WEBPACK_IMPORTED_MODULE_23__["AmenitiesEditComponent"],
            _pages_amenities_amenities_list_amenities_list_component__WEBPACK_IMPORTED_MODULE_24__["AmenitiesListComponent"],
            _pages_amenities_amenities_details_amenities_details_component__WEBPACK_IMPORTED_MODULE_25__["AmenitiesDetailsComponent"],
            _pages_units_units_add_units_add_component__WEBPACK_IMPORTED_MODULE_26__["UnitsAddComponent"],
            _pages_units_units_edit_units_edit_component__WEBPACK_IMPORTED_MODULE_27__["UnitsEditComponent"],
            _pages_units_units_list_units_list_component__WEBPACK_IMPORTED_MODULE_28__["UnitsListComponent"],
            _pages_units_units_details_units_details_component__WEBPACK_IMPORTED_MODULE_29__["UnitsDetailsComponent"],
            _pages_property_property_add_property_add_component__WEBPACK_IMPORTED_MODULE_30__["PropertyAddComponent"],
            _pages_property_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_31__["PropertyListComponent"],
            _pages_property_property_edit_property_edit_component__WEBPACK_IMPORTED_MODULE_32__["PropertyEditComponent"],
            _pages_property_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_33__["PropertyDetailsComponent"],
            _pages_assignPropertyToOwner_assign_property_to_owner_add_assign_property_to_owner_add_component__WEBPACK_IMPORTED_MODULE_34__["AssignPropertyToOwnerAddComponent"],
            _pages_assignPropertyToOwner_assign_property_to_owner_list_assign_property_to_owner_list_component__WEBPACK_IMPORTED_MODULE_35__["AssignPropertyToOwnerListComponent"],
            _pages_assignPropertyToOwner_assign_property_to_owner_edit_assign_property_to_owner_edit_component__WEBPACK_IMPORTED_MODULE_36__["AssignPropertyToOwnerEditComponent"],
            _pages_assignPropertyToOwner_assign_property_to_owner_details_assign_property_to_owner_details_component__WEBPACK_IMPORTED_MODULE_37__["AssignPropertyToOwnerDetailsComponent"],
            _pages_assignPropertyToTenant_assign_property_to_tenant_add_assign_property_to_tenant_add_component__WEBPACK_IMPORTED_MODULE_38__["AssignPropertyToTenantAddComponent"],
            _pages_assignPropertyToTenant_assign_property_to_tenant_edit_assign_property_to_tenant_edit_component__WEBPACK_IMPORTED_MODULE_39__["AssignPropertyToTenantEditComponent"],
            _pages_assignPropertyToTenant_assign_property_to_tenant_list_assign_property_to_tenant_list_component__WEBPACK_IMPORTED_MODULE_40__["AssignPropertyToTenantListComponent"],
            _pages_assignPropertyToTenant_assign_property_to_tenant_details_assign_property_to_tenant_details_component__WEBPACK_IMPORTED_MODULE_41__["AssignPropertyToTenantDetailsComponent"],
            _components_sidenev_sidenev_component__WEBPACK_IMPORTED_MODULE_42__["SidenevComponent"],
            _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_43__["DashboardComponent"],
            _pages_propertyType_property_type_add_property_type_add_component__WEBPACK_IMPORTED_MODULE_44__["PropertyTypeAddComponent"],
            _pages_propertyType_property_type_details_property_type_details_component__WEBPACK_IMPORTED_MODULE_45__["PropertyTypeDetailsComponent"],
            _pages_propertyType_property_type_edit_property_type_edit_component__WEBPACK_IMPORTED_MODULE_46__["PropertyTypeEditComponent"],
            _pages_leaseType_lease_type_add_lease_type_add_component__WEBPACK_IMPORTED_MODULE_47__["LeaseTypeAddComponent"],
            _pages_leaseType_lease_type_details_lease_type_details_component__WEBPACK_IMPORTED_MODULE_48__["LeaseTypeDetailsComponent"],
            _pages_leaseType_lease_type_edit_lease_type_edit_component__WEBPACK_IMPORTED_MODULE_49__["LeaseTypeEditComponent"],
            _pages_bankAccount_bank_account_add_bank_account_add_component__WEBPACK_IMPORTED_MODULE_50__["BankAccountAddComponent"],
            _pages_bankAccount_bank_account_details_bank_account_details_component__WEBPACK_IMPORTED_MODULE_51__["BankAccountDetailsComponent"],
            _pages_bankAccount_bank_account_edit_bank_account_edit_component__WEBPACK_IMPORTED_MODULE_52__["BankAccountEditComponent"],
            _pages_rentalType_rental_type_add_rental_type_add_component__WEBPACK_IMPORTED_MODULE_53__["RentalTypeAddComponent"],
            _pages_rentalType_rental_type_details_rental_type_details_component__WEBPACK_IMPORTED_MODULE_54__["RentalTypeDetailsComponent"],
            _pages_rentalType_rental_type_edit_rental_type_edit_component__WEBPACK_IMPORTED_MODULE_55__["RentalTypeEditComponent"],
            _pages_sharingType_sharing_type_add_sharing_type_add_component__WEBPACK_IMPORTED_MODULE_56__["SharingTypeAddComponent"],
            _pages_sharingType_sharing_type_details_sharing_type_details_component__WEBPACK_IMPORTED_MODULE_57__["SharingTypeDetailsComponent"],
            _pages_sharingType_sharing_type_edit_sharing_type_edit_component__WEBPACK_IMPORTED_MODULE_58__["SharingTypeEditComponent"],
            _pages_propertyType_property_type_list_property_type_list_component__WEBPACK_IMPORTED_MODULE_59__["PropertyTypeListComponent"],
            _pages_leaseType_lease_type_list_lease_type_list_component__WEBPACK_IMPORTED_MODULE_60__["LeaseTypeListComponent"],
            _pages_bankAccount_bank_account_list_bank_account_list_component__WEBPACK_IMPORTED_MODULE_61__["BankAccountListComponent"],
            _pages_rentalType_rental_type_list_rental_type_list_component__WEBPACK_IMPORTED_MODULE_62__["RentalTypeListComponent"],
            _pages_sharingType_sharing_type_list_sharing_type_list_component__WEBPACK_IMPORTED_MODULE_63__["SharingTypeListComponent"],
            _pages_backgroundVerificationStatus_background_verification_status_add_background_verification_status_add_component__WEBPACK_IMPORTED_MODULE_64__["BackgroundVerificationStatusAddComponent"],
            _pages_backgroundVerificationStatus_background_verification_status_details_background_verification_status_details_component__WEBPACK_IMPORTED_MODULE_65__["BackgroundVerificationStatusDetailsComponent"],
            _pages_backgroundVerificationStatus_background_verification_status_edit_background_verification_status_edit_component__WEBPACK_IMPORTED_MODULE_66__["BackgroundVerificationStatusEditComponent"],
            _pages_backgroundVerificationStatus_background_verification_status_list_background_verification_status_list_component__WEBPACK_IMPORTED_MODULE_67__["BackgroundVerificationStatusListComponent"],
            _pages_createProperty_create_property_add_create_property_add_component__WEBPACK_IMPORTED_MODULE_68__["CreatePropertyAddComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_69__["FooterComponent"],
            _components_top_profile_top_profile_component__WEBPACK_IMPORTED_MODULE_71__["TopProfileComponent"],
            _pages_salesGroup_sales_group_add_sales_group_add_component__WEBPACK_IMPORTED_MODULE_73__["SalesGroupAddComponent"],
            _pages_salesGroup_sales_group_list_sales_group_list_component__WEBPACK_IMPORTED_MODULE_75__["SalesGroupListComponent"],
            _pages_salesGroup_sales_group_add_sales_group_add_component__WEBPACK_IMPORTED_MODULE_73__["SalesGroupAddComponent"],
            _pages_salesGroup_sales_group_details_sales_group_details_component__WEBPACK_IMPORTED_MODULE_74__["SalesGroupDetailsComponent"],
            _pages_salesGroup_sales_group_list_sales_group_list_component__WEBPACK_IMPORTED_MODULE_75__["SalesGroupListComponent"],
            _pages_salesGroup_sales_group_edit_sales_group_edit_component__WEBPACK_IMPORTED_MODULE_76__["SalesGroupEditComponent"],
            _pages_notify_notify_component__WEBPACK_IMPORTED_MODULE_77__["NotifyComponent"],
            _pages_createTenant_create_tenant_add_create_tenant_add_component__WEBPACK_IMPORTED_MODULE_79__["CreateTenantAddComponent"],
            _pages_agreements_agreements_add_agreements_add_component__WEBPACK_IMPORTED_MODULE_80__["AgreementsAddComponent"],
            _pages_agreements_agreements_edit_agreements_edit_component__WEBPACK_IMPORTED_MODULE_81__["AgreementsEditComponent"],
            _pages_agreements_agreements_details_agreements_details_component__WEBPACK_IMPORTED_MODULE_82__["AgreementsDetailsComponent"],
            _pages_agreements_agreements_list_agreements_list_component__WEBPACK_IMPORTED_MODULE_83__["AgreementsListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_70__["HttpClientModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_78__["NgMultiSelectDropDownModule"].forRoot()
        ],
        providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_72__["UserService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/sidenev/sidenev.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidenev/sidenev.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZW5ldi9zaWRlbmV2LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/sidenev/sidenev.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidenev/sidenev.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenevComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenevComponent", function() { return SidenevComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidenevComponent = class SidenevComponent {
    constructor() {
        this.routes = [
            {
                name: 'Dashboard',
                closed: true,
                children: [
                    { name: 'Dashboard', path: 'dashboard' },
                ]
            },
            {
                name: 'Property Type',
                closed: true,
                children: [
                    { name: 'Add Property Type', path: 'property-type-add' },
                    { name: 'List Property Type', path: 'property-type-list' }
                ]
            },
            {
                name: 'Roles',
                closed: true,
                children: [
                    { name: 'Add Roles', path: 'role-add' },
                    { name: 'List Roles', path: 'role-list' }
                ]
            },
            {
                name: 'Users',
                closed: true,
                children: [
                    { name: 'Add Users', path: 'user-add' },
                    { name: 'List Users', path: 'user-list' }
                ]
            },
            {
                name: 'Lease Type',
                closed: true,
                children: [
                    { name: 'Add Lease Type', path: 'lease-type-add' },
                    { name: 'List Lease Type', path: 'lease-type-list' }
                ]
            },
            {
                name: 'Amenities',
                closed: false,
                children: [
                    { name: 'Add Amenities', path: 'amenities-add' },
                    { name: 'List Amenities', path: 'amenities-list' }
                ]
            },
            {
                name: 'Sharing Type',
                closed: true,
                children: [
                    { name: 'Add Sharing Type', path: 'sharing-type-add' },
                    { name: 'List Sharing Type', path: 'sharing-type-list' }
                ]
            },
            {
                name: 'Property',
                closed: true,
                children: [
                    { name: 'Add Property', path: 'property-add' },
                    { name: 'List Property', path: 'property-list' }
                ]
            },
            {
                name: 'Units',
                closed: true,
                children: [
                    { name: 'Add Units', path: 'units-add' },
                    { name: 'List Units', path: 'units-list' }
                ]
            },
            {
                name: 'Owner',
                closed: true,
                children: [
                    { name: 'Add Owner', path: 'owner-add' },
                    { name: 'List Owner', path: 'owner-list' }
                ]
            },
            {
                name: 'Assign Property to Owner',
                closed: true,
                children: [
                    { name: 'Add Assign Property to Owner', path: 'assign-property-to-owner-add' },
                    { name: 'List Assign Property to Owner', path: 'assign-property-to-owner-list' }
                ]
            },
            {
                name: 'Tenants',
                closed: true,
                children: [
                    { name: 'Add Tenant', path: 'tenant-add' },
                    { name: 'List Tenant', path: 'tenant-list' }
                ]
            },
            {
                name: 'Assign Property to Tenant',
                closed: true,
                children: [
                    { name: 'Add Assign Property to Tenant', path: 'assign-property-to-tenant-add' },
                    { name: 'List Assign Property to Tenant', path: 'assign-property-to-tenant-list' }
                ]
            },
            {
                name: 'Bank Account',
                closed: true,
                children: [
                    { name: 'Add Bank Account', path: 'bank-account-add' },
                    { name: 'List Bank Account', path: 'bank-account-list' }
                ]
            },
            {
                name: 'Sales Group',
                closed: true,
                children: [
                    { name: 'Sales Group Add', path: 'sales-group-add' },
                    { name: 'Sales Group List', path: 'sales-group-list' }
                ]
            },
            {
                name: 'Background Verification Status',
                closed: true,
                children: [
                    { name: 'Add Background Verification Status', path: 'background-verification-status-add' },
                    { name: 'List Background Verification Status', path: 'background-verification-status-list' }
                ]
            }
        ];
    }
    ngOnInit() {
    }
    toggleMenu(item) {
        let flag = !item.closed;
        this.routes.forEach(route => {
            route.closed = true;
        });
        item.closed = flag;
    }
};
SidenevComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidenev',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidenev.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidenev/sidenev.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidenev.component.scss */ "./src/app/components/sidenev/sidenev.component.scss")).default]
    })
], SidenevComponent);



/***/ }),

/***/ "./src/app/components/top-profile/top-profile.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/top-profile/top-profile.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9wLXByb2ZpbGUvdG9wLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/top-profile/top-profile.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/top-profile/top-profile.component.ts ***!
  \*****************************************************************/
/*! exports provided: TopProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopProfileComponent", function() { return TopProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopProfileComponent = class TopProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
TopProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/top-profile/top-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-profile.component.scss */ "./src/app/components/top-profile/top-profile.component.scss")).default]
    })
], TopProfileComponent);



/***/ }),

/***/ "./src/app/http-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-service.service.ts ***!
  \*****************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let HttpServiceService = class HttpServiceService {
    constructor(http) {
        this.http = http;
        this.serverUrl = 'http://d1b1162c.ngrok.io/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    getApi(url) {
        return this.http.get(this.serverUrl + url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    postApi(json, url) {
        return this.http.post(this.serverUrl + url, json, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    putApi(json, url) {
        return this.http.put(this.serverUrl + url, json, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
HttpServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpServiceService);



/***/ }),

/***/ "./src/app/loader.service.ts":
/*!***********************************!*\
  !*** ./src/app/loader.service.ts ***!
  \***********************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


//declare var $: any;
let LoaderService = class LoaderService {
    constructor() { }
    showLoader(loaderText) {
        return new Promise((resolve, reject) => {
            //     $('#preloader').show();
            resolve(1);
        });
    }
    hideLoader() {
        //    $("#preloader").hide();
    }
};
LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoaderService);



/***/ }),

/***/ "./src/app/pages/agreements/agreements-add/agreements-add.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/agreements/agreements-add/agreements-add.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FncmVlbWVudHMvYWdyZWVtZW50cy1hZGQvYWdyZWVtZW50cy1hZGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/agreements/agreements-add/agreements-add.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/agreements/agreements-add/agreements-add.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AgreementsAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreementsAddComponent", function() { return AgreementsAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");









let AgreementsAddComponent = class AgreementsAddComponent {
    constructor(formBuilder, router, util, httpService, alertService, userService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.userService = userService;
        this.loaderService = loaderService;
        this.agreementArray = {};
    }
    ngOnInit() {
    }
    submit() {
        this.agreementArray['createdAt'] = new Date().getTime();
        console.log(this.agreementArray);
        localStorage.setItem('propertyData', JSON.stringify(this.agreementArray));
        this.loaderService.showLoader('Adding Please wait ..').then(() => {
            try {
                this.httpService.postApi(this.agreementArray, 'agreements/create').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        this.router.navigate(['/agreements-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
AgreementsAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
AgreementsAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agreements-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agreements-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agreements/agreements-add/agreements-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agreements-add.component.scss */ "./src/app/pages/agreements/agreements-add/agreements-add.component.scss")).default]
    })
], AgreementsAddComponent);



/***/ }),

/***/ "./src/app/pages/agreements/agreements-details/agreements-details.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/agreements/agreements-details/agreements-details.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FncmVlbWVudHMvYWdyZWVtZW50cy1kZXRhaWxzL2FncmVlbWVudHMtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/agreements/agreements-details/agreements-details.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/agreements/agreements-details/agreements-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AgreementsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreementsDetailsComponent", function() { return AgreementsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let AgreementsDetailsComponent = class AgreementsDetailsComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.agreement = JSON.parse(localStorage.getItem('agreementDetails'));
    }
    ngOnInit() {
    }
    toggleStatus(id, status) {
        let data = {
            isAvailable: status
        };
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'agreements/updateDetails' + id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/agreements-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    delete(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'agreements/delete/' + data.id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully deleted', 'Okay');
                        this.router.navigate(['/agreements-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    edit(data) {
        console.log(data);
        localStorage.setItem('editData', JSON.stringify(data));
        this.router.navigate(['/agreements-edit']);
    }
};
AgreementsDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
AgreementsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agreements-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agreements-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agreements/agreements-details/agreements-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agreements-details.component.scss */ "./src/app/pages/agreements/agreements-details/agreements-details.component.scss")).default]
    })
], AgreementsDetailsComponent);



/***/ }),

/***/ "./src/app/pages/agreements/agreements-edit/agreements-edit.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/agreements/agreements-edit/agreements-edit.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FncmVlbWVudHMvYWdyZWVtZW50cy1lZGl0L2FncmVlbWVudHMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/agreements/agreements-edit/agreements-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/agreements/agreements-edit/agreements-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AgreementsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreementsEditComponent", function() { return AgreementsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");









let AgreementsEditComponent = class AgreementsEditComponent {
    constructor(formBuilder, router, util, userService, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.userService = userService;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.agreementForm = this.formBuilder.group({
            _id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            userId: [this.userService.getUserId(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            propertyId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            userType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            photo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            toDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.loaderService.showLoader('Please wait while fetching ..').then(() => {
            this.editDetails = JSON.parse(localStorage.getItem('editData'));
            this.agreementForm.patchValue(this.editDetails);
            this.loaderService.hideLoader();
        });
    }
    submit(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'agreements/updateDetails/').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/agreements-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
AgreementsEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
AgreementsEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agreements-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agreements-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agreements/agreements-edit/agreements-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agreements-edit.component.scss */ "./src/app/pages/agreements/agreements-edit/agreements-edit.component.scss")).default]
    })
], AgreementsEditComponent);



/***/ }),

/***/ "./src/app/pages/agreements/agreements-list/agreements-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/agreements/agreements-list/agreements-list.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FncmVlbWVudHMvYWdyZWVtZW50cy1saXN0L2FncmVlbWVudHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/agreements/agreements-list/agreements-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/agreements/agreements-list/agreements-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AgreementsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreementsListComponent", function() { return AgreementsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let AgreementsListComponent = class AgreementsListComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.json = [];
    }
    loadData() {
        this.loaderService.showLoader('Fetching Please wait ..').then(() => {
            try {
                this.httpService.getApi('agreements/getAll').subscribe((res) => {
                    this.json = res.success ? res.data : [];
                    this.loaderService.hideLoader();
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
            }
        });
    }
    ngOnInit() {
        this.loadData();
    }
    add() {
        this.router.navigate(['/agreements-add']);
    }
    details(data) {
        localStorage.setItem('agreementDetails', JSON.stringify(data));
        this.router.navigate(['/agreements-details']);
    }
};
AgreementsListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
AgreementsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agreements-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agreements-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agreements/agreements-list/agreements-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agreements-list.component.scss */ "./src/app/pages/agreements/agreements-list/agreements-list.component.scss")).default]
    })
], AgreementsListComponent);



/***/ }),

/***/ "./src/app/pages/amenities/amenities-add/amenities-add.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/amenities/amenities-add/amenities-add.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FtZW5pdGllcy9hbWVuaXRpZXMtYWRkL2FtZW5pdGllcy1hZGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/amenities/amenities-add/amenities-add.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/amenities/amenities-add/amenities-add.component.ts ***!
  \**************************************************************************/
/*! exports provided: AmenitiesAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenitiesAddComponent", function() { return AmenitiesAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let AmenitiesAddComponent = class AmenitiesAddComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
        this.icons = [];
    }
    ngOnInit() {
        this.amenitiesForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            icon: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.httpService.getApi('icons').subscribe((res) => {
            //console.log(res)
            this.icons = res;
        });
    }
    submit(data) {
        this.loaderService.showLoader('Adding Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'amenities/create').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        this.router.navigate(['/amenities-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
AmenitiesAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
AmenitiesAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-amenities-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./amenities-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/amenities/amenities-add/amenities-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./amenities-add.component.scss */ "./src/app/pages/amenities/amenities-add/amenities-add.component.scss")).default]
    })
], AmenitiesAddComponent);



/***/ }),

/***/ "./src/app/pages/amenities/amenities-details/amenities-details.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/amenities/amenities-details/amenities-details.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FtZW5pdGllcy9hbWVuaXRpZXMtZGV0YWlscy9hbWVuaXRpZXMtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/amenities/amenities-details/amenities-details.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/amenities/amenities-details/amenities-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AmenitiesDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenitiesDetailsComponent", function() { return AmenitiesDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let AmenitiesDetailsComponent = class AmenitiesDetailsComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.amenities = JSON.parse(localStorage.getItem('amenitiesDetails'));
    }
    ngOnInit() {
    }
    toggleStatus(id, status) {
        let data = {
            isAvailable: status
        };
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'amenities/updateDetails' + id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/amenities-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    delete(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'amenities/delete/' + data.id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully deleted', 'Okay');
                        this.router.navigate(['/amenities-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    edit(data) {
        console.log(data);
        localStorage.setItem('editData', JSON.stringify(data));
        this.router.navigate(['/amenities-edit']);
    }
};
AmenitiesDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
AmenitiesDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-amenities-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./amenities-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/amenities/amenities-details/amenities-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./amenities-details.component.scss */ "./src/app/pages/amenities/amenities-details/amenities-details.component.scss")).default]
    })
], AmenitiesDetailsComponent);



/***/ }),

/***/ "./src/app/pages/amenities/amenities-edit/amenities-edit.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/amenities/amenities-edit/amenities-edit.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FtZW5pdGllcy9hbWVuaXRpZXMtZWRpdC9hbWVuaXRpZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/amenities/amenities-edit/amenities-edit.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/amenities/amenities-edit/amenities-edit.component.ts ***!
  \****************************************************************************/
/*! exports provided: AmenitiesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenitiesEditComponent", function() { return AmenitiesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let AmenitiesEditComponent = class AmenitiesEditComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
        this.icons = [];
    }
    ngOnInit() {
        this.amenitiesForm = this.formBuilder.group({
            _id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            icon: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.httpService.getApi('icons').subscribe((res) => {
            //console.log(res)
            this.icons = res;
        });
        this.loaderService.showLoader('Please wait while fetching ..').then(() => {
            this.editDetails = JSON.parse(localStorage.getItem('editData'));
            this.amenitiesForm.patchValue(this.editDetails);
            this.loaderService.hideLoader();
        });
    }
    submit(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'amenities/updateDetails/').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/amenities-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
AmenitiesEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
AmenitiesEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-amenities-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./amenities-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/amenities/amenities-edit/amenities-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./amenities-edit.component.scss */ "./src/app/pages/amenities/amenities-edit/amenities-edit.component.scss")).default]
    })
], AmenitiesEditComponent);



/***/ }),

/***/ "./src/app/pages/amenities/amenities-list/amenities-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/amenities/amenities-list/amenities-list.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FtZW5pdGllcy9hbWVuaXRpZXMtbGlzdC9hbWVuaXRpZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/amenities/amenities-list/amenities-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/amenities/amenities-list/amenities-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: AmenitiesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenitiesListComponent", function() { return AmenitiesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let AmenitiesListComponent = class AmenitiesListComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.json = [];
    }
    loadData() {
        this.loaderService.showLoader('Fetching Please wait ..').then(() => {
            try {
                this.httpService.getApi('amenities/getAll').subscribe((res) => {
                    this.json = res.success ? res.data : [];
                    this.loaderService.hideLoader();
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
            }
        });
    }
    ngOnInit() {
        this.loadData();
    }
    add() {
        this.router.navigate(['/amenities-add']);
    }
    details(data) {
        localStorage.setItem('amenitiesDetails', JSON.stringify(data));
        this.router.navigate(['/amenities-details']);
    }
};
AmenitiesListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
AmenitiesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-amenities-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./amenities-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/amenities/amenities-list/amenities-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./amenities-list.component.scss */ "./src/app/pages/amenities/amenities-list/amenities-list.component.scss")).default]
    })
], AmenitiesListComponent);



/***/ }),

/***/ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-add/assign-property-to-owner-add.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/assignPropertyToOwner/assign-property-to-owner-add/assign-property-to-owner-add.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2lnblByb3BlcnR5VG9Pd25lci9hc3NpZ24tcHJvcGVydHktdG8tb3duZXItYWRkL2Fzc2lnbi1wcm9wZXJ0eS10by1vd25lci1hZGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-add/assign-property-to-owner-add.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/assignPropertyToOwner/assign-property-to-owner-add/assign-property-to-owner-add.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: AssignPropertyToOwnerAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignPropertyToOwnerAddComponent", function() { return AssignPropertyToOwnerAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");









let AssignPropertyToOwnerAddComponent = class AssignPropertyToOwnerAddComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
        this.userService = userService;
        this.unitsArray = [{
                _id: "12345",
                unitDetails: '101',
                propertyId: this.getPropertyId(),
                rent: '7890',
                area: 'wertyu',
                type: 'PG',
                additionalRooms: [],
                facing: 'east',
                amenities: 'qwer',
                inspection: 'w',
                propertyavailablefrom: '2020-05-30',
                isAvailable: '1',
                sharingType: '2-sharing',
                gender: 'female'
            }, {
                _id: "123456",
                unitDetails: '102',
                propertyId: this.getPropertyId(),
                rent: '7890',
                area: 'wertyu',
                type: 'PG',
                additionalRooms: [],
                facing: 'east',
                amenities: 'qwer',
                inspection: 'w',
                propertyavailablefrom: '2020-05-30',
                isAvailable: '1',
                sharingType: '2-sharing',
                gender: 'female'
            }
        ];
        this.assignPropertyToOwner = [];
        this.ownerArray = [];
        this.bankAccountArray = [];
        this.property = '1';
    }
    ngOnInit() {
        this.httpService.getApi('owner/getAll').subscribe((res) => {
            this.owners = res.data;
            console.log({ owners: this.owners });
        });
        this.unitsArray.forEach(element => {
            this.assignPropertyToOwner.push({ ownerId: '', propertyId: '', unitId: '', isAvailable: '1' });
            this.bankAccountArray.push({ bankName: '', bankAddress: '', accountNumber: '', ifscCode: '', mmid: '', isAvailable: '1', userId: '' });
            this.ownerArray.push({ userId: this.userService.getUserId(), name: '', email: '', mobileNumber: '', currentAddress: '', documentsUpload: '', ownerPhoto: '', agreementType: 'Fixed', backgroundVerificationStatus: '', isAvailable: '1' });
        });
    }
    getPropertyId() {
        //return this.property;
        return 1;
    }
    //functions for photo and doucment upload
    changeListenerPhoto($event) {
        this.loaderService.showLoader("Uploading Image..");
        this.readThisPhoto($event.target);
    }
    readThisPhoto(inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
            this.image = myReader.result;
            // this.categoryAddForm.patchValue({photo:myReader.result});
            this.httpService.postApi({ ownerPhoto: myReader.result }, 'Item/uploadImage').subscribe((res) => {
                this.loaderService.hideLoader();
                if (res) {
                    // res.success
                    this.ownerPhoto.patchValue({ ownerPhoto: res.success });
                }
                else {
                    //this.modal.showModal({'success': false, 'message': res.error});
                }
            }, err => {
                this.loaderService.hideLoader();
                //this.modal.showModal({'success': false, 'message': err});
            });
        };
        myReader.readAsDataURL(file);
    }
    changeListenerDocument($event) {
        this.loaderService.showLoader("Uploading Image..");
        this.readThisDocument($event.target);
    }
    readThisDocument(inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
            this.document = myReader.result;
            // this.categoryAddForm.patchValue({photo:myReader.result});
            this.httpService.postApi({ documentsUpload: myReader.result }, 'Item/uploadImage').subscribe((res) => {
                this.loaderService.hideLoader();
                if (res) {
                    // res.success
                    this.documentsUpload.patchValue({ documentsUpload: res.success });
                }
                else {
                    //this.modal.showModal({'success': false, 'message': res.error});
                }
            }, err => {
                this.loaderService.hideLoader();
                //this.modal.showModal({'success': false, 'message': err});
            });
        };
        myReader.readAsDataURL(file);
    }
    //create property promise
    createOwner(element, index) {
        return new Promise(resolve => {
            this.ownerArray[index]['createdAt'] = new Date().getTime();
            this.loaderService.showLoader('Adding Please wait ..').then(() => {
                try {
                    this.httpService.postApi(this.ownerArray[index], 'owner/create').subscribe((res) => {
                        this.loaderService.hideLoader();
                        if (res["success"]) {
                            resolve(res['data']['_id']);
                            //this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        }
                        else {
                            this.alertService.presentAlert('Error', res["message"], 'Okay');
                            resolve(false);
                        }
                    }, (err) => {
                        this.loaderService.hideLoader();
                        this.alertService.presentNetworkAlert();
                        resolve(false);
                    });
                }
                catch (e) {
                    this.loaderService.hideLoader();
                    this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
                    resolve(false);
                }
            });
        });
    }
    //create bank account promise
    createBankAccount(index, ownerId) {
        this.bankAccountArray[index]['userId'] = ownerId;
        this.bankAccountArray[index]['createdAt'] = new Date().getTime();
        return new Promise(resolve => {
            this.loaderService.showLoader('Adding Please wait ..').then(() => {
                try {
                    this.httpService.postApi(this.bankAccountArray[index], 'bankAccount/create').subscribe((res) => {
                        this.loaderService.hideLoader();
                        if (res["success"]) {
                            console.log(res['data']);
                            resolve(res);
                            //this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        }
                        else {
                            this.alertService.presentAlert('Error', res["message"], 'Okay');
                            resolve(false);
                        }
                    }, (err) => {
                        this.loaderService.hideLoader();
                        this.alertService.presentNetworkAlert();
                        resolve(false);
                    });
                }
                catch (e) {
                    this.loaderService.hideLoader();
                    this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
                    resolve(false);
                }
            });
        });
    }
    // assign property ot owner promise
    assignPropertyOwner(index, property) {
        this.assignPropertyToOwner[index]['createdAt'] = new Date().getTime();
        this.assignPropertyToOwner[index]['propertyId'] = property;
        return new Promise(resolve => {
            this.loaderService.showLoader('Adding Please wait ..').then(() => {
                try {
                    this.httpService.postApi(this.assignPropertyToOwner[index], 'propertyToOwner/create').subscribe((res) => {
                        this.loaderService.hideLoader();
                        if (res["success"]) {
                            resolve(res);
                            this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                            this.router.navigate(['/assign-property-to-owner-list']);
                        }
                        else {
                            this.alertService.presentAlert('Error', res["message"], 'Okay');
                        }
                    }, (err) => {
                        this.loaderService.hideLoader();
                        this.alertService.presentNetworkAlert();
                    });
                }
                catch (e) {
                    this.loaderService.hideLoader();
                    this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
                }
            });
        });
    }
    createOwnerByData(element, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.createOwner(element, index);
        });
    }
    createOwnerBankData(index, ownerId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.createBankAccount(index, ownerId);
        });
    }
    submitFinal() {
        this.assignPropertyToOwner.forEach((element, index) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (element.ownerId == "newOwner") {
                //create owner api
                let ownerId = yield this.createOwnerByData(element, index);
                console.log(ownerId);
                element.ownerId = ownerId;
                //create bank Account
                this.createBankAccount(index, ownerId);
                //assign property to owner 
                this.assignPropertyOwner(index, this.property);
            }
        }));
        console.log("assignproperty array", this.assignPropertyToOwner);
        console.log("owerArray", this.ownerArray);
        console.log("bank Array", this.bankAccountArray);
    }
};
AssignPropertyToOwnerAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }
];
AssignPropertyToOwnerAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assignPropertyToOwner-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assign-property-to-owner-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToOwner/assign-property-to-owner-add/assign-property-to-owner-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assign-property-to-owner-add.component.scss */ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-add/assign-property-to-owner-add.component.scss")).default]
    })
], AssignPropertyToOwnerAddComponent);



/***/ }),

/***/ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-details/assign-property-to-owner-details.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/assignPropertyToOwner/assign-property-to-owner-details/assign-property-to-owner-details.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2lnblByb3BlcnR5VG9Pd25lci9hc3NpZ24tcHJvcGVydHktdG8tb3duZXItZGV0YWlscy9hc3NpZ24tcHJvcGVydHktdG8tb3duZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-details/assign-property-to-owner-details.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/assignPropertyToOwner/assign-property-to-owner-details/assign-property-to-owner-details.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: AssignPropertyToOwnerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignPropertyToOwnerDetailsComponent", function() { return AssignPropertyToOwnerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let AssignPropertyToOwnerDetailsComponent = class AssignPropertyToOwnerDetailsComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.assignPropertyToOwner = JSON.parse(localStorage.getItem('assignPropertyToOwnerDetails'));
    }
    ngOnInit() {
    }
    toggleStatus(id, status) {
        let data = {
            isAvailable: status
        };
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'propertyToOwner/updateDetails' + id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/assign-property-to-owner-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    delete(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'propertyToOwner/delete/' + data.id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully deleted', 'Okay');
                        this.router.navigate(['/assign-property-to-owner-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    edit(data) {
        console.log(data);
        localStorage.setItem('editData', JSON.stringify(data));
        this.router.navigate(['/assign-property-to-owner-edit']);
    }
};
AssignPropertyToOwnerDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
AssignPropertyToOwnerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assignPropertyToOwner-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assign-property-to-owner-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToOwner/assign-property-to-owner-details/assign-property-to-owner-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assign-property-to-owner-details.component.scss */ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-details/assign-property-to-owner-details.component.scss")).default]
    })
], AssignPropertyToOwnerDetailsComponent);



/***/ }),

/***/ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-edit/assign-property-to-owner-edit.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/assignPropertyToOwner/assign-property-to-owner-edit/assign-property-to-owner-edit.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2lnblByb3BlcnR5VG9Pd25lci9hc3NpZ24tcHJvcGVydHktdG8tb3duZXItZWRpdC9hc3NpZ24tcHJvcGVydHktdG8tb3duZXItZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-edit/assign-property-to-owner-edit.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/assignPropertyToOwner/assign-property-to-owner-edit/assign-property-to-owner-edit.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: AssignPropertyToOwnerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignPropertyToOwnerEditComponent", function() { return AssignPropertyToOwnerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let AssignPropertyToOwnerEditComponent = class AssignPropertyToOwnerEditComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.assignPropertyToOwnerForm = this.formBuilder.group({
            _id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ownerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            propertyId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            unitId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.loaderService.showLoader('Please wait while fetching ..').then(() => {
            this.editDetails = JSON.parse(localStorage.getItem('editData'));
            this.assignPropertyToOwnerForm.patchValue(this.editDetails);
            this.loaderService.hideLoader();
            this.httpService.getApi('owner/getAll').subscribe((res) => {
                this.owners = res.data;
                console.log(this.owners);
            });
            this.httpService.getApi('property/getAll').subscribe((res) => {
                this.properties = res.data;
                console.log(this.properties);
            });
            this.httpService.getApi('units/getAll').subscribe((res) => {
                this.units = res.data;
                console.log(this.units);
            });
        });
    }
    submit(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'propertyToOwner/updateDetails/').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/assign-property-to-owner-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
AssignPropertyToOwnerEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
AssignPropertyToOwnerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assignPropertyToOwner-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assign-property-to-owner-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToOwner/assign-property-to-owner-edit/assign-property-to-owner-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assign-property-to-owner-edit.component.scss */ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-edit/assign-property-to-owner-edit.component.scss")).default]
    })
], AssignPropertyToOwnerEditComponent);



/***/ }),

/***/ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-list/assign-property-to-owner-list.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/assignPropertyToOwner/assign-property-to-owner-list/assign-property-to-owner-list.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2lnblByb3BlcnR5VG9Pd25lci9hc3NpZ24tcHJvcGVydHktdG8tb3duZXItbGlzdC9hc3NpZ24tcHJvcGVydHktdG8tb3duZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-list/assign-property-to-owner-list.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/assignPropertyToOwner/assign-property-to-owner-list/assign-property-to-owner-list.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: AssignPropertyToOwnerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignPropertyToOwnerListComponent", function() { return AssignPropertyToOwnerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let AssignPropertyToOwnerListComponent = class AssignPropertyToOwnerListComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.json = [];
    }
    loadData() {
        this.loaderService.showLoader('Fetching Please wait ..').then(() => {
            try {
                this.httpService.getApi('propertyToOwner/getAll').subscribe((res) => {
                    this.json = res.success ? res.data : [];
                    console.log(this.json);
                    this.loaderService.hideLoader();
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
            }
        });
    }
    ngOnInit() {
        this.loadData();
    }
    add() {
        this.router.navigate(['/assign-property-to-owner-add']);
    }
    details(data) {
        localStorage.setItem('assignPropertyToOwnerDetails', JSON.stringify(data));
        this.router.navigate(['/assign-property-to-owner-details']);
    }
};
AssignPropertyToOwnerListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
AssignPropertyToOwnerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assignPropertyToOwner-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assign-property-to-owner-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToOwner/assign-property-to-owner-list/assign-property-to-owner-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assign-property-to-owner-list.component.scss */ "./src/app/pages/assignPropertyToOwner/assign-property-to-owner-list/assign-property-to-owner-list.component.scss")).default]
    })
], AssignPropertyToOwnerListComponent);



/***/ }),

/***/ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-add/assign-property-to-tenant-add.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-add/assign-property-to-tenant-add.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2lnblByb3BlcnR5VG9UZW5hbnQvYXNzaWduLXByb3BlcnR5LXRvLXRlbmFudC1hZGQvYXNzaWduLXByb3BlcnR5LXRvLXRlbmFudC1hZGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-add/assign-property-to-tenant-add.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-add/assign-property-to-tenant-add.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: AssignPropertyToTenantAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignPropertyToTenantAddComponent", function() { return AssignPropertyToTenantAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");









let AssignPropertyToTenantAddComponent = class AssignPropertyToTenantAddComponent {
    constructor(formBuilder, router, util, userService, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.userService = userService;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
        this.stage = false;
        this.properties = [];
        this.units = [];
        this.tenants = [];
        //validation array start
        this.Vbankaccount = [{ name: 'bankName', type: 'String' }, { name: 'bankAddress', type: 'String' }, { name: 'accountNumber', type: 'String' }, { name: 'ifscCode', type: 'String' }, { name: 'mmid', type: 'String' }, { name: 'userId', type: 'String' }, { name: 'isAvailable', type: 'String' }, { name: 'updatedAt', type: 'String' }, { name: 'createdAt', type: 'String' }];
        this.Vagreements = [{ name: 'userId', type: 'String' }, { name: 'propertyId', type: 'String' }, { name: 'userType', type: 'String' }, { name: 'fromDate', type: 'String' }, { name: 'photo', type: 'String' }, { name: 'toDate', type: 'String' }, { name: 'isAvailable', type: 'String' }, { name: 'updatedAt', type: 'String' }, { name: 'createdAt', type: 'String' }];
        this.Vtenant = [{ name: 'name', type: 'String' }, { name: 'userId', type: 'String' }, { name: 'email', type: 'String' }, { name: 'mobileNumber', type: 'Number' }, { name: 'currentAddress', type: 'String' }, { name: 'documentsUpload', type: 'String' }, { name: 'tenantPhoto', type: 'String' }, { name: 'agreementType', type: 'String' }, { name: 'backgroundVerificationStatus', type: 'String' }, { name: 'isAvailable', type: 'String' }, { name: 'updatedAt', type: 'String' }, { name: 'createdAt', type: 'String' }];
        this.Vassignpropertytotenant = [{ name: 'tenantId', type: 'String' }, { name: 'propertyId', type: 'String' }, { name: 'unitId', type: 'String' }, { name: 'isAvailable', type: 'String' }, { name: 'updatedAt', type: 'String' }, { name: 'createdAt', type: 'String' }];
        //validation array end
        this.tenantArray = {};
        this.assignPropertyToTenantArray = {};
        this.bankAccountArray = {};
    }
    ngOnInit() {
        //tenant add
        // this.tenantForm = this.formBuilder.group({
        //   userId: [this.userService.getUserId(), [Validators.required]],
        //   name: ['', [Validators.required]],
        //   email: ['', [Validators.required]],
        //   mobileNumber: ['', [Validators.required]],
        //   currentAddress: ['', [Validators.required]],
        //   documentsUpload: ['', [Validators.required]],
        //   tenantPhoto: ['', [Validators.required]],
        //   agreementType: ['', [Validators.required]],
        //   backgroundVerificationStatus: ['', [Validators.required]],
        //   isAvailable: ['1', [Validators.required]],
        // });
        //assign property to tenant
        // this.assignPropertyToTenantForm = this.formBuilder.group({
        //   tenantId: ['', [Validators.required]],
        //   propertyId: ['', [Validators.required]],
        //   unitId: ['', [Validators.required]],
        //   isAvailable: ['1', [Validators.required]],
        // });
        //agreement form
        //   this.agreementForm = this.formBuilder.group({
        //     userId: [this.userService.getUserId(), [Validators.required]],
        //     propertyId: [' ', [Validators.required]],
        //     userType: ['', [Validators.required]],
        //     photo: ['', [Validators.required]],
        //     fromDate: ['', [Validators.required]],
        //     toDate: ['', [Validators.required]],
        //     isAvailable: ['1', [Validators.required]],
        // });
        this.httpService.getApi('property/getAll').subscribe((res) => {
            this.properties = res.data;
            console.log(this.properties);
        });
    }
    //by changing property
    changeProperty() {
        console.log(this.property);
        this.units.forEach(element => {
            element.propertyId = this.getpropertyId();
        });
        this.httpService.postApi({ propertyId: this.property }, 'units/getByCondition').subscribe((res) => {
            this.units = res.data;
            console.log(this.units);
        });
    }
    getpropertyId() {
        return this.property;
    }
    //tenant add starts
    changeListenerPhoto($event) {
        this.loaderService.showLoader("Uploading Image..");
        this.readThisPhoto($event.target);
    }
    readThisPhoto(inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
            this.image = myReader.result;
            // this.categoryAddForm.patchValue({photo:myReader.result});
            this.httpService.postApi({ tenantPhoto: myReader.result }, 'Item/uploadImage').subscribe((res) => {
                this.loaderService.hideLoader();
                if (res) {
                    // res.success
                    this.tenantArray['tenantPhoto'].patchValue({ tenantPhoto: res.success });
                }
                else {
                    //this.modal.showModal({'success': false, 'message': res.error});
                }
            }, err => {
                this.loaderService.hideLoader();
                //this.modal.showModal({'success': false, 'message': err});
            });
        };
        myReader.readAsDataURL(file);
    }
    changeListenerDocument($event) {
        this.loaderService.showLoader("Uploading Image..");
        this.readThisDocument($event.target);
    }
    readThisDocument(inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
            this.document = myReader.result;
            // this.categoryAddForm.patchValue({photo:myReader.result});
            this.httpService.postApi({ documentsUpload: myReader.result }, 'Item/uploadImage').subscribe((res) => {
                this.loaderService.hideLoader();
                if (res) {
                    // res.success
                    this.tenantArray['documentsUpload'].patchValue({ documentsUpload: res.success });
                }
                else {
                    //this.modal.showModal({'success': false, 'message': res.error});
                }
            }, err => {
                this.loaderService.hideLoader();
                //this.modal.showModal({'success': false, 'message': err});
            });
        };
        myReader.readAsDataURL(file);
    }
    //create property promise
    createTenant() {
        return new Promise(resolve => {
            this.tenantArray['createdAt'] = new Date().getTime();
            this.tenantArray['isAvailable'] = '1';
            this.loaderService.showLoader('Adding Please wait ..').then(() => {
                try {
                    this.httpService.postApi(this.tenantArray, 'tenant/create').subscribe((res) => {
                        this.loaderService.hideLoader();
                        if (res["success"]) {
                            resolve(res['data']['_id']);
                            //this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        }
                        else {
                            this.alertService.presentAlert('Error', res["message"], 'Okay');
                            resolve(false);
                        }
                    }, (err) => {
                        this.loaderService.hideLoader();
                        this.alertService.presentNetworkAlert();
                        resolve(false);
                    });
                }
                catch (e) {
                    this.loaderService.hideLoader();
                    this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
                    resolve(false);
                }
            });
        });
    }
    //create bank account promise
    createBankAccount(tenantId) {
        this.bankAccountArray['userId'] = tenantId;
        this.bankAccountArray['createdAt'] = new Date().getTime();
        return new Promise(resolve => {
            this.loaderService.showLoader('Adding Please wait ..').then(() => {
                try {
                    this.httpService.postApi(this.bankAccountArray, 'bankAccount/create').subscribe((res) => {
                        this.loaderService.hideLoader();
                        if (res["success"]) {
                            console.log(res['data']);
                            resolve(res);
                            //this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        }
                        else {
                            this.alertService.presentAlert('Error', res["message"], 'Okay');
                            resolve(false);
                        }
                    }, (err) => {
                        this.loaderService.hideLoader();
                        this.alertService.presentNetworkAlert();
                        resolve(false);
                    });
                }
                catch (e) {
                    this.loaderService.hideLoader();
                    this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
                    resolve(false);
                }
            });
        });
    }
    // assign property ot owner promise
    assignPropertyTenant(property, unitId) {
        this.assignPropertyToTenantArray['createdAt'] = new Date().getTime();
        this.assignPropertyToTenantArray['propertyId'] = property;
        this.assignPropertyToTenantArray['unitId'] = unitId;
        return new Promise(resolve => {
            this.loaderService.showLoader('Adding Please wait ..').then(() => {
                try {
                    this.httpService.postApi(this.assignPropertyToTenantArray, 'propertyToTenant/create').subscribe((res) => {
                        this.loaderService.hideLoader();
                        if (res["success"]) {
                            resolve(res);
                            this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                            this.router.navigate(['/assign-property-to-owner-list']);
                        }
                        else {
                            this.alertService.presentAlert('Error', res["message"], 'Okay');
                        }
                    }, (err) => {
                        this.loaderService.hideLoader();
                        this.alertService.presentNetworkAlert();
                    });
                }
                catch (e) {
                    this.loaderService.hideLoader();
                    this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
                }
            });
        });
    }
    createTenantData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.createTenant();
        });
    }
    createTenantBankData(tenantId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.createBankAccount(tenantId);
        });
    }
    submitFinal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let tenantId = yield this.createTenantData();
            this.createTenantBankData(tenantId);
            this.assignPropertyTenant(this.property, this.unit);
        });
    }
};
AssignPropertyToTenantAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
AssignPropertyToTenantAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assignPropertyToTenant-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assign-property-to-tenant-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-add/assign-property-to-tenant-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assign-property-to-tenant-add.component.scss */ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-add/assign-property-to-tenant-add.component.scss")).default]
    })
], AssignPropertyToTenantAddComponent);



/***/ }),

/***/ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-details/assign-property-to-tenant-details.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-details/assign-property-to-tenant-details.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2lnblByb3BlcnR5VG9UZW5hbnQvYXNzaWduLXByb3BlcnR5LXRvLXRlbmFudC1kZXRhaWxzL2Fzc2lnbi1wcm9wZXJ0eS10by10ZW5hbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-details/assign-property-to-tenant-details.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-details/assign-property-to-tenant-details.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: AssignPropertyToTenantDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignPropertyToTenantDetailsComponent", function() { return AssignPropertyToTenantDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let AssignPropertyToTenantDetailsComponent = class AssignPropertyToTenantDetailsComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.assignPropertyToTenant = JSON.parse(localStorage.getItem('assignPropertyToTenantDetails'));
    }
    ngOnInit() {
    }
    toggleStatus(id, status) {
        let data = {
            isAvailable: status
        };
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'propertyToTenant/updateDetails' + id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/assign-property-to-tenant-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    delete(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'propertyToTenant/delete/' + data.id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully deleted', 'Okay');
                        this.router.navigate(['/assign-property-to-tenant-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    edit(data) {
        console.log(data);
        localStorage.setItem('editData', JSON.stringify(data));
        this.router.navigate(['/assign-property-to-tenant-edit']);
    }
};
AssignPropertyToTenantDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
AssignPropertyToTenantDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assignPropertyToTenant-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assign-property-to-tenant-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-details/assign-property-to-tenant-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assign-property-to-tenant-details.component.scss */ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-details/assign-property-to-tenant-details.component.scss")).default]
    })
], AssignPropertyToTenantDetailsComponent);



/***/ }),

/***/ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-edit/assign-property-to-tenant-edit.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-edit/assign-property-to-tenant-edit.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2lnblByb3BlcnR5VG9UZW5hbnQvYXNzaWduLXByb3BlcnR5LXRvLXRlbmFudC1lZGl0L2Fzc2lnbi1wcm9wZXJ0eS10by10ZW5hbnQtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-edit/assign-property-to-tenant-edit.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-edit/assign-property-to-tenant-edit.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AssignPropertyToTenantEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignPropertyToTenantEditComponent", function() { return AssignPropertyToTenantEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let AssignPropertyToTenantEditComponent = class AssignPropertyToTenantEditComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.assignPropertyToTenantForm = this.formBuilder.group({
            _id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tenantId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            propertyId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            unitId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.loaderService.showLoader('Please wait while fetching ..').then(() => {
            this.editDetails = JSON.parse(localStorage.getItem('editData'));
            this.assignPropertyToTenantForm.patchValue(this.editDetails);
            this.loaderService.hideLoader();
        });
    }
    submit(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'propertyToTenant/updateDetails/').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/assign-property-to-tenant-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
AssignPropertyToTenantEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
AssignPropertyToTenantEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assignPropertyToTenant-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assign-property-to-tenant-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-edit/assign-property-to-tenant-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assign-property-to-tenant-edit.component.scss */ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-edit/assign-property-to-tenant-edit.component.scss")).default]
    })
], AssignPropertyToTenantEditComponent);



/***/ }),

/***/ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-list/assign-property-to-tenant-list.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-list/assign-property-to-tenant-list.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2lnblByb3BlcnR5VG9UZW5hbnQvYXNzaWduLXByb3BlcnR5LXRvLXRlbmFudC1saXN0L2Fzc2lnbi1wcm9wZXJ0eS10by10ZW5hbnQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-list/assign-property-to-tenant-list.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-list/assign-property-to-tenant-list.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AssignPropertyToTenantListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignPropertyToTenantListComponent", function() { return AssignPropertyToTenantListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let AssignPropertyToTenantListComponent = class AssignPropertyToTenantListComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.json = [];
    }
    loadData() {
        this.loaderService.showLoader('Fetching Please wait ..').then(() => {
            try {
                this.httpService.getApi('propertyToTenant/getAll').subscribe((res) => {
                    this.json = res.success ? res.data : [];
                    console.log(this.json);
                    this.loaderService.hideLoader();
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
            }
        });
    }
    ngOnInit() {
        this.loadData();
    }
    add() {
        this.router.navigate(['/assign-property-to-tenant-add']);
    }
    details(data) {
        localStorage.setItem('assignPropertyToTenantDetails', JSON.stringify(data));
        this.router.navigate(['/assign-property-to-tenant-details']);
    }
};
AssignPropertyToTenantListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
AssignPropertyToTenantListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assignPropertyToTenant-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assign-property-to-tenant-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-list/assign-property-to-tenant-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assign-property-to-tenant-list.component.scss */ "./src/app/pages/assignPropertyToTenant/assign-property-to-tenant-list/assign-property-to-tenant-list.component.scss")).default]
    })
], AssignPropertyToTenantListComponent);



/***/ }),

/***/ "./src/app/pages/backgroundVerificationStatus/background-verification-status-add/background-verification-status-add.component.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/backgroundVerificationStatus/background-verification-status-add/background-verification-status-add.component.scss ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhY2tncm91bmRWZXJpZmljYXRpb25TdGF0dXMvYmFja2dyb3VuZC12ZXJpZmljYXRpb24tc3RhdHVzLWFkZC9iYWNrZ3JvdW5kLXZlcmlmaWNhdGlvbi1zdGF0dXMtYWRkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/backgroundVerificationStatus/background-verification-status-add/background-verification-status-add.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/pages/backgroundVerificationStatus/background-verification-status-add/background-verification-status-add.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: BackgroundVerificationStatusAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundVerificationStatusAddComponent", function() { return BackgroundVerificationStatusAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let BackgroundVerificationStatusAddComponent = class BackgroundVerificationStatusAddComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.backgroundVerificationStatusForm = this.formBuilder.group({
            status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    submit(data) {
        this.loaderService.showLoader('Adding Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'backgroundVerificationStatus/create').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        this.router.navigate(['/background-verification-status-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
BackgroundVerificationStatusAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
BackgroundVerificationStatusAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-backgroundVerificationStatus-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./background-verification-status-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backgroundVerificationStatus/background-verification-status-add/background-verification-status-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./background-verification-status-add.component.scss */ "./src/app/pages/backgroundVerificationStatus/background-verification-status-add/background-verification-status-add.component.scss")).default]
    })
], BackgroundVerificationStatusAddComponent);



/***/ }),

/***/ "./src/app/pages/backgroundVerificationStatus/background-verification-status-details/background-verification-status-details.component.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/pages/backgroundVerificationStatus/background-verification-status-details/background-verification-status-details.component.scss ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhY2tncm91bmRWZXJpZmljYXRpb25TdGF0dXMvYmFja2dyb3VuZC12ZXJpZmljYXRpb24tc3RhdHVzLWRldGFpbHMvYmFja2dyb3VuZC12ZXJpZmljYXRpb24tc3RhdHVzLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/backgroundVerificationStatus/background-verification-status-details/background-verification-status-details.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/pages/backgroundVerificationStatus/background-verification-status-details/background-verification-status-details.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: BackgroundVerificationStatusDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundVerificationStatusDetailsComponent", function() { return BackgroundVerificationStatusDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let BackgroundVerificationStatusDetailsComponent = class BackgroundVerificationStatusDetailsComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.backgroundVerificationStatus = JSON.parse(localStorage.getItem('backgroundVerificationStatusDetails'));
    }
    ngOnInit() {
    }
    toggleStatus(id, status) {
        let data = {
            isAvailable: status
        };
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'backgroundVerificationStatus/edit').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/background-verification-status-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    delete(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'backgroundVerificationStatus/delete/' + data.id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully deleted', 'Okay');
                        this.router.navigate(['/background-verification-status-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    edit(data) {
        console.log(data);
        localStorage.setItem('editData', JSON.stringify(data));
        this.router.navigate(['/background-verification-status-edit']);
    }
};
BackgroundVerificationStatusDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
BackgroundVerificationStatusDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-backgroundVerificationStatus-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./background-verification-status-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backgroundVerificationStatus/background-verification-status-details/background-verification-status-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./background-verification-status-details.component.scss */ "./src/app/pages/backgroundVerificationStatus/background-verification-status-details/background-verification-status-details.component.scss")).default]
    })
], BackgroundVerificationStatusDetailsComponent);



/***/ }),

/***/ "./src/app/pages/backgroundVerificationStatus/background-verification-status-edit/background-verification-status-edit.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/backgroundVerificationStatus/background-verification-status-edit/background-verification-status-edit.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhY2tncm91bmRWZXJpZmljYXRpb25TdGF0dXMvYmFja2dyb3VuZC12ZXJpZmljYXRpb24tc3RhdHVzLWVkaXQvYmFja2dyb3VuZC12ZXJpZmljYXRpb24tc3RhdHVzLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/backgroundVerificationStatus/background-verification-status-edit/background-verification-status-edit.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/backgroundVerificationStatus/background-verification-status-edit/background-verification-status-edit.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: BackgroundVerificationStatusEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundVerificationStatusEditComponent", function() { return BackgroundVerificationStatusEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let BackgroundVerificationStatusEditComponent = class BackgroundVerificationStatusEditComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.backgroundVerificationStatusForm = this.formBuilder.group({
            _id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.loaderService.showLoader('Please wait while fetching ..').then(() => {
            this.editDetails = JSON.parse(localStorage.getItem('editData'));
            this.backgroundVerificationStatusForm.patchValue(this.editDetails);
            this.loaderService.hideLoader();
        });
    }
    submit(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'backgroundVerificationStatus/updateDetails/').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/background-verification-status-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
BackgroundVerificationStatusEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
BackgroundVerificationStatusEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-backgroundVerificationStatus-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./background-verification-status-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backgroundVerificationStatus/background-verification-status-edit/background-verification-status-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./background-verification-status-edit.component.scss */ "./src/app/pages/backgroundVerificationStatus/background-verification-status-edit/background-verification-status-edit.component.scss")).default]
    })
], BackgroundVerificationStatusEditComponent);



/***/ }),

/***/ "./src/app/pages/backgroundVerificationStatus/background-verification-status-list/background-verification-status-list.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/backgroundVerificationStatus/background-verification-status-list/background-verification-status-list.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhY2tncm91bmRWZXJpZmljYXRpb25TdGF0dXMvYmFja2dyb3VuZC12ZXJpZmljYXRpb24tc3RhdHVzLWxpc3QvYmFja2dyb3VuZC12ZXJpZmljYXRpb24tc3RhdHVzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/backgroundVerificationStatus/background-verification-status-list/background-verification-status-list.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/backgroundVerificationStatus/background-verification-status-list/background-verification-status-list.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: BackgroundVerificationStatusListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundVerificationStatusListComponent", function() { return BackgroundVerificationStatusListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let BackgroundVerificationStatusListComponent = class BackgroundVerificationStatusListComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.json = [];
    }
    loadData() {
        this.loaderService.showLoader('Fetching Please wait ..').then(() => {
            try {
                this.httpService.getApi('backgroundVerificationStatus/getAll').subscribe((res) => {
                    this.json = res.success ? res.data : [];
                    this.loaderService.hideLoader();
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
            }
        });
    }
    ngOnInit() {
        this.loadData();
    }
    add() {
        this.router.navigate(['/background-verification-status-add']);
    }
    details(data) {
        localStorage.setItem('backgroundVerificationStatusDetails', JSON.stringify(data));
        this.router.navigate(['/background-verification-status-details']);
    }
};
BackgroundVerificationStatusListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
BackgroundVerificationStatusListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-backgroundVerificationStatus-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./background-verification-status-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backgroundVerificationStatus/background-verification-status-list/background-verification-status-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./background-verification-status-list.component.scss */ "./src/app/pages/backgroundVerificationStatus/background-verification-status-list/background-verification-status-list.component.scss")).default]
    })
], BackgroundVerificationStatusListComponent);



/***/ }),

/***/ "./src/app/pages/bankAccount/bank-account-add/bank-account-add.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/bankAccount/bank-account-add/bank-account-add.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhbmtBY2NvdW50L2JhbmstYWNjb3VudC1hZGQvYmFuay1hY2NvdW50LWFkZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/bankAccount/bank-account-add/bank-account-add.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/bankAccount/bank-account-add/bank-account-add.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BankAccountAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankAccountAddComponent", function() { return BankAccountAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");









let BankAccountAddComponent = class BankAccountAddComponent {
    constructor(formBuilder, router, util, httpService, alertService, userService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.userService = userService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.bankAccountForm = this.formBuilder.group({
            bankName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            bankAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ifscCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mmid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            userId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    submit(data) {
        this.loaderService.showLoader('Adding Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'bankAccount/create').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        this.router.navigate(['/bank-account-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
BankAccountAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
BankAccountAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bankAccount-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bank-account-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bankAccount/bank-account-add/bank-account-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bank-account-add.component.scss */ "./src/app/pages/bankAccount/bank-account-add/bank-account-add.component.scss")).default]
    })
], BankAccountAddComponent);



/***/ }),

/***/ "./src/app/pages/bankAccount/bank-account-details/bank-account-details.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/bankAccount/bank-account-details/bank-account-details.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhbmtBY2NvdW50L2JhbmstYWNjb3VudC1kZXRhaWxzL2JhbmstYWNjb3VudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/bankAccount/bank-account-details/bank-account-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/bankAccount/bank-account-details/bank-account-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: BankAccountDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankAccountDetailsComponent", function() { return BankAccountDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let BankAccountDetailsComponent = class BankAccountDetailsComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.bankAccount = JSON.parse(localStorage.getItem('bankAccountDetails'));
    }
    ngOnInit() {
    }
    toggleStatus(id, status) {
        let data = {
            isAvailable: status
        };
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'bankAccount/updateDetails' + id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/bank-account-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    delete(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'bankAccount/delete/' + data.id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully deleted', 'Okay');
                        this.router.navigate(['/bank-account-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    edit(data) {
        console.log(data);
        localStorage.setItem('editData', JSON.stringify(data));
        this.router.navigate(['/bank-account-edit']);
    }
};
BankAccountDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
BankAccountDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bankAccount-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bank-account-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bankAccount/bank-account-details/bank-account-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bank-account-details.component.scss */ "./src/app/pages/bankAccount/bank-account-details/bank-account-details.component.scss")).default]
    })
], BankAccountDetailsComponent);



/***/ }),

/***/ "./src/app/pages/bankAccount/bank-account-edit/bank-account-edit.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/bankAccount/bank-account-edit/bank-account-edit.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhbmtBY2NvdW50L2JhbmstYWNjb3VudC1lZGl0L2JhbmstYWNjb3VudC1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/bankAccount/bank-account-edit/bank-account-edit.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/bankAccount/bank-account-edit/bank-account-edit.component.ts ***!
  \************************************************************************************/
/*! exports provided: BankAccountEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankAccountEditComponent", function() { return BankAccountEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");









let BankAccountEditComponent = class BankAccountEditComponent {
    constructor(formBuilder, router, util, userService, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.userService = userService;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.bankAccountForm = this.formBuilder.group({
            _id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            bankName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            bankAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ifscCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mmid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            userId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.loaderService.showLoader('Please wait while fetching ..').then(() => {
            this.editDetails = JSON.parse(localStorage.getItem('editData'));
            this.bankAccountForm.patchValue(this.editDetails);
            this.loaderService.hideLoader();
        });
    }
    submit(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'bankAccount/updateDetails/').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/bank-account-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
BankAccountEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
BankAccountEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bankAccount-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bank-account-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bankAccount/bank-account-edit/bank-account-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bank-account-edit.component.scss */ "./src/app/pages/bankAccount/bank-account-edit/bank-account-edit.component.scss")).default]
    })
], BankAccountEditComponent);



/***/ }),

/***/ "./src/app/pages/bankAccount/bank-account-list/bank-account-list.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/bankAccount/bank-account-list/bank-account-list.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhbmtBY2NvdW50L2JhbmstYWNjb3VudC1saXN0L2JhbmstYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/bankAccount/bank-account-list/bank-account-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/bankAccount/bank-account-list/bank-account-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: BankAccountListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankAccountListComponent", function() { return BankAccountListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let BankAccountListComponent = class BankAccountListComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.json = [];
    }
    loadData() {
        this.loaderService.showLoader('Fetching Please wait ..').then(() => {
            try {
                this.httpService.getApi('bankAccount/getAll').subscribe((res) => {
                    this.json = res.success ? res.data : [];
                    console.log(this.json);
                    this.loaderService.hideLoader();
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
            }
        });
    }
    ngOnInit() {
        this.loadData();
    }
    add() {
        this.router.navigate(['/bank-account-add']);
    }
    details(data) {
        localStorage.setItem('bankAccountDetails', JSON.stringify(data));
        this.router.navigate(['/bank-account-details']);
    }
};
BankAccountListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
BankAccountListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bankAccount-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bank-account-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bankAccount/bank-account-list/bank-account-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bank-account-list.component.scss */ "./src/app/pages/bankAccount/bank-account-list/bank-account-list.component.scss")).default]
    })
], BankAccountListComponent);



/***/ }),

/***/ "./src/app/pages/createProperty/create-property-add/create-property-add.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/createProperty/create-property-add/create-property-add.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZVByb3BlcnR5L2NyZWF0ZS1wcm9wZXJ0eS1hZGQvY3JlYXRlLXByb3BlcnR5LWFkZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/createProperty/create-property-add/create-property-add.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/createProperty/create-property-add/create-property-add.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CreatePropertyAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePropertyAddComponent", function() { return CreatePropertyAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");









let CreatePropertyAddComponent = class CreatePropertyAddComponent {
    //validation array end
    constructor(formBuilder, router, util, userService, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.userService = userService;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
        this.stage1 = 'true';
        this.stage2 = 'false';
        this.stage3 = 'false';
        this.stage4 = 'false';
        this.stage5 = 'false';
        this.stage6 = 'false';
        this.open = 'false';
        this.opens = 'false';
        this.propertyAdded = true;
        this.unitsAdded = true;
        this.ownerAdded = true;
        this.bankAccountAdded = true;
        this.propertTypes = [];
        this.leaseTypes = [];
        this.rentalTypes = [];
        this.sharingTypes = [];
        this.tenants = [];
        this.properties = [];
        this.amenities = [];
        this.facing = ["East", "West", "North", "South", "South-East", "South-West", "North-East", "North-West"];
        this.types = ["1 BHK", "2 BHK", "3 BHK", "4 BHK"];
        this.furnitures = ["Furnished", "Semi-Furnished", "Unfurnished"];
        this.tenancyTypes = ["Family", "Bachelors"];
        this.furnitureBorne = ["Owner", "Ownte"];
        this.inspection = false;
        this.dropdownList = [];
        this.dropdownSettings = {};
        this.property = new Date().getTime();
        this.ownersInWizard = [];
        this.propertyArray = {};
        this.stages = ["Property", "Units", "Assign  Property to Owner", "Agreement"];
        //validation array start
        this.Vpropertyes = [{ name: 'name', type: 'String' }, { name: 'address', type: 'String' }, { name: 'propertyType', type: 'String' }, { name: 'leaseType', type: 'String' }, { name: 'sharingType', type: 'String' }, { name: 'gender', type: 'String' }, { name: 'description', type: 'String' }, { name: 'rentalTypeId', type: 'String' }, { name: 'securityDeposit', type: 'Number' }, { name: 'isAvailable', type: 'String' }, { name: 'updatedAt', type: 'String' }, { name: 'createdAt', type: 'String' }];
        this.Vunits = [{ name: 'unitDetails', type: 'String' }, { name: 'propertyId', type: 'String' }, { name: 'rent', type: 'Number' }, { name: 'area', type: 'Number' }, { name: 'type', type: 'String' }, { name: 'additionalRooms', type: 'Object' }, { name: 'facing', type: 'String' }, { name: 'amenities', type: 'Object' }, { name: 'inspection', type: 'Number' }, { name: 'propertyavailablefrom', type: 'String' }, { name: 'sharingType', type: 'String' }, { name: 'isAvailable', type: 'String' }, { name: 'updatedAt', type: 'String' }, { name: 'createdAt', type: 'String' }];
        this.Vagreement = [{ name: 'userId', type: 'String' }, { name: 'propertyId', type: 'String' }, { name: 'userType', type: 'String' }, { name: 'fromDate', type: 'String' }, { name: 'photo', type: 'String' }, { name: 'toDate', type: 'String' }, { name: 'isAvailable', type: 'String' }, { name: 'updatedAt', type: 'String' }, { name: 'createdAt', type: 'String' }];
        this.Vowner = [{ name: 'name', type: 'String' }, { name: 'userId', type: 'String' }, { name: 'email', type: 'String' }, { name: 'mobileNumber', type: 'Number' }, { name: 'currentAddress', type: 'String' }, { name: 'documentsUpload', type: 'String' }, { name: 'ownerPhoto', type: 'String' }, { name: 'agreementType', type: 'String' }, { name: 'backgroundVerificationStatus', type: 'String' }, { name: 'isAvailable', type: 'String' }, { name: 'updatedAt', type: 'String' }, { name: 'createdAt', type: 'String' }];
        this.Vbankaccount = [{ name: 'bankName', type: 'String' }, { name: 'bankAddress', type: 'String' }, { name: 'accountNumber', type: 'String' }, { name: 'ifscCode', type: 'String' }, { name: 'mmid', type: 'String' }, { name: 'userId', type: 'String' }, { name: 'isAvailable', type: 'String' }, { name: 'updatedAt', type: 'String' }, { name: 'createdAt', type: 'String' }];
        this.Vassignpropertytoowner = [{ name: 'ownerId', type: 'String' }, { name: 'propertyId', type: 'String' }, { name: 'unitId', type: 'String' }, { name: 'isAvailable', type: 'String' }, { name: 'updatedAt', type: 'String' }, { name: 'createdAt', type: 'String' }];
        //assign property ot owner
        this.units = [];
        this.assignPropertyToOwner = [];
        this.ownerArray = [];
        this.bankAccountArray = [];
        //owner ends here
        this.agreementArray = {};
    }
    ngOnInit() {
        this.httpService.getApi('amenities/getAll').subscribe((res) => {
            console.log('amenities', res);
            this.amenities = res.data;
            for (let i = 0; i < this.amenities.length; i++) {
                let json = {
                    'name': this.amenities[i].name,
                    '_id': this.amenities[i]._id
                };
                this.dropdownList.push(json);
            }
            console.log(this.dropdownList);
        });
        this.dropdownSettings = {
            singleSelection: false,
            idField: '_id',
            textField: 'name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        //owner
        this.httpService.getApi('propertyType/getAll').subscribe((res) => {
            console.log(res);
            this.propertTypes = res.data;
        });
        this.httpService.getApi('sharingType/getAll').subscribe((res) => {
            console.log(res);
            this.sharingTypes = res.data;
        });
        this.httpService.getApi('leaseType/getAll').subscribe((res) => {
            console.log(res);
            this.leaseTypes = res.data;
        });
        this.httpService.getApi('rentalType/getAll').subscribe((res) => {
            console.log(res);
            this.rentalTypes = res.data;
        });
        this.httpService.getApi('owner/getAll').subscribe((res) => {
            this.owners = res.data;
            console.log(this.owners);
        });
        this.httpService.getApi('property/getAll').subscribe((res) => {
            this.properties = res.data;
            console.log(this.properties);
        });
        // this.httpService.getApi('units/getAll').subscribe((res: any) => {
        //   this.allunits = res.data;
        //   console.log(this.allunits)
        // })
        this.httpService.getApi('amenities/getAll').subscribe((res) => {
            this.amenities = res.data;
        });
    }
    onchange(data) {
        console.log(data);
        //this.httpService.postApi({_id:data},'propertyType/getByCondition').subscribe((res: any) => {
        //console.log('_id',this.propertyType);
        // this.propertTypes = res.data['name']
        if (data == '5e9e95dd43d4634dc8a43a37') {
            console.log("pg selected");
            this.open = 'true'; //pg
            this.opens = 'false'; //apartment
            console.log(this.open);
        }
        else {
            console.log("pg not selected");
            this.open = 'false';
            this.gender = " ";
            this.opens = 'true';
            console.log(this.open);
        }
        //})
    }
    validate(type) {
        return true;
    }
    //property add 
    propertyAddsubmit() {
        this.propertyArray['createdAt'] = new Date().getTime();
        console.log(this.propertyArray);
        localStorage.setItem('propertyData', JSON.stringify(this.propertyArray));
        // this.loaderService.showLoader('Adding Please wait ..').then(() => {
        //   try {
        //     this.httpService.postApi(this.propertys, 'property/create').subscribe((res) => {
        //       console.log(res)
        //       this.loaderService.hideLoader();
        //       if (res["success"]) {
        //        this.property=res['data']['_id']
        //         this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
        //         //this.router.navigate(['/property-list']);
        this.stage2 = 'true';
        //          console.log(this.stage2);
        //       } else {
        //         this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
        //       }
        //     }, (err) => {
        //       this.loaderService.hideLoader();
        //       this.alertService.presentNetworkAlert();
        //     });
        //   } catch (e) {
        //     this.loaderService.hideLoader();
        //     this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
        //   }
        // })
        // this.otpSend = false;
        this.stage1 = 'false';
        this.addUnits();
        //console.log(this.stage1); 
    }
    //property add ends here
    ownerFormSubmit(data) {
        // this.loaderService.showLoader('Adding Please wait ..').then(() => {
        //   try {
        //     this.httpService.postApi(data, 'owner/create').subscribe((res) => {
        //       this.loaderService.hideLoader();
        //       if (res["success"]) {
        //         console.log(data)
        //         this.ownersInWizard.push(res['data'])
        //         console.log("ownersInWizard",this.ownersInWizard)
        //         this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
        //         // this.router.navigate(['/owner-list'])
        //         localStorage.setItem('ownerData', JSON.stringify(res["data"]));
        this.stage5 = 'true';
        //         console.log(this.stage5);
        //       } else {
        //         this.alertService.presentAlert('Error', res["message"], 'Okay');
        //       }
        //     }, (err) => {
        //       this.loaderService.hideLoader();
        //       this.alertService.presentNetworkAlert();
        //     });
        //   } catch (e) {
        //     this.loaderService.hideLoader();
        //     this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
        //   }
        // })
        this.stage4 = 'false';
    }
    //owner end
    //get propertyId
    getPropertyId() {
        console.log(this.property);
        return this.property;
    }
    //assign property to owner starts here
    assignPropertyToOwnerFormSubmit(data) {
        data['propertyId'] = this.property;
        // this.loaderService.showLoader('Adding Please wait ..').then(() => {
        //   try {
        //     this.httpService.postApi(data, 'propertyToOwner/create').subscribe((res) => {
        //       this.loaderService.hideLoader();
        //       if (res["success"]) {
        //         this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
        //          this.router.navigate(['/property-list'])
        this.stage6 = 'false';
        //         localStorage.setItem('assignData', JSON.stringify(res["data"]));
        //       } else {
        //         this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
        //       }
        //     }, (err) => {
        //       this.loaderService.hideLoader();
        //       this.alertService.presentNetworkAlert();
        //     });
        //   } catch (e) {
        //     this.loaderService.hideLoader();
        //     this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
        //   }
        // })
        this.stage5 = 'false';
    }
    //assign property to owner ends here
    //units start
    onItemSelect(item) {
        console.log(item);
    }
    onSelectAll(items) {
        console.log(items);
    }
    inspectionChange() {
        this.inspection = true;
    }
    changeProperty() {
        console.log(this.property);
        this.units.forEach(element => {
            element.propertyId = this.getpropertyId();
        });
    }
    unitsSubmit() {
        console.log("units json", this.units);
        // this.loaderService.showLoader('Adding Please wait ..').then(() => {
        //   try {
        //     this.httpService.postApi(this.units, 'units/create').subscribe((res) => {
        //       this.loaderService.hideLoader();
        //       if (res["success"]) {
        //         this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
        //         // this.router.navigate(['/units-list'])
        this.stage3 = 'true';
        this.units.forEach(element => {
            this.assignPropertyToOwner.push({ ownerId: '', propertyId: '', unitId: '', isAvailable: '1' });
            this.bankAccountArray.push({ bankName: '', bankAddress: '', accountNumber: '', ifscCode: '', mmid: '', isAvailable: '1', userId: '' });
            this.ownerArray.push({ userId: this.userService.getUserId(), name: '', email: '', mobileNumber: '', currentAddress: '', documentsUpload: '', ownerPhoto: '', agreementType: 'Fixed', backgroundVerificationStatus: '', isAvailable: '1' });
        });
        //        console.log(this.stage3);
        //         localStorage.setItem('unitData', JSON.stringify(res["data"]));
        //       } else {
        //         this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
        //       }
        //     }, (err) => {
        //       this.loaderService.hideLoader();
        //       this.alertService.presentNetworkAlert();
        //     });
        //   } catch (e) {
        //     this.loaderService.hideLoader();
        //     this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
        //   }
        // })
        this.stage2 = 'false';
    }
    getpropertyId() {
        return this.property;
    }
    addRoom(unitIndex) {
        this.units[unitIndex].additionalRooms.push({
            name: '',
            quantity: []
        });
        console.log(this.units);
    }
    addUnitItem(data, index) {
        data.additionalRooms[index].quantity.push({ item: "" });
    }
    addUnits() {
        this.units.push({
            unitDetails: '',
            propertyId: this.getpropertyId(),
            rent: '',
            area: ' ',
            type: ' ',
            additionalRooms: [],
            facing: ' ',
            amenities: '',
            inspection: '',
            propertyavailablefrom: '',
            isAvailable: '',
            sharingType: ' ',
            furnishing: ' ',
            tenancyType: ' ',
            furnitureBorneBy: ' ',
            powerBill: ' ',
            latitude: ' ',
            longitude: ' ',
            saleDeed: ' ',
            registrationAgreement: ' ',
            leaseAgreement: ' ',
            propertyManager: ' ',
        });
        console.log(this.units);
    }
    deleteUnit(unitIndex) {
        if (this.units.length > 1) {
            this.units.splice(unitIndex, 1);
        }
    }
    deleteUnitItem(unitIndex, roomIndex, itemIndex) {
        if (this.units.length > 1) {
            this.units[unitIndex].additionalRooms[roomIndex].quantity[itemIndex].splice(itemIndex, 1);
        }
    }
    deleteUnitRoom(unitIndex, roomIndex) {
        if (this.units.length > 1) {
            this.units[unitIndex].additionalRooms[roomIndex].splice(roomIndex, 1);
        }
    }
    //units end
    //create bank account start
    bankAccountFormSubmit(data) {
        // this.loaderService.showLoader('Adding Please wait ..').then(() => {
        //   try {
        //     this.httpService.postApi(data, 'bankAccount/create').subscribe((res) => {
        //       this.loaderService.hideLoader();
        //       if (res["success"]) {
        //         this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
        //         //this.router.navigate(['/bank-account-list'])
        //         localStorage.setItem('bankaccountData', JSON.stringify(res["data"]));
        //         this.stage6 = 'true';
        //         console.log(this.stage6);
        //       } else {
        //         this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
        //       }
        //     }, (err) => {
        //       this.loaderService.hideLoader();
        //       this.alertService.presentNetworkAlert();
        //     });
        //   } catch (e) {
        //     this.loaderService.hideLoader();
        //     this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
        //   }
        // })
        this.stage5 = 'false';
    }
    //create bank accound end
    //functions for photo and doucment upload
    changeListenerPhoto($event) {
        this.loaderService.showLoader("Uploading Image..");
        this.readThisPhoto($event.target);
    }
    readThisPhoto(inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
            this.image = myReader.result;
            // this.categoryAddForm.patchValue({photo:myReader.result});
            this.httpService.postApi({ ownerPhoto: myReader.result }, 'Item/uploadImage').subscribe((res) => {
                this.loaderService.hideLoader();
                if (res) {
                    // res.success
                    this.ownerPhoto.patchValue({ ownerPhoto: res.success });
                }
                else {
                    //this.modal.showModal({'success': false, 'message': res.error});
                }
            }, err => {
                this.loaderService.hideLoader();
                //this.modal.showModal({'success': false, 'message': err});
            });
        };
        myReader.readAsDataURL(file);
    }
    changeListenerDocument($event) {
        this.loaderService.showLoader("Uploading Image..");
        this.readThisDocument($event.target);
    }
    readThisDocument(inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
            this.document = myReader.result;
            // this.categoryAddForm.patchValue({photo:myReader.result});
            this.httpService.postApi({ documentsUpload: myReader.result }, 'Item/uploadImage').subscribe((res) => {
                this.loaderService.hideLoader();
                if (res) {
                    // res.success
                    this.documentsUpload.patchValue({ documentsUpload: res.success });
                }
                else {
                    //this.modal.showModal({'success': false, 'message': res.error});
                }
            }, err => {
                this.loaderService.hideLoader();
                //this.modal.showModal({'success': false, 'message': err});
            });
        };
        myReader.readAsDataURL(file);
    }
    //create property promise
    createOwner(element, index) {
        return new Promise(resolve => {
            this.ownerArray[index]['createdAt'] = new Date().getTime();
            this.loaderService.showLoader('Adding Please wait ..').then(() => {
                try {
                    this.httpService.postApi(this.ownerArray[index], 'owner/create').subscribe((res) => {
                        this.loaderService.hideLoader();
                        if (res["success"]) {
                            resolve(res['data']['_id']);
                            //this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        }
                        else {
                            this.alertService.presentAlert('Error', res["message"], 'Okay');
                            resolve(false);
                        }
                    }, (err) => {
                        this.loaderService.hideLoader();
                        this.alertService.presentNetworkAlert();
                        resolve(false);
                    });
                }
                catch (e) {
                    this.loaderService.hideLoader();
                    this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
                    resolve(false);
                }
            });
        });
    }
    //create bank account promise
    createBankAccount(index, ownerId) {
        this.bankAccountArray[index]['userId'] = ownerId;
        this.bankAccountArray[index]['createdAt'] = new Date().getTime();
        return new Promise(resolve => {
            this.loaderService.showLoader('Adding Please wait ..').then(() => {
                try {
                    this.httpService.postApi(this.bankAccountArray[index], 'bankAccount/create').subscribe((res) => {
                        this.loaderService.hideLoader();
                        if (res["success"]) {
                            console.log(res['data']);
                            resolve(res);
                            //this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        }
                        else {
                            this.alertService.presentAlert('Error', res["message"], 'Okay');
                            resolve(false);
                        }
                    }, (err) => {
                        this.loaderService.hideLoader();
                        this.alertService.presentNetworkAlert();
                        resolve(false);
                    });
                }
                catch (e) {
                    this.loaderService.hideLoader();
                    this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
                    resolve(false);
                }
            });
        });
    }
    // assign property ot owner promise
    assignPropertyOwner(index, property) {
        this.assignPropertyToOwner[index]['createdAt'] = new Date().getTime();
        this.assignPropertyToOwner[index]['propertyId'] = property;
        return new Promise(resolve => {
            this.loaderService.showLoader('Adding Please wait ..').then(() => {
                try {
                    this.httpService.postApi(this.assignPropertyToOwner[index], 'propertyToOwner/create').subscribe((res) => {
                        this.loaderService.hideLoader();
                        if (res["success"]) {
                            resolve(res);
                            this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                            this.router.navigate(['/assign-property-to-owner-list']);
                        }
                        else {
                            this.alertService.presentAlert('Error', res["message"], 'Okay');
                        }
                    }, (err) => {
                        this.loaderService.hideLoader();
                        this.alertService.presentNetworkAlert();
                    });
                }
                catch (e) {
                    this.loaderService.hideLoader();
                    this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
                }
            });
        });
    }
    createOwnerByData(element, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.createOwner(element, index);
        });
    }
    createOwnerBankData(index, ownerId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.createBankAccount(index, ownerId);
        });
    }
    submitFinal() {
        console.log("final data calling");
        console.log("property json", this.propertyArray);
        console.log("unit json", this.units);
        console.log(" owner json", this.ownerArray);
        console.log("bank json", this.bankAccountArray);
        console.log("asign property to owner", this.assignPropertyToOwner);
        console.log("agreement json", this.agreementArray);
        this.assignPropertyToOwner.forEach((element, index) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (element.ownerId == "newOwner") {
                //create owner api
                let ownerId = yield this.createOwnerByData(element, index);
                console.log(ownerId);
                element.ownerId = ownerId;
                //create bank Account
                this.createBankAccount(index, ownerId);
                //assign property to owner 
                this.assignPropertyOwner(index, this.property);
            }
        }));
    }
    assignPropertyNext() {
        this.stage4 = 'true';
        this.stage3 = 'false';
    }
    //Agreement form starts here
    agreementFormSubmit(data) {
        data['propertyId'] = this.property;
        this.loaderService.showLoader('Adding Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'agreements/create').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        // this.router.navigate(['/agreement-list'])
                        console.log(this.stage4);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
        this.stage3 = 'false';
    }
    unitsPrevioussubmit() {
        this.stage1 = 'true';
        console.log(this.stage1);
        this.stage2 = 'false';
        console.log(this.stage2);
    }
    assignPrevioussubmit() {
        this.stage2 = 'true';
        console.log(this.stage2);
        this.stage3 = 'false';
        console.log(this.stage3);
    }
    agreementPrevioussubmit() {
        this.stage3 = 'true';
        console.log(this.stage3);
        this.stage4 = 'false';
        console.log(this.stage4);
    }
};
CreatePropertyAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
CreatePropertyAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-property-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-property-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createProperty/create-property-add/create-property-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-property-add.component.scss */ "./src/app/pages/createProperty/create-property-add/create-property-add.component.scss")).default]
    })
], CreatePropertyAddComponent);



/***/ }),

/***/ "./src/app/pages/createTenant/create-tenant-add/create-tenant-add.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/createTenant/create-tenant-add/create-tenant-add.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZVRlbmFudC9jcmVhdGUtdGVuYW50LWFkZC9jcmVhdGUtdGVuYW50LWFkZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/createTenant/create-tenant-add/create-tenant-add.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/createTenant/create-tenant-add/create-tenant-add.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CreateTenantAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTenantAddComponent", function() { return CreateTenantAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");









let CreateTenantAddComponent = class CreateTenantAddComponent {
    //validation array end
    constructor(formBuilder, router, util, userService, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.userService = userService;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
        this.stage = false;
        this.properties = [];
        this.units = [];
        this.tenants = [];
        //validation array start
        this.Vbankaccount = [{ name: 'bankName', type: 'String' }, { name: 'bankAddress', type: 'String' }, { name: 'accountNumber', type: 'String' }, { name: 'ifscCode', type: 'String' }, { name: 'mmid', type: 'String' }, { name: 'userId', type: 'String' }, { name: 'isAvailable', type: 'String' }, { name: 'updatedAt', type: 'String' }, { name: 'createdAt', type: 'String' }];
        this.Vagreements = [{ name: 'userId', type: 'String' }, { name: 'propertyId', type: 'String' }, { name: 'userType', type: 'String' }, { name: 'fromDate', type: 'String' }, { name: 'photo', type: 'String' }, { name: 'toDate', type: 'String' }, { name: 'isAvailable', type: 'String' }, { name: 'updatedAt', type: 'String' }, { name: 'createdAt', type: 'String' }];
        this.Vtenant = [{ name: 'name', type: 'String' }, { name: 'userId', type: 'String' }, { name: 'email', type: 'String' }, { name: 'mobileNumber', type: 'Number' }, { name: 'currentAddress', type: 'String' }, { name: 'documentsUpload', type: 'String' }, { name: 'tenantPhoto', type: 'String' }, { name: 'agreementType', type: 'String' }, { name: 'backgroundVerificationStatus', type: 'String' }, { name: 'isAvailable', type: 'String' }, { name: 'updatedAt', type: 'String' }, { name: 'createdAt', type: 'String' }];
        this.Vassignpropertytotenant = [{ name: 'tenantId', type: 'String' }, { name: 'propertyId', type: 'String' }, { name: 'unitId', type: 'String' }, { name: 'isAvailable', type: 'String' }, { name: 'updatedAt', type: 'String' }, { name: 'createdAt', type: 'String' }];
    }
    ngOnInit() {
        //tenant add
        this.tenantForm = this.formBuilder.group({
            userId: [this.userService.getUserId(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            currentAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            documentsUpload: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tenantPhoto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            agreementType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            backgroundVerificationStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        //assign property to tenant
        this.assignPropertyToTenantForm = this.formBuilder.group({
            tenantId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            propertyId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            unitId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        //agreement form
        this.agreementForm = this.formBuilder.group({
            userId: [this.userService.getUserId(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            propertyId: [' ', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            userType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            photo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            toDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.httpService.getApi('property/getAll').subscribe((res) => {
            this.properties = res.data;
            console.log(this.properties);
        });
    }
    //by changing property
    changeProperty() {
        console.log(this.property);
        this.units.forEach(element => {
            element.propertyId = this.getpropertyId();
        });
        this.httpService.postApi({ propertyId: this.property }, 'units/getByCondition').subscribe((res) => {
            this.units = res.data;
            console.log(this.units);
        });
    }
    getpropertyId() {
        return this.property;
    }
    //tenant add starts
    changeListenerPhoto($event) {
        this.loaderService.showLoader("Uploading Image..");
        this.readThisPhoto($event.target);
    }
    readThisPhoto(inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
            this.image = myReader.result;
            // this.categoryAddForm.patchValue({photo:myReader.result});
            this.httpService.postApi({ tenantPhoto: myReader.result }, 'Item/uploadImage').subscribe((res) => {
                this.loaderService.hideLoader();
                if (res) {
                    // res.success
                    this.tenantForm.patchValue({ tenantPhoto: res.success });
                }
                else {
                    //this.modal.showModal({'success': false, 'message': res.error});
                }
            }, err => {
                this.loaderService.hideLoader();
                //this.modal.showModal({'success': false, 'message': err});
            });
        };
        myReader.readAsDataURL(file);
    }
    changeListenerDocument($event) {
        this.loaderService.showLoader("Uploading Image..");
        this.readThisDocument($event.target);
    }
    readThisDocument(inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
            this.document = myReader.result;
            // this.categoryAddForm.patchValue({photo:myReader.result});
            this.httpService.postApi({ documentsUpload: myReader.result }, 'Item/uploadImage').subscribe((res) => {
                this.loaderService.hideLoader();
                if (res) {
                    // res.success
                    this.tenantForm.patchValue({ documentsUpload: res.success });
                }
                else {
                    //this.modal.showModal({'success': false, 'message': res.error});
                }
            }, err => {
                this.loaderService.hideLoader();
                //this.modal.showModal({'success': false, 'message': err});
            });
        };
        myReader.readAsDataURL(file);
    }
    submit(tenantData) {
        let data = {};
        tenantData['createdAt'] = new Date().getTime();
        this.loaderService.showLoader('Adding Please wait ..').then(() => {
            try {
                this.httpService.postApi(tenantData, 'tenant/create').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        console.log(res['data']['_id']);
                        //property to tenant form starts
                        data['tenantId'] = res['data']['_id'];
                        data['propertyId'] = this.property,
                            data['unitId'] = this.unit;
                        data['isAvailable'] = '1',
                            this.loaderService.showLoader('Adding Please wait ..').then(() => {
                                try {
                                    this.httpService.postApi(data, 'propertyToTenant/create').subscribe((res) => {
                                        this.loaderService.hideLoader();
                                        if (res["success"]) {
                                            this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                                            this.stage = true;
                                            //this.router.navigate(['/tenant-list'])
                                            localStorage.setItem('assignPropertyToTenantData', JSON.stringify(res["data"]));
                                        }
                                        else {
                                            this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                                        }
                                    }, (err) => {
                                        this.loaderService.hideLoader();
                                        this.alertService.presentNetworkAlert();
                                    });
                                }
                                catch (e) {
                                    this.loaderService.hideLoader();
                                    this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
                                }
                            });
                        //property to tenant form ends 
                        this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        //this.router.navigate(['/tenant-list'])
                        localStorage.setItem('tenantData', JSON.stringify(res["data"]));
                    }
                    else {
                        this.alertService.presentAlert('Error', res["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    //tenant add ends here
    //agreement submit
    agreementSubmit(data) {
        data['propertyId'] = this.property;
        console.log(data['propertyId']);
        this.loaderService.showLoader('Adding Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'agreements/create').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        //this.router.navigate(['/agreement-list'])
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
CreateTenantAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
CreateTenantAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-tenant-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-tenant-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createTenant/create-tenant-add/create-tenant-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-tenant-add.component.scss */ "./src/app/pages/createTenant/create-tenant-add/create-tenant-add.component.scss")).default]
    })
], CreateTenantAddComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/pages/leaseType/lease-type-add/lease-type-add.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/leaseType/lease-type-add/lease-type-add.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXNlVHlwZS9sZWFzZS10eXBlLWFkZC9sZWFzZS10eXBlLWFkZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/leaseType/lease-type-add/lease-type-add.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/leaseType/lease-type-add/lease-type-add.component.ts ***!
  \****************************************************************************/
/*! exports provided: LeaseTypeAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaseTypeAddComponent", function() { return LeaseTypeAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let LeaseTypeAddComponent = class LeaseTypeAddComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.leaseTypeForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    submit(data) {
        this.loaderService.showLoader('Adding Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'leaseType/create').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        this.router.navigate(['/lease-type-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
LeaseTypeAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
LeaseTypeAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leaseType-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lease-type-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leaseType/lease-type-add/lease-type-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lease-type-add.component.scss */ "./src/app/pages/leaseType/lease-type-add/lease-type-add.component.scss")).default]
    })
], LeaseTypeAddComponent);



/***/ }),

/***/ "./src/app/pages/leaseType/lease-type-details/lease-type-details.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/leaseType/lease-type-details/lease-type-details.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXNlVHlwZS9sZWFzZS10eXBlLWRldGFpbHMvbGVhc2UtdHlwZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/leaseType/lease-type-details/lease-type-details.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/leaseType/lease-type-details/lease-type-details.component.ts ***!
  \************************************************************************************/
/*! exports provided: LeaseTypeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaseTypeDetailsComponent", function() { return LeaseTypeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let LeaseTypeDetailsComponent = class LeaseTypeDetailsComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.leaseType = JSON.parse(localStorage.getItem('leaseTypeDetails'));
    }
    ngOnInit() {
    }
    toggleStatus(id, status) {
        let data = {
            isAvailable: status
        };
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'leaseType/updateDetails' + id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/lease-type-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    delete(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'leaseType/delete/' + data.id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully deleted', 'Okay');
                        this.router.navigate(['/lease-type-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    edit(data) {
        console.log(data);
        localStorage.setItem('editData', JSON.stringify(data));
        this.router.navigate(['/lease-type-edit']);
    }
};
LeaseTypeDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
LeaseTypeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leaseType-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lease-type-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leaseType/lease-type-details/lease-type-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lease-type-details.component.scss */ "./src/app/pages/leaseType/lease-type-details/lease-type-details.component.scss")).default]
    })
], LeaseTypeDetailsComponent);



/***/ }),

/***/ "./src/app/pages/leaseType/lease-type-edit/lease-type-edit.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/leaseType/lease-type-edit/lease-type-edit.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXNlVHlwZS9sZWFzZS10eXBlLWVkaXQvbGVhc2UtdHlwZS1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/leaseType/lease-type-edit/lease-type-edit.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/leaseType/lease-type-edit/lease-type-edit.component.ts ***!
  \******************************************************************************/
/*! exports provided: LeaseTypeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaseTypeEditComponent", function() { return LeaseTypeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let LeaseTypeEditComponent = class LeaseTypeEditComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.leaseTypeForm = this.formBuilder.group({
            _id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.loaderService.showLoader('Please wait while fetching ..').then(() => {
            this.editDetails = JSON.parse(localStorage.getItem('editData'));
            this.leaseTypeForm.patchValue(this.editDetails);
            this.loaderService.hideLoader();
        });
    }
    submit(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'leaseType/updateDetails/').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/lease-type-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
LeaseTypeEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
LeaseTypeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leaseType-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lease-type-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leaseType/lease-type-edit/lease-type-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lease-type-edit.component.scss */ "./src/app/pages/leaseType/lease-type-edit/lease-type-edit.component.scss")).default]
    })
], LeaseTypeEditComponent);



/***/ }),

/***/ "./src/app/pages/leaseType/lease-type-list/lease-type-list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/leaseType/lease-type-list/lease-type-list.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXNlVHlwZS9sZWFzZS10eXBlLWxpc3QvbGVhc2UtdHlwZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/leaseType/lease-type-list/lease-type-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/leaseType/lease-type-list/lease-type-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: LeaseTypeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaseTypeListComponent", function() { return LeaseTypeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let LeaseTypeListComponent = class LeaseTypeListComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.json = [];
    }
    loadData() {
        this.loaderService.showLoader('Fetching Please wait ..').then(() => {
            try {
                this.httpService.getApi('leaseType/getAll').subscribe((res) => {
                    this.json = res.success ? res.data : [];
                    this.loaderService.hideLoader();
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
            }
        });
    }
    ngOnInit() {
        this.loadData();
    }
    add() {
        this.router.navigate(['/lease-type-add']);
    }
    details(data) {
        localStorage.setItem('leaseTypeDetails', JSON.stringify(data));
        this.router.navigate(['/lease-type-details']);
    }
};
LeaseTypeListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
LeaseTypeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leaseType-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lease-type-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leaseType/lease-type-list/lease-type-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lease-type-list.component.scss */ "./src/app/pages/leaseType/lease-type-list/lease-type-list.component.scss")).default]
    })
], LeaseTypeListComponent);



/***/ }),

/***/ "./src/app/pages/notify/notify.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/notify/notify.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmeS9ub3RpZnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/notify/notify.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/notify/notify.component.ts ***!
  \**************************************************/
/*! exports provided: NotifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyComponent", function() { return NotifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotifyComponent = class NotifyComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notify',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notify.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notify/notify.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notify.component.scss */ "./src/app/pages/notify/notify.component.scss")).default]
    })
], NotifyComponent);



/***/ }),

/***/ "./src/app/pages/owner/owner-add/owner-add.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/owner/owner-add/owner-add.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyL293bmVyLWFkZC9vd25lci1hZGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/owner/owner-add/owner-add.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/owner/owner-add/owner-add.component.ts ***!
  \**************************************************************/
/*! exports provided: OwnerAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerAddComponent", function() { return OwnerAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");









let OwnerAddComponent = class OwnerAddComponent {
    constructor(formBuilder, router, util, userService, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.userService = userService;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.ownerForm = this.formBuilder.group({
            userId: [this.userService.getUserId(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            currentAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            documentsUpload: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ownerPhoto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            agreementType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            backgroundVerificationStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    changeListenerPhoto($event) {
        this.loaderService.showLoader("Uploading Image..");
        this.readThisPhoto($event.target);
    }
    readThisPhoto(inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
            this.image = myReader.result;
            // this.categoryAddForm.patchValue({photo:myReader.result});
            this.httpService.postApi({ ownerPhoto: myReader.result }, 'Item/uploadImage').subscribe((res) => {
                this.loaderService.hideLoader();
                if (res) {
                    // res.success
                    this.ownerForm.patchValue({ ownerPhoto: res.success });
                }
                else {
                    //this.modal.showModal({'success': false, 'message': res.error});
                }
            }, err => {
                this.loaderService.hideLoader();
                //this.modal.showModal({'success': false, 'message': err});
            });
        };
        myReader.readAsDataURL(file);
    }
    changeListenerDocument($event) {
        this.loaderService.showLoader("Uploading Image..");
        this.readThisDocument($event.target);
    }
    readThisDocument(inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
            this.document = myReader.result;
            // this.categoryAddForm.patchValue({photo:myReader.result});
            this.httpService.postApi({ documentsUpload: myReader.result }, 'Item/uploadImage').subscribe((res) => {
                this.loaderService.hideLoader();
                if (res) {
                    // res.success
                    this.ownerForm.patchValue({ documentsUpload: res.success });
                }
                else {
                    //this.modal.showModal({'success': false, 'message': res.error});
                }
            }, err => {
                this.loaderService.hideLoader();
                //this.modal.showModal({'success': false, 'message': err});
            });
        };
        myReader.readAsDataURL(file);
    }
    submit(data) {
        this.loaderService.showLoader('Adding Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'owner/create').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        this.router.navigate(['/owner-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
OwnerAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
OwnerAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-owner-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./owner-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/owner-add/owner-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./owner-add.component.scss */ "./src/app/pages/owner/owner-add/owner-add.component.scss")).default]
    })
], OwnerAddComponent);



/***/ }),

/***/ "./src/app/pages/owner/owner-details/owner-details.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/owner/owner-details/owner-details.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyL293bmVyLWRldGFpbHMvb3duZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/owner/owner-details/owner-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/owner/owner-details/owner-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: OwnerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerDetailsComponent", function() { return OwnerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let OwnerDetailsComponent = class OwnerDetailsComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.owner = JSON.parse(localStorage.getItem('ownerDetails'));
    }
    ngOnInit() {
    }
    toggleStatus(id, status) {
        let data = {
            isAvailable: status
        };
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'owner/updateDetails' + id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/owner-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    delete(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'owner/delete/' + data.id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully deleted', 'Okay');
                        this.router.navigate(['/owner-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    edit(data) {
        console.log(data);
        localStorage.setItem('editData', JSON.stringify(data));
        this.router.navigate(['/owner-edit']);
    }
};
OwnerDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
OwnerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-owner-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./owner-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/owner-details/owner-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./owner-details.component.scss */ "./src/app/pages/owner/owner-details/owner-details.component.scss")).default]
    })
], OwnerDetailsComponent);



/***/ }),

/***/ "./src/app/pages/owner/owner-edit/owner-edit.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/owner/owner-edit/owner-edit.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyL293bmVyLWVkaXQvb3duZXItZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/owner/owner-edit/owner-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/owner/owner-edit/owner-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: OwnerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerEditComponent", function() { return OwnerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");









let OwnerEditComponent = class OwnerEditComponent {
    constructor(formBuilder, router, util, userService, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.userService = userService;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.ownerForm = this.formBuilder.group({
            _id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            userId: [this.userService.getUserId(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            currentAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            documentsUpload: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ownerPhoto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            agreementType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            backgroundVerificationStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.loaderService.showLoader('Please wait while fetching ..').then(() => {
            this.editDetails = JSON.parse(localStorage.getItem('editData'));
            this.ownerForm.patchValue(this.editDetails);
            this.loaderService.hideLoader();
        });
    }
    changeListenerPhoto($event) {
        this.loaderService.showLoader("Uploading Image..");
        this.readThisPhoto($event.target);
    }
    readThisPhoto(inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
            this.image = myReader.result;
            // this.categoryAddForm.patchValue({photo:myReader.result});
            this.httpService.postApi({ photo: myReader.result }, 'Item/uploadImage').subscribe((res) => {
                this.loaderService.hideLoader();
                if (res) {
                    // res.success
                    this.ownerForm.patchValue({ ownerPhoto: res.success });
                }
                else {
                    //this.modal.showModal({'success': false, 'message': res.error});
                }
            }, err => {
                this.loaderService.hideLoader();
                //this.modal.showModal({'success': false, 'message': err});
            });
        };
        myReader.readAsDataURL(file);
    }
    changeListenerDocument($event) {
        this.loaderService.showLoader("Uploading Image..");
        this.readThisDocument($event.target);
    }
    readThisDocument(inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
            this.document = myReader.result;
            // this.categoryAddForm.patchValue({photo:myReader.result});
            this.httpService.postApi({ photo: myReader.result }, 'Item/uploadImage').subscribe((res) => {
                this.loaderService.hideLoader();
                if (res) {
                    // res.success
                    this.ownerForm.patchValue({ documentsUpload: res.success });
                }
                else {
                    //this.modal.showModal({'success': false, 'message': res.error});
                }
            }, err => {
                this.loaderService.hideLoader();
                //this.modal.showModal({'success': false, 'message': err});
            });
        };
        myReader.readAsDataURL(file);
    }
    submit(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'owner/updateDetails/').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/owner-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
OwnerEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
OwnerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-owner-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./owner-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/owner-edit/owner-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./owner-edit.component.scss */ "./src/app/pages/owner/owner-edit/owner-edit.component.scss")).default]
    })
], OwnerEditComponent);



/***/ }),

/***/ "./src/app/pages/owner/owner-list/owner-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/owner/owner-list/owner-list.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyL293bmVyLWxpc3Qvb3duZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/owner/owner-list/owner-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/owner/owner-list/owner-list.component.ts ***!
  \****************************************************************/
/*! exports provided: OwnerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerListComponent", function() { return OwnerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let OwnerListComponent = class OwnerListComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.json = [];
    }
    //get owners list
    loadData() {
        this.loaderService.showLoader('Fetching Please wait ..').then(() => {
            try {
                this.httpService.getApi('owner/getAll').subscribe((res) => {
                    this.json = res.data;
                    this.loaderService.hideLoader();
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
            }
        });
    }
    ngOnInit() {
        this.loadData();
    }
    add() {
        this.router.navigate(['/owner-add']);
    }
    details(data) {
        localStorage.setItem('ownerDetails', JSON.stringify(data));
        this.router.navigate(['/owner-details']);
    }
};
OwnerListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
OwnerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-owner-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./owner-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/owner-list/owner-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./owner-list.component.scss */ "./src/app/pages/owner/owner-list/owner-list.component.scss")).default]
    })
], OwnerListComponent);



/***/ }),

/***/ "./src/app/pages/property/property-add/property-add.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/property/property-add/property-add.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3BlcnR5L3Byb3BlcnR5LWFkZC9wcm9wZXJ0eS1hZGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/property/property-add/property-add.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/property/property-add/property-add.component.ts ***!
  \***********************************************************************/
/*! exports provided: PropertyAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyAddComponent", function() { return PropertyAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let PropertyAddComponent = class PropertyAddComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
        this.propertTypes = [];
        this.leaseTypes = [];
        this.rentalTypes = [];
    }
    ngOnInit() {
        this.propertyForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            propertyType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            leaseType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            rentalTypeId: ['', []],
            securityDeposit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.httpService.getApi('propertyType/getAll').subscribe((res) => {
            console.log(res);
            this.propertTypes = res.data;
        });
        this.httpService.getApi('leaseType/getAll').subscribe((res) => {
            console.log(res);
            this.leaseTypes = res.data;
        });
        this.httpService.getApi('rentalType/getAll').subscribe((res) => {
            console.log(res);
            this.rentalTypes = res.data;
        });
    }
    submit(data) {
        this.loaderService.showLoader('Adding Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'property/create').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        this.router.navigate(['/property-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
PropertyAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
PropertyAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./property-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/property/property-add/property-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./property-add.component.scss */ "./src/app/pages/property/property-add/property-add.component.scss")).default]
    })
], PropertyAddComponent);



/***/ }),

/***/ "./src/app/pages/property/property-details/property-details.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/property/property-details/property-details.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3BlcnR5L3Byb3BlcnR5LWRldGFpbHMvcHJvcGVydHktZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/property/property-details/property-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/property/property-details/property-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PropertyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyDetailsComponent", function() { return PropertyDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let PropertyDetailsComponent = class PropertyDetailsComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.property = JSON.parse(localStorage.getItem('propertyDetails'));
    }
    ngOnInit() {
    }
    toggleStatus(id, status) {
        let data = {
            isAvailable: status
        };
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'property/updateDetails' + id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/property-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    delete(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'property/delete/' + data.id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully deleted', 'Okay');
                        this.router.navigate(['/property-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    edit(data) {
        console.log(data);
        localStorage.setItem('editData', JSON.stringify(data));
        this.router.navigate(['/property-edit']);
    }
};
PropertyDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
PropertyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./property-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/property/property-details/property-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./property-details.component.scss */ "./src/app/pages/property/property-details/property-details.component.scss")).default]
    })
], PropertyDetailsComponent);



/***/ }),

/***/ "./src/app/pages/property/property-edit/property-edit.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/property/property-edit/property-edit.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3BlcnR5L3Byb3BlcnR5LWVkaXQvcHJvcGVydHktZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/property/property-edit/property-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/property/property-edit/property-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: PropertyEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyEditComponent", function() { return PropertyEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let PropertyEditComponent = class PropertyEditComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
        this.propertTypes = [];
        this.leaseTypes = [];
        this.rentalTypes = [];
    }
    ngOnInit() {
        this.propertyForm = this.formBuilder.group({
            _id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            propertyType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            leaseType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            rentalTypeId: ['', []],
            securityDeposit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.httpService.getApi('propertyType/getAll').subscribe((res) => {
            console.log(res);
            this.propertTypes = res.data;
        });
        this.httpService.getApi('leaseType/getAll').subscribe((res) => {
            console.log(res);
            this.leaseTypes = res.data;
        });
        this.httpService.getApi('rentalType/getAll').subscribe((res) => {
            console.log(res);
            this.rentalTypes = res.data;
        });
        this.loaderService.showLoader('Please wait while fetching ..').then(() => {
            this.editDetails = JSON.parse(localStorage.getItem('editData'));
            this.propertyForm.patchValue(this.editDetails);
            this.loaderService.hideLoader();
        });
    }
    submit(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'property/updateDetails/').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/property-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
PropertyEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
PropertyEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./property-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/property/property-edit/property-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./property-edit.component.scss */ "./src/app/pages/property/property-edit/property-edit.component.scss")).default]
    })
], PropertyEditComponent);



/***/ }),

/***/ "./src/app/pages/property/property-list/property-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/property/property-list/property-list.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3BlcnR5L3Byb3BlcnR5LWxpc3QvcHJvcGVydHktbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/property/property-list/property-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/property/property-list/property-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: PropertyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyListComponent", function() { return PropertyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let PropertyListComponent = class PropertyListComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        //properties:any =[];
        this.json = [];
    }
    loadData() {
        this.loaderService.showLoader('Fetching Please wait ..').then(() => {
            try {
                this.httpService.getApi('property/getAll').subscribe((res) => {
                    this.json = res.data;
                    this.loaderService.hideLoader();
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
            }
        });
    }
    ngOnInit() {
        this.loadData();
    }
    add() {
        this.router.navigate(['/property-add']);
    }
    details(data) {
        localStorage.setItem('propertyDetails', JSON.stringify(data));
        this.router.navigate(['/property-details']);
    }
};
PropertyListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
PropertyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./property-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/property/property-list/property-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./property-list.component.scss */ "./src/app/pages/property/property-list/property-list.component.scss")).default]
    })
], PropertyListComponent);



/***/ }),

/***/ "./src/app/pages/propertyType/property-type-add/property-type-add.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/propertyType/property-type-add/property-type-add.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3BlcnR5VHlwZS9wcm9wZXJ0eS10eXBlLWFkZC9wcm9wZXJ0eS10eXBlLWFkZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/propertyType/property-type-add/property-type-add.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/propertyType/property-type-add/property-type-add.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PropertyTypeAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyTypeAddComponent", function() { return PropertyTypeAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let PropertyTypeAddComponent = class PropertyTypeAddComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.propertyTypeForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    submit(data) {
        this.loaderService.showLoader('Adding Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'propertyType/create').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        this.router.navigate(['/property-type-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
PropertyTypeAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
PropertyTypeAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-propertyType-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./property-type-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propertyType/property-type-add/property-type-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./property-type-add.component.scss */ "./src/app/pages/propertyType/property-type-add/property-type-add.component.scss")).default]
    })
], PropertyTypeAddComponent);



/***/ }),

/***/ "./src/app/pages/propertyType/property-type-details/property-type-details.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/propertyType/property-type-details/property-type-details.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3BlcnR5VHlwZS9wcm9wZXJ0eS10eXBlLWRldGFpbHMvcHJvcGVydHktdHlwZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/propertyType/property-type-details/property-type-details.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/propertyType/property-type-details/property-type-details.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PropertyTypeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyTypeDetailsComponent", function() { return PropertyTypeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let PropertyTypeDetailsComponent = class PropertyTypeDetailsComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.propertyType = JSON.parse(localStorage.getItem('propertyTypeDetails'));
    }
    ngOnInit() {
    }
    toggleStatus(id, status) {
        let data = {
            isAvailable: status
        };
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'propertyType/updateDetails' + id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/property-type-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    delete(data) {
        // data['id']=this.propertyType['_id']
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'propertyType/delete/' + data.id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully deleted', 'Okay');
                        this.router.navigate(['/property-type-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    edit(data) {
        console.log(data);
        localStorage.setItem('editData', JSON.stringify(data));
        this.router.navigate(['/property-type-edit']);
    }
};
PropertyTypeDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
PropertyTypeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-propertyType-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./property-type-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propertyType/property-type-details/property-type-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./property-type-details.component.scss */ "./src/app/pages/propertyType/property-type-details/property-type-details.component.scss")).default]
    })
], PropertyTypeDetailsComponent);



/***/ }),

/***/ "./src/app/pages/propertyType/property-type-edit/property-type-edit.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/propertyType/property-type-edit/property-type-edit.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3BlcnR5VHlwZS9wcm9wZXJ0eS10eXBlLWVkaXQvcHJvcGVydHktdHlwZS1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/propertyType/property-type-edit/property-type-edit.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/propertyType/property-type-edit/property-type-edit.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PropertyTypeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyTypeEditComponent", function() { return PropertyTypeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let PropertyTypeEditComponent = class PropertyTypeEditComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.propertyTypeForm = this.formBuilder.group({
            _id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.loaderService.showLoader('Please wait while fetching ..').then(() => {
            this.editDetails = JSON.parse(localStorage.getItem('editData'));
            this.propertyTypeForm.patchValue(this.editDetails);
            this.loaderService.hideLoader();
        });
    }
    submit(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'propertyType/updateDetails/').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/property-type-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
PropertyTypeEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
PropertyTypeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-propertyType-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./property-type-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propertyType/property-type-edit/property-type-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./property-type-edit.component.scss */ "./src/app/pages/propertyType/property-type-edit/property-type-edit.component.scss")).default]
    })
], PropertyTypeEditComponent);



/***/ }),

/***/ "./src/app/pages/propertyType/property-type-list/property-type-list.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/propertyType/property-type-list/property-type-list.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3BlcnR5VHlwZS9wcm9wZXJ0eS10eXBlLWxpc3QvcHJvcGVydHktdHlwZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/propertyType/property-type-list/property-type-list.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/propertyType/property-type-list/property-type-list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PropertyTypeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyTypeListComponent", function() { return PropertyTypeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let PropertyTypeListComponent = class PropertyTypeListComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.json = [];
    }
    loadData() {
        this.loaderService.showLoader('Fetching Please wait ..').then(() => {
            try {
                this.httpService.getApi('propertyType/getAll').subscribe((res) => {
                    this.json = res.success ? res.data : [];
                    this.loaderService.hideLoader();
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
            }
        });
    }
    ngOnInit() {
        this.loadData();
    }
    add() {
        this.router.navigate(['/property-type-add']);
    }
    details(data) {
        localStorage.setItem('propertyTypeDetails', JSON.stringify(data));
        this.router.navigate(['/property-type-details']);
    }
};
PropertyTypeListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
PropertyTypeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-propertyType-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./property-type-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/propertyType/property-type-list/property-type-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./property-type-list.component.scss */ "./src/app/pages/propertyType/property-type-list/property-type-list.component.scss")).default]
    })
], PropertyTypeListComponent);



/***/ }),

/***/ "./src/app/pages/rentalType/rental-type-add/rental-type-add.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/rentalType/rental-type-add/rental-type-add.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlbnRhbFR5cGUvcmVudGFsLXR5cGUtYWRkL3JlbnRhbC10eXBlLWFkZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/rentalType/rental-type-add/rental-type-add.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/rentalType/rental-type-add/rental-type-add.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RentalTypeAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalTypeAddComponent", function() { return RentalTypeAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let RentalTypeAddComponent = class RentalTypeAddComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.rentalTypeForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    submit(data) {
        this.loaderService.showLoader('Adding Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'rentalType/create').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        this.router.navigate(['/rentalType-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
RentalTypeAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
RentalTypeAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rentalType-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rental-type-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rentalType/rental-type-add/rental-type-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rental-type-add.component.scss */ "./src/app/pages/rentalType/rental-type-add/rental-type-add.component.scss")).default]
    })
], RentalTypeAddComponent);



/***/ }),

/***/ "./src/app/pages/rentalType/rental-type-details/rental-type-details.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/rentalType/rental-type-details/rental-type-details.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlbnRhbFR5cGUvcmVudGFsLXR5cGUtZGV0YWlscy9yZW50YWwtdHlwZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/rentalType/rental-type-details/rental-type-details.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/rentalType/rental-type-details/rental-type-details.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RentalTypeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalTypeDetailsComponent", function() { return RentalTypeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let RentalTypeDetailsComponent = class RentalTypeDetailsComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.rentalType = JSON.parse(localStorage.getItem('rentalTypeDetails'));
    }
    ngOnInit() {
    }
    toggleStatus(id, status) {
        let data = {
            isAvailable: status
        };
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'rentalType/updateDetails' + id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/rentalType-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    delete(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'rentaltype/delete/' + data.id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully deleted', 'Okay');
                        this.router.navigate(['/rentalType-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    edit(data) {
        console.log(data);
        localStorage.setItem('editData', JSON.stringify(data));
        this.router.navigate(['/rentalType-edit']);
    }
};
RentalTypeDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
RentalTypeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rentalType-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rental-type-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rentalType/rental-type-details/rental-type-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rental-type-details.component.scss */ "./src/app/pages/rentalType/rental-type-details/rental-type-details.component.scss")).default]
    })
], RentalTypeDetailsComponent);



/***/ }),

/***/ "./src/app/pages/rentalType/rental-type-edit/rental-type-edit.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/rentalType/rental-type-edit/rental-type-edit.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlbnRhbFR5cGUvcmVudGFsLXR5cGUtZWRpdC9yZW50YWwtdHlwZS1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/rentalType/rental-type-edit/rental-type-edit.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/rentalType/rental-type-edit/rental-type-edit.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RentalTypeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalTypeEditComponent", function() { return RentalTypeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let RentalTypeEditComponent = class RentalTypeEditComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.rentalTypeForm = this.formBuilder.group({
            _id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.loaderService.showLoader('Please wait while fetching ..').then(() => {
            this.editDetails = JSON.parse(localStorage.getItem('editData'));
            this.rentalTypeForm.patchValue(this.editDetails);
            this.loaderService.hideLoader();
        });
    }
    submit(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'rentalType/updateDetails/').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/rentalType-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
RentalTypeEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
RentalTypeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rentalType-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rental-type-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rentalType/rental-type-edit/rental-type-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rental-type-edit.component.scss */ "./src/app/pages/rentalType/rental-type-edit/rental-type-edit.component.scss")).default]
    })
], RentalTypeEditComponent);



/***/ }),

/***/ "./src/app/pages/rentalType/rental-type-list/rental-type-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/rentalType/rental-type-list/rental-type-list.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlbnRhbFR5cGUvcmVudGFsLXR5cGUtbGlzdC9yZW50YWwtdHlwZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/rentalType/rental-type-list/rental-type-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/rentalType/rental-type-list/rental-type-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RentalTypeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalTypeListComponent", function() { return RentalTypeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let RentalTypeListComponent = class RentalTypeListComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.json = [];
    }
    loadData() {
        this.loaderService.showLoader('Fetching Please wait ..').then(() => {
            try {
                this.httpService.getApi('rentalType/getAll').subscribe((res) => {
                    this.json = res.success ? res.data : [];
                    this.loaderService.hideLoader();
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
            }
        });
    }
    ngOnInit() {
        this.loadData();
    }
    add() {
        this.router.navigate(['/rentalType-add']);
    }
    details(data) {
        localStorage.setItem('rentalTypeDetails', JSON.stringify(data));
        this.router.navigate(['/rentalType-details']);
    }
};
RentalTypeListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
RentalTypeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rentalType-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rental-type-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rentalType/rental-type-list/rental-type-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rental-type-list.component.scss */ "./src/app/pages/rentalType/rental-type-list/rental-type-list.component.scss")).default]
    })
], RentalTypeListComponent);



/***/ }),

/***/ "./src/app/pages/role/role-add/role-add.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/role/role-add/role-add.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvbGUvcm9sZS1hZGQvcm9sZS1hZGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/role/role-add/role-add.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/role/role-add/role-add.component.ts ***!
  \***********************************************************/
/*! exports provided: RoleAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleAddComponent", function() { return RoleAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let RoleAddComponent = class RoleAddComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.rolesForm = this.formBuilder.group({
            roleName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            access: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    submit(data) {
        this.loaderService.showLoader('Adding Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'role/create').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        this.router.navigate(['/role-list']);
                    }
                    else {
                        //this.alertService.presentAlert('Error',res["error"]["message"],'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
RoleAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
RoleAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-role-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./role-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role/role-add/role-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./role-add.component.scss */ "./src/app/pages/role/role-add/role-add.component.scss")).default]
    })
], RoleAddComponent);



/***/ }),

/***/ "./src/app/pages/role/role-details/role-details.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/role/role-details/role-details.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvbGUvcm9sZS1kZXRhaWxzL3JvbGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/role/role-details/role-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/role/role-details/role-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: RoleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDetailsComponent", function() { return RoleDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let RoleDetailsComponent = class RoleDetailsComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.roles = JSON.parse(localStorage.getItem('rolesDetails'));
    }
    ngOnInit() {
    }
    toggleStatus(id, status) {
        let data = {
            isAvailable: status
        };
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'role/updateDetails' + id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/role-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    delete(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'role/delete/' + data.id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully deleted', 'Okay');
                        this.router.navigate(['/role-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    edit(data) {
        console.log(data);
        localStorage.setItem('editData', JSON.stringify(data));
        this.router.navigate(['/role-edit']);
    }
};
RoleDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
RoleDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-role-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./role-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role/role-details/role-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./role-details.component.scss */ "./src/app/pages/role/role-details/role-details.component.scss")).default]
    })
], RoleDetailsComponent);



/***/ }),

/***/ "./src/app/pages/role/role-edit/role-edit.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/role/role-edit/role-edit.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvbGUvcm9sZS1lZGl0L3JvbGUtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/role/role-edit/role-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/role/role-edit/role-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: RoleEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleEditComponent", function() { return RoleEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let RoleEditComponent = class RoleEditComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.rolesForm = this.formBuilder.group({
            roleName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            access: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.loaderService.showLoader('Please wait while fetching ..').then(() => {
            this.editDetails = JSON.parse(localStorage.getItem('editData'));
            console.log(this.editDetails);
            this.rolesForm.patchValue(this.editDetails);
            this.loaderService.hideLoader();
        });
    }
    submit(data) {
        data['id'] = this.editDetails['_id'];
        console.log(data);
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'role/updateDetails').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/role-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
RoleEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
RoleEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-role-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./role-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role/role-edit/role-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./role-edit.component.scss */ "./src/app/pages/role/role-edit/role-edit.component.scss")).default]
    })
], RoleEditComponent);



/***/ }),

/***/ "./src/app/pages/role/role-list/role-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/role/role-list/role-list.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvbGUvcm9sZS1saXN0L3JvbGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/role/role-list/role-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/role/role-list/role-list.component.ts ***!
  \*************************************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let RoleListComponent = class RoleListComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.json = [];
    }
    loadData() {
        this.loaderService.showLoader('Fetching Please wait ..').then(() => {
            try {
                this.httpService.getApi('role/getAll').subscribe((res) => {
                    this.json = res.data;
                    this.loaderService.hideLoader();
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
            }
        });
    }
    ngOnInit() {
        this.loadData();
    }
    add() {
        this.router.navigate(['/role-add']);
    }
    details(data) {
        localStorage.setItem('rolesDetails', JSON.stringify(data));
        this.router.navigate(['/role-details']);
    }
};
RoleListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
RoleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-role-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./role-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role/role-list/role-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./role-list.component.scss */ "./src/app/pages/role/role-list/role-list.component.scss")).default]
    })
], RoleListComponent);



/***/ }),

/***/ "./src/app/pages/salesGroup/sales-group-add/sales-group-add.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/salesGroup/sales-group-add/sales-group-add.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NhbGVzR3JvdXAvc2FsZXMtZ3JvdXAtYWRkL3NhbGVzLWdyb3VwLWFkZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/salesGroup/sales-group-add/sales-group-add.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/salesGroup/sales-group-add/sales-group-add.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SalesGroupAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesGroupAddComponent", function() { return SalesGroupAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let SalesGroupAddComponent = class SalesGroupAddComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.salesGroupForm = this.formBuilder.group({
            userId: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            groupName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    submit(data) {
        this.loaderService.showLoader('Adding Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'salesGroup/create').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        this.router.navigate(['/sales-group-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
SalesGroupAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
SalesGroupAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-salesGroup-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sales-group-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/salesGroup/sales-group-add/sales-group-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sales-group-add.component.scss */ "./src/app/pages/salesGroup/sales-group-add/sales-group-add.component.scss")).default]
    })
], SalesGroupAddComponent);



/***/ }),

/***/ "./src/app/pages/salesGroup/sales-group-details/sales-group-details.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/salesGroup/sales-group-details/sales-group-details.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NhbGVzR3JvdXAvc2FsZXMtZ3JvdXAtZGV0YWlscy9zYWxlcy1ncm91cC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/salesGroup/sales-group-details/sales-group-details.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/salesGroup/sales-group-details/sales-group-details.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SalesGroupDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesGroupDetailsComponent", function() { return SalesGroupDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let SalesGroupDetailsComponent = class SalesGroupDetailsComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.salesGroup = JSON.parse(localStorage.getItem('salesGroupDetails'));
    }
    ngOnInit() {
    }
    toggleStatus(id, status) {
        let data = {
            isAvailable: status
        };
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'salesGroup/updateDetails' + id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/sales-group-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    delete(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'salesGroup/delete/' + data.id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully deleted', 'Okay');
                        this.router.navigate(['/sales-group-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    edit(data) {
        console.log(data);
        localStorage.setItem('editData', JSON.stringify(data));
        this.router.navigate(['/sales-group-edit']);
    }
};
SalesGroupDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
SalesGroupDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-salesGroup-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sales-group-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/salesGroup/sales-group-details/sales-group-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sales-group-details.component.scss */ "./src/app/pages/salesGroup/sales-group-details/sales-group-details.component.scss")).default]
    })
], SalesGroupDetailsComponent);



/***/ }),

/***/ "./src/app/pages/salesGroup/sales-group-edit/sales-group-edit.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/salesGroup/sales-group-edit/sales-group-edit.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NhbGVzR3JvdXAvc2FsZXMtZ3JvdXAtZWRpdC9zYWxlcy1ncm91cC1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/salesGroup/sales-group-edit/sales-group-edit.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/salesGroup/sales-group-edit/sales-group-edit.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SalesGroupEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesGroupEditComponent", function() { return SalesGroupEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let SalesGroupEditComponent = class SalesGroupEditComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.salesGroupForm = this.formBuilder.group({
            _id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            userId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            groupName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.loaderService.showLoader('Please wait while fetching ..').then(() => {
            this.editDetails = JSON.parse(localStorage.getItem('editData'));
            this.salesGroupForm.patchValue(this.editDetails);
            this.loaderService.hideLoader();
        });
    }
    submit(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'salesGroup/updateDetails/').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/sales-group-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
SalesGroupEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
SalesGroupEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-salesGroup-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sales-group-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/salesGroup/sales-group-edit/sales-group-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sales-group-edit.component.scss */ "./src/app/pages/salesGroup/sales-group-edit/sales-group-edit.component.scss")).default]
    })
], SalesGroupEditComponent);



/***/ }),

/***/ "./src/app/pages/salesGroup/sales-group-list/sales-group-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/salesGroup/sales-group-list/sales-group-list.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NhbGVzR3JvdXAvc2FsZXMtZ3JvdXAtbGlzdC9zYWxlcy1ncm91cC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/salesGroup/sales-group-list/sales-group-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/salesGroup/sales-group-list/sales-group-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SalesGroupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesGroupListComponent", function() { return SalesGroupListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let SalesGroupListComponent = class SalesGroupListComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.json = [];
    }
    loadData() {
        this.loaderService.showLoader('Fetching Please wait ..').then(() => {
            try {
                this.httpService.getApi('salesGroup/getAll').subscribe((res) => {
                    // this.json = res.success?res.data:[];
                    console.log(res);
                    this.json = res.data;
                    this.loaderService.hideLoader();
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
            }
        });
    }
    ngOnInit() {
        this.loadData();
    }
    add() {
        this.router.navigate(['/sales-group-add']);
    }
    details(data) {
        localStorage.setItem('salesGroupDetails', JSON.stringify(data));
        this.router.navigate(['/sales-group-details']);
    }
};
SalesGroupListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
SalesGroupListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-salesGroup-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sales-group-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/salesGroup/sales-group-list/sales-group-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sales-group-list.component.scss */ "./src/app/pages/salesGroup/sales-group-list/sales-group-list.component.scss")).default]
    })
], SalesGroupListComponent);



/***/ }),

/***/ "./src/app/pages/sharingType/sharing-type-add/sharing-type-add.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/sharingType/sharing-type-add/sharing-type-add.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJpbmdUeXBlL3NoYXJpbmctdHlwZS1hZGQvc2hhcmluZy10eXBlLWFkZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/sharingType/sharing-type-add/sharing-type-add.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/sharingType/sharing-type-add/sharing-type-add.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SharingTypeAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingTypeAddComponent", function() { return SharingTypeAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let SharingTypeAddComponent = class SharingTypeAddComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.sharingTypeForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    submit(data) {
        this.loaderService.showLoader('Adding Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'sharingType/create').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        this.router.navigate(['/sharing-type-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
SharingTypeAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
SharingTypeAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sharingType-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sharing-type-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sharingType/sharing-type-add/sharing-type-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sharing-type-add.component.scss */ "./src/app/pages/sharingType/sharing-type-add/sharing-type-add.component.scss")).default]
    })
], SharingTypeAddComponent);



/***/ }),

/***/ "./src/app/pages/sharingType/sharing-type-details/sharing-type-details.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/sharingType/sharing-type-details/sharing-type-details.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJpbmdUeXBlL3NoYXJpbmctdHlwZS1kZXRhaWxzL3NoYXJpbmctdHlwZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/sharingType/sharing-type-details/sharing-type-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/sharingType/sharing-type-details/sharing-type-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SharingTypeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingTypeDetailsComponent", function() { return SharingTypeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let SharingTypeDetailsComponent = class SharingTypeDetailsComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.sharingType = JSON.parse(localStorage.getItem('sharingTypeDetails'));
    }
    ngOnInit() {
    }
    toggleStatus(id, status) {
        let data = {
            isAvailable: status
        };
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'sharingType/updateDetails' + id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/sharing-type-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    delete(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'sharingType/delete/' + data.id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully deleted', 'Okay');
                        this.router.navigate(['/sharing-type-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    edit(data) {
        console.log(data);
        localStorage.setItem('editData', JSON.stringify(data));
        this.router.navigate(['/sharing-type-edit']);
    }
};
SharingTypeDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
SharingTypeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sharingType-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sharing-type-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sharingType/sharing-type-details/sharing-type-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sharing-type-details.component.scss */ "./src/app/pages/sharingType/sharing-type-details/sharing-type-details.component.scss")).default]
    })
], SharingTypeDetailsComponent);



/***/ }),

/***/ "./src/app/pages/sharingType/sharing-type-edit/sharing-type-edit.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/sharingType/sharing-type-edit/sharing-type-edit.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJpbmdUeXBlL3NoYXJpbmctdHlwZS1lZGl0L3NoYXJpbmctdHlwZS1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/sharingType/sharing-type-edit/sharing-type-edit.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/sharingType/sharing-type-edit/sharing-type-edit.component.ts ***!
  \************************************************************************************/
/*! exports provided: SharingTypeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingTypeEditComponent", function() { return SharingTypeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let SharingTypeEditComponent = class SharingTypeEditComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.sharingTypeForm = this.formBuilder.group({
            _id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.loaderService.showLoader('Please wait while fetching ..').then(() => {
            this.editDetails = JSON.parse(localStorage.getItem('editData'));
            this.sharingTypeForm.patchValue(this.editDetails);
            this.loaderService.hideLoader();
        });
    }
    submit(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'sharingType/updateDetails/').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/sharing-type-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
SharingTypeEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
SharingTypeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sharingType-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sharing-type-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sharingType/sharing-type-edit/sharing-type-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sharing-type-edit.component.scss */ "./src/app/pages/sharingType/sharing-type-edit/sharing-type-edit.component.scss")).default]
    })
], SharingTypeEditComponent);



/***/ }),

/***/ "./src/app/pages/sharingType/sharing-type-list/sharing-type-list.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/sharingType/sharing-type-list/sharing-type-list.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJpbmdUeXBlL3NoYXJpbmctdHlwZS1saXN0L3NoYXJpbmctdHlwZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/sharingType/sharing-type-list/sharing-type-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/sharingType/sharing-type-list/sharing-type-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: SharingTypeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingTypeListComponent", function() { return SharingTypeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let SharingTypeListComponent = class SharingTypeListComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.json = [];
    }
    loadData() {
        this.loaderService.showLoader('Fetching Please wait ..').then(() => {
            try {
                this.httpService.getApi('sharingType/getAll').subscribe((res) => {
                    // this.json = res.success?res.data:[];
                    this.json = res.data;
                    this.loaderService.hideLoader();
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
            }
        });
    }
    ngOnInit() {
        this.loadData();
    }
    add() {
        this.router.navigate(['/sharing-type-add']);
    }
    details(data) {
        localStorage.setItem('sharingTypeDetails', JSON.stringify(data));
        this.router.navigate(['/sharing-type-details']);
    }
};
SharingTypeListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
SharingTypeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sharingType-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sharing-type-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sharingType/sharing-type-list/sharing-type-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sharing-type-list.component.scss */ "./src/app/pages/sharingType/sharing-type-list/sharing-type-list.component.scss")).default]
    })
], SharingTypeListComponent);



/***/ }),

/***/ "./src/app/pages/tenant/tenant-add/tenant-add.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tenant/tenant-add/tenant-add.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlbmFudC90ZW5hbnQtYWRkL3RlbmFudC1hZGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/tenant/tenant-add/tenant-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/tenant/tenant-add/tenant-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: TenantAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantAddComponent", function() { return TenantAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");









let TenantAddComponent = class TenantAddComponent {
    constructor(formBuilder, router, util, userService, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.userService = userService;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.tenantForm = this.formBuilder.group({
            userId: [this.userService.getUserId(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            currentAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            documentsUpload: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tenantPhoto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            agreementType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            backgroundVerificationStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    changeListenerPhoto($event) {
        this.loaderService.showLoader("Uploading Image..");
        this.readThisPhoto($event.target);
    }
    readThisPhoto(inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
            this.image = myReader.result;
            // this.categoryAddForm.patchValue({photo:myReader.result});
            this.httpService.postApi({ tenantPhoto: myReader.result }, 'Item/uploadImage').subscribe((res) => {
                this.loaderService.hideLoader();
                if (res) {
                    // res.success
                    this.tenantForm.patchValue({ tenantPhoto: res.success });
                }
                else {
                    //this.modal.showModal({'success': false, 'message': res.error});
                }
            }, err => {
                this.loaderService.hideLoader();
                //this.modal.showModal({'success': false, 'message': err});
            });
        };
        myReader.readAsDataURL(file);
    }
    changeListenerDocument($event) {
        this.loaderService.showLoader("Uploading Image..");
        this.readThisDocument($event.target);
    }
    readThisDocument(inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
            this.document = myReader.result;
            // this.categoryAddForm.patchValue({photo:myReader.result});
            this.httpService.postApi({ documentsUpload: myReader.result }, 'Item/uploadImage').subscribe((res) => {
                this.loaderService.hideLoader();
                if (res) {
                    // res.success
                    this.tenantForm.patchValue({ documentsUpload: res.success });
                }
                else {
                    //this.modal.showModal({'success': false, 'message': res.error});
                }
            }, err => {
                this.loaderService.hideLoader();
                //this.modal.showModal({'success': false, 'message': err});
            });
        };
        myReader.readAsDataURL(file);
    }
    submit(data) {
        this.loaderService.showLoader('Adding Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'tenant/create').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        this.router.navigate(['/tenant-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
TenantAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
TenantAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tenant-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tenant-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tenant/tenant-add/tenant-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tenant-add.component.scss */ "./src/app/pages/tenant/tenant-add/tenant-add.component.scss")).default]
    })
], TenantAddComponent);



/***/ }),

/***/ "./src/app/pages/tenant/tenant-details/tenant-details.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tenant/tenant-details/tenant-details.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlbmFudC90ZW5hbnQtZGV0YWlscy90ZW5hbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/tenant/tenant-details/tenant-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/tenant/tenant-details/tenant-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: TenantDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantDetailsComponent", function() { return TenantDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let TenantDetailsComponent = class TenantDetailsComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.tenant = JSON.parse(localStorage.getItem('tenantDetails'));
    }
    ngOnInit() {
    }
    toggleStatus(id, status) {
        let data = {
            isAvailable: status
        };
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'tenant/updateDetails' + id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/tenant-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    delete(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'tenant/delete/' + data.id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully deleted', 'Okay');
                        this.router.navigate(['/tenant-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    edit(data) {
        console.log(data);
        localStorage.setItem('editData', JSON.stringify(data));
        this.router.navigate(['/tenant-edit']);
    }
};
TenantDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
TenantDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tenant-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tenant-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tenant/tenant-details/tenant-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tenant-details.component.scss */ "./src/app/pages/tenant/tenant-details/tenant-details.component.scss")).default]
    })
], TenantDetailsComponent);



/***/ }),

/***/ "./src/app/pages/tenant/tenant-edit/tenant-edit.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tenant/tenant-edit/tenant-edit.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlbmFudC90ZW5hbnQtZWRpdC90ZW5hbnQtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/tenant/tenant-edit/tenant-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tenant/tenant-edit/tenant-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: TenantEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantEditComponent", function() { return TenantEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");









let TenantEditComponent = class TenantEditComponent {
    constructor(formBuilder, router, util, userService, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.userService = userService;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.tenantForm = this.formBuilder.group({
            _id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            userId: [this.userService.getUserId(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            currentAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            documentsUpload: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tenantPhoto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            agreementType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            backgroundVerificationStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.loaderService.showLoader('Please wait while fetching ..').then(() => {
            this.editDetails = JSON.parse(localStorage.getItem('editData'));
            this.tenantForm.patchValue(this.editDetails);
            this.loaderService.hideLoader();
        });
    }
    changeListenerPhoto($event) {
        this.loaderService.showLoader("Uploading Image..");
        this.readThisPhoto($event.target);
    }
    readThisPhoto(inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
            this.image = myReader.result;
            // this.categoryAddForm.patchValue({photo:myReader.result});
            this.httpService.postApi({ tenantPhoto: myReader.result }, 'Item/uploadImage').subscribe((res) => {
                this.loaderService.hideLoader();
                if (res) {
                    // res.success
                    this.tenantForm.patchValue({ tenantPhoto: res.success });
                }
                else {
                    //this.modal.showModal({'success': false, 'message': res.error});
                }
            }, err => {
                this.loaderService.hideLoader();
                //this.modal.showModal({'success': false, 'message': err});
            });
        };
        myReader.readAsDataURL(file);
    }
    changeListenerDocument($event) {
        this.loaderService.showLoader("Uploading Image..");
        this.readThisDocument($event.target);
    }
    readThisDocument(inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
            this.document = myReader.result;
            // this.categoryAddForm.patchValue({photo:myReader.result});
            this.httpService.postApi({ documentsUpload: myReader.result }, 'Item/uploadImage').subscribe((res) => {
                this.loaderService.hideLoader();
                if (res) {
                    // res.success
                    this.tenantForm.patchValue({ documentsUpload: res.success });
                }
                else {
                    //this.modal.showModal({'success': false, 'message': res.error});
                }
            }, err => {
                this.loaderService.hideLoader();
                //this.modal.showModal({'success': false, 'message': err});
            });
        };
        myReader.readAsDataURL(file);
    }
    submit(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'tenant/updateDetails/').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/tenant-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
TenantEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
TenantEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tenant-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tenant-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tenant/tenant-edit/tenant-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tenant-edit.component.scss */ "./src/app/pages/tenant/tenant-edit/tenant-edit.component.scss")).default]
    })
], TenantEditComponent);



/***/ }),

/***/ "./src/app/pages/tenant/tenant-list/tenant-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tenant/tenant-list/tenant-list.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlbmFudC90ZW5hbnQtbGlzdC90ZW5hbnQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/tenant/tenant-list/tenant-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tenant/tenant-list/tenant-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: TenantListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantListComponent", function() { return TenantListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let TenantListComponent = class TenantListComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.json = [];
    }
    loadData() {
        this.loaderService.showLoader('Fetching Please wait ..').then(() => {
            try {
                this.httpService.getApi('tenant/getAll').subscribe((res) => {
                    this.json = res.success ? res.data : [];
                    this.loaderService.hideLoader();
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
            }
        });
    }
    ngOnInit() {
        this.loadData();
    }
    add() {
        this.router.navigate(['/tenant-add']);
    }
    details(data) {
        localStorage.setItem('tenantDetails', JSON.stringify(data));
        this.router.navigate(['/tenant-details']);
    }
};
TenantListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
TenantListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tenant-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tenant-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tenant/tenant-list/tenant-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tenant-list.component.scss */ "./src/app/pages/tenant/tenant-list/tenant-list.component.scss")).default]
    })
], TenantListComponent);



/***/ }),

/***/ "./src/app/pages/units/units-add/units-add.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/units/units-add/units-add.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VuaXRzL3VuaXRzLWFkZC91bml0cy1hZGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/units/units-add/units-add.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/units/units-add/units-add.component.ts ***!
  \**************************************************************/
/*! exports provided: UnitsAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsAddComponent", function() { return UnitsAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let UnitsAddComponent = class UnitsAddComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
        this.properties = [];
        this.amenities = [];
        this.facing = ["East", "West", "North", "South", "South-East", "South-West", "North-East", "North-West"];
        this.types = ["1 BHK", "2 BHK", "3 BHK", "4 BHK"];
        this.inspection = false;
        this.units = [{
                unitDetails: '',
                propertyId: this.getpropertyId(),
                rent: '',
                area: '',
                type: '',
                additionalRooms: [],
                facing: '',
                amenities: [],
                inspection: [],
                propertyavailablefrom: '',
                isAvailable: ''
            }];
        this.dropdownList = [];
        this.dropdownSettings = {};
    }
    ngOnInit() {
        this.httpService.getApi('property/getAll').subscribe((res) => {
            console.log('properties', res['success']);
            this.properties = res.data;
        });
        this.httpService.getApi('amenities/getAll').subscribe((res) => {
            console.log('amenities', res);
            this.amenities = res.data;
            for (let i = 0; i < this.amenities.length; i++) {
                let json = {
                    'name': this.amenities[i].name,
                    '_id': this.amenities[i]._id
                };
                this.dropdownList.push(json);
            }
            console.log(this.dropdownList);
        });
        this.dropdownSettings = {
            singleSelection: false,
            idField: '_id',
            textField: 'name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    }
    onItemSelect(item) {
        console.log(item);
    }
    onSelectAll(items) {
        console.log(items);
    }
    inspectionChange() {
        this.inspection = true;
    }
    changeProperty() {
        console.log(this.property);
        this.units.forEach(element => {
            element.propertyId = this.getpropertyId();
        });
    }
    submit() {
        console.log("units json", this.units);
        this.loaderService.showLoader('Adding Please wait ..').then(() => {
            try {
                this.httpService.postApi(this.units, 'units/create').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        this.router.navigate(['/units-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    getpropertyId() {
        return this.property;
    }
    addRoom(data) {
        data.additionalRooms.push({
            name: '',
            quantity: ''
        });
        console.log(this.units);
    }
    addUnits() {
        this.units.push({
            unitDetails: '',
            propertyId: this.getpropertyId(),
            rent: '',
            area: '',
            type: '',
            additionalRooms: [],
            facing: '',
            amenities: '',
            inspection: '',
            propertyavailablefrom: '',
            isAvailable: ''
        });
        console.log(this.units);
    }
    deleteUnit(index) {
        if (this.units.length > 1) {
            this.units.splice(index, 1);
        }
    }
};
UnitsAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
UnitsAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-units-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./units-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/units-add/units-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./units-add.component.scss */ "./src/app/pages/units/units-add/units-add.component.scss")).default]
    })
], UnitsAddComponent);



/***/ }),

/***/ "./src/app/pages/units/units-details/units-details.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/units/units-details/units-details.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VuaXRzL3VuaXRzLWRldGFpbHMvdW5pdHMtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/units/units-details/units-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/units/units-details/units-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: UnitsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsDetailsComponent", function() { return UnitsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let UnitsDetailsComponent = class UnitsDetailsComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.units = JSON.parse(localStorage.getItem('unitsDetails'));
    }
    ngOnInit() {
    }
    toggleStatus(id, status) {
        let data = {
            isAvailable: status
        };
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'units/updateDetails' + id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/units-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    delete(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'units/delete/' + data.id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully deleted', 'Okay');
                        this.router.navigate(['/units-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    edit(data) {
        console.log(data);
        localStorage.setItem('editData', JSON.stringify(data));
        this.router.navigate(['/units-edit']);
    }
};
UnitsDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
UnitsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-units-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./units-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/units-details/units-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./units-details.component.scss */ "./src/app/pages/units/units-details/units-details.component.scss")).default]
    })
], UnitsDetailsComponent);



/***/ }),

/***/ "./src/app/pages/units/units-edit/units-edit.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/units/units-edit/units-edit.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VuaXRzL3VuaXRzLWVkaXQvdW5pdHMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/units/units-edit/units-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/units/units-edit/units-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: UnitsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsEditComponent", function() { return UnitsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let UnitsEditComponent = class UnitsEditComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
        this.properties = [];
        this.amenities = [];
        this.facing = ["East", "West", "North", "South", "South-East", "South-West", "North-East", "North-West"];
    }
    ngOnInit() {
        this.unitsForm = this.formBuilder.group({
            _id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            unitDetails: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            propertyId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            rent: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            area: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            facing: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            amenities: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            inspection: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            propertyavailablefrom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.httpService.getApi('property/getAll').subscribe((res) => {
            console.log('properties', res['success']);
            this.properties = res.data;
        });
        this.httpService.getApi('amenities/getAll').subscribe((res) => {
            console.log('amenities', res['success']);
            this.amenities = res.data;
        });
        this.loaderService.showLoader('Please wait while fetching ..').then(() => {
            this.editDetails = JSON.parse(localStorage.getItem('editData'));
            this.unitsForm.patchValue(this.editDetails);
            this.loaderService.hideLoader();
        });
    }
    submit(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'units/updateDetails/').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/units-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
UnitsEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
UnitsEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-units-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./units-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/units-edit/units-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./units-edit.component.scss */ "./src/app/pages/units/units-edit/units-edit.component.scss")).default]
    })
], UnitsEditComponent);



/***/ }),

/***/ "./src/app/pages/units/units-list/units-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/units/units-list/units-list.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VuaXRzL3VuaXRzLWxpc3QvdW5pdHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/units/units-list/units-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/units/units-list/units-list.component.ts ***!
  \****************************************************************/
/*! exports provided: UnitsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsListComponent", function() { return UnitsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let UnitsListComponent = class UnitsListComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.json = [];
    }
    loadData() {
        this.loaderService.showLoader('Fetching Please wait ..').then(() => {
            try {
                this.httpService.getApi('units/getAll').subscribe((res) => {
                    this.json = res.success ? res.data : [];
                    console.log(this.json);
                    this.loaderService.hideLoader();
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
            }
        });
    }
    ngOnInit() {
        this.loadData();
    }
    add() {
        this.router.navigate(['/units-add']);
    }
    details(data) {
        localStorage.setItem('unitsDetails', JSON.stringify(data));
        this.router.navigate(['/units-details']);
    }
};
UnitsListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
UnitsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-units-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./units-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/units-list/units-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./units-list.component.scss */ "./src/app/pages/units/units-list/units-list.component.scss")).default]
    })
], UnitsListComponent);



/***/ }),

/***/ "./src/app/pages/user/user-add/user-add.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/user/user-add/user-add.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci1hZGQvdXNlci1hZGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/user/user-add/user-add.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/user/user-add/user-add.component.ts ***!
  \***********************************************************/
/*! exports provided: UserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponent", function() { return UserAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let UserAddComponent = class UserAddComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
        this.json = [];
    }
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.httpService.getApi('role/getAll').subscribe((res) => {
            console.log("roles", res);
            this.json = res['data'];
        });
    }
    submit(data) {
        this.loaderService.showLoader('Adding Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'user/create').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully added', 'Okay');
                        this.router.navigate(['/user-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
UserAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
UserAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-add/user-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-add.component.scss */ "./src/app/pages/user/user-add/user-add.component.scss")).default]
    })
], UserAddComponent);



/***/ }),

/***/ "./src/app/pages/user/user-details/user-details.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/user/user-details/user-details.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/user/user-details/user-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/user/user-details/user-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let UserDetailsComponent = class UserDetailsComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.user = JSON.parse(localStorage.getItem('userDetails'));
    }
    ngOnInit() {
    }
    toggleStatus(id, status) {
        let data = {
            isAvailable: status
        };
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'user/updateDetails' + id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/user-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    delete(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'user/delete/' + data.id).subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully deleted', 'Okay');
                        this.router.navigate(['/user-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
    edit(data) {
        console.log(data);
        localStorage.setItem('editData', JSON.stringify(data));
        this.router.navigate(['/user-edit']);
    }
};
UserDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-details/user-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-details.component.scss */ "./src/app/pages/user/user-details/user-details.component.scss")).default]
    })
], UserDetailsComponent);



/***/ }),

/***/ "./src/app/pages/user/user-edit/user-edit.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/user/user-edit/user-edit.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/user/user-edit/user-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/user/user-edit/user-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");








let UserEditComponent = class UserEditComponent {
    constructor(formBuilder, router, util, httpService, alertService, loaderService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.util = util;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loaderService = loaderService;
        this.json = [];
    }
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            _id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isAvailable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.loaderService.showLoader('Please wait while fetching ..').then(() => {
            this.httpService.getApi('role/getAll').subscribe((res) => {
                console.log("roles", res);
                this.json = res['data'];
            });
            this.editDetails = JSON.parse(localStorage.getItem('editData'));
            this.userForm.patchValue(this.editDetails);
            this.loaderService.hideLoader();
        });
    }
    submit(data) {
        this.loaderService.showLoader('Updating Please wait ..').then(() => {
            try {
                this.httpService.postApi(data, 'user/updateDetails/').subscribe((res) => {
                    this.loaderService.hideLoader();
                    if (res["success"]) {
                        this.alertService.presentAlert('Success', 'Successfully updated', 'Okay');
                        this.router.navigate(['/user-list']);
                    }
                    else {
                        this.alertService.presentAlert('Error', res["error"]["message"], 'Okay');
                    }
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
                this.alertService.presentAlert('Error', 'Something went wrong please try again', 'Okay');
            }
        });
    }
};
UserEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-edit/user-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-edit.component.scss */ "./src/app/pages/user/user-edit/user-edit.component.scss")).default]
    })
], UserEditComponent);



/***/ }),

/***/ "./src/app/pages/user/user-list/user-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/user/user-list/user-list.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/user/user-list/user-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/user/user-list/user-list.component.ts ***!
  \*************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var src_app_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util.service */ "./src/app/util.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");







let UserListComponent = class UserListComponent {
    constructor(router, httpService, alertService, util, loaderService) {
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.util = util;
        this.loaderService = loaderService;
        this.json = [];
        this.roles = [];
    }
    loadData() {
        this.loaderService.showLoader('Fetching Please wait ..').then(() => {
            try {
                this.httpService.getApi('role/getAll').subscribe((res) => {
                    console.log("roles", res);
                    this.roles = res['data'];
                });
                this.httpService.getApi('user/getAll').subscribe((res) => {
                    this.json = res.data;
                    this.loaderService.hideLoader();
                }, (err) => {
                    this.loaderService.hideLoader();
                    this.alertService.presentNetworkAlert();
                });
            }
            catch (e) {
                this.loaderService.hideLoader();
            }
        });
    }
    findRole(roleId) {
        let tmp = (this.roles.find(item => { return item._id == roleId; }));
        return tmp.roleName;
    }
    ngOnInit() {
        this.loadData();
    }
    add() {
        this.router.navigate(['/user-add']);
    }
    details(data) {
        localStorage.setItem('userDetails', JSON.stringify(data));
        this.router.navigate(['/user-details']);
    }
};
UserListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-list/user-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-list.component.scss */ "./src/app/pages/user/user-list/user-list.component.scss")).default]
    })
], UserListComponent);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserService = class UserService {
    constructor() { }
    getUserId() {
        return 1;
    }
    getSalesUserId() {
        return 2;
    }
    getSalesGroup() {
        return 3;
    }
};
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/util.service.ts":
/*!*********************************!*\
  !*** ./src/app/util.service.ts ***!
  \*********************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UtilService = class UtilService {
    constructor() { }
    goBack() {
        window.history.back();
    }
};
UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UtilService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\coding\pms\pms_angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map