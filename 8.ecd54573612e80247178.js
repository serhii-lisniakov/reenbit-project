(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Xi5d:function(t,n,o){"use strict";o.r(n),o.d(n,"ProductModule",function(){return L});var e=o("ofXK"),c=o("tyNb"),i=o("XNiG"),r=o("fXoL"),p=o("Gdn9");const s=["*"];let a=(()=>{class t{constructor(){this.active=!1}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-tab"]],inputs:{title:"title",active:"active",count:"count"},ngContentSelectors:s,decls:2,vars:1,consts:[[1,"tab-content",3,"hidden"]],template:function(t,n){1&t&&(r.Wb(),r.Lb(0,"div",0),r.Vb(1),r.Kb()),2&t&&r.Xb("hidden",!n.active)},styles:[".tab-content[_ngcontent-%COMP%]{margin-top:32px;min-height:200px}"]}),t})();function b(t,n){if(1&t&&(r.Lb(0,"span"),r.hc(1),r.Kb()),2&t){const t=r.Ub().$implicit;r.yb(1),r.ic(t.count)}}function d(t,n){if(1&t){const t=r.Mb();r.Lb(0,"li",2),r.Sb("click",function(){r.cc(t);const o=n.$implicit;return r.Ub().selectTab(o)}),r.hc(1),r.fc(2,b,2,1,"span",3),r.Kb()}if(2&t){const t=n.$implicit;r.Ab("active",t.active),r.yb(1),r.jc(" ",t.title," "),r.yb(1),r.Xb("ngIf",t.count)}}const u=["*"];let l=(()=>{class t{constructor(){}ngAfterContentInit(){0===this.tabs.filter(t=>t.active).length&&this.selectTab(this.tabs.first)}selectTab(t){this.tabs.toArray().forEach(t=>t.active=!1),t.active=!0}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-tabs"]],contentQueries:function(t,n,o){if(1&t&&r.Bb(o,a,!1),2&t){let t;r.ac(t=r.Tb())&&(n.tabs=t)}},ngContentSelectors:u,decls:3,vars:1,consts:[[1,"tabs"],[3,"active","click",4,"ngFor","ngForOf"],[3,"click"],[4,"ngIf"]],template:function(t,n){1&t&&(r.Wb(),r.Lb(0,"ul",0),r.fc(1,d,3,4,"li",1),r.Kb(),r.Vb(2)),2&t&&(r.yb(1),r.Xb("ngForOf",n.tabs))},directives:[e.h,e.i],styles:[".tabs[_ngcontent-%COMP%]{display:flex;justify-content:space-between;list-style:none;border-bottom:1px solid #f5f5f5}.tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-bottom:16px;font-weight:600;font-size:18px;cursor:pointer;width:33%}.tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){text-align:center}.tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3){text-align:right}.tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:0 8px;background:#f4f8ec;border-radius:12px;color:#6a983c;font-weight:600;font-size:12px;line-height:18px;margin-left:8px;display:inline-block}.tabs[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{border-bottom:2px solid #151515}"]}),t})(),g=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-proposal-card"]],inputs:{proposal:"proposal"},decls:12,vars:5,consts:[[1,"proposal"],[1,"proposal_image"],["alt","",3,"src"],[1,"proposal_title"],[1,"proposal_description"],[1,"proposal_footer"],[3,"routerLink"]],template:function(t,n){1&t&&(r.Lb(0,"div",0),r.Lb(1,"div",1),r.Jb(2,"img",2),r.Kb(),r.Lb(3,"div",3),r.hc(4),r.Kb(),r.Lb(5,"div",4),r.hc(6),r.Kb(),r.Lb(7,"div",5),r.Lb(8,"span"),r.hc(9),r.Kb(),r.Lb(10,"a",6),r.hc(11,"Buy now"),r.Kb(),r.Kb(),r.Kb()),2&t&&(r.yb(2),r.Yb("src",n.proposal.imgUrl,r.dc),r.yb(2),r.ic(n.proposal.title.charAt(0).toUpperCase()+n.proposal.title.slice(1)),r.yb(2),r.ic(n.proposal.description.small),r.yb(3),r.jc("",n.proposal.price," USD"),r.yb(1),r.Zb("routerLink","/products/",n.proposal.id,""))},directives:[c.b],styles:[".proposal[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.proposal_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:180px;object-fit:cover;border-radius:12px}.proposal_title[_ngcontent-%COMP%]{font-weight:500;font-size:15px;margin-top:16px}.proposal_description[_ngcontent-%COMP%]{color:#575757;font-size:12px;margin-top:5px;padding-bottom:20px}.proposal_footer[_ngcontent-%COMP%]{margin-top:auto;display:flex;justify-content:space-between;align-items:center}.proposal_footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;font-size:18px}.proposal_footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;font-weight:700;font-size:15px;color:#fff;width:90px;height:36px;background:#6a983c;border:2px solid #46760a;border-radius:12px}"]}),t})();function h(t,n){1&t&&r.Jb(0,"img",31),2&t&&r.Xb("src","assets/"+n.$implicit+".svg",r.dc)}function f(t,n){if(1&t&&(r.Lb(0,"div",32),r.Lb(1,"span"),r.hc(2),r.Kb(),r.Lb(3,"span"),r.hc(4),r.Kb(),r.Lb(5,"div"),r.hc(6),r.Kb(),r.Kb()),2&t){const t=n.$implicit;r.yb(2),r.ic(t.author),r.yb(2),r.ic(t.date.substr(0,24)),r.yb(2),r.ic(t.body)}}function _(t,n){if(1&t&&(r.Lb(0,"div",32),r.Lb(1,"span"),r.hc(2),r.Kb(),r.Lb(3,"span"),r.hc(4),r.Kb(),r.Lb(5,"div"),r.hc(6),r.Kb(),r.Kb()),2&t){const t=n.$implicit;r.yb(2),r.ic(t.author),r.yb(2),r.ic(t.date.substr(0,24)),r.yb(2),r.ic(t.body)}}function v(t,n){if(1&t&&(r.Lb(0,"div",3),r.Lb(1,"div",4),r.Lb(2,"div",5),r.Jb(3,"img",6),r.Kb(),r.Lb(4,"div",7),r.Lb(5,"div"),r.Jb(6,"img",6),r.Kb(),r.Lb(7,"div"),r.Jb(8,"img",6),r.Kb(),r.Kb(),r.Kb(),r.Lb(9,"div",8),r.Lb(10,"div",9),r.hc(11),r.Kb(),r.Lb(12,"div",10),r.fc(13,h,1,1,"img",11),r.Lb(14,"span",12),r.hc(15),r.Kb(),r.Kb(),r.Lb(16,"div",13),r.hc(17),r.Kb(),r.Lb(18,"div",14),r.Lb(19,"div",15),r.Lb(20,"div"),r.Lb(21,"span"),r.hc(22,"Country:"),r.Kb(),r.Lb(23,"span"),r.hc(24),r.Kb(),r.Kb(),r.Lb(25,"div"),r.Lb(26,"span"),r.hc(27,"Category:"),r.Kb(),r.Lb(28,"span"),r.hc(29),r.Kb(),r.Kb(),r.Lb(30,"div"),r.Lb(31,"span"),r.hc(32,"Stock:"),r.Kb(),r.Lb(33,"span"),r.hc(34),r.Kb(),r.Kb(),r.Lb(35,"div"),r.Lb(36,"span"),r.hc(37,"Color:"),r.Kb(),r.Lb(38,"span"),r.hc(39),r.Kb(),r.Kb(),r.Kb(),r.Lb(40,"div",15),r.Lb(41,"div"),r.Lb(42,"span"),r.hc(43,"Size:"),r.Kb(),r.Lb(44,"span"),r.hc(45),r.Kb(),r.Kb(),r.Lb(46,"div"),r.Lb(47,"span"),r.hc(48,"Buy by:"),r.Kb(),r.Lb(49,"span"),r.hc(50),r.Kb(),r.Kb(),r.Lb(51,"div"),r.Lb(52,"span"),r.hc(53,"Delivery:"),r.Kb(),r.Lb(54,"span"),r.hc(55),r.Kb(),r.Kb(),r.Lb(56,"div"),r.Lb(57,"span"),r.hc(58,"Delivery area:"),r.Kb(),r.Lb(59,"span"),r.hc(60),r.Kb(),r.Kb(),r.Kb(),r.Kb(),r.Lb(61,"div",16),r.Lb(62,"div",17),r.Lb(63,"div"),r.hc(64),r.Kb(),r.Lb(65,"div"),r.hc(66),r.Kb(),r.Kb(),r.Lb(67,"div",18),r.Jb(68,"input",19),r.Lb(69,"select"),r.Lb(70,"option",20),r.hc(71,"Pcs"),r.Kb(),r.Lb(72,"option",21),r.hc(73,"Box"),r.Kb(),r.Kb(),r.Kb(),r.Lb(74,"div",22),r.Lb(75,"button"),r.Jb(76,"img",23),r.hc(77," Add to cart"),r.Kb(),r.Kb(),r.Kb(),r.Lb(78,"div",24),r.Lb(79,"button"),r.Jb(80,"img",25),r.hc(81," Add to my wish list"),r.Kb(),r.Kb(),r.Lb(82,"div",26),r.Lb(83,"app-tabs"),r.Lb(84,"app-tab",27),r.Lb(85,"div",28),r.Lb(86,"span"),r.hc(87,"Origins"),r.Kb(),r.Lb(88,"div"),r.hc(89),r.Kb(),r.Kb(),r.Lb(90,"div",28),r.Lb(91,"span"),r.hc(92,"How to cook"),r.Kb(),r.Lb(93,"div"),r.hc(94),r.Kb(),r.Kb(),r.Kb(),r.Lb(95,"app-tab",29),r.fc(96,f,7,3,"div",30),r.Kb(),r.Lb(97,"app-tab",29),r.fc(98,_,7,3,"div",30),r.Kb(),r.Kb(),r.Kb(),r.Kb(),r.Kb()),2&t){const t=r.Ub();r.yb(3),r.Xb("src",t.product.imgUrl,r.dc),r.yb(3),r.Xb("src",t.product.imgUrl,r.dc),r.yb(2),r.Xb("src",t.product.imgUrl,r.dc),r.yb(3),r.ic(t.product.title.charAt(0).toUpperCase()+t.product.title.slice(1)),r.yb(2),r.Xb("ngForOf",t.productRating),r.yb(2),r.kc("(",t.product.reviews.length," customer review",t.product.reviews.length>1?"s":"",")"),r.yb(2),r.ic(t.product.description.main),r.yb(7),r.ic(t.product.country),r.yb(5),r.ic(t.product.category.charAt(0).toUpperCase()+t.product.category.slice(1)),r.yb(5),r.ic(t.product.stock>=10?"In Stock":0===t.product.stock?"Ran out":"Less than 10 items"),r.yb(5),r.ic(t.product.color),r.yb(6),r.ic(t.product.sizes),r.yb(5),r.ic(t.product.buyProperties),r.yb(5),r.kc("in ",t.product.deliveryTime," day",t.product.deliveryTime>1?"s":"",""),r.yb(5),r.ic(t.product.deliveryArea.charAt(0).toUpperCase()+t.product.deliveryArea.slice(1)),r.yb(4),r.jc("",t.product.price," USD"),r.yb(2),r.jc("",t.product.previousPrice," USD"),r.yb(18),r.Xb("title","Description"),r.yb(5),r.ic(t.product.description.origins),r.yb(5),r.ic(t.product.description.howToCook),r.yb(1),r.Xb("title","Reviews")("count",t.product.reviews.length),r.yb(1),r.Xb("ngForOf",t.product.reviews),r.yb(1),r.Xb("title","Questions")("count",t.product.reviews.length),r.yb(1),r.Xb("ngForOf",t.product.questions)}}function y(t,n){1&t&&(r.Lb(0,"p",33),r.hc(1,"No Product to show! Go back "),r.Lb(2,"a",34),r.hc(3,"here"),r.Kb(),r.Kb())}function m(t,n){if(1&t&&(r.Lb(0,"div",39),r.Jb(1,"app-proposal-card",40),r.Kb()),2&t){const t=n.$implicit;r.yb(1),r.Xb("proposal",t)}}function x(t,n){if(1&t&&(r.Lb(0,"div",35),r.Lb(1,"div",36),r.Lb(2,"span"),r.hc(3,"You will maybe love"),r.Kb(),r.Lb(4,"a",34),r.hc(5,"More products"),r.Kb(),r.Kb(),r.Lb(6,"div",37),r.fc(7,m,2,1,"div",38),r.Kb(),r.Kb()),2&t){const t=r.Ub();r.yb(7),r.Xb("ngForOf",t.proposals)}}let C=(()=>{class t{constructor(t,n){this.productService=t,this.route=n,this.destroy$=new i.a,this.route.params.pipe().subscribe(t=>{this.product=this.productService.product})}ngOnInit(){this.product=this.productService.product,this.productRating=this.setProductsRating(this.product.rating),this.proposals=this.getRandomProposals()}setProductsRating(t){return Array(5).fill("star").map((n,o)=>o<t?"star-black":"star")}getRandomProposals(){const t=[];for(let o=0;o<4;o++)t.push(this.productService.products[(n=this.productService.products.length,Math.floor(Math.random()*(n-0)+0))]);var n;return t}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return t.\u0275fac=function(n){return new(n||t)(r.Ib(p.a),r.Ib(c.a))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-product"]],decls:4,vars:3,consts:[["class","product_wrapper",4,"ngIf","ngIfElse"],["noProduct",""],["class","proposals",4,"ngIf"],[1,"product_wrapper"],[1,"product_photos"],[1,"product_photos-top"],["alt","",3,"src"],[1,"product_photos-bottom"],[1,"product_content"],[1,"product_title"],[1,"product_rating"],["alt","star",3,"src",4,"ngFor","ngForOf"],[1,"openSans"],[1,"product_description","openSans"],[1,"product_info","openSans"],[1,"product_info-part"],[1,"product_pricing"],[1,"product_price"],[1,"product_county"],["type","number","value","1"],["selected",""],["value",""],[1,"product_button"],["src","assets/plus.svg","alt",""],[1,"product_wishlist"],["src","assets/heart.svg","alt",""],[1,"product-tabs"],[3,"title"],[1,"product-tabs_description"],[3,"title","count"],["class","product-tabs_review",4,"ngFor","ngForOf"],["alt","star",3,"src"],[1,"product-tabs_review"],[1,"product_empty"],["routerLink","/products"],[1,"proposals"],[1,"proposals_header"],[1,"proposals_items"],["class","proposals_item",4,"ngFor","ngForOf"],[1,"proposals_item"],[3,"proposal"]],template:function(t,n){if(1&t&&(r.fc(0,v,99,28,"div",0),r.fc(1,y,4,0,"ng-template",null,1,r.gc),r.fc(3,x,8,1,"div",2)),2&t){const t=r.bc(2);r.Xb("ngIf",n.product)("ngIfElse",t),r.yb(3),r.Xb("ngIf",n.product)}},directives:[e.i,e.h,l,a,c.b,g],styles:['.product_wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.product_photos[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-right:32px;min-width:50%;max-width:50%;margin-top:30px}.product_photos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:12px;object-fit:cover}.product_photos-top[_ngcontent-%COMP%]{width:100%;max-height:415px}.product_photos-bottom[_ngcontent-%COMP%]{margin-top:26px;display:flex;justify-content:space-between}.product_photos-bottom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:calc(50% - 20px);height:218px}.product_content[_ngcontent-%COMP%]{flex-grow:1}.product_title[_ngcontent-%COMP%]{font-weight:600;font-size:32px}.product_rating[_ngcontent-%COMP%]{margin-top:10px}.product_rating[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:3px}.product_rating[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#a9a9a9;font-size:12px;margin-left:10px}.product_description[_ngcontent-%COMP%]{font-size:17px;margin-top:40px}.product_info[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:20px;font-size:14px}.product_info-part[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-top:12px}.product_info-part[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{display:inline-block;min-width:100px;margin-right:10px;color:#a9a9a9}.product_pricing[_ngcontent-%COMP%]{border:1px solid #f5f5f5;padding:16px;border-radius:12px;display:flex;justify-content:space-between;margin-top:40px}.product_price[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{font-weight:600;font-size:26px}.product_price[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{font-weight:600;font-size:12px;color:#a9a9a9}.product_county[_ngcontent-%COMP%]{background:#f9f9f9;border:1px solid #d1d1d1;border-radius:12px;font-size:12px;max-width:120px;display:flex;align-items:center;padding:10px 16px;position:relative;height:48px}.product_county[_ngcontent-%COMP%]:after{position:absolute;content:"";height:75%;width:1px;top:50%;left:40%;transform:translateY(-50%);background:#d1d1d1}.product_county[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .product_county[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:none;border:none;width:50%}.product_county[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{max-width:35%}.product_county[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none}.product_county[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-weight:700;margin-left:10px}.product_button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#6a983c;border:2px solid #46760a;padding:12px 16px;color:#fff;font-weight:700;font-size:15px;border-radius:12px;cursor:pointer;transition:.3s;display:flex;align-items:center}.product_button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:5px}.product_button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#46760a}.product_wishlist[_ngcontent-%COMP%]{margin-top:24px}.product_wishlist[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-weight:700;font-size:15px;border:none;cursor:pointer;padding:12px 15px;transition:.3s;border-radius:12px;background:transparent}.product_wishlist[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#dbdbdb}.product-tabs[_ngcontent-%COMP%]{margin-top:30px}.product-tabs_description[_ngcontent-%COMP%]{font-size:14px}.product-tabs_description[_ngcontent-%COMP%]:last-child{margin-top:30px}.product-tabs_description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-size:15px;font-weight:500;margin-top:32px}.product-tabs_review[_ngcontent-%COMP%]{margin-top:20px}.product-tabs_review[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{font-weight:500;font-size:18px}.product-tabs_review[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){font-size:14px;color:#a9a9a9;margin-left:10px}.product-tabs_review[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:14px;margin-top:20px}.product_empty[_ngcontent-%COMP%]{text-align:center;padding:40px 0;font-size:20px}.product_empty[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:underline}.proposals[_ngcontent-%COMP%]{margin-top:70px}.proposals_header[_ngcontent-%COMP%]{font-weight:600;font-size:18px;display:flex}.proposals_header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:700;font-size:15px;position:relative;margin-left:auto;padding-right:20px}.proposals_header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{position:absolute;content:">";color:#6a983c;right:0;top:50%;transform:translateY(-50%)}.proposals_items[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:40px;margin-bottom:110px}.proposals_item[_ngcontent-%COMP%]{width:calc(25% - 32px)}']}),t})(),O=(()=>{class t{constructor(t){this.productService=t}resolve(t){return new Promise((n,o)=>{Promise.all([this.productService.getProductById(t.params.id)]).catch(t=>{console.log(t)}).then(n,o)})}}return t.\u0275fac=function(n){return new(n||t)(r.Pb(p.a))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac}),t})();const P=[{path:"",component:C,resolve:{data:O}}];let M=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(n){return new(n||t)},providers:[O],imports:[[c.c.forChild(P)],c.c]}),t})(),L=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(n){return new(n||t)},imports:[[e.b,M]]}),t})()}}]);