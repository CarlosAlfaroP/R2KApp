package com.example.r2kapp.common

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.example.r2kapp.common.ui.theme.R2KAppTheme

@Composable
fun App () {
    R2KAppTheme {
        // A surface container using the 'background' color from the theme
        Surface(
            modifier = Modifier.fillMaxSize(),
            color = MaterialTheme.colorScheme.background
        ) {
            Box(
                contentAlignment = Alignment.Center,
                modifier = Modifier
                    .fillMaxSize()
            ) {
                Saludos(getPlatformName())
            }
        }
    }
}

@Composable
fun Saludos(name: String, modifier: Modifier = Modifier) {
    Text(
        text = "Bienvenid@ a la App $name!",
        modifier = modifier
    )
}
