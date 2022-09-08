import React from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const PrivateRoute = ({children}) => {

    const userDetail = useSelector((state)=>state?.persistedReducer?.currentUser)

    return userDetail? children : Navigate("/login")
}

export default PrivateRoute