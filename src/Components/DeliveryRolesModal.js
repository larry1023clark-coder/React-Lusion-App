import React from 'react'

import { Modal, Button } from 'react-bootstrap'


export default function DeliveryRolesModal(props) {
   return (
      <div>
         <Modal className='rounded-0' onHide={props.onHide}
            show={props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
         >
            <Modal.Header closeButton >
               <Modal.Title id="contained-modal-title-vcenter">
                  Delivery and Return roles
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h5>Delivery roles</h5>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
               <hr /> <br />
               <h5>Return roles</h5>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
               <br />
            </Modal.Body>
            <Modal.Footer>
            <Button variant='dark' className='rounded-0' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
         </Modal>
      </div>
   )
}
