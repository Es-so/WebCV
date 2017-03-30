import React from 'react';
import chai from 'chai'; // eslint-disable-line
import { shallow } from 'enzyme'; // eslint-disable-line
import { App, Content, ImgStyle } from '..';
import Header from '../../Headers';

const { describe, it } = global;
const { expect } = chai;

const appProps = { history: {}, home: {}, projects: {}, contact: {}};

describe('<App />', () => {
  it('should render a <Header />', () => {
    expect(shallow(<App { ...appProps } />)
      .find(Header)).to.have.lengthOf(1);
  });

  it('should render a <Content />', () => {
    expect(shallow(<App { ...appProps } />)
      .find(Content)).to.have.lengthOf(1);
  });

  it('should render a <ImgStyle />', () => {
    expect(shallow(<App { ...appProps } />)
      .find(ImgStyle)).to.have.lengthOf(1);
  });

});
