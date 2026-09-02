import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useModal } from '../context/ModalContext';
import Button from './Button';

const BookingModal = () => {
  const { isDark } = useTheme();
  const { isModalOpen, closeModal } = useModal();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    reason: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isModalOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        "Full Name": formData.fullName,
        "Phone Number": formData.phone,
        "Address": formData.address,
        "Details": formData.reason
      };

      console.log("Form submitted", formData);

      const response = await fetch('https://hook.us2.make.com/37ssa5dbbvwd5g2s0ntcnsev3ilqk08u', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ fullName: '', phone: '', address: '', reason: '' });
      } else {
        console.error('Failed to submit form', response.status, response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className={`relative w-full max-w-md p-6 sm:p-8 rounded-3xl shadow-2xl transition-colors duration-300 ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-100'}`}>
        
        <button 
          onClick={closeModal}
          className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${isDark ? 'text-gray-400 hover:bg-gray-800 hover:text-white' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
        >
          <X size={24} />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 animate-in zoom-in-95 duration-300">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${isDark ? 'bg-gray-800' : 'bg-green-50'}`}>
              <CheckCircle2 size={32} className="text-green-500" />
            </div>
            <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Request Received</h3>
            <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Thank you, we will contact you on WhatsApp shortly.</p>
            <Button onClick={closeModal} className="w-full">
              Close
            </Button>
          </div>
        ) : (
          <div className="animate-in slide-in-from-bottom-4 duration-300">
            <div className="mb-8">
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Book an Appointment</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Leave your details and our team will get back to you shortly.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={`block text-xs font-bold mb-2 uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Rahul Sharma"
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors ${
                    isDark 
                      ? 'bg-gray-950 border-gray-800 text-white placeholder-gray-600' 
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-bold mb-2 uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors ${
                    isDark 
                      ? 'bg-gray-950 border-gray-800 text-white placeholder-gray-600' 
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-bold mb-2 uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Address</label>
                <input 
                  type="text" 
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your residential area or exact address"
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors ${
                    isDark 
                      ? 'bg-gray-950 border-gray-800 text-white placeholder-gray-600' 
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-bold mb-2 uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Reason for Contact / Car Problem</label>
                <textarea 
                  name="reason"
                  required
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="E.g., Periodic service, AC not cooling, Denting work..."
                  rows="3"
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors resize-none ${
                    isDark 
                      ? 'bg-gray-950 border-gray-800 text-white placeholder-gray-600' 
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                  }`}
                ></textarea>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full mt-2">
                {isSubmitting ? 'Sending Request...' : 'Submit Request'}
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
