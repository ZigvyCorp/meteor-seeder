import React from 'react';
import { Field } from 'redux-form';
import {
  FormGroupTextBoxStyled, InputGroupPrepend, Break, InputWrapper,
  FormGroupCheckBox, CheckBoxWrapper, CheckMark, Label
} from './styles';

const INPUT_TYPES = {
  TEXT: 'text',
  CHECKBOX: 'checkbox'
};

const randomId = () => (`_${Math.random().toString(36).substr(2, 9)}`);

class FormInput extends React.Component {
  renderTextInput = (field) => {
    const {
      type,
      placeholder,
      inputSize,
      inputGroup,
      wrapperStyle
    } = field;

    return (
      <FormGroupTextBoxStyled
        style={wrapperStyle}
        {...inputSize}
        inputGroup={!!inputGroup}
      >
        <InputWrapper>
          {inputGroup && (
            <InputGroupPrepend className="input-group-prepend">
              {inputGroup}
            </InputGroupPrepend>
          )}
          <input {...field.input} placeholder={placeholder} type={type} />
        </InputWrapper>

        {field && field.meta && field.meta.touched && (
          <Break />
        )}

        {field && field.meta && field.meta.touched
        && (
          (field.meta.error && <p>{field.meta.error}</p>)
          || (field.meta.warning && <p>{field.meta.warning}</p>)
        )}
      </FormGroupTextBoxStyled>
    );
  };

  renderCheckbox = (field) => {
    const {
      label,
      type,
      placeholder,
      inputSize,
      wrapperStyle
    } = field;

    const checkBoxId = randomId();
    return (
      <FormGroupCheckBox
        style={wrapperStyle}
        {...inputSize}
      >
        <CheckBoxWrapper htmlFor={checkBoxId}>
          <input id={checkBoxId} {...field.input} placeholder={placeholder} type={type} />
          <CheckMark>
            <span />
          </CheckMark>
          <Label>{label}</Label>
        </CheckBoxWrapper>

        {field && field.meta && field.meta.touched && (
          <Break />
        )}

        {field && field.meta && field.meta.touched
        && (
          (field.meta.error && <p>{field.meta.error}</p>)
          || (field.meta.warning && <p>{field.meta.warning}</p>)
        )}
      </FormGroupCheckBox>
    );
  };

  renderFormInput = (field) => {
    const { type } = field;
    switch (type) {
      case INPUT_TYPES.TEXT:
        return this.renderTextInput(field);

      case INPUT_TYPES.CHECKBOX:
        return this.renderCheckbox(field);

      default:
        return this.renderTextInput(field);
    }
  };

  render() {
    const { regular } = this.props;
    if (regular) {
      return this.renderFormInput(this.props);
    }
    return (
      <Field
        {...this.props}
        component={this.renderFormInput}
      />
    );
  }
}

export default FormInput;
