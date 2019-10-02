import React from 'react';
import { TimePicker } from '../../app/sections/TimePicker.js';
import { shallow } from 'enzyme';

describe('Time Picker tests', ()=>{
  const wrapper = shallow(<TimePicker hh='08' mm='10'/>)
  const textHH = wrapper.find('Text').first();
  const textMM = wrapper.find('Text').last();

  it('Time Picker view count', ()=>{
    expect(wrapper.find('View')).toHaveLength(1);
  });

  it('Time Picker text count', ()=>{
    expect(wrapper.find('Text')).toHaveLength(3);
  });

  it('Time Picker text count', ()=>{
    expect(textHH.render().text()).toEqual('08');
    expect(textMM.render().text()).toEqual('10');

  });


});