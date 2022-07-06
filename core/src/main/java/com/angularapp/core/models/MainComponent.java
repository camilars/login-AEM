/*
 * ***********************************************************************
 * Angular App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Angular App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Angular App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Angular App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Angular App.
 * ***********************************************************************
 */

package com.angularapp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code MainComponent} Sling Model used for the {@code angularapp/components/main-component} component.
 * 
 */
@ConsumerType
public interface MainComponent
    extends ComponentExporter
{


    @JsonProperty("title1")
    String getTitle1();

    @JsonProperty("text1")
    String getText1();

    @JsonProperty("title2")
    String getTitle2();

    @JsonProperty("text2")
    String getText2();

    @JsonProperty("title3")
    String getTitle3();

    @JsonProperty("text3")
    String getText3();

    @JsonProperty("title4")
    String getTitle4();

    @JsonProperty("text4")
    String getText4();

}
