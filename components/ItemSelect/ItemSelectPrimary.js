import React, { useState } from 'react'

import{
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { Picker } from '@react-native-community/picker';

const ItemSelectPrimary=(props)=> {
    const [selectedValue, setSelectedValue] = useState("");
    let newData = props.data ? props.data : [{name : "-"}];
    return (
    <View style={styles.container}>
      <Picker
        selectedValue={props.selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={props.onValueChange}
        // onValueChange={(e)=>{console.log(e)}}
        onAccessibilityTap={()=>{console.log('touch')}}
      >        
        {
            newData.map((data, index)=>{
                return(
                    <Picker.Item key={index} label={data.name} value={data.name} />
                )})
        }
      </Picker>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
});

export default ItemSelectPrimary