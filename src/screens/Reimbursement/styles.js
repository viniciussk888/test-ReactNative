import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCE4F0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  valueView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  value: {
    marginRight: 10,
    marginVertical: 40,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#566475',
  },
  detailsContainer: {
    padding: 30,
    flex: 1,
    backgroundColor: '#F6F8FB',
    shadowColor: '#000',
    elevation: 5,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    marginLeft: 5,
    color: '#566475',
    fontWeight: 'bold',
    fontSize: 18,
  },
  NameContainer: {
    flexDirection: 'column',
    marginTop: 20,
  },
  name: {
    fontSize: 20,
  },
  boxType: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  type: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 16,
    color: '#566475',
  },
  reimbursementBox: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  reimbursement: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#09D261',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
  },
  textCompany: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    marginTop: 20,
    borderRadius: 8,
    width: '100%',
    height: 200,
  },
});

export default styles;
