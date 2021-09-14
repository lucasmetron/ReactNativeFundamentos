import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";


export default function Form(props) {

    const [text, setText] = useState('')

    function handleChange(text) {
        setText(text)
    }

    function add() {
        if (text !== '') {
            if (props.onAdd) {
                props.onAdd(text)
            } else {
                onAdd()
            }
            handleChange('')
        }
    }

    function onAdd() {
        return ''
    }

    return (
        <View>
            <TextInput
                value={text}
                onChangeText={handleChange}
            />
            <TouchableOpacity style={{ backgroundColor: '#4630EB', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10, marginBottom: 10 }}>
                <Text style={{ color: 'white' }}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}