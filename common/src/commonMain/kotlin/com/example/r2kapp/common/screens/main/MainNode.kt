package com.example.r2kapp.common.screens.main

import androidx.compose.material.icons.Icons.Filled
import androidx.compose.material.icons.Icons.Outlined
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.outlined.Home
import androidx.compose.material.icons.outlined.Menu
import androidx.compose.material.icons.outlined.Person
import com.bumble.appyx.interactions.core.plugin.Plugin
import com.bumble.appyx.navigation.modality.BuildContext
import com.bumble.appyx.utils.material3.AppyxMaterial3NavNode
import com.bumble.appyx.utils.material3.AppyxNavItem
import com.bumble.appyx.utils.multiplatform.Parcelable
import com.bumble.appyx.utils.multiplatform.Parcelize
import com.example.r2kapp.common.screens.profile.User
import com.example.r2kapp.common.screens.category.CategoryNode
import com.example.r2kapp.common.screens.home.HomeNode
import com.example.r2kapp.common.screens.main.MainNode.MainNavItem
import com.example.r2kapp.common.screens.profile.ProfileNode

private val mainNavItems = MainNavItem.values().toList()

class MainNode(
    buildContext: BuildContext,
    private val user: User,
    onLogout: () -> Unit,
    plugins: List<Plugin> = listOf(),
) : AppyxMaterial3NavNode<MainNavItem>(
    buildContext = buildContext,
    //initialActiveElement=MainNavItem.PROFILE, Si no se especifica va al primer nodo)
    navTargets = mainNavItems,
    navTargetResolver = MainNavItem.resolver(
        user = user,
        onLogout = onLogout
    ),
    plugins = plugins
) {
    @Parcelize
    enum class MainNavItem : Parcelable {
        HOME, CATEGORY, PROFILE;

        companion object {
            fun resolver(
                user: User,
                onLogout: () -> Unit
            ): (MainNavItem) -> AppyxNavItem = { navBarItem ->
                when (navBarItem) {
                    HOME -> AppyxNavItem(
                        text = "Home",
                        unselectedIcon = Outlined.Home,
                        selectedIcon = Filled.Home,
                        //iconModifier = Modifier,
                        node = { HomeNode(it) }
                    )

                    CATEGORY -> AppyxNavItem(
                        text = "Categorias",
                        unselectedIcon = Outlined.Menu,
                        selectedIcon = Filled.Menu,
                        //iconModifier = Modifier,
                        node = { CategoryNode(it) }
                    )

                    PROFILE -> AppyxNavItem(
                        text = "Perfil",
                        unselectedIcon = Outlined.Person,
                        selectedIcon = Filled.Person,
                        //iconModifier = Modifier,
                        node = { ProfileNode(it, user, onLogout) }
                    )
                }
            }
        }
    }
}