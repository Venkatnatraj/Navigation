import React from 'react';
import { StyleSheet, Text, View , FlatList } from 'react-native';

import MenuButton from '../components/MenuButton'

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }

    componentDidMount() {
        return fetch('https://randomuser.me/api?results=18')
                .then(res => res.json())
                .then (names => {
                    this.setState({
                    data : names.results
                    })
                })
                .catch(error =>{
                    console.log('error' , error)
                })
    }
    render() {
        return (
        <View style={styles.container}>
            <MenuButton navigation={this.props.navigation} />
            {/* <Text style={styles.text}>Home</Text> */}
            <FlatList
                data = {this.state.data}
                keyExtractor = {(x , i) => i }
                renderItem = {({item})=>
                <Text style={styles.api}>
                    {`${item.name.first}' '${item.name.last}`}
                </Text>
            }
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 200,
    },
    text: {
        fontSize: 30,
    }
});

// class Home extends Component {
//     render() {
//         return (
//         <View>
//             <Button title = "Names" onPress = {}/>
//         </View>
//         )
//     }
// }