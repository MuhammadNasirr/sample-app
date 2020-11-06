import React, { useState } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { ModalComponent } from './index';

export default function ItemComponent({ item, getUser, singleUser }) {
    const [openModal, setopenModal] = useState(false)

    const modalShow = (value) => {
        setopenModal(value)
        getUser(item.login)
    }

    return (
        <React.Fragment>
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }} onPress={() => modalShow(true)}>
                <Image style={{ width: 100, height: 100, marginRight: 10 }} source={{ uri: item.avatar_url }} />
                <Text>{item.login}</Text>
            </TouchableOpacity>
            <ModalComponent isVisible={openModal} singleUser={singleUser} modalShow={modalShow} />
        </React.Fragment>
    )

}