"use strict";(self.webpackChunkevent_planner=self.webpackChunkevent_planner||[]).push([[76],{323:function(n,e,i){i.d(e,{x:function(){return l}});var t,r=i(7689),d=i(1087),a=i(8820),x=i(168),p=i(7924).ZP.button(t||(t=(0,x.Z)(["\n    cursor: pointer;\n    \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n\n    margin-bottom: 25.5px;\n\n    color: var(--purple);\n    background-color: transparent;\n    border: none;\n\n    font-size: 14px;\n    font-weight: 500;\n    line-height: normal;\n\n    @media screen and (min-width: 1280px) {\n        margin-bottom: 18.5px;\n    }\n"]))),o=i(184),l=function(){var n,e,i=(0,r.TH)();return(0,o.jsx)(d.rU,{to:null!==(n=null===(e=i.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:(0,o.jsxs)(p,{type:"button",children:[(0,o.jsx)(a.kyg,{style:{width:18,height:18}}),"Back"]})})}},6047:function(n,e,i){i.d(e,{$:function(){return Z}});var t,r,d,a,x,p,o,l,s=i(7689),c=i(168),h=i(7924),m=h.ZP.form(t||(t=(0,c.Z)(["\n    display: flex;\n    flex-direction: column;\n\n    width: 272px;\n    margin: 24px auto 136px auto;\n    padding: 40px 16px;\n\n    border-radius: 8px;\n    background: var(--white);\n    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);\n\n    @media screen and (min-width: 768px) {\n        width: 688px;\n        padding: 40px 24px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        width: 1280px;\n        padding: 40px 40px 54px 40px;\n    }\n"]))),u=h.ZP.div(r||(r=(0,c.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n\n    @media screen and (min-width: 768px) {\n        flex-wrap: wrap;\n        column-gap: 25px;\n        max-height: 520px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        max-height: 320px;\n        column-gap: 42px;\n    }\n"]))),g=h.ZP.label(d||(d=(0,c.Z)(["\n    color: var(--purple);\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1; \n    letter-spacing: 0.4px;\n\n    margin-bottom: 8px;\n"]))),f=h.ZP.input(a||(a=(0,c.Z)(["\n    padding: 15px 12px;\n\n    border-radius: 8px;\n    border: 1px solid var(--light-gray);\n    color: var(--dark-gray);\n\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.5; \n\n    @media screen and (min-width: 768px) {\n        width: 308px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        width: 372px;\n    }\n"]))),w=h.ZP.textarea(x||(x=(0,c.Z)(["\n    min-height: 156px;\n    padding: 15px 12px;\n\n    border-radius: 8px;\n    border: 1px solid var(--light-gray);\n    color: var(--dark-gray);\n\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.5; \n\n    @media screen and (min-width: 768px) {\n        width: 308px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        width: 372px;\n    }\n"]))),j=h.ZP.div(p||(p=(0,c.Z)(["\n    display: flex;\n    flex-direction: column;\n"]))),v=h.ZP.div(o||(o=(0,c.Z)(["\n    display: flex;\n    flex-direction: column;\n\n    & label {\n        color: var(--light-gray);\n    } \n"]))),y=h.ZP.button(l||(l=(0,c.Z)(["\n    cursor: pointer;\n\n    padding: 16px 12px;\n\n    border: none;\n    border-radius: 8px;\n    background-color: var(--purple);\n    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);\n    color: var(--white);\n\n    text-align: center;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: normal;\n\n    @media screen and (min-width: 768px) {\n        align-self: flex-end;\n        width: 193px;\n        margin-top: 40px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        margin-top: 60px;\n    }\n"]))),b=i(184),Z=function(){var n=(0,s.TH)(),e=(0,s.s0)();return(0,b.jsxs)(m,{onSubmit:function(i){i.preventDefault(),"/create"===n.pathname&&e("/"),"/edit"===n.pathname&&e("/event")},children:[(0,b.jsxs)(u,{children:[(0,b.jsxs)(j,{children:[(0,b.jsx)(g,{htmlFor:"title",children:"Title"}),(0,b.jsx)(f,{type:"text",id:"title",name:"title",required:!0})]}),(0,b.jsxs)(j,{children:[(0,b.jsx)(g,{htmlFor:"description",children:"Description"}),(0,b.jsx)(w,{type:"text",id:"description",name:"description",required:!0})]}),(0,b.jsxs)(j,{children:[(0,b.jsx)(g,{htmlFor:"date",children:"Select date"}),(0,b.jsx)(f,{type:"date",id:"date",name:"date",required:!0})]}),(0,b.jsxs)(j,{children:[(0,b.jsx)(g,{htmlFor:"time",children:"Select time"}),(0,b.jsx)(f,{type:"time",id:"time",name:"time",required:!0})]}),(0,b.jsxs)(j,{children:[(0,b.jsx)(g,{htmlFor:"location",children:"Location"}),(0,b.jsx)(f,{type:"text",id:"location",name:"location",required:!0})]}),(0,b.jsxs)(v,{children:[(0,b.jsx)(g,{htmlFor:"category",children:"Category"}),(0,b.jsx)(f,{type:"text",id:"category",name:"category",disabled:!0})]}),(0,b.jsxs)(v,{children:[(0,b.jsx)(g,{htmlFor:"image",children:"Add picture"}),(0,b.jsx)(f,{type:"file",id:"image",name:"image",disabled:!0}),(0,b.jsx)("div",{})]}),(0,b.jsxs)(v,{children:[(0,b.jsx)(g,{htmlFor:"priority",children:"Priority"}),(0,b.jsx)(f,{type:"text",id:"priority",name:"priority",disabled:!0})]})]}),(0,b.jsx)(y,{type:"submit",children:"/create"===n.pathname?"Add event":"Save"})]})}},6091:function(n,e,i){i.d(e,{o:function(){return x}});var t,r=i(168),d=i(7924).ZP.main(t||(t=(0,r.Z)(["\n    display: flex;\n    flex-direction: column;\n\n    padding: 40px 24px;\n    margin: 0 auto;\n    max-width: 320px;\n\n    @media screen and (min-width: 768px) {\n        max-width: 768px;\n        padding: 40px;\n    }\n\n    @media screen and (min-width: 1280px) {\n        max-width: 1280px;\n        padding: 60px 0;\n    }\n"]))),a=i(184),x=function(n){var e=n.children;return(0,a.jsx)(d,{children:e})}},9192:function(n,e,i){i.d(e,{V:function(){return x}});var t,r=i(168),d=i(7924).ZP.h2(t||(t=(0,r.Z)(["\n    color: var(--dark-gray);\n    font-size: 24px;\n    font-weight: 600;\n    line-height: normal;\n\n    @media screen and (min-width: 768px) {\n        font-size: 32px;\n    }\n"]))),a=i(184),x=function(n){var e=n.title;return(0,a.jsx)(d,{children:e})}},7076:function(n,e,i){i.r(e);var t=i(6091),r=i(9192),d=i(323),a=i(6047),x=i(184);e.default=function(){return(0,x.jsxs)(t.o,{children:[(0,x.jsx)(d.x,{}),(0,x.jsx)(r.V,{title:"Create new event"}),(0,x.jsx)(a.$,{})]})}}}]);
//# sourceMappingURL=76.5a0af137.chunk.js.map