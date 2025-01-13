package com.example.transitapp.screens

import android.Manifest
import android.annotation.SuppressLint
import android.content.pm.PackageManager
import android.util.Log
import android.view.ViewGroup.LayoutParams.WRAP_CONTENT
import android.widget.FrameLayout
import android.widget.TextView
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.viewinterop.AndroidView
import com.example.transitapp.MainViewModel
import com.mapbox.geojson.Point
import com.mapbox.maps.MapView
import com.mapbox.maps.Style
import com.mapbox.maps.ViewAnnotationOptions
import com.mapbox.maps.extension.style.style
import com.mapbox.maps.viewannotation.geometry
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.core.app.ActivityCompat
import com.example.transitapp.MainActivity
import com.example.transitapp.R
import com.google.android.gms.location.LocationServices
import com.mapbox.maps.CameraOptions
import com.mapbox.maps.plugin.animation.flyTo
import kotlinx.coroutines.flow.collect

@SuppressLint("SuspiciousIndentation")
@Composable
fun MapScreen(mainViewModel: MainViewModel) {
    val context = LocalContext.current
    val feed by mainViewModel.feedStateFlow.collectAsState()
    val feedState = remember { mutableStateOf(feed) }
    feedState.value = feed

    val devicePoint by mainViewModel.pointStateFlow.collectAsState()

//    Log.d("MapScreen2", "MapScreen: $devicePoint")




    val phoneLocation = SetLocation(mainViewModel, context as MainActivity)
    val startLongitude = -64//devicePoint?.coordinates()?.get(0)
    val startLatitude = 45//devicePoint?.coordinates()?.get(1)
//    val startPosition = Point.fromLngLat(startLongitude, startLatitude)
    val testlong = devicePoint?.coordinates()?.get(0)
    val testlat = devicePoint?.coordinates()?.get(1)



//    val teststart = Point.fromLngLat(testlong, testlat)




    AndroidView(
        update = { mapView ->

            Log.d("MapScreen2", "MapScreen: $testlong")
//                if(point != null) {
                    val cameraOptions = CameraOptions.Builder()
                        .center(devicePoint)
                        .zoom(14.0)
                        .build()

                    // Animate the map camera to the new location
                    mapView.mapboxMap.flyTo(cameraOptions)
//                }



            mapView.mapboxMap.loadStyle(
                styleExtension = style(Style.MAPBOX_STREETS) {
                    feedState.value?.entityList?.filter { it.hasVehicle() }?.forEach { entity ->
                        val vehicle = entity.vehicle
                        val label = vehicle.trip.routeId
                        val latitude = vehicle.position.latitude
                        val longitude = vehicle.position.longitude

//                        Log.d("MainViewModel", "Bus $label is at $latitude, $longitude")
                        val busDrawable = R.drawable.bus
                        val textView = TextView(context).apply {
                            text = label
                            setTextColor(context.getColor(R.color.white))
                            gravity = android.view.Gravity.CENTER
                            setBackgroundResource(busDrawable)
                            layoutParams = FrameLayout.LayoutParams(WRAP_CONTENT, WRAP_CONTENT)
                        }

                        val position = Point.fromLngLat(longitude.toDouble(), latitude.toDouble())
                        val viewAnnotationOptions = ViewAnnotationOptions.Builder().apply {
                            geometry(position)
                            allowOverlap(true)
                        }

                        mapView.viewAnnotationManager.addViewAnnotation(textView, viewAnnotationOptions.build())                    }
                }
            )


        },factory = { context ->
        val mapView = MapView(context)
//            val startPosition = Point.fromLngLat(startLongitude, startLatitude)
            mapView.mapboxMap.setCamera(com.mapbox.maps.CameraOptions.Builder().center(Point.fromLngLat(
                startLongitude.toDouble(), startLatitude.toDouble()
            )).zoom(14.0).build())

            mapView
    }, modifier = Modifier.fillMaxSize())
}

@SuppressLint("MissingPermission")
fun SetLocation(mainViewModel: MainViewModel, activity: MainActivity) {

    // Get the fused location client
    val fusedLocationClient = LocationServices.getFusedLocationProviderClient(activity)

    // Get the last known location of the device
//    if (ActivityCompat.checkSelfPermission(
//            activity,
//            Manifest.permission.ACCESS_FINE_LOCATION
//        ) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(
//            activity,
//            Manifest.permission.ACCESS_COARSE_LOCATION
//        ) != PackageManager.PERMISSION_GRANTED
//    ) {
        // TODO: Consider calling
        //    ActivityCompat#requestPermissions
        // here to request the missing permissions, and then overriding
        //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
        //                                          int[] grantResults)
        // to handle the case where the user grants the permission. See the documentation
        // for ActivityCompat#requestPermissions for more details.
//        return
//    }
    fusedLocationClient.getLastLocation().addOnSuccessListener { location ->
        // Check if the location is not null
        if (location != null) {
            // Create a point object from the location coordinates
            val point = Point.fromLngLat(location.longitude, location.latitude)
            // Use the loadLocation function to update the point state flow
            mainViewModel.loadLocation(point)
        }
    }
}