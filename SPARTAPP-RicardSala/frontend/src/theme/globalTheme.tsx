import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  aliginItems: {
    alignItems: 'center',
  },
  logo__NameBig: {
    width: 288,
    height: 61,
    marginTop: 40,
  },
  backgound: {
    backgroundColor: '#595260',
    flex: 1,
  },
  logo__Standar: {
    width: 146,
    height: 31,
    marginTop: 54,
  },
  login__text: {
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  logo: {
    width: 198,
    height: 224,
    marginTop: 54,
    resizeMode: 'contain',
  },
  text__gray: {
    color: '#B2B1B9',
  },
  text__darkGray: {
    color: '#595260',
  },
  text__yellow: {
    color: '#FFD523',
  },
  text__blue: {
    color: '#2C2E43',
  },
  profile__photo: {
    height: 140,
    width: 120,
    bottom: 10,
  },
  profile__photo__container: {
    marginTop: 15,
    height: 180,
    borderColor: '#FFD523',
    width: 180,
    borderWidth: 5,
    backgroundColor: '#2C2E43',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  margin: {
    marginLeft: 15,
  },
  invalid: {
    color: 'red',
    fontSize: 12,
  },
});
export default styles;
