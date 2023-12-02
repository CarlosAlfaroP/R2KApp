package com.example.r2kapp.common.screens.category

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.ContentAlpha
import androidx.compose.material.LocalContentAlpha
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
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
import com.example.r2kapp.common.screens.category.CategoryNode.NavTarget.*
import com.example.r2kapp.common.screens.profile.ProfileNode
import org.jetbrains.compose.resources.ExperimentalResourceApi
import org.jetbrains.compose.resources.painterResource

class CategoryNode(
    buildContext: BuildContext,
    private val backStack: BackStack<NavTarget> = BackStack(
        model = BackStackModel(
            initialTarget = Menu,
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
        @Parcelize
        data object Tema3 : NavTarget()
        @Parcelize
        data object Tema4 : NavTarget()
        @Parcelize
        data object Tema5 : NavTarget()
        @Parcelize
        data object Tema6 : NavTarget()
        @Parcelize
        data object Tema7 : NavTarget()
    }
    override fun resolve(interactionTarget: NavTarget, buildContext: BuildContext): Node =
        when (interactionTarget) {
            is Menu -> node(buildContext) { modifier -> MenuNode(modifier) }
            is Tema1 -> node(buildContext) { modifier ->
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
                            backStack.push(Tema2)
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
            is Tema2 -> node(buildContext) { modifier ->
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
                            backStack.push(Tema1)
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
            is Tema3 -> node(buildContext) { modifier ->
                Column(
                    modifier = modifier.fillMaxSize(),
                    verticalArrangement = Arrangement.Center,
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text(
                        text = "Tema 3",
                        style = MaterialTheme.typography.headlineSmall
                    )
                    Spacer(modifier = Modifier.size(24.dp))
                    Button(
                        onClick = {
                            backStack.pop()
                        },
                    ) {
                        Text(
                            text = "Atrás",
                            style = MaterialTheme.typography.bodyMedium,
                        )
                    }
                }
            }
            is Tema4 -> node(buildContext) { modifier ->
                Column(
                    modifier = modifier.fillMaxSize(),
                    verticalArrangement = Arrangement.Center,
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text(
                        text = "Tema 4",
                        style = MaterialTheme.typography.headlineSmall
                    )
                    Spacer(modifier = Modifier.size(24.dp))
                    Button(
                        onClick = {
                            backStack.pop()
                        },
                    ) {
                        Text(
                            text = "Atrás",
                            style = MaterialTheme.typography.bodyMedium,
                        )
                    }
                }
            }
            is Tema5 -> node(buildContext) { modifier ->
                Column(
                    modifier = modifier.fillMaxSize(),
                    verticalArrangement = Arrangement.Center,
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text(
                        text = "Tema 5",
                        style = MaterialTheme.typography.headlineSmall
                    )
                    Spacer(modifier = Modifier.size(24.dp))
                    Button(
                        onClick = {
                            backStack.pop()
                        },
                    ) {
                        Text(
                            text = "Atrás",
                            style = MaterialTheme.typography.bodyMedium,
                        )
                    }
                }
            }
            is Tema6 -> node(buildContext) { modifier ->
                Column(
                    modifier = modifier.fillMaxSize(),
                    verticalArrangement = Arrangement.Center,
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text(
                        text = "Tema 6",
                        style = MaterialTheme.typography.headlineSmall
                    )
                    Spacer(modifier = Modifier.size(24.dp))
                    Button(
                        onClick = {
                            backStack.pop()
                        },
                    ) {
                        Text(
                            text = "Atrás",
                            style = MaterialTheme.typography.bodyMedium,
                        )
                    }
                }
            }
            is Tema7 -> node(buildContext) { modifier ->
                Column(
                    modifier = modifier.fillMaxSize(),
                    verticalArrangement = Arrangement.Center,
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text(
                        text = "Tema 7",
                        style = MaterialTheme.typography.headlineSmall
                    )
                    Spacer(modifier = Modifier.size(24.dp))
                    Button(
                        onClick = {
                            backStack.pop()
                        },
                    ) {
                        Text(
                            text = "Atrás",
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

    @OptIn(ExperimentalResourceApi::class)
    @Composable
    private fun MenuNode(modifier: Modifier = Modifier) {
        val shape = MaterialTheme.shapes.medium
        Column(
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
            LazyColumn(
                modifier = Modifier
                    .widthIn(0.dp, 384.dp),
                verticalArrangement = Arrangement.spacedBy(12.dp),
            ) {
                //1
                item {
                    Card(
                        modifier = modifier,
                        shape = shape
                    ) {
                        Column {
                            Row(
                                Modifier
                                    .fillMaxWidth()
                                    .height(72.dp)
                                    .padding(start = 16.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                // Miniatura
                                Box(
                                    modifier = Modifier
                                        .background(color = MaterialTheme.colorScheme.background, shape = CircleShape)
                                        .size(40.dp),
                                    contentAlignment = Alignment.Center
                                ) {
                                    Image(
                                        painterResource("icon.png"),
                                        contentDescription = null
                                    )
                                }
                                Spacer(modifier = Modifier.width(32.dp))
                                Column(Modifier.fillMaxWidth()) {
                                    // Encabezado
                                    Text(text = "Título", style = MaterialTheme.typography.displaySmall)
                                    // Subtítulo
                                    CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                        Text(text = "Texto secundario", style = MaterialTheme.typography.bodyMedium)
                                    }
                                }
                            }
                            // Multimedia
                            Image(
                                painterResource("banner.png"),
                                contentDescription = "Multimedia 1",
                                Modifier
                                    .background(color = MaterialTheme.colorScheme.background)
                                    .fillMaxWidth()
                                    .height(194.dp)
                            )

                            Row(Modifier.padding(start = 16.dp, end = 24.dp, top = 16.dp)) {

                                // Texto de ayuda
                                CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                    Text(
                                        text = "Texto de Composition",
                                        maxLines = 2,
                                        overflow = TextOverflow.Ellipsis,
                                        style = MaterialTheme.typography.bodyLarge,
                                    )
                                }
                            }
                            Spacer(modifier = Modifier.height(24.dp))
                            CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                Box(
                                    Modifier
                                        .padding(horizontal = 8.dp)
                                        .fillMaxWidth()
                                ) {
                                    //Botones
                                    Row(modifier = Modifier.align(Alignment.CenterStart)) {
                                        TextButton(
                                            onClick = { backStack.push(Tema1) }
                                        ) {
                                            Text(text = "Ir al Tema 1")
                                        }
                                        Spacer(modifier = Modifier.width(8.dp))
                                    }
                                }
                            }
                        }
                    }
                }
                //2
                item {
                    Card(
                        modifier = modifier,
                        shape = shape
                    ) {
                        Column {
                            Row(
                                Modifier
                                    .fillMaxWidth()
                                    .height(72.dp)
                                    .padding(start = 16.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                // Miniatura
                                Box(
                                    modifier = Modifier
                                        .background(color = MaterialTheme.colorScheme.background, shape = CircleShape)
                                        .size(40.dp),
                                    contentAlignment = Alignment.Center
                                ) {
                                    Image(
                                        painterResource("icon.png"),
                                        contentDescription = null
                                    )
                                }
                                Spacer(modifier = Modifier.width(32.dp))
                                Column(Modifier.fillMaxWidth()) {
                                    // Encabezado
                                    Text(text = "Título 2", style = MaterialTheme.typography.displaySmall)
                                    // Subtítulo
                                    CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                        Text(text = "Texto 2 secundario", style = MaterialTheme.typography.bodyMedium)
                                    }
                                }
                            }
                            // Multimedia
                            Image(
                                painterResource("banner.png"),
                                contentDescription = "Multimedia 2",
                                Modifier
                                    .background(color = MaterialTheme.colorScheme.background)
                                    .fillMaxWidth()
                                    .height(194.dp)
                            )

                            Row(Modifier.padding(start = 16.dp, end = 24.dp, top = 16.dp)) {

                                // Texto de ayuda
                                CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                    Text(
                                        text = "Texto de Composition 2",
                                        maxLines = 2,
                                        overflow = TextOverflow.Ellipsis,
                                        style = MaterialTheme.typography.bodyLarge,
                                    )
                                }
                            }
                            Spacer(modifier = Modifier.height(24.dp))
                            CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                Box(
                                    Modifier
                                        .padding(horizontal = 8.dp)
                                        .fillMaxWidth()
                                ) {
                                    //Botones
                                    Row(modifier = Modifier.align(Alignment.CenterStart)) {
                                        TextButton(onClick = { backStack.push(Tema2) }) {
                                            Text(text = "Ir al tema 2")
                                        }
                                        Spacer(modifier = Modifier.width(8.dp))
                                    }
                                }
                            }
                        }
                    }
                }
                //3
                item {
                    Card(
                        modifier = modifier,
                        shape = shape
                    ) {
                        Column {
                            Row(
                                Modifier
                                    .fillMaxWidth()
                                    .height(72.dp)
                                    .padding(start = 16.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                // Miniatura
                                Box(
                                    modifier = Modifier
                                        .background(color = MaterialTheme.colorScheme.background, shape = CircleShape)
                                        .size(40.dp),
                                    contentAlignment = Alignment.Center
                                ) {
                                    Image(
                                        painterResource("icon.png"),
                                        contentDescription = null
                                    )
                                }
                                Spacer(modifier = Modifier.width(32.dp))
                                Column(Modifier.fillMaxWidth()) {
                                    // Encabezado
                                    Text(text = "Título 3", style = MaterialTheme.typography.displaySmall)
                                    // Subtítulo
                                    CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                        Text(text = "Texto 3 secundario", style = MaterialTheme.typography.bodyMedium)
                                    }
                                }
                            }
                            // Multimedia
                            Image(
                                painterResource("banner.png"),
                                contentDescription = "Multimedia 2",
                                Modifier
                                    .background(color = MaterialTheme.colorScheme.background)
                                    .fillMaxWidth()
                                    .height(194.dp)
                            )

                            Row(Modifier.padding(start = 16.dp, end = 24.dp, top = 16.dp)) {

                                // Texto de ayuda
                                CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                    Text(
                                        text = "Texto de Composition 3",
                                        maxLines = 2,
                                        overflow = TextOverflow.Ellipsis,
                                        style = MaterialTheme.typography.bodyLarge,
                                    )
                                }
                            }
                            Spacer(modifier = Modifier.height(24.dp))
                            CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                Box(
                                    Modifier
                                        .padding(horizontal = 8.dp)
                                        .fillMaxWidth()
                                ) {
                                    //Botones
                                    Row(modifier = Modifier.align(Alignment.CenterStart)) {
                                        TextButton(onClick = { backStack.push(Tema3) }) {
                                            Text(text = "Ir a Tema 3")
                                        }
                                        Spacer(modifier = Modifier.width(8.dp))
                                    }
                                }
                            }
                        }
                    }
                }
                //4
                item {
                    Card(
                        modifier = modifier,
                        shape = shape
                    ) {
                        Column {
                            Row(
                                Modifier
                                    .fillMaxWidth()
                                    .height(72.dp)
                                    .padding(start = 16.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                // Miniatura
                                Box(
                                    modifier = Modifier
                                        .background(color = MaterialTheme.colorScheme.background, shape = CircleShape)
                                        .size(40.dp),
                                    contentAlignment = Alignment.Center
                                ) {
                                    Image(
                                        painterResource("icon.png"),
                                        contentDescription = null
                                    )
                                }
                                Spacer(modifier = Modifier.width(32.dp))
                                Column(Modifier.fillMaxWidth()) {
                                    // Encabezado
                                    Text(text = "Título 4", style = MaterialTheme.typography.displaySmall)
                                    // Subtítulo
                                    CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                        Text(text = "Texto 4 secundario", style = MaterialTheme.typography.bodyMedium)
                                    }
                                }
                            }
                            // Multimedia
                            Image(
                                painterResource("banner.png"),
                                contentDescription = "Multimedia 4",
                                Modifier
                                    .background(color = MaterialTheme.colorScheme.background)
                                    .fillMaxWidth()
                                    .height(194.dp)
                            )

                            Row(Modifier.padding(start = 16.dp, end = 24.dp, top = 16.dp)) {

                                // Texto de ayuda
                                CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                    Text(
                                        text = "Texto de Composition 2",
                                        maxLines = 2,
                                        overflow = TextOverflow.Ellipsis,
                                        style = MaterialTheme.typography.bodyLarge,
                                    )
                                }
                            }
                            Spacer(modifier = Modifier.height(24.dp))
                            CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                Box(
                                    Modifier
                                        .padding(horizontal = 8.dp)
                                        .fillMaxWidth()
                                ) {
                                    //Botones
                                    Row(modifier = Modifier.align(Alignment.CenterStart)) {
                                        TextButton(onClick = { backStack.push(Tema4) }) {
                                            Text(text = "Ir a Tema 4")
                                        }
                                        Spacer(modifier = Modifier.width(8.dp))
                                    }
                                }
                            }
                        }
                    }
                }
                //5
                item {
                    Card(
                        modifier = modifier,
                        shape = shape
                    ) {
                        Column {
                            Row(
                                Modifier
                                    .fillMaxWidth()
                                    .height(72.dp)
                                    .padding(start = 16.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                // Miniatura
                                Box(
                                    modifier = Modifier
                                        .background(color = MaterialTheme.colorScheme.background, shape = CircleShape)
                                        .size(40.dp),
                                    contentAlignment = Alignment.Center
                                ) {
                                    Image(
                                        painterResource("icon.png"),
                                        contentDescription = null
                                    )
                                }
                                Spacer(modifier = Modifier.width(32.dp))
                                Column(Modifier.fillMaxWidth()) {
                                    // Encabezado
                                    Text(text = "Título 5", style = MaterialTheme.typography.displaySmall)
                                    // Subtítulo
                                    CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                        Text(text = "Texto 5 secundario", style = MaterialTheme.typography.bodyMedium)
                                    }
                                }
                            }
                            // Multimedia
                            Image(
                                painterResource("banner.png"),
                                contentDescription = "Multimedia 5",
                                Modifier
                                    .background(color = MaterialTheme.colorScheme.background)
                                    .fillMaxWidth()
                                    .height(194.dp)
                            )

                            Row(Modifier.padding(start = 16.dp, end = 24.dp, top = 16.dp)) {

                                // Texto de ayuda
                                CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                    Text(
                                        text = "Texto de Composition 2",
                                        maxLines = 2,
                                        overflow = TextOverflow.Ellipsis,
                                        style = MaterialTheme.typography.bodyLarge,
                                    )
                                }
                            }
                            Spacer(modifier = Modifier.height(24.dp))
                            CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                Box(
                                    Modifier
                                        .padding(horizontal = 8.dp)
                                        .fillMaxWidth()
                                ) {
                                    //Botones
                                    Row(modifier = Modifier.align(Alignment.CenterStart)) {
                                        TextButton(onClick = { backStack.push(Tema5) }) {
                                            Text(text = "Ir a Tema 5")
                                        }
                                        Spacer(modifier = Modifier.width(8.dp))
                                    }
                                }
                            }
                        }
                    }
                }
                //6
                item {
                    Card(
                        modifier = modifier,
                        shape = shape
                    ) {
                        Column {
                            Row(
                                Modifier
                                    .fillMaxWidth()
                                    .height(72.dp)
                                    .padding(start = 16.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                // Miniatura
                                Box(
                                    modifier = Modifier
                                        .background(color = MaterialTheme.colorScheme.background, shape = CircleShape)
                                        .size(40.dp),
                                    contentAlignment = Alignment.Center
                                ) {
                                    Image(
                                        painterResource("icon.png"),
                                        contentDescription = null
                                    )
                                }
                                Spacer(modifier = Modifier.width(32.dp))
                                Column(Modifier.fillMaxWidth()) {
                                    // Encabezado
                                    Text(text = "Título 6", style = MaterialTheme.typography.displaySmall)
                                    // Subtítulo
                                    CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                        Text(text = "Texto 6 secundario", style = MaterialTheme.typography.bodyMedium)
                                    }
                                }
                            }
                            // Multimedia
                            Image(
                                painterResource("banner.png"),
                                contentDescription = "Multimedia 6",
                                Modifier
                                    .background(color = MaterialTheme.colorScheme.background)
                                    .fillMaxWidth()
                                    .height(194.dp)
                            )

                            Row(Modifier.padding(start = 16.dp, end = 24.dp, top = 16.dp)) {

                                // Texto de ayuda
                                CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                    Text(
                                        text = "Texto de Composition 2",
                                        maxLines = 2,
                                        overflow = TextOverflow.Ellipsis,
                                        style = MaterialTheme.typography.bodyLarge,
                                    )
                                }
                            }
                            Spacer(modifier = Modifier.height(24.dp))
                            CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                Box(
                                    Modifier
                                        .padding(horizontal = 8.dp)
                                        .fillMaxWidth()
                                ) {
                                    //Botones
                                    Row(modifier = Modifier.align(Alignment.CenterStart)) {
                                        TextButton(onClick = { backStack.push(Tema6) }) {
                                            Text(text = "Ir a Tema 6")
                                        }
                                        Spacer(modifier = Modifier.width(8.dp))
                                    }
                                }
                            }
                        }
                    }
                }
                //7
                item {
                    Card(
                        modifier = modifier,
                        shape = shape
                    ) {
                        Column {
                            Row(
                                Modifier
                                    .fillMaxWidth()
                                    .height(72.dp)
                                    .padding(start = 16.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                // Miniatura
                                Box(
                                    modifier = Modifier
                                        .background(color = MaterialTheme.colorScheme.background, shape = CircleShape)
                                        .size(40.dp),
                                    contentAlignment = Alignment.Center
                                ) {
                                    Image(
                                        painterResource("icon.png"),
                                        contentDescription = null
                                    )
                                }
                                Spacer(modifier = Modifier.width(32.dp))
                                Column(Modifier.fillMaxWidth()) {
                                    // Encabezado
                                    Text(text = "Título 7", style = MaterialTheme.typography.displaySmall)
                                    // Subtítulo
                                    CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                        Text(text = "Texto 7 secundario", style = MaterialTheme.typography.bodyMedium)
                                    }
                                }
                            }
                            // Multimedia
                            Image(
                                painterResource("banner.png"),
                                contentDescription = "Multimedia 7",
                                Modifier
                                    .background(color = MaterialTheme.colorScheme.background)
                                    .fillMaxWidth()
                                    .height(194.dp)
                            )

                            Row(Modifier.padding(start = 16.dp, end = 24.dp, top = 16.dp)) {

                                // Texto de ayuda
                                CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                    Text(
                                        text = "Texto de Composition 7",
                                        maxLines = 2,
                                        overflow = TextOverflow.Ellipsis,
                                        style = MaterialTheme.typography.bodyLarge,
                                    )
                                }
                            }
                            Spacer(modifier = Modifier.height(24.dp))
                            CompositionLocalProvider(LocalContentAlpha provides ContentAlpha.medium) {
                                Box(
                                    Modifier
                                        .padding(horizontal = 8.dp)
                                        .fillMaxWidth()
                                ) {
                                    //Botones
                                    Row(modifier = Modifier.align(Alignment.CenterStart)) {
                                        TextButton(onClick = { backStack.push(Tema7) }) {
                                            Text(text = "Ir a Tema 7")
                                        }
                                        Spacer(modifier = Modifier.width(8.dp))

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}