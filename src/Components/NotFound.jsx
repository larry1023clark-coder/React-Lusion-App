import React from 'react'

import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export default function NotFound() {
   const navigate = useNavigate()


   return (
      <div className='my-5 py-5 text-muted text-center lh-lg' style={{height: '520px'}}>
         <h1>404</h1>
         <h2>Oops... looks like you got lost</h2>
         <p>GET BACK HOME BY CLICKING THE BUTTON HOMEPAGE</p>
         <Button variant="dark" type='button' className='rounded-0'
          onClick={() => navigate('/')}>Go To Home</Button>
      </div>
   )
}
