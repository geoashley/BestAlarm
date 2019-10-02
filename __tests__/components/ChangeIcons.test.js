import React from 'react';
import { ChangeIcons } from '../../app/sections/ChangeIcons.js';
import { shallow } from 'enzyme';
import expectExport from 'expect';

describe('ChangeIcons Test Suite',()=>{
  const wrapper = shallow(<ChangeIcons/>);
  it('Has 2 images',()=>{
    expect(wrapper.find('Image')).toHaveLength(2);

  });


});

