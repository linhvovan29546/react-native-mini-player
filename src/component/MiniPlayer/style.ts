
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
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
    width: 32,
    height: 32,
    tintColor: "white",
  }
});
