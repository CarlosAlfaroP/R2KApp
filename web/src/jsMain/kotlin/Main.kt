import androidx.compose.foundation.background
import androidx.compose.foundation.focusable
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.*
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.focus.onFocusChanged
import androidx.compose.ui.input.key.*
import androidx.compose.ui.layout.onSizeChanged
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.CanvasBasedWindow
import com.bumble.appyx.navigation.integration.ScreenSize
import com.bumble.appyx.navigation.integration.WebNodeHost
import com.example.r2kapp.common.RootNode
import com.example.r2kapp.common.ui.theme.R2KAppTheme
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.flow.receiveAsFlow
import kotlinx.coroutines.launch
import org.jetbrains.skiko.wasm.onWasmReady

@OptIn(ExperimentalComposeUiApi::class)
fun main () {
    val events: Channel<Unit> = Channel()
    onWasmReady {
        /*Sin contexto
        Window("R2K App") {}
        */
        CanvasBasedWindow("R2K App") {
            val requester = remember { FocusRequester() }
            var hasFocus by remember { mutableStateOf(false) }
            var screenSize by remember { mutableStateOf(ScreenSize(0.dp, 0.dp)) }
            val eventScope = remember { CoroutineScope(SupervisorJob() + Dispatchers.Main) }

            R2KAppTheme()
            {
                WebNodeHost(
                    screenSize = screenSize,
                    onBackPressedEvents = events.receiveAsFlow(),
                    modifier = Modifier
                        .fillMaxSize()
                        .background(MaterialTheme.colorScheme.background)
                        .onSizeChanged { screenSize = ScreenSize(it.width.dp, it.height.dp) }
                        .onKeyEvent { event ->
                            onKeyEvent(event, events, eventScope)
                        }
                        .focusRequester(requester)
                        .focusable()
                        .onFocusChanged { hasFocus = it.hasFocus },
                ) { buildContext ->
                    RootNode(
                        buildContext = buildContext,
                    )
                }
                if (!hasFocus) {
                    LaunchedEffect(Unit) {
                        requester.requestFocus()
                    }
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
    events: Channel<Unit>,
    coroutineScope: CoroutineScope = CoroutineScope(SupervisorJob() + Dispatchers.Main),
): Boolean =
    when {
        keyEvent.type == KeyEventType.KeyUp && keyEvent.key == Key.Backspace -> {
            coroutineScope.launch { events.send(Unit) }
            true
        } else -> false
    }



/*
 * Se llama a la clase shared
 * App() para test de compilación y ejecución
 */