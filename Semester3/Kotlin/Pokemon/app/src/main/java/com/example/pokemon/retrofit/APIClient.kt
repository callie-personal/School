package com.example.pokemon.retrofit

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object APIClient {

    private const val BASE_URL = "https://pokeapi.co"

    private val retrofit: Retrofit by lazy {
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            // Add Gson converter
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    }

    val APIService by lazy {
        // Create Retrofit service
        retrofit.create(APIService::class.java)
    }
}
