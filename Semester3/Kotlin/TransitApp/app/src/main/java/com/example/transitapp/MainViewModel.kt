package com.example.transitapp

import android.util.Log
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.google.transit.realtime.GtfsRealtime.FeedMessage
import com.mapbox.geojson.Point
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import java.net.URL


class MainViewModel : ViewModel() {

    private val _feedStateFlow = MutableStateFlow<FeedMessage?>(null)
    val feedStateFlow: StateFlow<FeedMessage?> = _feedStateFlow.asStateFlow()
    private val _alertStateFlow = MutableStateFlow<FeedMessage?>(null)
    val alertStateFlow: StateFlow<FeedMessage?> = _alertStateFlow.asStateFlow()

    // declare the point variable as a MutableStateFlow
    val _pointStateFlow: MutableStateFlow<Point?> = MutableStateFlow(null)
    val pointStateFlow: StateFlow<Point?> = _pointStateFlow



    companion object {
        // Define a constant for the location permission request code
        private const val REQUEST_LOCATION_PERMISSION_CODE = 123
    }

    fun loadBusPositions() {
        Thread {
            Log.d("MainViewModel", "Location: $pointStateFlow")
            val url = URL("https://gtfs.halifax.ca/realtime/Vehicle/VehiclePositions.pb")
            val feed = FeedMessage.parseFrom(url.openStream())

            // Update the UI on the main thread
            viewModelScope.launch {
                _feedStateFlow.value = feed
            }
        }.start()
    }

    fun loadAlerts() {
        Thread {
            val url = URL("https://gtfs.halifax.ca/realtime/Alert/Alerts.pb")
            val alerts = FeedMessage.parseFrom(url.openStream())
            viewModelScope.launch {
                _alertStateFlow.value = alerts
//                Log.d("AlertScreen", "Alerts: $alerts")

            }
        }.start()
    }

    fun loadLocation(point: Point?){
        Thread {
            _pointStateFlow.value = point // Update the value of the state flow
            Log.d("MainViewModel2", "Location: ${point?.coordinates()}")
        }.start()
    }

}