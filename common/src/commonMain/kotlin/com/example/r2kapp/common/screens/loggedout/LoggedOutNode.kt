package com.example.r2kapp.common.screens.loggedout

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.bumble.appyx.components.backstack.BackStack
import com.bumble.appyx.components.backstack.BackStackModel
import com.bumble.appyx.components.backstack.operation.push
import com.bumble.appyx.components.backstack.ui.parallax.BackStackParallax
import com.bumble.appyx.navigation.composable.AppyxComponent
import com.bumble.appyx.navigation.modality.BuildContext
import com.bumble.appyx.navigation.node.Node
import com.bumble.appyx.navigation.node.ParentNode
import com.bumble.appyx.navigation.node.node
import com.bumble.appyx.utils.multiplatform.Parcelable
import com.bumble.appyx.utils.multiplatform.Parcelize
import com.example.r2kapp.common.screens.loggedout.LoggedOutNode.NavTarget
import com.example.r2kapp.common.screens.profile.User

class LoggedOutNode(
    buildContext: BuildContext,
    private val onLogin: (User) -> Unit,
    private val backStack: BackStack<NavTarget> = BackStack(
        model = BackStackModel(
            initialTargets = listOf(NavTarget.Splash),
            savedStateMap = buildContext.savedStateMap,
        ),
        visualisation = { BackStackParallax(it) },
        gestureFactory = { BackStackParallax.Gestures(it) }
    )
) : ParentNode<NavTarget>(
    buildContext = buildContext,
    appyxComponent = backStack
) {
    sealed class NavTarget : Parcelable {
        @Parcelize
        object Splash : NavTarget()

        @Parcelize
        object Login : NavTarget()
    }

    override fun resolve(navTarget: NavTarget, buildContext: BuildContext): Node =
        when (navTarget) {
            is NavTarget.Splash -> node(buildContext) { modifier ->
                SplashScreen(modifier)
            }

            NavTarget.Login -> node(buildContext) { modifier ->
                LoginScreen(modifier)
            }
        }

    @Composable
    override fun View(modifier: Modifier) {
        AppyxComponent(
            appyxComponent = backStack,
            modifier = Modifier
        )
    }

    @Composable
    private fun SplashScreen(modifier: Modifier = Modifier) {
        Surface {
            Column(
                modifier = modifier.fillMaxSize(),
                verticalArrangement = Arrangement.Center,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text(
                    text = "Bienvenido!",
                    style = MaterialTheme.typography.headlineLarge
                )
                Spacer(modifier = Modifier.size(24.dp))
                Button(
                    onClick = {
                        backStack.push(NavTarget.Login)
                    }
                ) {
                    Text(
                        text = "Log in",
                        style = MaterialTheme.typography.bodyMedium,
                    )
                }
            }
        }
    }

    @Composable
    private fun LoginScreen(modifier: Modifier = Modifier) {
        Surface {
            Column(
                modifier = modifier.fillMaxSize(),
                verticalArrangement = Arrangement.Center,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                var name by remember { mutableStateOf("Invitado") }

                Text(
                    text = "Login",
                    style = MaterialTheme.typography.headlineSmall
                )
                Spacer(modifier = Modifier.size(24.dp))
                TextField(
                    value = name,
                    onValueChange = { name = it },
                    label = { Text("Nombre") }
                )
                Spacer(modifier = Modifier.size(24.dp))
                Button(
                    onClick = {
                        onLogin(
                            User(name = name)
                        )
                    }
                ) {
                    Text(
                        text = "Entrar",
                    )
                }
            }
        }
    }
}