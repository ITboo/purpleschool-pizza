import{u as _,a as p,b as n,r as d,g as x,j as s,N as i,c as o,B as v,O as h,d as j}from"./index-C6S23l2d.js";const y="_layout_1tpy7_1",g="_sidebar_1tpy7_6",N="_exitButton_1tpy7_13",z="_menu_1tpy7_21",k="_link_1tpy7_27",f="_active_1tpy7_39",B="_user_1tpy7_43",b="_avatar_1tpy7_47",C="_name_1tpy7_52",E="_email_1tpy7_60",L="_content_1tpy7_69",O="_cartCount_1tpy7_74",t={layout:y,sidebar:g,exitButton:N,menu:z,link:k,active:f,user:B,avatar:b,name:C,email:E,content:L,cartCount:O},A="/purpleschool-pizza/person-img.png",D="/purpleschool-pizza/menu-icon.svg",I="/purpleschool-pizza/cart-icon.svg",M="/purpleschool-pizza/exit-icon.svg";function R(){const l=_(),c=p(),e=n(a=>a.user.profile),r=n(a=>a.cart.items);d.useEffect(()=>{c(x())},[c]);function u(){c(j.logout()),l("/auth/login")}return s.jsxs("div",{className:t.layout,children:[s.jsxs("div",{className:t.sidebar,children:[s.jsxs("div",{className:t.user,children:[s.jsx("img",{className:t.avatar,src:A,alt:"Аватар пользователя"}),s.jsx("div",{className:t.name,children:e==null?void 0:e.name}),s.jsx("div",{className:t.email,children:e==null?void 0:e.email})]}),s.jsxs("div",{className:t.menu,children:[s.jsxs(i,{to:"/",className:({isActive:a})=>o(t.link,{[t.active]:a}),children:[s.jsx("img",{src:D,alt:"Иконка меню"}),"Меню"]}),s.jsxs(i,{to:"./cart",className:({isActive:a})=>o(t.link,{[t.active]:a}),children:[s.jsx("img",{src:I,alt:"Иконка корзины"}),"Корзина"," ",s.jsx("span",{className:t.cartCount,children:r.reduce((a,m)=>a+=m.count,0)})]})]}),s.jsxs(v,{className:t.exitButton,onClick:u,children:[s.jsx("img",{src:M,alt:"Иконка выхода"}),"Выход"]})]}),s.jsx("div",{className:t.content,children:s.jsx(h,{})})]})}export{R as default};
