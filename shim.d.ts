#powerShell终端,也可以手动创建
New-Item;shim.d.ts
declare module "*.vue" {
  import { Component } from "vue";
  const component: Component;
  export default component;
}
