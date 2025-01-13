package com.example.notarobot

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            PetCaptcha()
        }
    }
}
@Composable
fun PetCaptcha(){
    val context = LocalContext.current

    //collection of cat images and dog images
    val catImages = listOf("cat1", "cat2", "cat3")
    val dogImages = listOf("dog1", "dog2", "dog3", "dog4", "dog5", "dog6")

    //randomize the image placings in the lists
    val randomDogImages = dogImages.shuffled()
    val randomCatImages = catImages.shuffled()

    //create a combined collection of images (6 dog 1 cat) and shuffle their combined order
    val combinedImages = (listOf(randomCatImages.random()) + randomDogImages.take(6)).shuffled()

    //build the column to contain the images
    LazyColumn(
        modifier = Modifier.fillMaxWidth(),
        contentPadding = PaddingValues(horizontal = 12.dp, vertical = 12.dp),
        ) {
        for (image in combinedImages){
            //Getting the ID's for each image used
            val imageID = context.resources.getIdentifier(image, "drawable", context.packageName)
            
            item { 
                Image(
                    //Inserting the images, sized to 256dp
                    painter = painterResource(id = imageID),
                    contentDescription = image,
                    modifier = Modifier
                        .fillMaxWidth()
                        .size(256.dp)
                        //on click, display a toast message
                        .clickable {
                            //if a cat, you're a human, dog you're a robot
                            val toast =
                                if (image in randomCatImages) {
                                    "Congratulations, you're not a replicant."
                            }   else {
                                    "We welcome our new robot overlords."
                            }
                            //show the toast message
                            Toast
                                .makeText(context, toast, Toast.LENGTH_SHORT)
                                .show()
                        })
                //add spacing between the images
                Spacer(modifier = Modifier.height(12.dp))
            }
        }
    }
}
