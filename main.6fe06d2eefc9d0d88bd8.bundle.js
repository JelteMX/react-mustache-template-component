(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1244:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(443);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1267)],module)}.call(this,__webpack_require__(1245)(module))},1267:function(module,exports,__webpack_require__){var map={"./components/TemplateComponent.stories.tsx":1293};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1267},1293:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"allOptions",(function(){return allOptions})),__webpack_require__.d(__webpack_exports__,"basicDiv",(function(){return basicDiv})),__webpack_require__.d(__webpack_exports__,"basicSpan",(function(){return basicSpan})),__webpack_require__.d(__webpack_exports__,"unsanitizedXSS",(function(){return unsanitizedXSS})),__webpack_require__.d(__webpack_exports__,"onClick",(function(){return TemplateComponent_stories_onClick})),__webpack_require__.d(__webpack_exports__,"onDblClick",(function(){return TemplateComponent_stories_onDblClick}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),mustache=__webpack_require__(444),mustache_default=__webpack_require__.n(mustache),purify=__webpack_require__(445),purify_default=__webpack_require__.n(purify),TemplateComponent=function(_a){var template=_a.template,sanitize=_a.sanitize,sanitizeOptions=_a.sanitizeOptions,data=_a.data,className=_a.className,style=_a.style,type=_a.type,onClick=_a.onClick,onDblClick=_a.onDblClick;try{var compiled="string"==typeof template?mustache_default.a.render(template,data):null,shouldSanitize="boolean"==typeof sanitize?sanitize:"true";if(null===compiled)return null;var sanitizer=purify_default()().sanitize,__html=shouldSanitize?void 0!==sanitizeOptions?sanitizer(compiled,sanitizeOptions):sanitizer(compiled):compiled;return type&&"span"===type?react_default.a.createElement("span",{style:style,className:className,dangerouslySetInnerHTML:{__html:__html},onClick:onClick,onDoubleClick:onDblClick}):react_default.a.createElement("div",{style:style,className:className,dangerouslySetInnerHTML:{__html:__html},onClick:onClick,onDoubleClick:onDblClick})}catch(error){return console.error(error),null}},components_TemplateComponent=TemplateComponent;try{TemplateComponent.displayName="TemplateComponent",TemplateComponent.__docgenInfo={description:"",displayName:"TemplateComponent",props:{template:{defaultValue:null,description:"",name:"template",required:!0,type:{name:"string"}},sanitize:{defaultValue:null,description:"",name:"sanitize",required:!1,type:{name:"boolean | undefined"}},sanitizeOptions:{defaultValue:null,description:"",name:"sanitizeOptions",required:!1,type:{name:"Config | undefined"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"object | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:'"div" | "span" | undefined'}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}},onDblClick:{defaultValue:null,description:"",name:"onDblClick",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TemplateComponent.tsx#TemplateComponent"]={docgenInfo:TemplateComponent.__docgenInfo,name:"TemplateComponent",path:"src/components/TemplateComponent.tsx#TemplateComponent"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__(284),addon_knobs_dist=__webpack_require__(87),addSourceDecorator=(__webpack_require__(427).withSource,__webpack_require__(427).addSource),__SOURCE_PREFIX__="/home/runner/work/react-mustache-template-component/react-mustache-template-component/src/components",__STORY__='import * as React from \'react\'\nimport TemplateComponent from \'./TemplateComponent\'\nimport { action } from \'@storybook/addon-actions\';\nimport { withKnobs, text, boolean, object } from \'@storybook/addon-knobs\';\n\nexport default {\n    component: TemplateComponent,\n    title: \'Basics\',\n    decorators: [withKnobs({\n        escapeHTML: false\n    })]\n}\n\nconst templateKnob = (defaultText: string) => text("template", defaultText);\n\nexport const allOptions = () => <TemplateComponent\n    template={templateKnob("This is a simple text, with data: {{test}}")}\n    sanitize={boolean("sanitize", true)}\n    sanitizeOptions={object("sanitizeOptions", {})}\n    className={text("className", "")}\n    data={object("data", { test: "testData" })}\n/>\n\nexport const basicDiv = () => <TemplateComponent template={templateKnob("div text")} />\nexport const basicSpan = () => <TemplateComponent type="span" template={templateKnob("span text")} />\nexport const unsanitizedXSS = () => <TemplateComponent sanitize={boolean("sanitize", false)} template={templateKnob("This should produce an XSS when not properly sanitized! <img src=x onerror=alert(1)//>")} />\nexport const onClick = () => <TemplateComponent template="click me, see Actions tab" onClick={action("onClick")} />\nexport const onDblClick = () => <TemplateComponent template="double click me, see Actions tab" onDblClick={action("onDblClick")} />\n',__ADDS_MAP__={"basics--all-options":{startLoc:{col:26,line:16},endLoc:{col:2,line:22},startBody:{col:26,line:16},endBody:{col:2,line:22}},"basics--basic-div":{startLoc:{col:24,line:24},endLoc:{col:87,line:24},startBody:{col:24,line:24},endBody:{col:87,line:24}},"basics--basic-span":{startLoc:{col:25,line:25},endLoc:{col:101,line:25},startBody:{col:25,line:25},endBody:{col:101,line:25}},"basics--unsanitized-xss":{startLoc:{col:30,line:26},endLoc:{col:209,line:26},startBody:{col:30,line:26},endBody:{col:209,line:26}},"basics--on-click":{startLoc:{col:23,line:27},endLoc:{col:115,line:27},startBody:{col:23,line:27},endBody:{col:115,line:27}},"basics--on-dbl-click":{startLoc:{col:26,line:28},endLoc:{col:131,line:28},startBody:{col:26,line:28},endBody:{col:131,line:28}}},__MAIN_FILE_LOCATION__="/TemplateComponent.stories.tsx",__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},templateKnob=(__webpack_exports__.default={parameters:{storySource:{source:'import * as React from \'react\'\nimport TemplateComponent from \'./TemplateComponent\'\nimport { action } from \'@storybook/addon-actions\';\nimport { withKnobs, text, boolean, object } from \'@storybook/addon-knobs\';\n\nexport default {\n    component: TemplateComponent,\n    title: \'Basics\',\n    decorators: [withKnobs({\n        escapeHTML: false\n    })]\n}\n\nconst templateKnob = (defaultText: string) => text("template", defaultText);\n\nexport const allOptions = () => <TemplateComponent\n    template={templateKnob("This is a simple text, with data: {{test}}")}\n    sanitize={boolean("sanitize", true)}\n    sanitizeOptions={object("sanitizeOptions", {})}\n    className={text("className", "")}\n    data={object("data", { test: "testData" })}\n/>\n\nexport const basicDiv = () => <TemplateComponent template={templateKnob("div text")} />\nexport const basicSpan = () => <TemplateComponent type="span" template={templateKnob("span text")} />\nexport const unsanitizedXSS = () => <TemplateComponent sanitize={boolean("sanitize", false)} template={templateKnob("This should produce an XSS when not properly sanitized! <img src=x onerror=alert(1)//>")} />\nexport const onClick = () => <TemplateComponent template="click me, see Actions tab" onClick={action("onClick")} />\nexport const onDblClick = () => <TemplateComponent template="double click me, see Actions tab" onDblClick={action("onDblClick")} />\n',locationsMap:{"basics--all-options":{startLoc:{col:26,line:16},endLoc:{col:2,line:22},startBody:{col:26,line:16},endBody:{col:2,line:22}},"basics--basic-div":{startLoc:{col:24,line:24},endLoc:{col:87,line:24},startBody:{col:24,line:24},endBody:{col:87,line:24}},"basics--basic-span":{startLoc:{col:25,line:25},endLoc:{col:101,line:25},startBody:{col:25,line:25},endBody:{col:101,line:25}},"basics--unsanitized-xss":{startLoc:{col:30,line:26},endLoc:{col:209,line:26},startBody:{col:30,line:26},endBody:{col:209,line:26}},"basics--on-click":{startLoc:{col:23,line:27},endLoc:{col:115,line:27},startBody:{col:23,line:27},endBody:{col:115,line:27}},"basics--on-dbl-click":{startLoc:{col:26,line:28},endLoc:{col:131,line:28},startBody:{col:26,line:28},endBody:{col:131,line:28}}}}},component:components_TemplateComponent,title:"Basics",decorators:[Object(addon_knobs_dist.withKnobs)({escapeHTML:!1})]},function(defaultText){return Object(addon_knobs_dist.text)("template",defaultText)}),allOptions=addSourceDecorator((function(){return react.createElement(components_TemplateComponent,{template:templateKnob("This is a simple text, with data: {{test}}"),sanitize:Object(addon_knobs_dist.boolean)("sanitize",!0),sanitizeOptions:Object(addon_knobs_dist.object)("sanitizeOptions",{}),className:Object(addon_knobs_dist.text)("className",""),data:Object(addon_knobs_dist.object)("data",{test:"testData"})})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),basicDiv=addSourceDecorator((function(){return react.createElement(components_TemplateComponent,{template:templateKnob("div text")})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),basicSpan=addSourceDecorator((function(){return react.createElement(components_TemplateComponent,{type:"span",template:templateKnob("span text")})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),unsanitizedXSS=addSourceDecorator((function(){return react.createElement(components_TemplateComponent,{sanitize:Object(addon_knobs_dist.boolean)("sanitize",!1),template:templateKnob("This should produce an XSS when not properly sanitized! <img src=x onerror=alert(1)//>")})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),TemplateComponent_stories_onClick=addSourceDecorator((function(){return react.createElement(components_TemplateComponent,{template:"click me, see Actions tab",onClick:Object(dist.action)("onClick")})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),TemplateComponent_stories_onDblClick=addSourceDecorator((function(){return react.createElement(components_TemplateComponent,{template:"double click me, see Actions tab",onDblClick:Object(dist.action)("onDblClick")})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})},446:function(module,exports,__webpack_require__){__webpack_require__(447),__webpack_require__(590),__webpack_require__(591),__webpack_require__(1243),module.exports=__webpack_require__(1244)},509:function(module,exports){}},[[446,1,2]]]);
//# sourceMappingURL=main.6fe06d2eefc9d0d88bd8.bundle.js.map