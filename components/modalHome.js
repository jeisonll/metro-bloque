import React, {useEffect} from "react";
import Image from 'next/image'
import profilePic from '../public/image.png'

import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function ModalHome() {
    const [modalOpen, setModalOpen] = React.useState(false);



    useEffect(()=>{
        setModalOpen(!modalOpen);
    },[])


    return (
        <>
            <Modal className=" position-relative"  toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                <div className=" modal-header">

                    <button
                        aria-label="Close"
                        className=" close"
                        type="button"
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <ModalBody><Image src={profilePic} alt="imagen publicidad"/>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>

                <style jsx global>
                    {`
                    .modal-dialog {
                     max-width: 1000px !important;
                     margin: 1.75rem auto!important;
}
`}
                </style>
            </Modal>
        </>
    );
}

export default ModalHome;