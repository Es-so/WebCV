import React from 'react';
import R from 'ramda';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import fields from '../../form/';
import { loadTags } from  '../../actions/contact';

const FormStyle = styled(Form)`
  display: flex;
  flex-flow: column;
  justify-content: center;
`

const FormItem = Form.Item;
const Option = Select.Option;

class Contact extends React.Component {
  componentWillMount() {
    const { loadTags } = this.props;
    loadTags();
  }
  render() {
    const { form: { getFieldDecorator } } = this.props;
    return(
        <FormStyle onSubmit={console.log}>
          
           <FormItem
            label="E-mail"
            hasFeedback
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input />
            )}
          </FormItem>

          <Button htmlType="submit" style={{margin: '3px', backgroudColor: 'red'}} type="primary">
             Submit<Icon type="check" />
          </Button>
        </FormStyle>

    );
  }
}


const actions = { loadTags };
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default R.compose(
  Form.create(),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps))(Contact);