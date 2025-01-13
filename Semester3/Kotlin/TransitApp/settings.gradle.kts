pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
        maven {
            url = uri("https://api.mapbox.com/downloads/v2/releases/maven")
            authentication {
                create<BasicAuthentication>("basic")
            }
            credentials {
                username = "mapbox"
                password = "sk.eyJ1IjoiY2FsbGllcHJldHR5IiwiYSI6ImNsdWhrcGhzdjA1NGsybHFzOHBlczN3eXYifQ.WLSzq1G8CoMwgEkqjBYfcw"
            }
        }

    }
}

rootProject.name = "TransitApp"
include(":app")
