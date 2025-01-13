package com.example.pokemon.retrofit

import com.example.pokemon.models.Pokemon
import retrofit2.http.GET
import retrofit2.http.Path

interface APIService {
    @GET("/api/v2/pokemon/{name}")
    suspend fun getPokemon(
        @Path("name") name: String
    ): Pokemon
}
