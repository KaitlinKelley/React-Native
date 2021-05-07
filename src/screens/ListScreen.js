import React from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        //the key must be a string, must be unique, must be consistent between renders
        { name: "Friend #1", age: 21},
        { name: "Friend #2", age: 22},
        { name: "Friend #3", age: 23},
        { name: "Friend #4", age: 24},
        { name: "Friend #5", age: 25},
        { name: "Friend #6", age: 26},
        { name: "Friend #7", age: 27},
        { name: "Friend #8", age: 28},
        { name: "Friend #9", age: 29}
    ];
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({item}) => {
                //element === { item: {name: "Friend #1"}, index:0}
                //item === {name: "Friend #1"}
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}>
        </FlatList>);
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;