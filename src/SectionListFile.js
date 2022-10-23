import { View, Text, SafeAreaView, SectionList, StyleSheet } from 'react-native';

const sectionListData = [
    {
        categoryId: 'fruits',
        title: 'mango',
        quantity: 2,
    },
    {
        categoryId: 'fruits',
        title: 'apple',
        quantity: 5,
    },
    {
        categoryId: 'fruits',
        title: 'coconut',
        quantity: 4,
    },
    {
        categoryId: 'fruits',
        title: 'orange',
        quantity: 2,
    },
    {
        categoryId: 'fruits',
        title: 'pomegranade',
        quantity: 2,
    },
    {
        categoryId: 'fruits',
        title: 'mausmi',
        quantity: 3,
    },
    {
        categoryId: 'flowers',
        title: 'rose',
        quantity: 1,
    },
    {
        categoryId: 'flowers',
        title: 'lily',
        quantity: 4,
    },
    {
        categoryId: 'flowers',
        title: 'jasmine',
        quantity: 2,
    },
    {
        categoryId: 'flowers',
        title: 'hibiscus',
        quantity: 8,
    },
    {
        categoryId: 'flowers',
        title: 'daffodils',
        quantity: 9,
    },
    {
        categoryId: 'flowers',
        title: 'seasonal flowers',
        quantity: 1,
    },
    {
        categoryId: 'flowers',
        title: 'sregional fruits',
        quantity: 1,
    },
    {
        categoryId: 'vegetables',
        title: 'potato',
        quantity: 8,
    },
    {
        categoryId: 'vegetables',
        title: 'tomato',
        quantity: 5,
    },
    {
        categoryId: 'vegetables',
        title: 'guard',
        quantity: 2,
    },
    {
        categoryId: 'vegetables',
        title: 'brinjal',
        quantity: 6,
    },
];


const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{`\u2022 ${title}`}</Text>
    </View>
);

const SectionLists = () => {
    const Data = [];
    sectionListData.forEach(element => {
        if (Data.length) {
            var matched = false;

            Data.forEach(item => {
                if (item.categoryId === element.categoryId) {
                    item.data.push(element.title);
                    matched = true;
                }
            });

            if (!matched) {
                let newCategory = {
                    categoryId: element.categoryId,
                    data: [element.title],
                };
                Data.push(newCategory);
            }
        } else {
            let obj = { categoryId: element.categoryId, data: [element.title] };
            Data.push(obj);
        }
    });

    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                style={styles.section}
                sections={Data}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.header}>{section.categoryId}</Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    section: {
        margin: 15,
        
    },
    item: {
        padding: 10,
        marginVertical: 5,
        border: 0,
        borderRadius: 5,
    },
    header: {
        fontSize: 30,
        backgroundColor: "navy",
        padding: 10,
        color: 'white',
        textAlign: 'center',
        textTransform: 'capitalize',
        fontFamily: 'Cochin',
    },
    title: {
        fontSize: 24,
        textTransform: 'capitalize',
        fontFamily: 'Arial',
    }
});

export default SectionLists;

