(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{680:function(t,n,e){var content=e(707);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(34).default)("678c1c30",content,!0,{sourceMap:!1})},706:function(t,n,e){"use strict";e(680)},707:function(t,n,e){var l=e(33)(!1);l.push([t.i,".maz-list-doc .lists-container[data-v-4227191a]{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(1,auto);grid-gap:30px}@media only screen and (max-width:1024px){.maz-list-doc .lists-container[data-v-4227191a]{grid-template-columns:repeat(1,1fr)}}.maz-list-doc .lists-container .scrollable-list[data-v-4227191a]{max-height:250px}",""]),t.exports=l},751:function(t,n,e){"use strict";e.r(n);var l={name:"MazListDoc",data:function(){return{items:[{id:0,title:"Item 1"},{id:1,title:"Item 2"},{id:2,title:"Item 3"},{id:3,title:"Item 4"},{id:4,title:"Item 5"},{id:5,title:"Item 6"},{id:6,title:"Item 7"},{id:7,title:"Item 8"},{id:8,title:"Item 1"}],codeExample:'<template>\n  <div class="lists-container">\n    <div class="list-1">\n      <h4 class="maz-mb-2">\n        Basic list\n      </h4>\n      <p class="maz-text-muted maz-mb-3">\n        Any options\n      </p>\n      <MazList>\n        <MazListItem\n          v-for="(item) in items"\n          :key="list-1-{YOUR-ITEM-ID}"\n        >\n          <p>{{ item.title }}</p>\n          <p class="maz-text-muted">\n            {{ item.id }}\n          </p>\n        </MazListItem>\n      </MazList>\n    </div>\n    <div class="list-2">\n      <h4 class="maz-maz-mb-2">\n        Hover & animate list\n      </h4>\n      <MazBtn\n        size="sm"\n        class="maz-mb-2"\n        @click="reorderItems"\n      >\n        Shuffle items\n      </MazBtn>\n\n      <MazList\n        transition\n      >\n        <MazListItem\n          v-for="(item) in items"\n          :key="list-2-{YOUR-ITEM-ID}"\n          hover\n          tag="button"\n        >\n          <p>{{ item.title }}</p>\n          <p class="maz-text-muted">\n            {{ item.id }}\n          </p>\n        </MazListItem>\n      </MazList>\n    </div>\n    <div class="list-3">\n      <h4 class="maz-mb-2">\n        Scrollable list & no-shadow\n      </h4>\n      <p class="maz-text-muted maz-mb-3">\n        Just set \'max-height\' CSS property to the list\n      </p>\n      <MazList\n        no-shadow\n        class="scrollable-list"\n      >\n        <MazListItem\n          v-for="(item) in items"\n          :key="list-3-{YOUR-ITEM-ID}"\n          tag="button"\n        >\n          <p>{{ item.title }}</p>\n          <p class="text-muted">\n            {{ item.id }}\n          </p>\n        </MazListItem>\n      </MazList>\n    </div>\n  </div>\n</template>\n\nexport default {\n  data () {\n    return {\n      items: [\n        { label: \'first\', value: 0 },\n        { label: \'second\', value: 1 },\n        { label: \'third\', value: 2 },\n        { label: \'fourth\', value: 3 },\n        { label: \'fifth\', value: 4 },\n        { label: \'sixth\', value: 5 }\n      ]\n    }\n  },\n  methods: {\n    reorderItems () {\n      this.items.sort(() => Math.random() - 0.5)\n    }\n  }\n}'}},methods:{reorderItems:function(){this.items.sort((function(){return Math.random()-.5}))}}},m=(e(706),e(1)),component=Object(m.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"maz-list-doc"},[e("ComponentContainer",{attrs:{code:t.codeExample}},[e("div",{staticClass:"lists-container"},[e("div",{staticClass:"list-1"},[e("h4",{staticClass:"maz-mb-2"},[t._v("\n            Basic list\n          ")]),t._v(" "),e("p",{staticClass:"maz-text-muted maz-mb-3"},[t._v("\n            Any options\n          ")]),t._v(" "),e("MazList",t._l(t.items,(function(n){return e("MazListItem",{key:"list-1-"+n.id},[e("p",[t._v(t._s(n.title))]),t._v(" "),e("p",{staticClass:"maz-text-muted"},[t._v("\n                "+t._s(n.id)+"\n              ")])])})),1)],1),t._v(" "),e("div",{staticClass:"maz-list-2"},[e("h4",{staticClass:"maz-mb-2"},[t._v("\n            Hover & animate list\n          ")]),t._v(" "),e("MazBtn",{staticClass:"maz-mb-2",attrs:{size:"sm"},on:{click:t.reorderItems}},[t._v("\n            Shuffle items\n          ")]),t._v(" "),e("MazList",{attrs:{transition:""}},t._l(t.items,(function(n){return e("MazListItem",{key:"list-2-"+n.id,attrs:{hover:"",tag:"button"}},[e("p",[t._v(t._s(n.title))]),t._v(" "),e("p",{staticClass:"maz-text-muted"},[t._v("\n                "+t._s(n.id)+"\n              ")])])})),1)],1),t._v(" "),e("div",{staticClass:"list-3"},[e("h4",{staticClass:"maz-mb-2"},[t._v("\n            Scrollable list & no-shadow & bordered\n          ")]),t._v(" "),e("p",{staticClass:"maz-text-muted maz-mb-3"},[t._v("\n            Just set `max-height` CSS property to the list\n          ")]),t._v(" "),e("MazList",{staticClass:"scrollable-list",attrs:{"no-shadow":"",bordered:""}},t._l(t.items,(function(n){return e("MazListItem",{key:"list-3-"+n.id,attrs:{tag:"button"}},[e("p",[t._v(t._s(n.title))]),t._v(" "),e("p",{staticClass:"maz-text-muted"},[t._v("\n                "+t._s(n.id)+"\n              ")])])})),1)],1)])]),t._v(" "),e("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5",attrs:{id:"howToUseIt"}}),t._v(" "),e("h3",[t._v("\n      How to use it ?\n    ")]),t._v(" "),e("CodeContainer",{attrs:{language:"html",code:"<template>\n  <MazList>\n    <MazListItem>\n      List item content\n    </MazListItem>\n    <MazListItem>\n      List item content\n    </MazListItem>\n    <MazListItem>\n      List item content\n    </MazListItem>\n  </MazList>\n</template>\n\n<script>\n  import { MazList, MazListItem } from 'maz-ui'\n  export default {\n    components: { MazList, MazListItem }\n  }\n<\/script>"}})],1)}),[],!1,null,"4227191a",null);n.default=component.exports}}]);