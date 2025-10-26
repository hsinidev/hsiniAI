import React from 'react';
import { User } from '../../types';

interface ManageUsersProps {
  users: User[];
}

const ManageUsers: React.FC<ManageUsersProps> = ({ users }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Registered Users</h2>
       <p className="text-sm text-gray-500 mb-4">This table shows all visitors who have registered on the site.</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map(user => (
              <tr key={user.email}>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.role === 'admin' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                        {user.role}
                    </span>
                </td>
                 <td className="px-6 py-4 whitespace-nowrap">{user.age}</td>
              </tr>
            ))}
             {users.length === 0 && (
                <tr>
                    <td className="px-6 py-4 text-center text-gray-500" colSpan={3}>No visitors have registered yet.</td>
                </tr>
             )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;