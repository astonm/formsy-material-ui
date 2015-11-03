// Based on example from: https://github.com/rblakeley/pro-camper/blob/master/app/components/Form.js

injectTapEventPlugin();

let { FormsyText } = FMUI;

TestForm = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext(){
    return {
      muiTheme: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme)
    }
  },

  getInitialState: function () {
    return {
      canSumbit: false
    };
  },

  styles: {
    paperStyle: {
      width: 300,
      margin: 20,
      padding: 20
    },
    submitStyle: {
      marginTop: 32
    },
    spanStyle: {
      marginTop: 32,
      fontSize: 10,
      fontColor: "grey"
    }
  },

  enableButton: function () {
    this.setState({
      canSubmit: true
    });
  },

  disableButton: function () {
    this.setState({
      canSubmit: false
    });
  },

  submitForm: function (data) {
    alert(JSON.stringify(data, null, 4));
  },

  notifyFormError: function (data) {
    console.error('Form error:', data);
  },

  render: function () {
    const {paperStyle, submitStyle, spanStyle } = this.styles;
    const wordsError = "Please only use letters";

    return (
      <Paper style={paperStyle}>

        <Formsy.Form
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          onValidSubmit={this.submitForm}
          onInvalidSubmit={this.notifyFormError} >

          <span style={spanStyle}>Name only - all following have a name and some other combination of options.</span>
          <FormsyText
            name='nameOnly' />

          <span style={spanStyle}>floatingLabelText</span>
          <FormsyText
            name='Label'
            floatingLabelText="Name" />

          <span style={spanStyle}>hintText</span>
          <FormsyText
            name='Hint'
            hintText="Hint text"
            />

          <span style={spanStyle}>floatingLabelText, hintText</span>
          <FormsyText
            name='label-hint'
            floatingLabelText="Name"
            hintText="Hint text"
            />

          <span style={spanStyle}>floatingLabelText, defaultValue</span>
          <FormsyText
            name='label-default'
            floatingLabelText="Name"
            defaultValue="default"
            />

          <span style={spanStyle}>hintText, defaultValue</span>
          <FormsyText
            name='hint-efault'
            hintText="Hint text"
            defaultValue="default"
            />

          <span style={spanStyle}>floatingLabelText, hintText, defaultValue</span>
          <FormsyText
            name='label-hint-default'
            floatingLabelText="Name"
            hintText="Hint text"
            defaultValue="default"
            />

          <span style={spanStyle}>required</span>
          <FormsyText
            name='required'
            required />

          <span style={spanStyle}>validation</span>
          <FormsyText
            name='validation'
            validations='isWords' />

          <span style={spanStyle}>validation, validationError</span>
          <FormsyText
            name='validation-validationError'
            validations='isWords'
            validationError={wordsError} />

          <span style={spanStyle}>validation, required</span>
          <FormsyText
            name='validation-required'
            validations='isWords'
            required />

          <span style={spanStyle}>validation, validationError, required</span>
          <FormsyText
            name='validation-validationError-required'
            validations='isWords'
            validationError="Please only use letters"
            required />

          <span style={spanStyle}>validation, validationError, required, hintText, label</span>
          <FormsyText
            name='validation-validationError-required-hint-label'
            validations='isWords'
            validationError="Please only use letters"
            required
            hintText="What is your name?"
            floatingLabelText="Name" />

          <RaisedButton
            style={submitStyle}
            type="submit"
            label="Submit"
            disabled={!this.state.canSubmit} />
        </Formsy.Form>
      </Paper>
    );
  }
});
