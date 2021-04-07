import React, { useState } from 'react'
import { View, FlatList, TextInput, Button, StyleSheet, Text } from 'react-native'
import styled from 'styled-components/native';

const DynamicInput = (props) => {
    const [textInputData, setTextInputData] = useState([{
        id: 0,
        value: ''
    }])
    const [hideComponet, setHideComponent] = useState(false);

    // props.dataFromState = textInputData;

	const renderItem = ({item, index}) => {
		return(
			<View style={styles.row}>
				<View style={ styles.column }>
					<TextInput
						{...props}
						onChangeText={(value) => setTextInputData(
							textInputData.map(data => {
								return data.id === item.id ? {
									id: data.id,
									value,
								} : {
									...data,
								}
							}),
						)}
						onChange={() => props.getData(textInputData)}
						placeholder={`textInput ke ${item.id}`}
						value={item.value}
						style={styles.input}
					/>
				</View>
				<View style={styles.rowBut}>
					{
						index !== 0 ? 
							<Button
								color='red'
								onPress={() => setTextInputData(textInputData.filter(data => data.id !== item.id),
								)}
								title='-'
								style={styles.button}
							/>  
							: <Button
							onPress={() => setTextInputData([
									...textInputData,
									{
										id: textInputData[textInputData.length - 1].id + 1,
										value: '',
									}
								]
							)}
							title='+'
						/>
					}

				</View>
			</View>
		)
	}

    return (
        <View style={{
            flex: 1
        }}>
            <FlatList
                data={textInputData}
                renderItem={renderItem}
                keyExtractor={(_, i) => i.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
	row:{
		flexDirection: 'row',
		marginBottom: 10,
		// borderWidth:1,
	},
	rowBut:{
		paddingTop: 5,
	},
	column:{
		width: "92%"
	},
	input:{
		flex: 1,
		borderWidth: 1.5,
		borderRadius: 5,
		height: 45,
	},
	button:{
		height: 45,
	},
});

export default DynamicInput