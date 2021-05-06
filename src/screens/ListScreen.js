import React from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        //the key must be a string, must be unique, must be consistent between renders
        { name: "Friend #1"},
        { name: "Friend #2"},
        { name: "Friend #3"},
        { name: "Friend #4"},
        { name: "Friend #5"},
        { name: "Friend #6"},
        { name: "Friend #7"},
        { name: "Friend #8"},
        { name: "Friend #9"}
    ];
    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({item}) => {
                //element === { item: {name: "Friend #1"}, index:0}
                //item === {name: "Friend #1"}
                return <Text>{item.name}</Text>
            }}>
        </FlatList>);
};

const styles = StyleSheet.create({});

export default ListScreen;