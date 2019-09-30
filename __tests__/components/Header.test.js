import React from 'react';
import { Header } from '../../app/sections/Header.js';
import { shallow } from 'enzyme';


describe('Header', ()=>{
  const wrapper = shallow(<Header message='please login'/>)
  const text = wrapper.find('Text').first();

  it('Header view count', ()=>{
    expect(wrapper.find('View')).toHaveLength(1);
  });
  it('Header Text count', ()=>{
    expect(wrapper.find('Text')).toHaveLength(1);
  });
  it('Header Text verify', ()=>{
    expect(text.render().text()).toEqual('please login');
  });

  it('Header Text click', ()=>{
    text.simulate('click')
    expect(text.render().text()).toEqual('Welcome User');
  });

});