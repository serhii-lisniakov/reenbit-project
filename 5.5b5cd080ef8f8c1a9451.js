(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/flf":function(t,n,o){"use strict";o.d(n,"a",function(){return a});var e=o("mrSG"),c=o("2Vo4"),i=o("fXoL"),r=o("sSZD"),s=o("c14U"),p=o("lGQG");let a=(()=>{class t{constructor(t,n,o){this.db=t,this.cartService=n,this.authService=o,this.wishList=new c.a([])}getWishlist(){return new Promise(t=>{this.db.database.ref(`users/${this.authService.user.value.id}/wishlist`).once("value").then(n=>{n.val()?this.wishList.next(n.val()||[]):this.wishList.next([]),t(n.val())})})}toggleProductToWishlist(t){let n=this.wishList.getValue();n.some(n=>n.id===t.id)?n=n.filter(n=>n.id!==t.id):n.push(t),this.wishList.next(n),this.postWishlist(n)}postWishlist(t){this.db.database.ref("users/"+this.authService.user.value.id).update({wishlist:t}).then()}checkIfProductInWishlist(t){return Object(e.a)(this,void 0,void 0,function*(){return this.wishList.value.length||(yield this.getWishlist().then()),this.wishList.value.some(n=>n.id===t.id)})}}return t.\u0275fac=function(n){return new(n||t)(i.cc(r.a),i.cc(s.a),i.cc(p.a))},t.\u0275prov=i.Pb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Gdn9:function(t,n,o){"use strict";o.d(n,"a",function(){return s});var e=o("2Vo4"),c=o("fXoL"),i=o("sSZD"),r=o("c14U");let s=(()=>{class t{constructor(t,n){this.db=t,this.cartService=n,this.products=new e.a([])}getProducts(){return new Promise(t=>{this.db.database.ref("products").once("value").then(n=>{this.cartService.getOrderList().then(),this.originProducts=n.val(),this.products.next(n.val()),t(n.val())})})}getProductById(t){return new Promise(n=>{this.db.database.ref("products/"+t).once("value").then(t=>{n(t.val())})})}sorting(t){const n=this.products.getValue().sort((n,o)=>{switch(t.operator){case"lowToHigh":switch(t.value){case"price":return n.price-o.price;case"rating":return n.rating-o.rating}break;case"highToLow":switch(t.value){case"price":return o.price-n.price;case"rating":return o.rating-n.rating}}});this.products.next(n)}filter(t){const n=t.brands.filter(t=>"boolean"!=typeof t),o=t.rating.filter(t=>"boolean"!=typeof t);let e=[],c=[],i=[],r=[];e=t.categories.length?this.originProducts.filter(n=>n.category.toLowerCase()===t.categories):this.originProducts,c=n.length?e.filter(t=>n.includes(t.farm.toLowerCase())):e,i=o.length?c.filter(t=>o.includes(t.rating.toString())):c,r=i.filter(n=>n.price>=t.price.minPrice&&n.price<=t.price.maxPrice),this.products.next(r)}reset(){this.products.next(this.originProducts)}}return t.\u0275fac=function(n){return new(n||t)(c.cc(i.a),c.cc(r.a))},t.\u0275prov=c.Pb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Xi5d:function(t,n,o){"use strict";o.r(n),o.d(n,"ProductModule",function(){return T});var e=o("ofXK"),c=o("tyNb"),i=o("XNiG"),r=o("1G5W"),s=o("3Pt+"),p=o("fXoL"),a=o("Gdn9"),d=o("McrY"),u=o("c14U"),b=o("lGQG"),l=o("/flf");const g=["*"];let h=(()=>{class t{constructor(){this.active=!1}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=p.Nb({type:t,selectors:[["app-tab"]],inputs:{title:"title",active:"active",count:"count"},ngContentSelectors:g,decls:2,vars:1,consts:[[1,"tab-content",3,"hidden"]],template:function(t,n){1&t&&(p.mc(),p.Yb(0,"div",0),p.lc(1),p.Xb()),2&t&&p.nc("hidden",!n.active)},styles:[".tab-content[_ngcontent-%COMP%]{margin-top:32px;min-height:200px}"]}),t})();function _(t,n){if(1&t&&(p.Yb(0,"span"),p.Ec(1),p.Xb()),2&t){const t=p.hc().$implicit;p.Ib(1),p.Fc(t.count)}}function f(t,n){if(1&t){const t=p.Zb();p.Yb(0,"li",2),p.fc("click",function(){p.vc(t);const o=n.$implicit;return p.hc().selectTab(o)}),p.Ec(1),p.Cc(2,_,2,1,"span",3),p.Xb()}if(2&t){const t=n.$implicit;p.Lb("active",t.active),p.Ib(1),p.Gc(" ",t.title," "),p.Ib(1),p.nc("ngIf",t.count)}}const x=["*"];let P=(()=>{class t{constructor(){}ngAfterContentInit(){0===this.tabs.filter(t=>t.active).length&&this.selectTab(this.tabs.first)}selectTab(t){this.tabs.toArray().forEach(t=>t.active=!1),t.active=!0}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=p.Nb({type:t,selectors:[["app-tabs"]],contentQueries:function(t,n,o){if(1&t&&p.Mb(o,h,!1),2&t){let t;p.sc(t=p.gc())&&(n.tabs=t)}},ngContentSelectors:x,decls:3,vars:1,consts:[[1,"tabs"],[3,"active","click",4,"ngFor","ngForOf"],[3,"click"],[4,"ngIf"]],template:function(t,n){1&t&&(p.mc(),p.Yb(0,"ul",0),p.Cc(1,f,3,4,"li",1),p.Xb(),p.lc(2)),2&t&&(p.Ib(1),p.nc("ngForOf",n.tabs))},directives:[e.k,e.l],styles:[".tabs[_ngcontent-%COMP%]{display:flex;justify-content:space-between;list-style:none;border-bottom:1px solid #f5f5f5}.tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-bottom:16px;font-weight:600;font-size:18px;cursor:pointer;width:33%}@media screen and (max-width:500px){.tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:14px}}@media screen and (max-width:375px){.tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:13px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}}.tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){text-align:center}.tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3){text-align:right}.tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:0 8px;background:#f4f8ec;border-radius:12px;color:#6a983c;font-weight:600;font-size:12px;line-height:18px;margin-left:8px;display:inline-block}@media screen and (max-width:375px){.tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:11px;padding:0 5px;margin-left:0}}.tabs[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{border-bottom:2px solid #151515}"]}),t})(),C=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=p.Nb({type:t,selectors:[["app-proposal-card"]],inputs:{proposal:"proposal"},decls:13,vars:6,consts:[[1,"proposal"],[1,"proposal_image"],[3,"routerLink"],["alt","",3,"src"],[1,"proposal_title"],[1,"proposal_description"],[1,"proposal_footer"]],template:function(t,n){1&t&&(p.Yb(0,"div",0),p.Yb(1,"div",1),p.Yb(2,"a",2),p.Ub(3,"img",3),p.Xb(),p.Xb(),p.Yb(4,"div",4),p.Ec(5),p.Xb(),p.Yb(6,"div",5),p.Ec(7),p.Xb(),p.Yb(8,"div",6),p.Yb(9,"span"),p.Ec(10),p.Xb(),p.Yb(11,"a",2),p.Ec(12,"Buy now"),p.Xb(),p.Xb(),p.Xb()),2&t&&(p.Ib(2),p.pc("routerLink","/products/",n.proposal.id,""),p.Ib(1),p.oc("src",n.proposal.imgUrl,p.xc),p.Ib(2),p.Fc(n.proposal.title.charAt(0).toUpperCase()+n.proposal.title.slice(1)),p.Ib(2),p.Fc(n.proposal.description.small),p.Ib(3),p.Gc("",n.proposal.price," USD"),p.Ib(1),p.pc("routerLink","/products/",n.proposal.id,""))},directives:[c.e],styles:[".proposal[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.proposal_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:180px;object-fit:cover;border-radius:12px}.proposal_title[_ngcontent-%COMP%]{font-weight:500;font-size:15px;margin-top:16px}.proposal_description[_ngcontent-%COMP%]{color:#575757;font-size:12px;margin-top:5px;padding-bottom:20px}.proposal_footer[_ngcontent-%COMP%]{margin-top:auto;display:flex;justify-content:space-between;align-items:center}.proposal_footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;font-size:18px}.proposal_footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;font-weight:700;font-size:15px;color:#fff;width:90px;height:36px;background:#6a983c;border:2px solid #46760a;border-radius:12px}"]}),t})();function m(t,n){1&t&&p.Ub(0,"img",34),2&t&&p.nc("src","assets/"+n.$implicit+".svg",p.xc)}function v(t,n){if(1&t&&(p.Yb(0,"option",35),p.Ec(1),p.Xb()),2&t){const t=n.$implicit;p.nc("value",t),p.Ib(1),p.Fc(t)}}function O(t,n){if(1&t){const t=p.Zb();p.Yb(0,"div",36),p.Yb(1,"button",24),p.fc("click",function(){return p.vc(t),p.hc(2).addToWishlist()}),p.Ub(2,"img",8),p.Ec(3),p.Xb(),p.Xb()}if(2&t){const t=p.hc(2);p.Ib(2),p.pc("src","assets/",t.isProductInWishlist?"heart-full":"heart",".svg",p.xc),p.Ib(1),p.Gc(" ",t.isProductInWishlist?"Remove from":"Add to"," my wish list")}}function M(t,n){if(1&t&&(p.Yb(0,"div",37),p.Yb(1,"span"),p.Ec(2),p.Xb(),p.Yb(3,"span"),p.Ec(4),p.Xb(),p.Yb(5,"div",38),p.Ec(6),p.Xb(),p.Xb()),2&t){const t=n.$implicit;p.Ib(2),p.Fc(t.author),p.Ib(2),p.Fc(t.date.substr(0,24)),p.Ib(2),p.Fc(t.body)}}function w(t,n){if(1&t&&(p.Yb(0,"div",37),p.Yb(1,"span"),p.Ec(2),p.Xb(),p.Yb(3,"span"),p.Ec(4),p.Xb(),p.Yb(5,"div",38),p.Ec(6),p.Xb(),p.Xb()),2&t){const t=n.$implicit;p.Ib(2),p.Fc(t.author),p.Ib(2),p.Fc(t.date.substr(0,24)),p.Ib(2),p.Fc(t.body)}}function y(t,n){if(1&t){const t=p.Zb();p.Yb(0,"div",3),p.Yb(1,"div",4),p.Ec(2,"added!"),p.Xb(),p.Yb(3,"div",5),p.Yb(4,"div",6),p.Yb(5,"div",7),p.Ub(6,"img",8),p.Xb(),p.Yb(7,"div",9),p.Yb(8,"div",10),p.Ub(9,"img",8),p.Xb(),p.Yb(10,"div",10),p.Ub(11,"img",8),p.Xb(),p.Xb(),p.Xb(),p.Xb(),p.Yb(12,"div",11),p.Yb(13,"div",12),p.Ec(14),p.ic(15,"titlecase"),p.Xb(),p.Yb(16,"div",13),p.Cc(17,m,1,1,"img",14),p.Yb(18,"span",15),p.Ec(19),p.Xb(),p.Xb(),p.Yb(20,"div",16),p.Ec(21),p.Xb(),p.Yb(22,"div",17),p.Yb(23,"div",18),p.Yb(24,"div"),p.Yb(25,"span"),p.Ec(26,"Country:"),p.Xb(),p.Yb(27,"span"),p.Ec(28),p.Xb(),p.Xb(),p.Yb(29,"div"),p.Yb(30,"span"),p.Ec(31,"Category:"),p.Xb(),p.Yb(32,"span"),p.Ec(33),p.ic(34,"titlecase"),p.Xb(),p.Xb(),p.Yb(35,"div"),p.Yb(36,"span"),p.Ec(37,"Stock:"),p.Xb(),p.Yb(38,"span"),p.Ec(39),p.Xb(),p.Xb(),p.Yb(40,"div"),p.Yb(41,"span"),p.Ec(42,"Color:"),p.Xb(),p.Yb(43,"span"),p.Ec(44),p.Xb(),p.Xb(),p.Xb(),p.Yb(45,"div",18),p.Yb(46,"div"),p.Yb(47,"span"),p.Ec(48,"Size:"),p.Xb(),p.Yb(49,"span"),p.Ec(50),p.Xb(),p.Xb(),p.Yb(51,"div"),p.Yb(52,"span"),p.Ec(53,"Buy by:"),p.Xb(),p.Yb(54,"span"),p.Ec(55),p.Xb(),p.Xb(),p.Yb(56,"div"),p.Yb(57,"span"),p.Ec(58,"Delivery:"),p.Xb(),p.Yb(59,"span"),p.Ec(60),p.Xb(),p.Xb(),p.Yb(61,"div"),p.Yb(62,"span"),p.Ec(63,"Delivery area:"),p.Xb(),p.Yb(64,"span"),p.Ec(65),p.ic(66,"titlecase"),p.Xb(),p.Xb(),p.Xb(),p.Xb(),p.Yb(67,"div",19),p.Yb(68,"div",20),p.Yb(69,"div"),p.Ec(70),p.Xb(),p.Yb(71,"div"),p.Ec(72),p.Xb(),p.Xb(),p.Yb(73,"div",21),p.Yb(74,"input",22),p.fc("keydown",function(t){return t.preventDefault()}),p.Xb(),p.Yb(75,"div",23),p.Yb(76,"button",24),p.fc("click",function(){return p.vc(t),p.hc().handleCount(1)}),p.Ec(77,"+"),p.Xb(),p.Yb(78,"button",24),p.fc("click",function(){return p.vc(t),p.hc().handleCount(-1)}),p.Ec(79,"-"),p.Xb(),p.Xb(),p.Yb(80,"select"),p.Cc(81,v,2,2,"option",25),p.Xb(),p.Xb(),p.Yb(82,"div",26),p.Yb(83,"button",24),p.fc("click",function(){return p.vc(t),p.hc().addProductToCart()}),p.Ub(84,"img",27),p.Ec(85," Add to cart"),p.Xb(),p.Xb(),p.Xb(),p.Cc(86,O,4,2,"div",28),p.Yb(87,"div",29),p.Yb(88,"app-tabs"),p.Yb(89,"app-tab",30),p.Yb(90,"div",31),p.Yb(91,"span"),p.Ec(92,"Origins"),p.Xb(),p.Yb(93,"div"),p.Ec(94),p.Xb(),p.Xb(),p.Yb(95,"div",31),p.Yb(96,"span"),p.Ec(97,"How to cook"),p.Xb(),p.Yb(98,"div"),p.Ec(99),p.Xb(),p.Xb(),p.Xb(),p.Yb(100,"app-tab",32),p.Cc(101,M,7,3,"div",33),p.Xb(),p.Yb(102,"app-tab",32),p.Cc(103,w,7,3,"div",33),p.Xb(),p.Xb(),p.Xb(),p.Xb(),p.Xb()}if(2&t){const t=p.hc();p.Ib(1),p.Lb("active",t.isNotification),p.Ib(5),p.nc("src",t.product.imgUrl,p.xc),p.Ib(3),p.nc("src",t.product.imgUrl,p.xc),p.Ib(2),p.nc("src",t.product.imgUrl,p.xc),p.Ib(3),p.Fc(p.jc(15,33,t.product.title)),p.Ib(3),p.nc("ngForOf",t.productRating),p.Ib(2),p.Hc("(",t.product.reviews.length," customer review",t.product.reviews.length>1?"s":"",")"),p.Ib(2),p.Fc(t.product.description.main),p.Ib(7),p.Fc(t.product.country),p.Ib(5),p.Fc(p.jc(34,35,t.product.category)),p.Ib(6),p.Fc(t.product.stock>=10?"In Stock":0===t.product.stock?"Ran out":"Less than 10 items"),p.Ib(5),p.Fc(t.product.color),p.Ib(6),p.Fc(t.product.sizes),p.Ib(5),p.Fc(t.product.buyProperties),p.Ib(5),p.Hc("in ",t.product.deliveryTime," day",t.product.deliveryTime>1?"s":"",""),p.Ib(5),p.Fc(p.jc(66,37,t.product.deliveryArea)),p.Ib(5),p.Gc("",t.product.price," USD"),p.Ib(2),p.Gc("",t.product.previousPrice," USD"),p.Ib(2),p.nc("formControl",t.productCount),p.Ib(7),p.nc("ngForOf",t.product.buyProperties.split(", ")),p.Ib(5),p.nc("ngIf",t.authService.user.value.id),p.Ib(3),p.nc("title","Description"),p.Ib(5),p.Fc(t.product.description.origins),p.Ib(5),p.Fc(t.product.description.howToCook),p.Ib(1),p.nc("title","Reviews")("count",t.product.reviews.length),p.Ib(1),p.nc("ngForOf",t.product.reviews),p.Ib(1),p.nc("title","Questions")("count",t.product.reviews.length),p.Ib(1),p.nc("ngForOf",t.product.questions)}}function X(t,n){1&t&&(p.Yb(0,"p",39),p.Ec(1,"No Product to show! Go back "),p.Yb(2,"a",40),p.Ec(3,"here"),p.Xb(),p.Xb())}function Y(t,n){if(1&t&&(p.Yb(0,"div",46),p.Ub(1,"app-proposal-card",47),p.Xb()),2&t){const t=n.$implicit;p.Ib(1),p.nc("proposal",t)}}function I(t,n){if(1&t&&(p.Yb(0,"div",41),p.Yb(1,"div",42),p.Yb(2,"span"),p.Ec(3,"You will maybe love"),p.Xb(),p.Yb(4,"a",40),p.Ec(5,"More products"),p.Xb(),p.Xb(),p.Yb(6,"div",43),p.Yb(7,"div",44),p.Cc(8,Y,2,1,"div",45),p.Xb(),p.Xb(),p.Xb()),2&t){const t=p.hc();p.Ib(8),p.nc("ngForOf",t.proposals)}}let k=(()=>{class t{constructor(t,n,o,e,c,r,p){this.productService=t,this.breadCrumbsService=n,this.cartService=o,this.route=e,this.router=c,this.authService=r,this.wishlistService=p,this.destroy$=new i.a,this.productCount=new s.e(1),this.isNotification=!1}ngOnInit(){this.getProduct(),this.subscribeToRouteChanges(),this.breadCrumbsService.title.next(this.product.title),this.checkIfProductInWishlist()}subscribeToRouteChanges(){this.router.events.pipe(Object(r.a)(this.destroy$)).subscribe(t=>{t instanceof c.c&&(this.productCount.setValue(1),this.getProduct(),this.checkIfProductInWishlist(),this.breadCrumbsService.title.next(this.product.title))})}getProduct(){const[t,n]=this.route.snapshot.data.data;this.product=t,this.productRating=this.getProductsRating(this.product.rating),this.proposals=this.getRandomProposals(n)}getProductsRating(t){return Array(5).fill("star").map((n,o)=>o<t?"star-black":"star")}getRandomProposals(t){const n=[];for(let o=0;o<4;o++)n.push(t[Math.floor(Math.random()*t.length)]);return n}addProductToCart(){if(!JSON.parse(localStorage.getItem("freshnesecomUser")))return void this.authService.onProductButtonClick.next(!0);this.isNotification=!0;const t=JSON.parse(JSON.stringify(this.product));t.count=this.productCount.value,this.cartService.addProductToCart(t).then(),setTimeout(()=>this.isNotification=!1,800)}handleCount(t){this.productCount.setValue(this.productCount.value+t),0===this.productCount.value&&this.productCount.setValue(1),this.productCount.value>this.product.stock&&this.productCount.setValue(this.product.stock)}addToWishlist(){this.isProductInWishlist=!this.isProductInWishlist,this.wishlistService.toggleProductToWishlist(this.product)}checkIfProductInWishlist(){this.wishlistService.checkIfProductInWishlist(this.product).then(t=>{this.isProductInWishlist=t})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return t.\u0275fac=function(n){return new(n||t)(p.Tb(a.a),p.Tb(d.a),p.Tb(u.a),p.Tb(c.a),p.Tb(c.d),p.Tb(b.a),p.Tb(l.a))},t.\u0275cmp=p.Nb({type:t,selectors:[["app-product"]],decls:4,vars:3,consts:[["class","product_wrapper",4,"ngIf","ngIfElse"],["noProduct",""],["class","proposals",4,"ngIf"],[1,"product_wrapper"],[1,"product_alert"],[1,"product_photos-wrapper"],[1,"product_photos"],[1,"product_photos-top"],["alt","",3,"src"],[1,"product_photos-bottom"],[1,"product_photos-bottom_item"],[1,"product_content"],[1,"product_title"],[1,"product_rating"],["alt","star",3,"src",4,"ngFor","ngForOf"],[1,"openSans"],[1,"product_description","openSans"],[1,"product_info","openSans"],[1,"product_info-part"],[1,"product_pricing"],[1,"product_price"],[1,"product_county"],["type","number",3,"formControl","keydown"],[1,"product_county-buttons"],[3,"click"],[3,"value",4,"ngFor","ngForOf"],[1,"product_button"],["src","assets/plus.svg","alt",""],["class","product_wishlist",4,"ngIf"],[1,"product-tabs"],[3,"title"],[1,"product-tabs_description"],[3,"title","count"],["class","product-tabs_review",4,"ngFor","ngForOf"],["alt","star",3,"src"],[3,"value"],[1,"product_wishlist"],[1,"product-tabs_review"],[1,"product-tabs_review-body"],[1,"product_empty"],["routerLink","/products"],[1,"proposals"],[1,"proposals_header"],[1,"proposals_scrollable"],[1,"proposals_items"],["class","proposals_item",4,"ngFor","ngForOf"],[1,"proposals_item"],[3,"proposal"]],template:function(t,n){if(1&t&&(p.Cc(0,y,104,39,"div",0),p.Cc(1,X,4,0,"ng-template",null,1,p.Dc),p.Cc(3,I,9,1,"div",2)),2&t){const t=p.tc(2);p.nc("ngIf",n.product)("ngIfElse",t),p.Ib(3),p.nc("ngIf",n.product)}},directives:[e.l,e.k,s.s,s.b,s.n,s.f,P,h,s.r,s.x,c.e,C],pipes:[e.s],styles:['.product_wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.product_photos-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-right:35px;min-width:48%;max-width:48%;margin-top:30px}.product_photos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:12px;object-fit:cover}.product_photos-top[_ngcontent-%COMP%]{width:100%;height:420px}.product_photos-bottom[_ngcontent-%COMP%]{margin-top:26px;display:flex;justify-content:space-between}.product_photos-bottom_item[_ngcontent-%COMP%]{width:calc(50% - 20px);height:218px}.product_content[_ngcontent-%COMP%]{flex-grow:1}.product_title[_ngcontent-%COMP%]{font-weight:600;font-size:32px}.product_rating[_ngcontent-%COMP%]{margin-top:10px}.product_rating[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:4px}.product_rating[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#a9a9a9;font-size:12px;margin-left:10px}.product_description[_ngcontent-%COMP%]{font-size:17px;margin-top:32px}.product_info[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:30px;font-size:14px}.product_info-part[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-top:11px}.product_info-part[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{display:inline-block;min-width:100px;margin-right:10px;color:#a9a9a9}.product_pricing[_ngcontent-%COMP%]{border:1px solid #f5f5f5;padding:16px;border-radius:12px;display:flex;justify-content:space-between;margin-top:37px;max-width:calc(100% - 39px)}.product_price[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{font-weight:600;font-size:26px}.product_price[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{font-weight:600;font-size:12px;color:#a9a9a9}.product_county[_ngcontent-%COMP%]{background:#f9f9f9;border:1px solid #d1d1d1;border-radius:12px;font-size:12px;max-width:130px;display:flex;align-items:center;justify-content:space-between;padding:10px 5px 10px 10px;position:relative;height:48px}.product_county[_ngcontent-%COMP%]:hover   .product_county-buttons[_ngcontent-%COMP%]{opacity:1}.product_county-buttons[_ngcontent-%COMP%]{opacity:0;transition:.3s;margin-right:10px}.product_county-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:15px;height:14px;border:none;background:#e2e2e2;transition:.3s;border-radius:3px}.product_county-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:1}.product_county-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{margin-bottom:3px}.product_county-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{background:#767676}.product_county[_ngcontent-%COMP%]:after{position:absolute;content:"";height:75%;width:1px;top:50%;left:50%;transform:translateY(-50%);background:#d1d1d1}.product_county[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .product_county[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:none;border:none;font-weight:600}.product_county[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{max-width:30%;text-align:center}.product_county[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .product_county[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}.product_button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#6a983c;border:2px solid #46760a;padding:12px 16px;color:#fff;font-weight:700;font-size:15px;border-radius:12px;cursor:pointer;transition:.3s;display:flex;align-items:center}.product_button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:5px}.product_button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#46760a}.product_wishlist[_ngcontent-%COMP%]{margin-top:17px}.product_wishlist[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-weight:700;font-size:15px;border:none;cursor:pointer;padding:12px 15px;transition:.3s;border-radius:12px;background:transparent}.product_wishlist[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#dbdbdb}.product-tabs[_ngcontent-%COMP%]{margin-top:50px;max-width:calc(100% - 44px)}.product-tabs_description[_ngcontent-%COMP%]{font-size:14px}.product-tabs_description[_ngcontent-%COMP%]:last-child{margin-top:30px}.product-tabs_description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-size:15px;font-weight:500;margin-top:46px}.product-tabs_review[_ngcontent-%COMP%]{margin-top:46px}.product-tabs_review[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{font-weight:500;font-size:18px}.product-tabs_review[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){font-size:14px;color:#a9a9a9;margin-left:10px}.product-tabs_review-body[_ngcontent-%COMP%]{font-size:14px;margin-top:20px}.product_empty[_ngcontent-%COMP%]{text-align:center;padding:40px 0;font-size:20px}.product_empty[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:underline}.product_alert[_ngcontent-%COMP%]{position:fixed;bottom:10px;right:-300px;background:rgba(70,118,10,.7);border-radius:12px;padding:30px 50px;color:#fff;letter-spacing:2px;text-transform:uppercase;transition:.3s;z-index:100}.product_alert.active[_ngcontent-%COMP%]{right:10px}.proposals[_ngcontent-%COMP%]{margin-top:70px}.proposals_header[_ngcontent-%COMP%]{font-weight:600;font-size:18px;display:flex;padding:0 33px}.proposals_header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:700;font-size:15px;position:relative;margin-left:auto;padding-right:20px}.proposals_header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{position:absolute;content:">";color:#6a983c;right:0;top:50%;transform:translateY(-50%)}.proposals_items[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:40px;margin-bottom:110px;padding:0 33px}.proposals_item[_ngcontent-%COMP%]{width:calc(25% - 32px)}@media screen and (max-width:1280px){.product_description[_ngcontent-%COMP%]{font-size:14px}.product_pricing[_ngcontent-%COMP%]{flex-wrap:wrap}.product_button[_ngcontent-%COMP%]{width:100%;margin-top:20px}.product_button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;text-align:center;width:100%}}@media screen and (max-width:1024px){.product_photos-wrapper[_ngcontent-%COMP%]{min-width:40%;max-width:40%}.product_photos-top[_ngcontent-%COMP%]{height:350px}.product_photos-bottom_item[_ngcontent-%COMP%]{width:calc(50% - 5px);height:160px}.product-tabs[_ngcontent-%COMP%], .product_pricing[_ngcontent-%COMP%]{max-width:100%}.proposals_header[_ngcontent-%COMP%]{padding:0}.proposals_items[_ngcontent-%COMP%]{margin:30px 0;padding:0;min-width:974px}.proposals_scrollable[_ngcontent-%COMP%]{overflow-x:scroll}.proposals_scrollable[_ngcontent-%COMP%]::-webkit-scrollbar{width:0}}@media screen and (max-width:768px){.product_wrapper[_ngcontent-%COMP%]{flex-direction:column}.product_photos-wrapper[_ngcontent-%COMP%]{max-width:100%;max-height:250px;margin-right:0}.product_photos[_ngcontent-%COMP%]{display:flex;flex-direction:row;min-height:200px}.product_photos-top[_ngcontent-%COMP%]{height:auto;max-height:100%;margin-right:10px;min-width:250px}.product_photos-bottom[_ngcontent-%COMP%]{margin-top:0}.product_photos-bottom_item[_ngcontent-%COMP%]{width:calc(50% - 5px);height:100%}.product_county-buttons[_ngcontent-%COMP%]{opacity:1}}@media screen and (max-width:670px){.product_photos-wrapper[_ngcontent-%COMP%]{overflow-x:scroll}.product_photos-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{width:0}.product_photos[_ngcontent-%COMP%]{min-width:640px}}@media screen and (max-width:500px){.product_info[_ngcontent-%COMP%]{flex-direction:column}.product-tabs_description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .product-tabs_review[_ngcontent-%COMP%], .product_info[_ngcontent-%COMP%], .product_pricing[_ngcontent-%COMP%]{margin-top:20px}.product_county[_ngcontent-%COMP%]{margin-left:auto}.product_wishlist[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:0}.proposals[_ngcontent-%COMP%]{margin-top:30px}.proposals_header[_ngcontent-%COMP%]{font-size:12px}.proposals_items[_ngcontent-%COMP%]{margin:20px 0}}']}),t})(),E=(()=>{class t{constructor(t){this.productService=t}resolve(t){return Promise.all([this.productService.getProductById(+t.params.id),this.productService.getProducts()])}}return t.\u0275fac=function(n){return new(n||t)(p.cc(a.a))},t.\u0275prov=p.Pb({token:t,factory:t.\u0275fac}),t})();const S=[{path:"",component:k,resolve:{data:E}}];let F=(()=>{class t{}return t.\u0275mod=p.Rb({type:t}),t.\u0275inj=p.Qb({factory:function(n){return new(n||t)},providers:[E],imports:[[c.f.forChild(S)],c.f]}),t})();var z=o("PCNd");let T=(()=>{class t{}return t.\u0275mod=p.Rb({type:t}),t.\u0275inj=p.Qb({factory:function(n){return new(n||t)},imports:[[e.c,F,z.a]]}),t})()}}]);