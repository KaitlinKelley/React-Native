import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
//<Text> is a primitive React element, use to show basic content on the screen

//This is a Component = a function that returns some JSX
const ComponentsScreen = () => {
    const greeting = "Hi there! I'm a greeting!";
    const greeting2 = [123,456];
    const greeting3 = ["asdf","bbbb"];
    const greeting4 = <Text>I am a JSX element</Text>;
    const myName = <Text style={{ fontSize: 20}}>My name is Kaitlin</Text>;
    //canNOT show a js object inside of a Text element
    //JSX = a "dialect" of Javascript that tells React what content to show

    //When returning a multi-line JSX block (like below), the content must begin on the same line as the return keyword, OR you must wrap the whole block in parentheses, with the opening ( on the same line as the return keyword
    return (
        <View>
            {/*<Text style={styles.textStyle}>This is the components screen</Text>*/}
            {/*<Text>Hellooooo!!</Text>*/}
            {/*<Text>{greeting}</Text>*/}
            {/*<Text>{greeting2}</Text>*/}
            {/*<Text>{greeting3}</Text>*/}
            {/*{greeting4}*/}
            <Text style={{ fontSize:45 }}>Getting started with React Native!</Text>
            {myName}
        </View>
    );  //This last semicolon must NOT be inside of a View tag! Errors!

    //Could also do this: (inline style)
    // return <Text style={{ fontSize: 30}}>This is the components screen</Text>;
};

//The StyleSheet.create() function validates a set of styling rules that we pass into it
//We can also pass styling directly to an element
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;