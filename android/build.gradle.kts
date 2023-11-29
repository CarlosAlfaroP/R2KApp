plugins {
    kotlin("android")
    id("com.android.application")
    id("org.jetbrains.compose")
    id("kotlin-parcelize")
}

android {
    namespace = "com.example.r2kapp"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.example.r2kapp"
        minSdk = 26
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        vectorDrawables {
            useSupportLibrary = true
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }
    kotlinOptions {
        jvmTarget = "1.8"
    }
    buildFeatures {
        compose = true
    }
    composeOptions {
        kotlinCompilerExtensionVersion = "1.5.3"
    }
    packaging {
        resources {
            excludes += "/META-INF/{AL2.0,LGPL2.1}"
        }
    }
}

dependencies {
    implementation(project(":common"))
    implementation(libs.activity.compose)
    implementation(compose.material3)
    implementation(compose.preview)
    testImplementation("org.testng:testng:7.1.0")
    androidTestImplementation("org.testng:testng:7.1.0")
    debugImplementation("androidx.customview:customview:1.2.0-alpha02")
    debugImplementation("androidx.customview:customview-poolingcontainer:1.0.0")
    implementation("androidx.activity:activity:1.8.0")
    //Appyx
    implementation("com.bumble.appyx:appyx-navigation-android:2.0.0-alpha09")
    implementation("com.bumble.appyx:appyx-interactions-android:2.0.0-alpha09")
    api("com.bumble.appyx:backstack-android:2.0.0-alpha09")
    api("com.bumble.appyx:spotlight-android:2.0.0-alpha09")
    api("com.bumble.appyx:mutable-ui-processor:2.0.0-alpha09")

}