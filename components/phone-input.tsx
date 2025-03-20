import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface PhoneInputProps {
  value: string;
  onChange: (phone: string) => void;
}

const CustomPhoneInput: React.FC<PhoneInputProps> = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value !== "";

  return (
    <div className="relative">
      <PhoneInput
        value={value}
        onChange={(phone) => onChange(phone)}
        country={'ae'}
        placeholder={isFocused ? '000-000-0000': '' }
        enableSearch={false}
        disableSearchIcon={true}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        inputProps={{
          required: true,
        }}
        specialLabel=""
        inputStyle={{
          width: '100%',
          height: 'auto',
          padding: '0.781vw 0.625vw',
          border: '1px solid #D1D5DB',
          borderRadius: '0.208vw',
          backgroundColor: 'white',
          color: '#111827'
        }}
        buttonStyle={{
          display: 'none'
        }}
        containerStyle={{
          width: '100%'   
        }}
        enableAreaCodes={true}
        disableCountryCode={true}
        preferredCountries={[]}
        masks={{ ae: '.. ... ....' }}
      />
      <label
        className={`absolute left-3 transition-all duration-200 pointer-events-none
          ${isFocused || hasValue
            ? "-top-2.5 text-[0.625vw] bg-white px-1 text-gray"
            : "top-1/2 -translate-y-1/2 text-gray"
          } peer-focus:-top-2.5 peer-focus:text-[0.625vw] peer-focus:bg-white peer-focus:px-1 peer-focus:text-primary`}
      >
        Phone Number
      </label>
    </div>
  );
};

export default CustomPhoneInput;