package com.example.transitapp.screens

import android.annotation.SuppressLint
import android.util.Log
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Divider
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.transitapp.MainViewModel




@SuppressLint("SuspiciousIndentation")
@Composable
fun RouteScreen(mainViewModel: MainViewModel) {
    val context = LocalContext.current
    val feed by mainViewModel.feedStateFlow.collectAsState()
    val feedState = remember { mutableStateOf(feed) }
    feedState.value = feed

//    val alerts by mainViewModel.alertStateFlow.collectAsState()
//    val alertState = remember { mutableStateOf(alerts) }
//    alertState.value = alerts

//    Log.d("AlertScreen", "Alerts: $feed")

    Column(
        modifier = Modifier
            .padding(16.dp)
            .verticalScroll(rememberScrollState()),

        ) {
        feedState.value?.entityList?.filter { it.hasVehicle() }?.forEach { entity ->
            val vehicle = entity.vehicle
            val label = vehicle.trip.routeId
//                val url = alert.url.translationList.getOrNull(0)?.text

                if (label != null) {
                    Text(
                        text = label,
                        fontSize = 20.sp,
                        fontWeight = FontWeight.Bold
                    )
                    Divider()
//                    Text(
//                        text = description,
//                        modifier = Modifier.padding(start = 16.dp),
//                        fontSize = 16.sp
//                    )
                    Spacer(modifier = Modifier.height(16.dp))
                }
            }
        }
    }fun
