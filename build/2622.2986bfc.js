"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2622],{72622:(e,t,i)=>{i.r(t),i.d(t,{ISingleWidgetShell:()=>p,SingleWidgetApp:()=>u,SingleWidgetShell:()=>d});var n=i(80476),s=i(75677),g=i(20389),a=i(82930),o=i(81734),r=i(74547),l=i(58646),h=i(28877);const p=new r.Token("@jupyterlite/application:ISingleWidgetShell");class d extends h.Widget{constructor(){super(),this._currentChanged=new l.Signal(this),this.id="main";const e=new h.PanelLayout;this._main=new h.Panel,this._main.id="single-widget-panel",e.addWidget(this._main),this.layout=e}get currentChanged(){return this._currentChanged}get currentWidget(){var e;return null!==(e=this._main.widgets[0])&&void 0!==e?e:null}activateById(e){const t=(0,o.find)(this.widgets("main"),(t=>t.id===e));t&&t.activate()}add(e,t,i){if("main"===t||void 0===t){if(this._main.widgets.length>0)return;this._main.addWidget(e),this._main.update(),this._currentChanged.emit(void 0)}}widgets(e){if("main"===(null!=e?e:"main"))return(0,o.iter)(this._main.widgets);throw new Error(`Invalid area: ${e}`)}}class u extends n.JupyterFrontEnd{constructor(e={shell:new d}){var t,i;if(super({...e,shell:null!==(t=e.shell)&&void 0!==t?t:new d}),this.name="Single Widget Application",this.namespace=this.name,this.status=new g.J(this),this.version=null!==(i=a.PageConfig.getOption("appVersion"))&&void 0!==i?i:"unknown",e.mimeExtensions)for(const t of(0,s.as)(e.mimeExtensions))this.registerPlugin(t)}get paths(){return{urls:{base:a.PageConfig.getOption("baseUrl"),notFound:a.PageConfig.getOption("notFoundUrl"),app:a.PageConfig.getOption("appUrl"),static:a.PageConfig.getOption("staticUrl"),settings:a.PageConfig.getOption("settingsUrl"),themes:a.PageConfig.getOption("themesUrl"),doc:a.PageConfig.getOption("docUrl"),translations:a.PageConfig.getOption("translationsApiUrl"),hubHost:a.PageConfig.getOption("hubHost")||void 0,hubPrefix:a.PageConfig.getOption("hubPrefix")||void 0,hubUser:a.PageConfig.getOption("hubUser")||void 0,hubServerName:a.PageConfig.getOption("hubServerName")||void 0},directories:{appSettings:a.PageConfig.getOption("appSettingsDir"),schemas:a.PageConfig.getOption("schemasDir"),static:a.PageConfig.getOption("staticDir"),templates:a.PageConfig.getOption("templatesDir"),themes:a.PageConfig.getOption("themesDir"),userSettings:a.PageConfig.getOption("userSettingsDir"),serverRoot:a.PageConfig.getOption("serverRoot"),workspaces:a.PageConfig.getOption("workspacesDir")}}}registerPluginModule(e){let t=e.default;Object.prototype.hasOwnProperty.call(e,"__esModule")||(t=e),Array.isArray(t)||(t=[t]),t.forEach((e=>{try{this.registerPlugin(e)}catch(e){console.error(e)}}))}registerPluginModules(e){e.forEach((e=>{this.registerPluginModule(e)}))}}}}]);
//# sourceMappingURL=2622.2986bfc.js.map