import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';
import { icons, images, theme, COLORS, SIZES, FONTS } from '../constants'

const Home = ({ navigation }) => {
    const [tabList, setTabList] = React.useState([
        {
            id: 0,
            name: "Chair",
            title: "chairs",
            productList: [
                {
                    productId: 1,
                    productName: 'Chair Green Colour',
                    price: 10.00,
                    image: images.greenChair,
                },
                {
                    productId: 2,
                    productName: 'Chair Peach Colour',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 3,
                    productName: 'Chair White Colour',
                    price: 10.00,
                    image: images.whiteChair,
                },
            ]
        },
        {
            id: 1,
            name: "Cupboard",
            title: 'cupboards',
            productList: [
                {
                    productId: 4,
                    productName: 'Product 4',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 5,
                    productName: 'Product 5',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 6,
                    productName: 'Product 6',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 2,
            name: "Table",
            title: 'tables',
            productList: [
                {
                    productId: 7,
                    productName: 'Product 7',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 8,
                    productName: 'Product 8',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 9,
                    productName: 'Product 9',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 3,
            name: "Accessories",
            title: 'accessories',
            productList: [
                {
                    productId: 10,
                    productName: 'Product 10',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 11,
                    productName: 'Product 11',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 12,
                    productName: 'Product 12',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        }
    ])

    const [selectedTab, setSelectedTab] = React.useState({
        id: 0,
        name: "Chair",
        title: 'chairs',
        productList: [
            {
                productId: 1,
                productName: 'Chair Green Colour',
                price: 10.00,
                image: images.greenChair,
            },
            {
                productId: 2,
                productName: 'Chair Peach Colour',
                price: 10.00,
                image: images.redChair,
            },
            {
                productId: 3,
                productName: 'Chair White Colour',
                price: 10.00,
                image: images.whiteChair,
            },

        ]
    })

    const ScrollableTab = ({ tabList, selectedTab, onPress }) => {
        console.log('ScrollableTab FUNC')
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginHorizontal: SIZES.padding }}
                onPress={() => onPress(item)}
            >
                <Text style={{ color: COLORS.black, ...FONTS.body4 }}>{item.name}</Text>
                {
                    selectedTab.id == item.id &&
                    <View style={{ alignItems: 'center', marginTop: SIZES.base }}>
                        <View style={{ backgroundColor: COLORS.blue, borderRadius: 5, width: 10, height: 10 }}></View>
                    </View>
                }
            </TouchableOpacity>
        )
        return (
            <View style={{ marginTop: SIZES.padding }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={tabList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }

    const ScrollableCard = ({ navigation, productList }) => {
        const renderCard = ({ item }) => (
            <TouchableOpacity
                style={{ marginLeft: SIZES.padding }}
                onPress={() => navigation.navigate("ItemDetail", { "itemInfo": item })}
            >
                <View style={{ width: SIZES.width / 2 }}>
                    <Image
                        source={item.image}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: SIZES.radius * 2
                        }}
                    />
                </View>
                <View style={{ position: 'absolute', top: 15, left: '10%', right: '10%' }}>
                    <Text style={{ ...FONTS.h4, color: COLORS.lightGray2 }}>Furniture</Text>
                    <Text style={{ ...FONTS.h2, color: COLORS.white, marginTop: SIZES.base }}>{item.productName}</Text>
                </View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 20,
                        left: 30,
                        borderRadius: 15,
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        backgroundColor: COLORS.transparentLightGray
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>$ {item.price.toFixed(2)}</Text>
                </View>
            </TouchableOpacity>
        )
        return (
            <View style={{ marginTop: SIZES.padding }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.productId.toString()}
                    renderItem={renderCard}
                    data={productList} />
            </View>
        )
    }

    function renderHeader() {
        return (
            <View style={{ paddingHorizontal: SIZES.padding, marginTop: SIZES.padding + 5 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <Image
                            source={icons.menu}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Image
                            source={icons.cart}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderTitle(title) {
        return (
            <View style={{ marginTop: SIZES.padding, paddingHorizontal: SIZES.padding }}>
                <Text style={{ color: COLORS.black, ...FONTS.h1 }}>Collection Of</Text>
                <Text style={{ color: COLORS.black, ...FONTS.h1 }}>{title}</Text>
            </View>
        )
    }

    function renderPromotionCard() {
        return (
            <View
                style={[style.shadow, {
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    padding: SIZES.radius,
                    height: 110,
                    borderRadius: 20,
                    backgroundColor: COLORS.white
                }]}
            >
                <View style={{
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.lightGray2,
                    borderRadius: 20
                }}>
                    <Image
                        source={images.sofa}
                        resizeMode="contain"
                        style={{
                            width: '60%',
                            height: '60%'
                        }}
                    />
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    marginLeft: SIZES.radius,

                }}>
                    <Text style={{ ...FONTS.h2 }}>Special Offer</Text>
                    <Text style={{ ...FONTS.body4 }}>Adding to your cart</Text>
                </View>
                <View style={{ marginRight: SIZES.radius, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.primary,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '70%',
                            width: 40,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={icons.chevron}
                            resizeMode="contain"
                            style={{
                                height: '50%',
                                width: '50%'
                            }}
                        />

                    </TouchableOpacity>
                </View>
            </View>
        )

    }
    return (
        <SafeAreaView
            style={style.container}
        >
            {renderHeader()}
            {renderTitle(selectedTab.title)}
            <ScrollableTab
                tabList={tabList}
                selectedTab={selectedTab}
                onPress={(item) => setSelectedTab(item)}
            />
            <View style={{ flex: 1 }}>
                <ScrollableCard
                    navigation={navigation}
                    productList={selectedTab.productList}
                />
            </View>
            <View style={{ height: '19%', justifyContent: 'flex-end', marginBottom: 25 }}>{renderPromotionCard()}</View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9
    }
})
export default Home;