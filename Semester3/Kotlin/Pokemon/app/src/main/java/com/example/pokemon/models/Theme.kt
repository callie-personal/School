package com.example.pokemon.models

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

@Composable
fun MyTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = ThemeColours,
        content = content
    )
}

private val ThemeColours = lightColorScheme(
    primary = Color.Red,
    secondary = Color.White,
)