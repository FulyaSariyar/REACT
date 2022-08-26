import React, { Component } from 'react'
 class User extends Component {
  render() {
    return ( //JSX Formatında tek bir element dönmek lazım !
      <div>
        <form>
        <input type= "text"></input>
        <button>Gönder</button> 
        </form>
      </div>
    )
  }
}
export default User;
