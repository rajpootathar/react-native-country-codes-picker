import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from "react-native";
import { ItemTemplateProps } from "../types/Types";


export const CountryButton = ({ item, name, style, ...rest }: ItemTemplateProps) => (
    <TouchableOpacity
        style={[styles.countryButton, style?.countryButtonStyles]}
        testID="countryCodesPickerCountryButton"
        {...rest}
    >
        <Text style={{fontSize: 14}}>
            {item?.flag}
        </Text>
        
        <Text style={{paddingHorizontal: 5, fontSize: 14}}>
            {name}
        </Text>
        <Text style={{fontSize: 14}}>
            {item?.dial_code}
        </Text>
    </TouchableOpacity>
);

type StyleKeys = 'countryButton';

const styles: { [key in StyleKeys]: ViewStyle } = {
    countryButton: {
        paddingVertical: 10,
        // backgroundColor: '#f5f5f5',
        width: '100%',
        height: 50,
        paddingHorizontal: 25,
        alignItems: 'center',
        marginVertical: 2,
        flexDirection: 'row',
        borderRadius: 10,
    },
};
