package com.example.r2kapp.common

import androidx.compose.foundation.layout.Column
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.bumble.appyx.components.backstack.BackStack
import com.bumble.appyx.components.backstack.BackStackModel
import com.bumble.appyx.components.backstack.operation.replace
import com.bumble.appyx.components.backstack.ui.fader.BackStackFader
import com.bumble.appyx.interactions.core.plugin.Plugin
import com.bumble.appyx.navigation.composable.AppyxComponent
import com.bumble.appyx.navigation.modality.BuildContext
import com.bumble.appyx.navigation.node.Node
import com.bumble.appyx.navigation.node.ParentNode
import com.bumble.appyx.utils.multiplatform.Parcelable
import com.bumble.appyx.utils.multiplatform.Parcelize
import com.example.r2kapp.common.RootNode.NavTarget
import com.example.r2kapp.common.screens.loggedout.LoggedOutNode
import com.example.r2kapp.common.screens.main.MainNode
import com.example.r2kapp.common.screens.profile.User

class RootNode(
    buildContext: BuildContext,
    autoLogin: Boolean = false, // TODO: Login class
    private val backStack: BackStack<NavTarget> = BackStack(
        model = BackStackModel(
            initialTargets = listOf(
                when (autoLogin) {
                    true -> NavTarget.Main(user = User.Dummy)
                    false -> NavTarget.LoggedOut
                }
            ),
            savedStateMap = buildContext.savedStateMap,
        ),
        visualisation = { BackStackFader(it) }
    ),
    plugins: List<Plugin> = listOf(),
) : ParentNode<NavTarget>(
    buildContext = buildContext,
    appyxComponent = backStack,
    plugins = plugins
){
    sealed class NavTarget : Parcelable {
        @Parcelize
        data object LoggedOut : NavTarget()
        @Parcelize
        data class Main(
            val user: User
        ) : NavTarget()
    }

    override fun resolve(interactionTarget: NavTarget, buildContext: BuildContext): Node =
        when (interactionTarget) {
            is NavTarget.LoggedOut -> LoggedOutNode(
                buildContext = buildContext,
                onLogin = { user -> onLogin(user) }
            )
            is NavTarget.Main -> MainNode(
                buildContext = buildContext,
                user = interactionTarget.user,
                onLogout = { backStack.replace(NavTarget.LoggedOut) }
            )
        }

    @Composable
    override fun View(modifier: Modifier) {
        Column(
            modifier = modifier
        ) {
            AppyxComponent(
                appyxComponent = backStack,
                modifier = Modifier.weight(0.9f)
            )

        }
    }

    /*** Operation: [A, B, C] + Replace(D) = [A, B, D] */

    private fun onLogin(user: User): RootNode {
        backStack.replace(NavTarget.Main(user))
        return this
    }

}