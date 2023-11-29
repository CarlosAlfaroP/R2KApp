package com.example.r2kapp
import android.os.Bundle
import androidx.activity.compose.setContent
import androidx.compose.ui.platform.LocalLifecycleOwner
import com.bumble.appyx.navigation.integration.NodeActivity
import com.bumble.appyx.navigation.integration.NodeHost
import com.bumble.appyx.navigation.platform.AndroidLifecycle
import com.example.r2kapp.common.RootNode
import com.example.r2kapp.ui.theme.R2KAppTheme

/* Appyx - declaracion con NodeActivity()
 * class MainActivity : ComponentActivity() {
 */
class MainActivity : NodeActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            R2KAppTheme() {
                NodeHost(
                    lifecycle = AndroidLifecycle(LocalLifecycleOwner.current.lifecycle),
                    integrationPoint = appyxV2IntegrationPoint
                ) {
                    RootNode(buildContext = it)
                }
            }
        }
    }
}
/*
@Preview(showSystemUi = true, showBackground = true)
@Composable
fun PreviewMainActivity() {
    App()
}
*/