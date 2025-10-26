
import React, { useState } from 'react';

interface ManageSettingsProps {
  adminCredentials: { email: string; pass: string };
  setAdminCredentials: React.Dispatch<React.SetStateAction<{ email: string; pass: string }>>;
}

const ManageSettings: React.FC<ManageSettingsProps> = ({ adminCredentials, setAdminCredentials }) => {
  const [email, setEmail] = useState(adminCredentials.email);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword && newPassword !== confirmPassword) {
      alert('New passwords do not match.');
      return;
    }

    setAdminCredentials({
      email: email,
      pass: newPassword || adminCredentials.pass // only update password if a new one is provided
    });

    alert('Admin credentials updated successfully.');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Admin Settings</h2>
      <p className="text-sm text-gray-500 mb-6">Change the username and password for the main administrator account.</p>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium">Admin Username/Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium">New Password (leave blank to keep current)</label>
          <input 
            type="password" 
            value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Confirm New Password</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
          />
        </div>
        <div className="pt-2">
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageSettings;
