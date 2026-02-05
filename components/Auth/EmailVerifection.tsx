'use client';

import React from "react"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function EmailVerificationForm() {
  const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    if (value && index < 5) {
      const nextInput = document.getElementById(`digit-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.getElementById(`digit-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerify = async () => {
    const fullCode = code.join('');
    if (fullCode.length !== 6) {
      alert('Please enter all 6 digits');
      return;
    }

    setIsLoading(true);
    // Simulate verification
    setTimeout(() => {
      alert(`Code verified: ${fullCode}`);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 h-12 relative flex items-center justify-center">
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:opacity-80">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <h1 className="text-center text-2xl font-bold text-gray-900 mb-2">
            Enter 6 digit code
          </h1>
          <p className="text-center text-sm text-gray-600 mb-8">
            We've sent verification your email
          </p>

          {/* Digit Inputs */}
          <div className="flex justify-center gap-3 mb-8">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`digit-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-lg font-semibold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
              />
            ))}
          </div>

          {/* Verify Button */}
          <Button
            onClick={handleVerify}
            disabled={isLoading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Verifying...' : 'Verify'}
          </Button>
        </div>
      </div>
    </div>
  );
}
