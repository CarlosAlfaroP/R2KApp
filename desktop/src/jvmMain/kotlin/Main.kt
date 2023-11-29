import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.input.key.*
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.DpSize
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application
import androidx.compose.ui.window.rememberWindowState
import com.bumble.appyx.navigation.integration.DesktopNodeHost
import com.example.r2kapp.common.App
import com.example.r2kapp.common.RootNode
import com.example.r2kapp.common.ui.theme.R2KAppTheme
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.flow.mapNotNull
import kotlinx.coroutines.flow.receiveAsFlow
import kotlinx.coroutines.launch
import org.jetbrains.compose.resources.ExperimentalResourceApi


@OptIn(ExperimentalResourceApi::class)
fun main() = application {
    val events: Channel<Events> = Channel()
    val windowState = rememberWindowState(size = DpSize(480.dp, 640.dp))
    val eventScope = remember { CoroutineScope(SupervisorJob() + Dispatchers.Main) }
    val icon = painterResource("icon.png")
    Window(
        title = "R2K App",
        state = windowState,
        onCloseRequest = ::exitApplication,
        icon = icon,
        onKeyEvent = {
            onKeyEvent(it, events, eventScope)
                     },
        ) {
        R2KAppTheme {
            Surface(
                modifier = Modifier.fillMaxSize(),
                color = MaterialTheme.colorScheme.background
            ) {
                DesktopNodeHost(
                    windowState = windowState,
                    onBackPressedEvents = events.receiveAsFlow().mapNotNull {
                        if (it is Events.OnBackPressed) Unit else null
                    }
                ) {
                    RootNode(buildContext = it)
                }
            }
        }
    }
}


/* Appyx Backstack en
* Android es automático, Desktop y Web se define el evento
* como función auxiliar
* */
private fun onKeyEvent(
    keyEvent: KeyEvent,
    events: Channel<Events>,
    coroutineScope: CoroutineScope = CoroutineScope(SupervisorJob() + Dispatchers.Main),
): Boolean =
    when {
        keyEvent.type == KeyEventType.KeyDown && keyEvent.key == Key.Backspace -> {
            coroutineScope.launch { events.send(Events.OnBackPressed) }
            true
        }
        else -> false
    }

sealed class Events {
    object OnBackPressed : Events()
}


/* Preview en desarrollo para Desktop
@Preview
@Composable
fun PreviewMain() {
    App()
}
*/