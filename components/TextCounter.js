import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function TextCounter(props) {

    const [text, setText] = useState('');

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
            />
            <Text>Total: {text.length}/{props.limit || 100}</Text>
        </View>

    );
}
