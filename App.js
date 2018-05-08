
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, } from 'react-native';
import CodePush from 'react-native-code-push';

let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };
export default class App extends React.Component {

  // One way    
  // componentDidMount(){
  //   CodePush.sync({ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE });
  //   SplashScreen.hide();
  // }

  // Other way
  onButtonPress() {
    CodePush.sync({
        updateDialog: true,
        installMode: CodePush.InstallMode.IMMEDIATE
    });
  }

  render() {
    
    return (
      // @Poonam 
      // Devs will setup Store Provider as high level Components here
      <View style={styles.container}>
         <View>
              <Text> This is the first page in React</Text>
              <Text> Sanket, We have successfully landed to REact SCreen</Text>
         </View>
         <View>
            <TouchableOpacity onPress={this.onButtonPress}>
                <Text>Check for updates</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

App = CodePush(codePushOptions)(App);