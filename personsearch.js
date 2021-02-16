import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Button } from 'react-native';

class PersonSearch extends Component{
    constructor(props)
    {
        super(props)
        this.state={FindPerson:'', id_person:'', person_name:'', person_mail:'', persona_phone:''};
    }
    searchData=()=>{
        var FindPerson=this.state.FindPerson;

        if(FindPerson.length==0){
            alert("Falta un campo");
        }else{
            var SearchAPIURL = "http://10.0.2.2:80/powercodeAPI/findrecord.php";

            var header={
                'Accept':'application/json',
                'Content-Type':'application/json'
            };
            var Data = {
                FindPerson:FindPerson
            };
            fetch(
                SearchAPIURL,{
                    method: 'POST',
                    headers: header,
                    body: JSON.stringify(Data)
                }
            )
            .then((response)=>response.text())
            .then((response)=>{
                this.setState({id_person:response[0].id_person});
                this.setState({person_name:response[0].person_name});
                this.setState({person_mail:response[0].person_mail});
                this.setState({persona_phone:response[0].persona_phone});
             })
             .catch((error)=>{
                    alert("Error"+error);
                }
             )
        }
    }

    render(){
        return(
            <View style ={styles.viewStyle}>
                <TextInput
                    placeholder={"Ingrese el ID de la persona"}
                    placeholderTextColor={"#ff0000"}
                    keyboardType={"numeric"}
                    style={styles.txtStyle}
                    onChangeText={FindPerson=>this.setState({FindPerson})}
                />
                <Button
                    title={"Buscar"}
                    onPress={this.searchData}
                />
                <TextInput
                 style={styles.txtStyle}
                 value={this.state.id_person}
                />
                <TextInput
                 style={styles.txtStyle}
                 value={this.state.person_name}
                />
                <TextInput
                 style={styles.txtStyle}
                 value={this.state.person_mail}
                />
                <TextInput
                 style={styles.txtStyle}
                 value={this.state.persona_phone}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        padding: 1,
        marginTop: 10
    },
    txtStyle:{
        borderBottomWidth:1,
        borderBottomColor:'red',
        marginBottom:20
    }
});

export default PersonSearch