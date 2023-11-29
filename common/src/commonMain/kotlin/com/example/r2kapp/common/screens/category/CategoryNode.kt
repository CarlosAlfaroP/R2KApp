package com.example.r2kapp.common.screens.category

import androidx.compose.foundation.layout.*
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import com.bumble.appyx.components.backstack.BackStack
import com.bumble.appyx.components.backstack.BackStackModel
import com.bumble.appyx.components.backstack.operation.pop
import com.bumble.appyx.components.backstack.operation.push
import com.bumble.appyx.components.backstack.ui.fader.BackStackFader
import com.bumble.appyx.navigation.composable.AppyxComponent
import com.bumble.appyx.navigation.modality.BuildContext
import com.bumble.appyx.navigation.node.Node
import com.bumble.appyx.navigation.node.ParentNode
import com.bumble.appyx.navigation.node.node
import com.bumble.appyx.utils.multiplatform.Parcelable
import com.bumble.appyx.utils.multiplatform.Parcelize
import com.example.r2kapp.common.screens.category.CategoryNode.NavTarget
import com.example.r2kapp.common.screens.profile.ProfileNode

class CategoryNode(
    buildContext: BuildContext,
    private val backStack: BackStack<NavTarget> = BackStack(
        model = BackStackModel(
            initialTarget = NavTarget.Menu,
            savedStateMap = buildContext.savedStateMap,
        ),
        visualisation = { BackStackFader(it) }
    )
) : ParentNode<NavTarget>(
    appyxComponent = backStack,
    buildContext = buildContext
) {
    sealed class NavTarget : Parcelable {
        @Parcelize
        object Menu : NavTarget()

        @Parcelize
        object Tema1 : NavTarget()

        @Parcelize
        object Tema2 : NavTarget()

    }
    override fun resolve(interactionTarget: NavTarget, buildContext: BuildContext): Node =
        when (interactionTarget) {
            is NavTarget.Tema1 -> node(buildContext) { modifier ->
                Column(
                    modifier = modifier.fillMaxSize(),
                    verticalArrangement = Arrangement.Center,
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text(
                        text = "Tema 1",
                        style = MaterialTheme.typography.headlineSmall
                    )
                    Spacer(modifier = Modifier.size(24.dp))
                    Button(
                        onClick = {
                            backStack.push(NavTarget.Tema2)
                        },
                    ) {
                        Text(
                            text = "Ir a Tema 2",
                            style = MaterialTheme.typography.bodyMedium,
                        )
                    }
                    Spacer(modifier = Modifier.size(24.dp))
                    Button(
                        onClick = {
                            backStack.pop()
                        },
                    ) {
                        Text(
                            text = "Volver",
                            style = MaterialTheme.typography.bodyMedium,
                        )
                    }
                }
            }
            is NavTarget.Tema2 -> node(buildContext) { modifier ->
                Column(
                    modifier = modifier.fillMaxSize(),
                    verticalArrangement = Arrangement.Center,
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text(
                        text = "Tema 2",
                        style = MaterialTheme.typography.headlineSmall
                    )
                    Spacer(modifier = Modifier.size(24.dp))
                    Button(
                        onClick = {
                            backStack.push(NavTarget.Tema1)
                        },
                    ) {
                        Text(
                            text = "Ir a Tema 1",
                            style = MaterialTheme.typography.bodyMedium,
                        )
                    }
                    Spacer(modifier = Modifier.size(24.dp))
                    Button(
                        onClick = {
                            backStack.pop()
                        },
                    ) {
                        Text(
                            text = "Volver",
                            style = MaterialTheme.typography.bodyMedium,
                        )
                    }
                }
            }
            is NavTarget.Menu -> node(buildContext) {modifier ->
                Column (
                    modifier = modifier.fillMaxSize(),
                    verticalArrangement = Arrangement.Center,
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text(
                        text = "Categorías",
                        style = MaterialTheme.typography.headlineSmall,
                        textAlign = TextAlign.Center,
                    )
                    Spacer(Modifier.size(16.dp))
                    Button(
                        onClick = {
                            backStack.push(NavTarget.Tema1)
                        },
                    ) {
                        Text(
                            text = "Ir a Tema 1",
                            style = MaterialTheme.typography.bodyMedium,
                        )
                    }
                    Spacer(Modifier.size(16.dp))
                    Button(
                        onClick = {
                            backStack.push(NavTarget.Tema2)
                        },
                    ) {
                        Text(
                            text = "Ir a Tema 2",
                            style = MaterialTheme.typography.bodyMedium,
                        )
                    }
                }
            }
        }

    @Composable
    override fun View(modifier: Modifier) {
        Box(
            modifier = modifier.fillMaxSize(),
            contentAlignment = Alignment.Center,
        ) {
            AppyxComponent(
                appyxComponent = backStack,
                modifier = Modifier
            )
        }
    }
}