package com.example.pokemon.models

import com.google.gson.annotations.SerializedName

data class Pokemon(
    val name: String,
    val height: Int,
    val weight: Int,
    val types: List<Types>,
    val sprites: Sprites
)
data class Types(
    val slot: Int,
    val type: TypeName
    )

data class TypeName(
    val name: String
)
data class Sprites(
    @SerializedName ("front_default") val spriteImage: String
)