import { SpaAngularEditableComponentsModule } from "@adobe/aem-angular-editable-components";
import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import "./components/import-components";
import { ModelManagerService } from "./components/model-manager.service";
import { PageComponent } from "./components/page/page.component";
import { FormsModule } from "@angular/forms";

import { AemAngularCoreWcmComponentsTabsV1 } from "@adobe/aem-core-components-angular-spa/containers/tabs/v1";

import { AemAngularCoreWcmComponentsTitleV2 } from "@adobe/aem-core-components-angular-base/authoring/title/v2";
import { AemAngularCoreWcmComponentsBreadCrumbV2 } from "@adobe/aem-core-components-angular-base/layout/breadcrumb/v2";
import { AemAngularCoreWcmComponentsNavigationV1 } from "@adobe/aem-core-components-angular-base/layout/navigation/v1";
import { AemAngularCoreWcmComponentsButtonV1 } from "@adobe/aem-core-components-angular-base/authoring/button/v1";
import { AemAngularCoreWcmComponentsImageV2 } from "@adobe/aem-core-components-angular-base/authoring/image/v2";

import { AemAngularCoreWcmComponentsDownloadV1 } from "@adobe/aem-core-components-angular-base/authoring/download/v1";

import { AemAngularCoreWcmComponentsListV2 } from "@adobe/aem-core-components-angular-base/authoring/list/v2";
import { AemAngularCoreWcmComponentsSeparatorV1 } from "@adobe/aem-core-components-angular-base/authoring/separator/v1";
import { AemAngularCoreWcmComponentsAccordionV1 } from "@adobe/aem-core-components-angular-spa/containers/accordion/v1";
import { AemAngularCoreWcmComponentsLanguageNavigationV1 } from "@adobe/aem-core-components-angular-base/layout/language-navigation/v1";
import { FormComponent } from "./components/containers/form/form.component";
import { HeaderComponent } from "./components/containers/header/header.component";
import { FooterComponent } from "./components/containers/footer/footer.component";
import { MainContentComponent } from "./components/containers/main-content/main-content.component";
import { TextComponentComponent } from "./components/micro/text-component/text-component.component";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  imports: [
    BrowserModule,
    SpaAngularEditableComponentsModule,
    AppRoutingModule,
    AemAngularCoreWcmComponentsTabsV1,
    AemAngularCoreWcmComponentsTitleV2,
    AemAngularCoreWcmComponentsBreadCrumbV2,
    AemAngularCoreWcmComponentsNavigationV1,
    AemAngularCoreWcmComponentsButtonV1,
    AemAngularCoreWcmComponentsImageV2,
    AemAngularCoreWcmComponentsDownloadV1,
    AemAngularCoreWcmComponentsListV2,
    AemAngularCoreWcmComponentsAccordionV1,
    AemAngularCoreWcmComponentsSeparatorV1,
    AemAngularCoreWcmComponentsLanguageNavigationV1,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ModelManagerService, { provide: APP_BASE_HREF, useValue: "/" }],
  declarations: [
    AppComponent,
    PageComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    TextComponentComponent,
  ],
  entryComponents: [
    PageComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    TextComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
