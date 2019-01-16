import React from "react"

const authenticate = FirstComponent => SecondComponent => props => {
  if (props.isLoggedIn === true) {
    return <FirstComponent />
  }
  return <SecondComponent />
}


export default authenticate