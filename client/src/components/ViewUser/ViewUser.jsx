import React from 'react'

const user = {
    username: "TheKing",
    level: 4,
    preferencias: ["gaming", "music", "deporte", "shoes", "arte"],
    ultimasventas: [
        {
            title: "e-sport nft",
            tiempo: "hace 9 minutos",
            tipo: "venta"
        },
        {
            title: "retro-psn",
            tiempo: "hace 28 minutos",
            tipo: "venta"
        },
        {
            title: "xbox-s",
            tiempo: "hace 45 minutos",
            tipo: "subasta"
        }
    ]
}

export const ViewUser = () => {

 const {username, level} = user
  return (
    <div>
        <h2>{username} - Level {level}</h2>
    </div>
  )
}
