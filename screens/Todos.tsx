import React from 'react'
import styled from 'styled-components/native'
import {Ionicons} from '@expo/vector-icons'

const Container = styled.View`
  flex: 1;
`

const Btn = styled.TouchableOpacity`
  position: absolute;
  bottom: 30px;
  right: 30px;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background-color: tomato;
  elevation: 5;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`


const Todos = ({navigation: {navigate}}) => {
  return (
    <Container>
      <Btn onPress={() => navigate("Stack", {screen: "Write"})}>
        <Ionicons name="add" color="white" size={40} />
      </Btn>
    </Container>
  )
}

export default Todos