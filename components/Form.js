import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";


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
                onAdd(text)
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
            <Button
                title='Add'
                color='#0062ac'
                onPress={add}
            />
        </View>
    );
}