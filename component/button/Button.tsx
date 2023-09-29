import {Component} from "react";
import {StyleProp, Text, TouchableOpacity, ViewStyle} from "react-native";
import IButton from "./IButton";
import ButtonStyle from "../../styles/component/button/ButtonStyle";

export class Button extends Component {
    title: string;
    onPress: () => void;
    color: Color;
    style: StyleProp<ViewStyle>;

    render() {
        return (
            <>
                <TouchableOpacity style={[ButtonStyle.container, this.style]} onPress={this.onPress}>
                    <Text style = {[ButtonStyle.containerText, {color: this.color}]}>
                    </Text>
                </TouchableOpacity>

            </>
        );
    }
    constructor(props: ButtonProps) {
        super(props);
        this.title = props.title;
        this.onPress = props.onPress;
        this.color = props.color || Color.white;
        this.style = props.style || {};
    }
}

type ButtonProps = {
    title: string;
    onPress: () => void;
    color?: Color;
    style?: StyleProp<ViewStyle>;
}
enum Color {
    white = 'white',
    red = 'red',
    black = 'black'
}
export default Button;
