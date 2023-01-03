
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: "center",
    paddingHorizontal: 16,
    // custom style
    borderRadius: 8,
    marginHorizontal: 16
  },
  text: {
    color: "white",
    marginLeft: 7,
    flex: 1
  },
  containerIcon:
  {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'flex-end'
  },
  styleImage: {
    tintColor: "white",
  }
});
