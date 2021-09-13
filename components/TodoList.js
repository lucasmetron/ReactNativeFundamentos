import React, { useState } from 'react'
import { View, Text, FlatList, Button, SafeAreaView } from 'react-native';

export default function TodoList(props) {

    const list = useState(
        [
            { id: 1, text: 'abc' },
            { id: 2, text: 'def' }
        ]
    )

    function onRemove() {
        return '';
    }


    function handleRow({ item, index }) {
        return (

            <SafeAreaView>
                <View style={{ flexDirection: 'row', margin: 5, }}>
                    <Text style={{ flex: 1 }}>
                        {formatListNumber(index)} - {item.id}
                    </Text>

                    <Button
                        style={{ width: 30 }}
                        title='X'
                        color='#731919'
                        onPress={() => { props.onRemove ? props.onRemove(item) : onRemove(); }}
                    />

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
                data={props.list ? props.list : list}
                renderItem={handleRow}
                keyExtractor={item => item.id}
            />

        </View>

    );
}