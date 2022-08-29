import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Country from './Country';

export default function Countries() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all';
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <View>
            <Text>Countries: {countries.length}</Text>
            <ScrollView>
                {
                    countries.map(country => <Country country={country} key={country._id}></Country>)
                }
            </ScrollView>
        </View>
    )
}