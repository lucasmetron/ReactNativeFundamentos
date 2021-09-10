import React, { useState } from 'react'
import { View, Text, FlatList, Button } from 'react-native';



export default function TodoList(props) {

    const list = useState([
        { id: 1, text: 'abc' },
        { id: 2, text: 'def' }
    ])


    function keyExtractor(item) {
        return item.id
    }

    function handleRow({ index, item }) {
        return (
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <Text style={{ flex: 1 }}>
                    {formatListNumber(index)} -  {item.text}
                </Text>
                <Button
                    style={{ width: 100 }}
                    title="X"
                    color='red'
                    onPress={() => { onRemove(item) }}
                />
            </View>
        )
    }

    function onRemove() {

    }

    function formatListNumber(number) {
        const digits = 2;
        return ('00' + (number + 1)).slice(-digits)
    }


    return (
        <View>

            <FlatList
                data={list}
                keyExtractor={() => { keyExtractor(list || { id: 0 }) }}
                renderItem={handleRow}
            />

        </View>
    );
}