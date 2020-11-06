import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import Modal from 'react-native-modal';

export default function ModalComponent({ isVisible, modalShow, singleUser }) {

    return (
        <Modal onBackdropPress={() => modalShow(false)}
            animationInTiming={1500} animationOutTiming={1000}
            style={{ width: '100%', padding: 0 }} isVisible={isVisible}>
            {
                singleUser &&
                <View style={{ width: '90%', height: 300, backgroundColor: '#fff', borderRadius: 10, alignItems: 'center' }}>
                    <View style={{ width: '90%', alignItems: 'flex-end', marginTop: 10 }}>
                        <TouchableOpacity onPress={() => modalShow(false)}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 250, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ width: 100, height: 100, marginRight: 10, marginBottom: 10 }} source={{ uri: singleUser.avatar_url }} />
                        <Text>number of followers:{singleUser.followers}</Text>
                        <Text>Location:{singleUser.location}</Text>
                        <Text>Full Name:{singleUser.name}</Text>
                    </View>
                </View>
            }
        </Modal>
    )

}