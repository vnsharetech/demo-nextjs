import React from 'react';
import CheckIcon from '../icons/check-icon';
import cn from 'classnames';

type Props = {
  label?: string;
  inputType?: string;
  placeHolder?: string;
  isValueValid?: boolean;
  onChange?: (e: any) => void;
  value?: any;
  onFocusOut?: () => void;
  onEnterPress?: (e: any) => void;
};

const InputField: React.FC<Props> = ({
  label,
  inputType,
  placeHolder,
  isValueValid = false,
  onChange,
  value,
  onFocusOut,
  onEnterPress,
}) => {
  return (
    <>
      <div className='bg-input-color border-b border-inputBorderColor p-4 w-full flex flex-wrap overflow-hidden'>
        <label className='font-sans text-bt-daintree text-xs font-semibold w-full mb-1'>
          {label}
        </label>
        <div className='w-full flex'>
          <input
            type={inputType}
            placeholder={placeHolder}
            className='input-field text-bt-daintree font-light outline-none focus:outline-none flex-1 bg-transparent w-4/5 border-0 p-0 ring-0 focus:ring-0'
            onChange={onChange}
            value={value}
            onBlur={onFocusOut}
            onKeyPress={onEnterPress}
          />
          <div className='w-1/5 flex justify-end'>
            <CheckIcon
              classes={cn('cool-transition', {
                '-mt-32': isValueValid === false,
                'mt-0': isValueValid === true,
              })}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InputField;
