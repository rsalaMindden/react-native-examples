import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  littleButton: {
    width: 160,
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
    borderRadius: 15,
  },
  homeButton: {
    width: 349,
    justifyContent: 'center',
    height: 182,
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
    borderRadius: 15,
  },
  filter__box: {
    minWidth:100,
    paddingLeft:20,
    paddingRight:20,
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
    borderRadius: 15,
  },
  box__button: {
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default styles;
