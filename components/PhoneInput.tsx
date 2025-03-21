import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface PhoneInputProps {
  value: string;
  onChange: (phone: string) => void;
  placeholder?: string;
}

const CustomPhoneInput: React.FC<PhoneInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <PhoneInput
      value={value}
      onChange={onChange}
      country={'ae'} // Default to UAE
      placeholder='000-000-0000'
      enableSearch={true}
      disableSearchIcon={true}
      dropdownStyle={{
        width: '250px',
        maxHeight: '300px',
        overflow: 'auto',
        zIndex: 1
      }}
      inputStyle={{
        color: '#111827',
        width: '100%',
        height: '2.677vw',
        padding: '0.625vw', // Reduced left padding since flag is not shown
        borderRadius: '0.208vw',
        border: '1px solid #D1D5DB',
        fontSize: '1rem',
      }}
      buttonStyle={{
        display: 'none' // Hide the flag button
      }}
      containerStyle={{
        width: '100%'
      }}
      searchStyle={{
        width: '100%',
        padding: '8px',
        margin: '5px 0'
      }}
      dropdownClass="custom-dropdown"
    />
  );
};

export default CustomPhoneInput;