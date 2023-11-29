package com.example.r2kapp.common.screens.profile

import com.bumble.appyx.utils.multiplatform.Parcelable
import com.bumble.appyx.utils.multiplatform.Parcelize

// Esta es una clase solo de ejemplo para un autologin
@Parcelize
data class User(
    val name: String
) : Parcelable {
    companion object {
        val Dummy: User = User("User")
    }
}
