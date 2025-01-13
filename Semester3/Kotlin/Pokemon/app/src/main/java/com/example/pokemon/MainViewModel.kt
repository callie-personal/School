package com.example.pokemon


import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.pokemon.models.Pokemon
import com.example.pokemon.retrofit.APIClient
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import androidx.compose.runtime.*


class MainViewModel : ViewModel() {
    private val _pokemonStateFlow = MutableStateFlow<Pokemon?>(null)
    val pokemonStateFlow: StateFlow<Pokemon?> = _pokemonStateFlow.asStateFlow()

    private val _textInput = mutableStateOf("")
    val textInput: State<String> = _textInput

    fun onTextInputChange(newText: String){
        _textInput.value = newText
    }

    fun updatePokemon(){
        viewModelScope.launch{
            val pokemon = APIClient.APIService.getPokemon(_textInput.value)
            _pokemonStateFlow.value = pokemon
        }
    }
}

