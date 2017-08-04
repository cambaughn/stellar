import colors from './colors';

const stylePresets = {
  centerAll: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  horizontalCenter: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  verticalCenter: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  form: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',

    padding: 20,
    width: 300,
    // border: '1px solid pink',
  },

  textInput: {
    marginTop: 10,
    marginBottom: 10,
    // For some reason, padding makes the input wider
    paddingLeft: 10,
    paddingRight: 10,

    width: '80%',
    height: 40,

    borderStyle: 'solid',
    border: `1px solid ${colors.midGrey}`,
    outline: 'none',

    fontSize: '90%',
  },

  buttonPrimary: {
    backgroundColor: colors.main,
    color: 'white',
    fontSize: '100%',

    border: 'none',
    outline: 'none',

    marginTop: 10,
    marginBottom: 10,
    width: '88%',
    height: 40,
  },

}


export default stylePresets;
