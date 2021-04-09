import React, { useState } from 'react'
import { 
	View, 
	FlatList, 
	TextInput, 
	Button, 
	StyleSheet, 
	Text, 
	TouchableHighlight, 
	TouchableOpacity 
} from 'react-native'
import styled from 'styled-components';

const DynamicInput = (props) => {
	// let firstState = 
    const [textInputData, setTextInputData] = useState(props.stateData)

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
						placeholder={`Jobdesc ${item.id+1}`}
						value={item.value}
						style={styles.input}
					/>
				</View>
				<View style={styles.columnBut}>
					{
						index !== 0 ? <TouchableOpacity
							style={buttonStyles.squareMin}
							onPress={() => setTextInputData(textInputData.filter(data => data.id !== item.id),
							)}
							
						>
							{/* <View style={buttonStyles.square}> */}
								<Text
									style={buttonStyles.text}
								>-</Text>
							{/* </View> */}
						</TouchableOpacity>
						:
						<TouchableOpacity 
							style={buttonStyles.square}
							onPress={() => setTextInputData([
									...textInputData,
									{
										id: textInputData[textInputData.length - 1].id + 1,
										value: '',
									}
								]
							)}
						>
							<Text
								style={buttonStyles.text}
							>+</Text>	
						</TouchableOpacity>
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
	column:{
		width: "92%"
	},
	columnBut:{
		width: "8%",
		paddingTop: 0,
	},
	input:{
		flex: 1,
		borderWidth: 1.5,
		borderRadius: 5,
		height: 45,
	},
});

const buttonStyles = StyleSheet.create({
	square:{
		// color: "blue",
		backgroundColor: "#45b4fe",
		width: 20,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
	},
	squareMin:{
		// color: "blue",
		backgroundColor: "#ec4c47",
		width: 20,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text:{
		fontSize: 20,
		fontWeight: '600',
		color: 'white',
	},
});

export default DynamicInput