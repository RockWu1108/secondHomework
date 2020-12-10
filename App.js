import React , {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity , TextInput } from 'react-native';

export default function App() {
  const [operateState , setOperateState] = useState('');
  const [currentValue,setCurrentValue] = useState('');
  const [previousValue,setPreviousValue] = useState('');
  const [memoryString , setMemoryString] = useState('');
  const process = (state , value) =>{

      switch(state){

        case "number":
          return  (setCurrentValue(currentValue + value) , setMemoryString(memoryString + value));
        
        
        case "operator":

          return {
            operateState : setOperateState(value),
            previousValue : setPreviousValue(currentValue),
            currentValue : setCurrentValue(''),
            memoryString : setMemoryString(memoryString + value)
          };

        case "equal":
         return count();

         case "clear":
           return{
              operateState : setOperateState(''),
              previousValue : setPreviousValue(''),
              currentValue : setCurrentValue(''),
              memoryString : setMemoryString('')
           };
      }
  }


  const count = () =>{
      const current = parseFloat(currentValue);
      const previous = parseFloat(previousValue);
      console.log(current , previous , operateState);
      var temp = 0 ;
      if(operateState === '+'){
        temp = previous + current;
         return  {
           memoryString :  setMemoryString(temp),
           currentValue :  setCurrentValue(temp),
           
          };
      }
      else if(operateState === '-'){
        temp = previous - current;
        return {
         memoryString :  setMemoryString(temp),
         currentValue  : setCurrentValue(temp)
        };
        
     }
     else if(operateState === '*'){
      temp = previous * current;
      return {
        memoryString :  setMemoryString(temp),
        currentValue  : setCurrentValue(temp)
       };
    
   }
      else if(operateState === '÷'){
        temp = previous / current;
        return {
          memoryString :  setMemoryString(temp),
          currentValue  : setCurrentValue(temp)
         };
    }
     
  }

  return (
    <View style={styles.container}>
        <TextInput style={styles.text} editable = {false}>{memoryString}</TextInput>
          <View style={{flexDirection : 'row'}}>
            <TouchableOpacity style={styles.button} onPress={() =>{ process('number' , 1)}}>
                <Text style={{
                  textAlign:'center' ,
                  fontSize:20, 
                  color: 'white'}}
                  >1</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={() =>{process('number' , 2)}}>
                <Text style={{textAlign:'center' , fontSize:20, color: 'white'}}>2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() =>{process('number' , 3)}}>
                <Text style={{textAlign:'center' , fontSize:20, color: 'white'}}>3</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() =>{process('operator' , '+')}}>
                <Text style={{textAlign:'center' , fontSize:20, color: 'white'}}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection : 'row'}}>
            <TouchableOpacity style={styles.button} onPress={() =>{process('number' , 4)}}>
                <Text style={{textAlign:'center' , fontSize:20, color: 'white'}}>4</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={() =>{process('number' , 5)}}>
                <Text style={{textAlign:'center' , fontSize:20, color: 'white'}}>5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() =>{process('number' , 6)}}>
                <Text style={{textAlign:'center' , fontSize:20, color: 'white'}}>6</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() =>{process('operator' , '-')}}>
                <Text style={{textAlign:'center' , fontSize:20, color: 'white'}}>-</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection : 'row'}}>
            <TouchableOpacity style={styles.button} onPress={() =>{process('number' , 7)}}>
                <Text style={{textAlign:'center' , fontSize:20, color: 'white'}}>7</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={() =>{process('number' , 8)}}>
                <Text style={{textAlign:'center' , fontSize:20, color: 'white'}}>8</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() =>{process('number' , 9)}}>
                <Text style={{textAlign:'center' , fontSize:20, color: 'white'}}>9</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() =>{process('operator' , '*')}}>
                <Text style={{textAlign:'center' , fontSize:20, color: 'white'}}>*</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection : 'row'}}>
            <TouchableOpacity style={{
              width:250, 
              height:70 ,
              backgroundColor: '#406E9F',
              borderRadius: 70/2,
              justifyContent: 'center',
              margin: 10 
            }}
              onPress={() =>{process('number' , 0)}}>

                <Text style={{textAlign:'center' , fontSize:20, color: 'white'}}>0</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() =>{process('operator' , '÷')}}>
                <Text style={{textAlign:'center' , fontSize:20, color: 'white'}}>÷</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection : 'row'}}>
          <TouchableOpacity style={{
            width:250, 
            height:70 ,
            backgroundColor: '#406E9F',
            borderRadius: 70/2,
            justifyContent: 'center',
            margin: 10 
          }} 
            onPress={() =>{process('equal' , '=')}}>
                <Text style={{textAlign:'center' , fontSize:20, color: 'white'}}>=</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() =>{process('clear' , 'c')}}>
                <Text style={{textAlign:'center' , fontSize:20, color: 'white'}}>c</Text>
            </TouchableOpacity>

          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:120
  },
  text:{
    height: 50,
    width:350,
    paddingRight: 15,
    borderColor:'black',
    textAlign:'right',
    fontSize:30,
    marginBottom: 10,
    borderRadius:5,
    borderWidth:1,
    backgroundColor:'white',
    color:'black',
    fontSize: 20,
  },
  button:{
    margin: 10 ,
    width:70,
    height :70,
    backgroundColor: '#406E9F',
    color:'white',
    borderRadius: 70/2,
    justifyContent: 'center',

  }
});
