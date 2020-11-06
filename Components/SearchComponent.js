import React, { useState } from 'react';
import { TextInput } from 'react-native';

export default function SearchComponent({ filtered }) {
    const [value, setvalue] = useState('')
    const onChange = (e) => {
        filtered(e)
        setvalue(e)
    }

    return (
        <TextInput
            placeholder={'search..'}
            value={value}
            onChangeText={(e) => onChange(e)}
        />
    )

}