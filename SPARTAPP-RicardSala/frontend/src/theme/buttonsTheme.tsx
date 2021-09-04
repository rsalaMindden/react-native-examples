import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  littleButton: {
    width: 128,
    justifyContent: 'center',
    height: 41,
    backgroundColor: '#2C2E43',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
    borderRadius: 18,
  },
  box__button: {
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default styles;
