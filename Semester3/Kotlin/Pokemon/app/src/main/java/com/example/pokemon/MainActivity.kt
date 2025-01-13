package com.example.pokemon

import android.os.Bundle
import android.view.inputmethod.InputMethodManager
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.Button
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.unit.dp
import coil.compose.AsyncImage
import com.example.pokemon.models.MyTheme
import com.example.pokemon.models.Pokemon
import com.example.pokemon.ui.theme.PokemonTheme


class MainActivity : ComponentActivity() {
    private lateinit var mainViewModel: MainViewModel

    override fun onCreate(savedInstanceState: Bundle?){
        super.onCreate(savedInstanceState)

        //instantiate viewmodel
        mainViewModel = MainViewModel()

        setContent {
            PokemonTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    PokemonApp()
                }
            }
        }
    }
    //stackoverflow.com
    private fun closeKeyboard(b: Boolean) {
        // Check if no view has focus:
        val view = this.currentFocus
        if (b) {
            if (view != null) {
                //get input method manager for keyboard
                val imm = getSystemService(INPUT_METHOD_SERVICE) as InputMethodManager
                //hide software keyboard from screen
                imm.hideSoftInputFromWindow(view.windowToken, 0)
            }
        } else {
            val imm = getSystemService(INPUT_METHOD_SERVICE) as InputMethodManager
            //show software keyboard on screen
            imm.showSoftInput(view, 0)
        }
    }
    @OptIn(ExperimentalMaterial3Api::class, ExperimentalComposeUiApi::class)
    @Composable
    fun PokemonApp() {

        //get pokemon from viewmodel, and the UI will update when viewmodel changes
        val pokemon by mainViewModel.pokemonStateFlow.collectAsState()
        var pokemonName by remember { mutableStateOf("") }
        var showPokemonDetails by remember { mutableStateOf(false) }

        //Render UI
        MyTheme {
            Scaffold(
                topBar = {
                    TopAppBar(
                        colors = TopAppBarDefaults.topAppBarColors(
                            containerColor = MaterialTheme.colorScheme.primary,
                            titleContentColor = MaterialTheme.colorScheme.secondary,
                        ),
                        title = {
                            Text("Gotta catch 'em all!")
                        }
                    )
                },

                ) { innerPadding ->

                Column(
                    modifier = Modifier
                        .padding(innerPadding),
                    verticalArrangement = Arrangement.spacedBy(16.dp),
                    horizontalAlignment = Alignment.CenterHorizontally,
                ) {
                    Box(
                        modifier = Modifier.fillMaxWidth(),
                        contentAlignment = Alignment.Center
                    ) {
                        AsyncImage(
                            model = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png",
                            contentDescription = null,

                            )
                    }

                    OutlinedTextField(
                        value = pokemonName,
                        //update pokemonName when text changes
                        onValueChange = { pokemonName = it },
                        //single line input
                        singleLine = true,
                        label = { Text("Enter Pokemon Name") },
                        //fill 80% of the width
                        modifier = Modifier.fillMaxWidth(0.8f),
                        keyboardOptions = KeyboardOptions.Default.copy(imeAction = ImeAction.Done),
                        keyboardActions = KeyboardActions(
                            onDone = {
                                //update pokemon when user presses done
                                mainViewModel.onTextInputChange(pokemonName)
                                mainViewModel.updatePokemon()
                                showPokemonDetails = true;
                                closeKeyboard(true)
                            }
                        )
                    )

                    Button(onClick = {
                        //update pokemon when user presses search
                        mainViewModel.onTextInputChange(pokemonName)
                        mainViewModel.updatePokemon()
                        showPokemonDetails = true;
                        closeKeyboard(true)

                    }) {
                        Text("Search")
                    }
                    if (showPokemonDetails) {
                        AsyncImage(
                            model = pokemon?.sprites?.spriteImage,
                            contentDescription = null,
                            modifier = Modifier.size(250.dp),
                        )

                        Text(
                            modifier = Modifier.padding(8.dp),
                            text =
                            """
                        Pokemon: ${pokemon?.name}
                        Type(s): ${pokemon?.types?.joinToString { it.type.name }}
                        Height: ${pokemon?.height} feet
                        Weight: ${pokemon?.weight}lbs
                        
                        

                    
                """.trimIndent(),
                        )
                    }
                }
            }
        }
    }
    }