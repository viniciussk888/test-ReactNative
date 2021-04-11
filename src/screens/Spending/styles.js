import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  titleMonthe: {
    fontFamily: 'OpenSans',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#566475',
  },
  weekDayTitle: {
    color: '#566475',
    fontFamily: 'OpenSans',
    fontSize: 18,
    margin: 15,
  },
  spendingContainer: {
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    elevation: 5,
  },
  spendingTitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 3,
  },
  spendingType: {
    marginLeft: 5,
    fontSize: 14,
    color: '#566475',
  },
  spendingValue: {
    marginLeft: 10,
    fontSize: 16,
    color: '#566475',
  },
  footer: {
    height: '15%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DCE4F0',
  },
  footerTotal: {
    color: '#566475',
    fontSize: 24,
  },
  footerValue: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
