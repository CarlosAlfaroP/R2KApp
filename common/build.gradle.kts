import org.jetbrains.compose.ExperimentalComposeLibrary

plugins {
    kotlin("multiplatform")
    id("com.android.library")
    id("org.jetbrains.compose")
    id("kotlin-parcelize")
}

kotlin {
    // Targets
    androidTarget() {
        compilations.all {
            kotlinOptions {
                jvmTarget = "1.8"
            }
        }
    }
    jvm("desktop") {
        jvmToolchain(11)
    }
    js(IR){
        browser()
    }

    //SourceSets
    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(compose.runtime)
                implementation(compose.ui)
                implementation(compose.foundation)
                implementation(compose.material)
                implementation(compose.material3)
                implementation("com.bumble.appyx:appyx-navigation:2.0.0-alpha09")
                implementation("com.bumble.appyx:appyx-interactions:2.0.0-alpha09")
                api("com.bumble.appyx:backstack:2.0.0-alpha09")
                api("com.bumble.appyx:spotlight:2.0.0-alpha09")
                api("com.bumble.appyx:material3:2.0.0-alpha09")
                @OptIn(ExperimentalComposeLibrary::class)
                implementation(compose.components.resources)
            }
        }
        val androidMain by getting {
            dependencies {
                // Android specific deps
            }
        }
        val desktopMain by getting {
            dependencies {
                // Desktop specifc deps
                resources.srcDirs("src/commonMain/resource")
            }
        }

        val jsMain by getting {
            dependencies {
                // JS specific dps
                resources.srcDirs("src/commonMain/resource")
            }
        }
    }
}

android() {
    namespace = "com.example.r2kapp.common"
    compileSdk = 34

    defaultConfig {
        minSdk = 24
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }

    sourceSets {
        named("main"){
            resources.srcDirs("src/commonMain/resource")
        }
    }
}

compose {
    kotlinCompilerPlugin.set("1.5.4")
}
