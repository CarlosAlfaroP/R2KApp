package com.example.r2kapp.common.screens.loggedout

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.bumble.appyx.components.backstack.BackStack
import com.bumble.appyx.components.backstack.BackStackModel
import com.bumble.appyx.components.backstack.operation.pop
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
import kotlinx.coroutines.delay
import org.jetbrains.compose.resources.ExperimentalResourceApi
import org.jetbrains.compose.resources.painterResource

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
        data object Splash : NavTarget()

        @Parcelize
        data object Login : NavTarget()

        @Parcelize
        data object About : NavTarget()
    }

    override fun resolve(interactionTarget: NavTarget, buildContext: BuildContext): Node =
        when (interactionTarget) {
            is NavTarget.Splash -> node(buildContext) { modifier ->
                SplashScreen(modifier)
            }

            NavTarget.Login -> node(buildContext) { modifier ->
                LoginScreen(modifier)
            }

            NavTarget.About -> node(buildContext) { modifier ->
                AboutScreen(modifier)
            }
        }

    @Composable
    override fun View(modifier: Modifier) {
        AppyxComponent(
            appyxComponent = backStack,
            modifier = Modifier
        )
    }

    @OptIn(ExperimentalResourceApi::class)
    @Composable
    private fun SplashScreen(modifier: Modifier = Modifier) {
        var isVisible by remember { mutableStateOf(true) }

        LaunchedEffect(isVisible){
            delay(2000L) // 3seg.
            isVisible = !isVisible
        }

        Surface {
            Column(
                modifier = modifier.fillMaxSize(),
                verticalArrangement = Arrangement.Center,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                AnimatedVisibility(
                    visible = isVisible,
                    enter = fadeIn(animationSpec = tween(durationMillis = 3_000)),
                    exit = fadeOut(animationSpec = tween(durationMillis = 3_000)),
                ) {
                    Image(
                        painterResource("icon.png"),
                        contentDescription = "R2K App",
                        Modifier
                            .background(color = MaterialTheme.colorScheme.background)
                            .align(Alignment.CenterHorizontally)
                            .height(195.dp)
                    )
                }
                Spacer(modifier = Modifier.size(24.dp))
                Text(
                    text = "Bienvenid@ a R2K!",
                    style = MaterialTheme.typography.headlineLarge
                )
                Spacer(modifier = Modifier.size(24.dp))
                Row {
                    Button(
                        onClick = {
                            backStack.push(NavTarget.About)
                        }
                    ) {
                        Text(
                            text = "Acerca de R2K",
                            style = MaterialTheme.typography.bodyMedium,
                        )
                    }
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
                Row {
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
                    Spacer(modifier = Modifier.size(24.dp))
                    Button(
                        onClick = {
                            backStack.pop()
                        }
                    ) {
                        Text(
                            text = "Volver",
                        )
                    }
                }
            }
        }
    }

    @OptIn(ExperimentalMaterial3Api::class, ExperimentalResourceApi::class)
    @Composable
    private fun AboutScreen(modifier: Modifier = Modifier){
        Scaffold(
            topBar = {
                TopAppBar(
                    title = {
                        Text(
                            text = "Acerca de la aplicación",
                            modifier = Modifier.fillMaxWidth(),
                            //textAlign = TextAlign.Center,
                            style = MaterialTheme.typography.labelSmall
                        )
                    }
                )
            },
            content = {
                Column(
                    modifier = Modifier
                        .fillMaxSize()
                        .padding(100.dp)
                        .verticalScroll(rememberScrollState()),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Image(
                        painterResource("icon.png"),
                        contentDescription = "R2K App",
                        Modifier
                            .background(color = MaterialTheme.colorScheme.background)
                            .align(Alignment.CenterHorizontally)
                            .height(195.dp)
                    )
                    Text(
                        text = "Bienvenido a Right2Know",
                        style = MaterialTheme.typography.titleLarge,
                        modifier = Modifier.padding(bottom = 16.dp)
                    )

                    Text(
                        text = "Right2Know es una plataforma educativa creada por un apasionado grupo de estudiantes de ingeniería informática en UNIACC. Nuestra aplicación ha sido diseñada para revolucionar la experiencia de desarrollo, aprovechándolo para la creación de una plataforma educativa, brindando herramientas y recursos innovadores a estudiantes y tutores por igual.",
                        style = MaterialTheme.typography.bodyMedium,
                        modifier = Modifier.padding(bottom = 32.dp)
                    )

                    Text(
                        text = "Nuestra Misión",
                        style = MaterialTheme.typography.titleSmall,
                        modifier = Modifier.padding(bottom = 8.dp)
                    )

                    Text(
                        text = "En Right2Know, nos esforzamos por impulsar el aprendizaje de manera colaborativa y efectiva. Nuestra misión es proporcionar a los estudiantes y tutores una plataforma que fomente la excelencia académica y la participación activa en el proceso de enseñanza-aprendizaje.",
                        style = MaterialTheme.typography.bodySmall,
                        modifier = Modifier.padding(bottom = 32.dp)
                    )

                    Text(
                        text = "Características Destacadas",
                        style = MaterialTheme.typography.titleSmall,
                        modifier = Modifier.padding(bottom = 8.dp)
                    )
                    Spacer(modifier = Modifier.size(24.dp))
                    //
                    ListaDeDescripcion()
                    Spacer(modifier = Modifier.size(24.dp))
                    Text(
                        text = "¿Cómo Empezar en Right2Know?",
                        style = MaterialTheme.typography.bodyMedium,
                        modifier = Modifier.padding(bottom = 8.dp)
                    )

                    Text(
                        text = "¡Explora las emocionantes características de Right2Know usando el menú de navegación! Desde la gestión de usuarios hasta la participación en actividades educativas, estamos aquí para hacer que tu viaje educativo sea más efectivo y satisfactorio.",
                        style = MaterialTheme.typography.bodyLarge,
                        modifier = Modifier.padding(bottom = 32.dp)
                    )

                    Text(
                        text = "Agradecemos que te unas a nosotros en esta emocionante travesía educativa.",
                        style = MaterialTheme.typography.bodyLarge,
                        modifier = Modifier.padding(bottom = 16.dp)
                    )

                    Text(
                        text = "El Equipo de Right2Know - Estudiantes de Ingeniería Informática de UNIACC",
                        style = MaterialTheme.typography.headlineSmall,
                        modifier = Modifier.padding(bottom = 16.dp)
                    )

                    Button(
                        onClick = {
                            backStack.pop()
                        },
                        modifier = Modifier
                            //.fillMaxWidth()
                            .padding(top = 16.dp)
                    ) {
                        Text(text = "Volver")
                    }
                }
            }
        )
    }

    @Composable
    fun ListaDeDescripcion() {
        Column {
            ItemDeDescripcion("Roles Personalizados", "Los usuarios de Right2Know pueden registrarse como Tutor y crear alumnos dedicados. Cada rol está diseñado para satisfacer las necesidades de quienes buscan tanto aprender como enseñar.")
            ItemDeDescripcion("Gestión de Usuarios Integral", "Los tutores tienen el poder de crear, editar y eliminar perfiles de alumnos, brindando un entorno educativo seguro y supervisado.")
            ItemDeDescripcion("Interfaz Estudiantil e Intuitiva", "La interfaz de usuario de Right2Know ha sido desarrollada teniendo en cuenta la simplicidad y la accesibilidad. Queremos que tu experiencia de aprendizaje sea tan intuitiva como enriquecedora.")
        }
    }

    @Composable
    fun ItemDeDescripcion(title: String, description: String) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(8.dp)
        ) {
            Text(
                text = "•",
                modifier = Modifier.padding(end = 8.dp),
                style = MaterialTheme.typography.bodySmall
            )
            Column {
                Text(
                    text = title,
                    style = MaterialTheme.typography.bodySmall
                )
                Text(
                    text = description,
                    style = MaterialTheme.typography.bodySmall
                )
            }

        }
    }

}