import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import './mainAdmin.css';


const allPd = () => {
    return (
        <View style={styles.container} className="body">
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '0.5vw' }}>
                รายการอาหารทั้งหมด
            </div>
            <div className="div4" style={{ display: 'flex', justifyContent: 'center', alignContent:'center', marginTop: '0.5vw' }}>
               
                <div className="divContent" >
                    hi
                </div>
            </div>

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F0E0",
        width: '100%',
        height: '100%',
    },





});
export default allPd;