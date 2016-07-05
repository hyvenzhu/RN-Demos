/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    LayoutAnimation,
    TouchableOpacity,
    Image,
    UIManager,
    Platform
} from "react-native";

class Demo9 extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            width: 100,
            height: 100
        };

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }

        this.startAnimation();
    }

    startAnimation() {
        // var count = 0;
        // while(++count < 50)
        // {
        // 	requestAnimationFrame(() => {
        // 		this.setState({width: this.state.width + 1, height: this.state.height + 1});
        // 	});
        // }

        // while(++count < 50)
        // {
        // 	requestAnimationFrame(() => {
        // 		this.refs.image.setNativeProps({
        // 			style: {
        // 				width: this.state.width++,
        // 				height: this.state.height++
        // 			}
        // 		});
        // 	});
        // }

        /**
         系统提供的动画
         easeInEaseOut: LayoutAnimationConfig
         linear:LayoutAnimationConfig
         spring: LayoutAnimationConfig
         */
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

        // LayoutAnimation.configureNext(LayoutAnimation.create(700, LayoutAnimation.Types.spring, LayoutAnimation.Properties.scaleXY));

        // 自定义动画参数
        // LayoutAnimation.configureNext({
        //     duration: 700,   //持续时间
        //     create: { // 视图创建
        //         type: LayoutAnimation.Types.spring,
        //         property: LayoutAnimation.Properties.scaleXY, // opacity、scaleXY
        //
        //     },
        //     update: { // 视图更新
        //         type: LayoutAnimation.Types.spring,
        //     },
        // });
        this.setState({width: this.state.width + 10, height: this.state.height + 10});
    }

    render() {
        return (
            <View style={styles.container}>
                <Image ref='image' source={require('./icon.jpg')}
                       style={{width: this.state.width, height: this.state.height}}/>

                <TouchableOpacity style={styles.instructions} onPress={()=>this.startAnimation()}>
                    <Text style={{alignSelf: 'center', color: '#FFFFFF'}}>
                        Press me!
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'column'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        backgroundColor: '#00FF00',
        width: 150,
        height: 80,
    },
    instructions: {
        backgroundColor: '#FF0000',
        width: 80,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
});

AppRegistry.registerComponent('Demo9', () => Demo9);
