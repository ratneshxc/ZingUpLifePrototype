import React, { Component } from "react";
import { View ,Image ,Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
import { Grid,Col,Row } from "react-native-easy-grid";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  ListItem,
  CheckBox,
  Body
} from "native-base";

import styles from "./styles";

class StrengthandEnergy19 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false
    };
  }
  toggleSwitch1() {
    this.setState({
      checkbox1: true,
      checkbox2:false,
      checkbox3:false,
      checkbox4:false

    });
  }
  toggleSwitch2() {
    this.setState({
      checkbox1: false,
      checkbox2:true,
      checkbox3:false,
      checkbox4:false
    });
  }
  toggleSwitch3() {
    this.setState({
      checkbox1: false,
      checkbox2:false,
      checkbox3:true,
      checkbox4:false
    });
  }
  toggleSwitch4() {
    this.setState({
      checkbox1: false,
      checkbox2:false,
      checkbox3:false,
      checkbox4:true
    });
  }
  
  render() {
    let screenWidth = Dimensions.get('screen').width;
        let screenHeight = Dimensions.get('screen').height;
    return (
      <Container style={styles.container}>
             <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Text style={{
              fontWeight:'bold',
              color:'white',
            }}> 
               Strength and Energy</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          <Progress.Bar progress={1} width={screenWidth}  borderWidth={0} color={'black'} borderRadius={0}/>

          <Text
          style={{
            marginTop:50,
            padding:10,
            alignSelf:'center',
            fontFamily:'Cochin',
            fontSize:25
          }}
        >19.How often you catch cold?
       </Text>
       <View style={{
         backgroundColor:"#fff",
         }}>
          <ListItem button onPress={() => this.toggleSwitch1()}>
            <CheckBox
            color="green"
              checked={this.state.checkbox1}
              onPress={() => this.toggleSwitch1()}
            />
            <Body>
              <Text>More than twice a month</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch2()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox2}
              onPress={() => this.toggleSwitch2()}
            />
            <Body>
              <Text>Twice in a month</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch3()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox3}
              onPress={() => this.toggleSwitch3()}
            />
            <Body>
               <Text>Once in a month</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch4()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox4}
              onPress={() => this.toggleSwitch4()}
            />
            <Body>
            <Text>I rarely catch cold</Text>
            </Body>
          </ListItem>
          </View>
          <View style={{
            marginTop:130,
           //justifyContent:'flex-end'

          }}>
          <Grid>
            <Col size={80}>
              <Button info  style={styles.mb15}
              onPress={() => this.props.navigation.navigate('StrengthandEnergy18')}>
                 <Text>Prev</Text>
              </Button> 
            </Col>
            <Col size={50}>
              <Button  success style={styles.mb16}
                    // onPress={() => this.props.navigation.navigate('StrengthandEnergy20')}
                    >
              <Text>Submit</Text>
              </Button>
            </Col>
          </Grid> 
        </View>
        </Content>

        <Footer>
          <FooterTab>
            <Button active full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default StrengthandEnergy19;
