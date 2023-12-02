package com.example.r2kapp.common.screens.home

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.VerticalAlignmentLine
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import com.bumble.appyx.navigation.modality.BuildContext
import com.bumble.appyx.navigation.node.Node
import org.jetbrains.compose.resources.ExperimentalResourceApi
import org.jetbrains.compose.resources.painterResource

class HomeNode(
    buildContext: BuildContext,
    ) : Node(
    buildContext = buildContext,
        ) {
        @OptIn(ExperimentalResourceApi::class)
        @Composable
        override fun View(modifier: Modifier) {
            Column(
                modifier = Modifier.fillMaxSize(),
                verticalArrangement = Arrangement.Center,
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
                    text = "Home",
                    style = MaterialTheme.typography.headlineSmall,
                    textAlign = TextAlign.Center,
                )
                Spacer(Modifier.size(16.dp))
                Button(
                    onClick = {

                    },
                ) {
                    Text(
                        text = "Ir a...",
                        style = MaterialTheme.typography.bodyMedium,
                    )
                }
            }
        }
    }