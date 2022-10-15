import React from "react";
import { Button, Modal, Center, VStack, Text } from "native-base";
import { useState } from "react";

const Modale = ({ titre, description, showModal, setShowModal }) => {

    return <Center>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} _backdrop={{
            _dark: {
                bg: "coolGray.800"
            },
            bg: "warmGray.50"
        }}>
            <Modal.Content maxWidth="600" maxH="400">
                <Modal.CloseButton />
                <Modal.Header>{titre}</Modal.Header>
                <Modal.Body>
                    <VStack margin='3' mt={'5'}>
                        <Text ml={'2'}>{description}</Text>
                    </VStack>
                </Modal.Body>
                <Modal.Footer>
                    <Button onPress={() => {
                        setShowModal(false);
                    }}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    </Center>;
};

export default Modale;
