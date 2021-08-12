import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { sin } from 'react-native/Libraries/Animated/src/Easing';
import { COLORS, FONTS, icons, images, SIZES } from '../constants';

const ItemDetail = ({ route, navigation }) => {
    function renderInfo() {
        let { itemInfo } = route.params;
        if (itemInfo) {
            return (
                <ImageBackground
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    resizeMode='cover'
                    source={itemInfo.image}
                >
                    {renderHeader()}
                    <View
                        style={{
                            position: 'absolute',
                            top: '45%',
                            left: '15%',
                            borderRadius: 80,
                            height: 40,
                            width: 40,
                            backgroundColor: COLORS.transparentLightGray1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                width: 10,
                                height: 10,
                                backgroundColor: COLORS.blue,
                                borderRadius: 20
                            }}
                        >

                        </View>

                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            top: '43%',
                            left: '30%',
                            flexDirection: 'row',
                            padding: SIZES.radius * 1.5,
                            backgroundColor: COLORS.transparentLightGray1,
                            borderRadius: 10,
                            width: '50%'
                        }}
                    >
                        <View style={{ flex: 2 }}>
                            <Text style={{ color: COLORS.darkGray, ...FONTS.h3 }}>{itemInfo.productName}</Text>
                        </View>
                        <View style={{ flex: 1.5, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <Text style={{ color: COLORS.darkGreen, ...FONTS.h3 }}>$ {itemInfo.price.toFixed(2)}</Text>
                        </View>
                    </View>
                    <View
                        style={{ position: 'absolute', bottom: '20%', left: SIZES.padding, right: SIZES.padding }}
                    >
                        <Text style={{ ...FONTS.h3, color: COLORS.lightGray2 }}>Furniture</Text>
                        <Text style={{ ...FONTS.h1, color: COLORS.white }}>{itemInfo.productName}</Text>
                    </View>
                </ImageBackground>
            )
        } else {
            <View></View>
        }
    }
    function renderHeader() {
        return (
            <View style={{ marginTop: SIZES.padding * 2 }}>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginRight: 20 }}>
                    <TouchableOpacity style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Image
                            style={{
                                width: 25,
                                tintColor: COLORS.white,
                                height: 25
                            }}
                            resizeMode='contain'
                            source={icons.menu} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Image
                            style={{
                                width: 25,
                                tintColor: COLORS.white,
                                height: 25
                            }}
                            source={icons.search} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: '5%',
                    left: SIZES.padding,
                    right: SIZES.padding,
                    flexDirection: 'row',
                    height: 70,
                    backgroundColor: COLORS.white,
                    borderRadius: 35
                }}
            >
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 2 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={icons.dashboard}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.gray
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <TouchableOpacity onPress={() => console.log('Navigate to Add Cart Screen')}
                        style={{
                            backgroundColor: COLORS.primary,
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 50,
                            width: 50,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={icons.plus}
                            style={{
                                tintColor: COLORS.white,
                                width: 20,
                                height: 20
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 2 }}>
                    <TouchableOpacity onPress={() => console.log('Navigate to User Profile')}>
                        <Image
                            source={icons.user}
                            style={{
                                tintColor: COLORS.gray,
                                width: 25,
                                height: 25
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderInfo()}
            {renderFooter()}
        </View>
    )
}

export default ItemDetail;