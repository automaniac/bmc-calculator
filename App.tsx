import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {

  const [height, setHeight] = React.useState<number>(0.0);
  const [mass, setMass] = React.useState<number>(0.0);
  const [result, setResult] = React.useState("")

  let heightString = `Height:${height} m`;
  let massString = `Mass:${mass} kg`;
  let resultString = `Result: ${result}`

  function handleOnChangeHeight(heightString: string) {
    const heightFloat = parseFloat(heightString);
    const normalizedHeight = normalizeHeightCMtoM(heightFloat);
    setHeight(normalizedHeight);
  }

  function normalizeHeightCMtoM(heightCM: number){
    return heightCM / 100
  }

  function handleOnChangeMass(massString: string) {
    const massFloat = parseFloat(massString)
    setMass(massFloat);
  }

  function isMassValid(): boolean{
    return mass <= 0 || isNaN(mass);
  }

  function isHeightValid(): boolean{
    return height <=0 || isNaN(height);
  }

  function validatationReport(): string{
    if(isMassValid()){
      return "Invalid mass";
    } else if(isHeightValid()){
      return "Invalid height";
    } else{
      return "ok";
    }
  }

  function calculateBMC(){
    const validationResult:string = validatationReport();

    if(validationResult === "ok"){
      const bmc = (mass / (height * height));
      setResult(bmc.toFixed(2))
    } else{
      setResult(validationResult)
    }
  }


  return (
    <View style={styles.container}>
      <TextInput placeholder="Height" onChangeText={handleOnChangeHeight} keyboardType="numeric"/>
      <TextInput placeholder="Mass" onChangeText={handleOnChangeMass} keyboardType="numeric"/>
      <Button title="Calculate" onPress={calculateBMC}/>
      <Text style={{textAlign: "center", margin: 10}}>{heightString}</Text>
      <Text style={{textAlign: "center", margin: 10}}>{massString}</Text>
      <Text style={{textAlign: "center", margin: 10}}>{resultString}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
