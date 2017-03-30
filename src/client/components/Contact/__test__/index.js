import React from 'react';
import chai from 'chai'; // eslint-disable-line
import { shallow } from 'enzyme'; // eslint-disable-line
import { FormItem, Contact, FormStyle } from '..';
import { Button, Icon, Input, Form: { getFieldDecorator } } from 'antd';
import Header from '../../Headers';
import { loadTags } from  '../../../actions/contact';
import fields from '../../../form/';

const { describe, it } = global;
const { expect } = chai;

const contactProps = { tags: [], form: { getFieldDecorator }, loadTags };

describe('<Contact />', () => {
  it('should render a <FormStyle />', () => {
    expect(shallow(<Contact { ...contactProps } />)
      .find(FormStyle)).to.have.lengthOf(1);
  });

  it('should render a <FormItem />', () => {
    expect(shallow(<Contact { ...contactProps } />)
      .find(FormItem)).to.have.lengthOf(5);
  });

  it('should render a <Input />', () => {
    expect(shallow(<Contact { ...contactProps } />)
      .find(Input)).to.have.lengthOf(4);
  });

  it('should render a <Button />', () => {
    expect(shallow(<Contact { ...contactProps } />)
      .find(Button)).to.have.lengthOf(1);
  });

});
