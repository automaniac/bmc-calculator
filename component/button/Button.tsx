import {Component} from "react";
import {StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle} from "react-native";
import DefaultButtonStyle from "./styles/DefaultButtonStyle";
import ButtonTextColor from "./ButtonTextColor";
class Button extends Component {
    private text: string = "";
    private onPress: () => void = () => {};
    private containerStyle: StyleProp<ViewStyle>[] = [DefaultButtonStyle.container];
    private textStyle: StyleProp<TextStyle>[] = [DefaultButtonStyle.containerText];
    render() {
        return (
            <>
                <TouchableOpacity
                    style={this.containerStyle}
                    onPress={this.onPress}
                >
                    <Text
                        style={this.textStyle}
                    >
                        {this.text}
                    </Text>
                </TouchableOpacity>
            </>
        );
    }
    constructor(props: ButtonProps) {
        super(props);
        this.setOnPress(props.onPress)
        this.setText(props.text);
        this.setContainerStyle(props.containerStyle);
        this.setTextColor(props.textColor);

    }

    private setText(text: string) {
        this.text = text
    }

    private setOnPress(onPress: () => void) {
        this.onPress = onPress
    }

    private setTextColor(textColor: ButtonTextColor | undefined) {
        if(textColor === undefined || textColor === null)
            return
        this.textStyle.push({
            color: textColor
        })
    }

    private setContainerStyle = (containerStyle: StyleProp<ViewStyle> | undefined) => {
        if(containerStyle === undefined || containerStyle === null)
            return
        this.containerStyle.push(containerStyle)
    }
}

type ButtonProps = {
    text: string;
    onPress: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    textColor?: ButtonTextColor;
}

export default Button;
