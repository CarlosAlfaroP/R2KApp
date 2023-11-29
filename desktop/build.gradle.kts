import org.jetbrains.compose.ExperimentalComposeLibrary
import org.jetbrains.compose.desktop.application.dsl.TargetFormat

plugins {
    kotlin("multiplatform")
    id("org.jetbrains.compose")
}

kotlin {
    jvm {
        jvmToolchain(11)
        withJava()
    }
    sourceSets {
        val jvmMain by getting {
            dependencies {
                implementation(compose.desktop.common)
                implementation(compose.desktop.currentOs)
                implementation(project(":common"))
                implementation("com.bumble.appyx:appyx-navigation-desktop:2.0.0-alpha09")
                implementation("com.bumble.appyx:appyx-interactions-desktop:2.0.0-alpha09")
                api("com.bumble.appyx:backstack-desktop:2.0.0-alpha09")
                api("com.bumble.appyx:spotlight-desktop:2.0.0-alpha09")
                @OptIn(ExperimentalComposeLibrary::class)
                implementation(compose.components.resources)
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.7.3")
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-swing:1.7.3")
                api(compose.material3)
            }
        }
    }
}

compose.desktop {
    application {
        mainClass = "MainKt"
        nativeDistributions {
            targetFormats(TargetFormat.Dmg, TargetFormat.Msi, TargetFormat.Deb, TargetFormat.Rpm)
            packageName = "r2kapp"
            packageVersion = "1.0.0"
            macOS {
                iconFile.set(project.file("src/jvmMain/resources/icon.icns"))
                // macOS specific options
            }
            windows {
                iconFile.set(project.file("src/jvmMain/resources/icon.ico"))
                // Windows specific options
            }
            linux {
                iconFile.set(project.file("src/jvmMain/resources/icon.png"))
                // Linux specific options
            }
        }
    }
}