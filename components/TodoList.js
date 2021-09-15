import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

export default function TodoList(props) {

    const [list, setList] = useState([])

    useEffect(() => {
        setList([
            { id: 1, text: 'abc' },
            { id: 2, text: 'def' }
        ])
    }, [])

    function onRemove() {
        return '';
    }


    function handleRow({ index, item }) {
        return (

            <SafeAreaView>
                <View style={{ flexDirection: 'row', margin: 5, }}>
                    <Text style={{ flex: 1 }}>
                        {formatListNumber(index)} - {item.text}
                    </Text>

                    <TouchableOpacity
                        style={{ backgroundColor: '#731919', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10 }}
                        onPress={() => { props.onRemove ? props.onRemove(item) : onRemove(); }}
                    >
                        <Text style={{ color: 'white' }}>X</Text>
                    </TouchableOpacity>

                </View>

            </SafeAreaView>

        );
    }


    function formatListNumber(number) {
        const digits = 2;
        return ('0'.repeat(digits) + (number + 1)).slice(-digits);

    }

    return (

        <View >

            <FlatList
                data={list}
                renderItem={handleRow}
                keyExtractor={item => item.id}
            />

        </View>

    );
}