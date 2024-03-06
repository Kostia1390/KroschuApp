import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import SearchSvg from "../../assets/icons/search.svg";

const CustomInput = ({ placeholder, onSearch }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View
      style={[
        styles.inputContainer,
        { borderColor: isFocused ? "#563187" : "#000" },
      ]}
    >
      <SearchSvg style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#000000"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={onSearch}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    marginTop: 20,
  },
  input: {
    flex: 1,
    color: "#000000",
    marginLeft: 10,
    fontSize: 18,
  },
  searchIcon: {
    marginLeft: 2,
  },
});

export default CustomInput;
