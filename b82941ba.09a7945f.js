(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(6),i=n(0),c=n(182),o=n(241),s=n(184),p=n(186),d={id:"react",title:"\u269b\ufe0f React"},u={id:"integrations/react",isDocsHomePage:!1,title:"\u269b\ufe0f React",description:"Grid.js has native React wrapper which can be used to create Grid.js instance in a React app. Use gridjs-react",source:"@site/docs/integrations/react.md",permalink:"/docs/integrations/react",editUrl:"https://github.com/grid-js/website/edit/master/docs/integrations/react.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1592149038,sidebar:"sidebar",previous:{title:"pagination",permalink:"/docs/config/pagination"},next:{title:"\ud83d\udc9a Vue",permalink:"/docs/integrations/vue"}},l=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Example",id:"example",children:[]}],b={rightToc:l};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Grid.js has native React wrapper which can be used to create Grid.js instance in a React app. Use ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/grid-js/gridjs-react"}),"gridjs-react"),"\npackage to integrate your React app with Grid.js."),Object(c.b)("h2",{id:"install"},"Install"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save gridjs-react\n")),Object(c.b)("p",null,"Also, make sure you have Grid.js installed already as it's a peer dependency of ",Object(c.b)("inlineCode",{parentName:"p"},"gridjs-react"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save gridjs\n")),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Grid } from 'gridjs-react';\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<Grid\n  data={[\n    ['John', 'john@example.com'],\n    ['Mike', 'mike@gmail.com']\n  ]}\n  columns={['Name', 'Email']}\n  search={true}\n  pagination={{\n    enabled: true,\n    limit: 1,\n  }}\n/>\n")),Object(c.b)("p",null,"Then you can pass all Grid.js configs to the ",Object(c.b)("inlineCode",{parentName:"p"},"Grid")," component. See ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/config"}),"Grid.js Config")," for more details."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)(s.a,{children:"\nfunction MyComponent(props) {\n  const row = () => [faker.name.findName(), faker.internet.email()];\n  const [data, setData] = useState([row()]);\n  const update = () => {\n    setData(data.slice(0).concat([row()]));\n  }\n  \n  return (\n    <div>\n      <button onClick={update.bind(this)} className={\"py-2 mb-4 px-4 border rounded-md text-white bg-blue-600\"}>\n        Add record\n      </button>\n      \n      <Grid\n        data={data}\n        columns={['Name', 'Email']}\n        pagination={{\n          limit: 5,\n        }}\n      />\n    </div>\n  );\n}\n",live:!0,scope:{Grid:o.a,CodeBlock:s.a,useEffect:i.useEffect,useState:i.useState,faker:p},mdxType:"CodeBlock"}))}m.isMDXComponent=!0},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n(185),i=n(37),c=n.n(i),o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function s(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var p=function(e){function t(t){var n=e.call(this,t)||this;return n.wrapper=Object(a.createRef)(),n.instance=null,n.instance=new r.b(t||{}),n}return s(t,e),t.prototype.getInstance=function(){return this.instance},t.prototype.componentDidMount=function(){this.instance.render(this.wrapper.current)},t.prototype.componentDidUpdate=function(){this.instance.updateConfig(this.props).forceRender()},t.prototype.render=function(){return Object(a.createElement)("div",{ref:this.wrapper})},t}(a.Component),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.ref=Object(r.c)(),t}return s(t,e),t.prototype.componentDidMount=function(){c.a.render(this.props.element,this.ref.current)},t.prototype.render=function(){return Object(r.d)(this.props.parent,{ref:this.ref})},t.defaultProps={parent:"div"},t}(r.a);function u(e,t){return Object(r.d)(d,{element:e,parent:t})}}}]);