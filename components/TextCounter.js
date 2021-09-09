import React from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-web';

export default function TextCounter(props) {

    return (

        <View>
            <TextInput
                multiline={true}
                numberOfLines={5}
                style={{
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
            />
            <Text>Total: 20/100</Text>
        </View>

    );
}
