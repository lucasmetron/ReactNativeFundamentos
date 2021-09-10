import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function TextCounter(props) {

    const [text, setText] = useState('');

    function handleChange(event) {
        if (text.length < props.limit) {
            setText(event)
        }

    }

    return (

        <View>
            <TextInput
                multiline={true}
                numberOfLines={5}
                style={{
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
                value={text}
                onChangeText={handleChange} //neste evento, já enviado o event.target.value
            />
            <Text>Total: {text.length}/{props.limit || 100}</Text>
        </View>

    );
}
