import{j as e}from"./jsx-runtime-0741ab7f.js";function d({tokens:r,hasRamValue:s=!1}){return e.jsxs("table",{className:"tokens-grid",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Nome"}),e.jsx("th",{children:"Value"}),s&&e.jsx("th",{children:"Pixels"})]})}),e.jsx("tbody",{children:Object.entries(r).map(([t,n])=>e.jsxs("tr",{children:[e.jsx("td",{children:t}),e.jsx("td",{children:n}),s&&e.jsxs("td",{children:[Number(n.replace("rem",""))*16,"px"]})]},t))})]})}try{d.displayName="TokensGrid",d.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRamValue:{defaultValue:{value:"false"},description:"",name:"hasRamValue",required:!1,type:{name:"boolean"}}}}}catch{}export{d as T};
//# sourceMappingURL=TokensGrid-c2f31c9f.js.map
