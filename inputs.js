import React, {Component} from 'react';
import {View, Button, Image, Text, TouchableOpacity, TextInput, StyleSheet, ActivityIndicator, FlatList} from 'react-native';


class Inputs extends Component{
 /*   state = {
        phone: '',
        email: '',
        name: ''
    }
    handlePhone = (text) => {
        this.setState({phone: text})
    }
    handleEmail = (text) =>{
        this.setState({email: text})
    }
    handleName = (text) =>{
        this.setState({name: text})
    }*/
    /*register = (phone, email, name) => {
        alert('phone: '+phone+' email: '+email+ ' name: '+name)
    }*/

    constructor(props){
        super(props);
        this.state = {persona_phone: '', person_mail: '', person_name: ''};
    }

    InsertData=()=>{
        var persona_phone=this.state.persona_phone;
        var person_mail=this.state.person_mail;
        var person_name = this.state.person_name;

        if(persona_phone.length==0 || person_mail.length==0 || person_name.length==0){
            alert("Ingrese todos los campos");
        }else{
            var InsertAPIURL = "http://10.0.2.2/powercodeAPI/insert.php";

            var headers:{
                'Accept':'application/json',
                'Content-Type':'application.json'
            };

            var Data={
                persona_phone:persona_phone,
                person_mail:person_mail,
                person_name:person_name
            };

            fetch(InsertAPIURL,
               {
                method:'POST',
                headers:headers,
                body: JSON.stringify(Data)
               }
            )
            .then((response)=>response.text())
            .then((response)=>
                {
                    alert(response[0].Message);
                }
            )
            .catch((error)=>
                {
                    alert("Error"+error);
                }
            )

        }
    }

    render(){
        return(
            <View style = {styles.container}>

                <Image source = {require('./img/pwrcode.png')} />

                <Text> Registrar persona</Text>
                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Phone"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {persona_phone=> this.setState({persona_phone})}/>

                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {person_mail=>this.setState({person_mail})}/>

                <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "Name"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 onChangeText = {person_name=>this.setState({person_name})}/>

                <Button
                    title = {"Registrar"}
                    onPress={this.InsertData}
                />


            </View>
        );
    }
}
export default Inputs

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input:{
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton:{
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height:40
    },
    submitButtonText:{
        color: 'white'
    },
    button:{
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height:40
    }

})